import React, { useRef, useState } from 'react';
import { CompanyProfileData } from '../types';
import { PdfExportDocument } from './PdfExportDocument';
import {
  X,
  Download,
  Printer,
  FileText,
  CheckCircle2,
  Loader2,
  Sparkles,
} from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CompanyProfileData;
}

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));



const parseCssNumber = (value: string, percentIs100 = false) => {
  const n = parseFloat(value);
  if (!Number.isFinite(n)) return 0;
  return value.trim().endsWith('%') ? n / 100 : (percentIs100 ? n / 100 : n);
};

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

/**
 * Converts OKLCH/OKLab colors to legacy rgb()/rgba() so html2canvas 1.x
 * does not encounter CSS Color 4 functions that it cannot parse.
 */
const modernColorToRgb = (input: string): string => {
  const value = input.trim();

  const lch = value.match(
    /^oklch\(\s*([0-9.+-]+%?)\s+([0-9.+-]+%?)\s+([0-9.+-]+)(?:deg)?(?:\s*\/\s*([0-9.+-]+%?))?\s*\)$/i
  );

  let L = 0;
  let a = 0;
  let b = 0;
  let alpha = 1;

  if (lch) {
    L = parseCssNumber(lch[1]);
    const C = parseCssNumber(lch[2]);
    const h = (parseFloat(lch[3]) * Math.PI) / 180;
    alpha = lch[4]
      ? parseCssNumber(lch[4], true)
      : 1;

    a = C * Math.cos(h);
    b = C * Math.sin(h);
  } else {
    const lab = value.match(
      /^oklab\(\s*([0-9.+-]+%?)\s+([0-9.+-]+%?)\s+([0-9.+-]+%?)(?:\s*\/\s*([0-9.+-]+%?))?\s*\)$/i
    );

    if (!lab) {
      // A safe fallback. This is only reached for an unusual CSS color
      // syntax that html2canvas cannot parse.
      return 'rgb(15, 23, 42)';
    }

    L = parseCssNumber(lab[1]);
    a = parseCssNumber(lab[2]);
    b = parseCssNumber(lab[3]);
    alpha = lab[4]
      ? parseCssNumber(lab[4], true)
      : 1;
  }

  L = clamp01(L);
  alpha = clamp01(alpha);

  // OKLab -> XYZ D65 -> linear sRGB
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b;
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b;
  const s_ = L - 0.0894841775 * a - 1.2914855480 * b;

  const l = l_ ** 3;
  const m = m_ ** 3;
  const s = s_ ** 3;

  const X = 1.2270138511 * l - 0.5577999807 * m - 0.2812561490 * s;
  const Y = -0.0405801784 * l + 1.1122568696 * m - 0.0716766787 * s;
  const Z = -0.0763812845 * l - 0.4214819784 * m + 1.5861632204 * s;

  const toSrgb = (v: number) => {
    const c = Math.max(0, Math.min(1, v));
    return c <= 0.0031308
      ? 12.92 * c
      : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  };

  const r = Math.round(clamp01(toSrgb(3.2406 * X - 1.5372 * Y - 0.4986 * Z)) * 255);
  const g = Math.round(clamp01(toSrgb(-0.9689 * X + 1.8758 * Y + 0.0415 * Z)) * 255);
  const blue = Math.round(clamp01(toSrgb(0.0557 * X - 0.2040 * Y + 1.0570 * Z)) * 255);

  return alpha < 1
    ? `rgba(${r}, ${g}, ${blue}, ${alpha})`
    : `rgb(${r}, ${g}, ${blue})`;
};

const sanitizeModernColors = (css: string): string =>
  css.replace(/\b(?:oklch|oklab)\([^)]*\)/gi, (value) =>
    modernColorToRgb(value)
  );

/**
 * Sanitize ONLY html2canvas's cloned document.
 * The live website keeps its original Tailwind/CSS colors.
 */
/**
 * html2canvas reads computed CSS while it builds its clone. Tailwind's
 * generated stylesheet can contain CSS Color 4 functions (oklab/oklch),
 * even when those functions are not visible in the element's inline style.
 *
 * We therefore sanitize the live stylesheet text temporarily, run html2canvas,
 * and restore it immediately afterwards. The website's appearance is restored
 * exactly after each page render.
 */
const prepareLegacyColorsForHtml2Canvas = () => {
  const styleSnapshots: Array<{ el: HTMLStyleElement; css: string }> = [];
  const inlineSnapshots: Array<{ el: HTMLElement; css: string | null }> = [];

  document.querySelectorAll<HTMLStyleElement>('style').forEach((style) => {
    const css = style.textContent || '';
    if (/\boklch|oklab/i.test(css)) {
      styleSnapshots.push({ el: style, css });
      style.textContent = sanitizeModernColors(css);
    }
  });

  document.querySelectorAll<HTMLElement>('[style]').forEach((el) => {
    const css = el.getAttribute('style');
    if (css && /\boklch|oklab/i.test(css)) {
      inlineSnapshots.push({ el, css });
      el.setAttribute('style', sanitizeModernColors(css));
    }
  });

  return () => {
    styleSnapshots.forEach(({ el, css }) => {
      el.textContent = css;
    });
    inlineSnapshots.forEach(({ el, css }) => {
      if (css === null) el.removeAttribute('style');
      else el.setAttribute('style', css);
    });
  };
};

const sanitizeHtml2CanvasClone = (clonedDoc: Document) => {
  // First sanitize stylesheet text. This handles Tailwind-generated rules.
  clonedDoc.querySelectorAll<HTMLStyleElement>('style').forEach((style) => {
    style.textContent = sanitizeModernColors(style.textContent || '');
  });

  clonedDoc.querySelectorAll<HTMLElement>('[style]').forEach((el) => {
    const css = el.getAttribute('style');
    if (css) el.setAttribute('style', sanitizeModernColors(css));
  });

  // IMPORTANT: html2canvas ultimately consumes COMPUTED styles. A stylesheet
  // can still expose oklab()/oklch() through getComputedStyle even after the
  // stylesheet text has been sanitized (e.g. CSS variables/adopted rules).
  //
  // Force every color-bearing computed property into a legacy rgb()/rgba()
  // inline value on the clone. The live document is never touched.
  const colorProperties = [
    'color',
    'background-color',
    'background-image',
    'border-top-color',
    'border-right-color',
    'border-bottom-color',
    'border-left-color',
    'outline-color',
    'text-decoration-color',
    'column-rule-color',
    'caret-color',
    'fill',
    'stroke',
    'stop-color',
    'flood-color',
    'lighting-color',
    'box-shadow',
    'text-shadow',
    'accent-color',
    'scrollbar-color',
  ];

  clonedDoc.querySelectorAll<HTMLElement>('*').forEach((el) => {
    const computed = clonedDoc.defaultView?.getComputedStyle(el);
    if (!computed) return;

    colorProperties.forEach((property) => {
      const value = computed.getPropertyValue(property);
      if (!value) return;

      const sanitized = sanitizeModernColors(value);

      // Only write the property when it actually contains a modern color or
      // when it is a color property that html2canvas commonly parses.
      if (sanitized !== value || /color|shadow|image|fill|stroke/i.test(property)) {
        try {
          el.style.setProperty(property, sanitized);
        } catch {
          // Ignore a single unsupported property and keep rendering.
        }
      }
    });
  });
};

const waitForImages = async (root: HTMLElement) => {
  const images = Array.from(root.querySelectorAll('img'));
  await Promise.all(
    images.map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise<void>((resolve) => {
        const finish = () => resolve();
        img.addEventListener('load', finish, { once: true });
        img.addEventListener('error', finish, { once: true });
      });
    })
  );
};

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const [generating, setGenerating] = useState(false);
  const [progressText, setProgressText] = useState('');
  const pdfRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const generatePdfDownload = async () => {
    const container = pdfRef.current;
    if (!container) {
      alert('Dokumen PDF belum siap. Tutup lalu buka kembali preview PDF.');
      return;
    }

    setGenerating(true);
    setProgressText('Menyiapkan dokumen A4...');

    // The preview document sits inside a CSS transform (scale-[0.8]/scale-[0.85]).
    // html2canvas can miscalculate text positions when an element is captured
    // through a transformed ancestor. We therefore render a clean clone in a
    // fixed, untransformed 794x1123px A4 workspace.
    let renderHost: HTMLDivElement | null = null;

    try {
      await waitForImages(container);
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      await wait(200);

      const pages = Array.from(container.children).filter(
        (el): el is HTMLElement => el instanceof HTMLElement
      );

      if (pages.length !== 4) {
        throw new Error(`Jumlah halaman PDF tidak sesuai: ${pages.length}`);
      }

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // A4 CSS pixel canvas at 96dpi.
      const A4_WIDTH = 794;
      const A4_HEIGHT = 1123;

      renderHost = document.createElement('div');
      renderHost.style.position = 'fixed';
      renderHost.style.left = '-10000px';
      renderHost.style.top = '0';
      renderHost.style.width = `${A4_WIDTH}px`;
      renderHost.style.height = `${A4_HEIGHT}px`;
      renderHost.style.overflow = 'hidden';
      renderHost.style.zIndex = '-999999';
      renderHost.style.background = '#ffffff';
      renderHost.style.pointerEvents = 'none';
      renderHost.style.transform = 'none';
      document.body.appendChild(renderHost);

      for (let i = 0; i < pages.length; i++) {
        setProgressText(`Memproses halaman ${i + 1} dari ${pages.length}...`);

        // Clone ONLY the page itself, not the transformed preview wrapper.
        const renderPage = pages[i].cloneNode(true) as HTMLElement;

        renderPage.style.position = 'relative';
        renderPage.style.left = '0';
        renderPage.style.top = '0';
        renderPage.style.width = `${A4_WIDTH}px`;
        renderPage.style.height = `${A4_HEIGHT}px`;
        renderPage.style.minWidth = `${A4_WIDTH}px`;
        renderPage.style.minHeight = `${A4_HEIGHT}px`;
        renderPage.style.maxWidth = `${A4_WIDTH}px`;
        renderPage.style.maxHeight = `${A4_HEIGHT}px`;
        renderPage.style.margin = '0';
        renderPage.style.transform = 'none';
        renderPage.style.zoom = '1';
        renderPage.style.overflow = 'hidden';

        renderHost.replaceChildren(renderPage);

        // Wait for cloned images and fonts before capturing.
        await waitForImages(renderPage);
        if (document.fonts?.ready) {
          await document.fonts.ready;
        }
        await wait(80);

        const restoreLegacyColors = prepareLegacyColorsForHtml2Canvas();

        let canvas: HTMLCanvasElement;

        try {
          canvas = await html2canvas(renderPage, {
            width: A4_WIDTH,
            height: A4_HEIGHT,
            windowWidth: A4_WIDTH,
            windowHeight: A4_HEIGHT,
            scale: 2,
            useCORS: true,
            allowTaint: false,
            logging: false,
            backgroundColor: '#ffffff',
            imageTimeout: 20000,
            removeContainer: true,
            foreignObjectRendering: false,

            onclone: (clonedDoc) => {
              sanitizeHtml2CanvasClone(clonedDoc);

              // The PDF clone must never inherit transforms/backdrop effects
              // from the website preview UI.
              clonedDoc.querySelectorAll<HTMLElement>('*').forEach((el) => {
                el.style.transform = 'none';
                el.style.zoom = '1';
                el.style.filter = 'none';
                el.style.backdropFilter = 'none';
                el.style.setProperty('-webkit-backdrop-filter', 'none');

                // Prevent CSS variables from reintroducing OKLab/OKLCH.
                for (let n = el.style.length - 1; n >= 0; n--) {
                  const prop = el.style[n];
                  if (!prop.startsWith('--')) continue;

                  const value = el.style.getPropertyValue(prop);
                  if (/\boklab|oklch/i.test(value)) {
                    el.style.setProperty(
                      prop,
                      sanitizeModernColors(value),
                      el.style.getPropertyPriority(prop)
                    );
                  }
                }
              });

            },
          });
        } finally {
          restoreLegacyColors();
        }

        if (!canvas.width || !canvas.height) {
          throw new Error(`Canvas halaman ${i + 1} kosong.`);
        }

        // PNG keeps small text much sharper than JPEG and avoids additional
        // compression artifacts around thin fonts.
        const imgData = canvas.toDataURL('image/png');

        if (i > 0) {
          pdf.addPage('a4', 'portrait');
        }

        pdf.addImage(
          imgData,
          'PNG',
          0,
          0,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
      }

      setProgressText('Menyiapkan file PDF...');

      const fileName =
        `Company_Profile_PT_ALTRAN_GUNA_USAHA_` +
        `${new Date().getFullYear()}.pdf`;

      const blob = pdf.output('blob');
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');

      link.href = url;
      link.download = fileName;
      link.rel = 'noopener';
      link.style.display = 'none';

      document.body.appendChild(link);
      link.click();
      link.remove();

      setTimeout(() => URL.revokeObjectURL(url), 5000);

      setProgressText('PDF berhasil diunduh!');
      await wait(1000);
      setGenerating(false);
      setProgressText('');
    } catch (error) {
      console.error('PDF generation error:', error);
      setGenerating(false);
      setProgressText('');
      alert(
        'PDF gagal dibuat. Buka Console (F12) dan kirim error merah terbaru ke Erza.'
      );
    } finally {
      if (renderHost) {
        renderHost.remove();
        renderHost = null;
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/90 p-4 backdrop-blur-md">
      <div className="my-auto flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 text-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-3 text-amber-400">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">Download & Pratinjau PDF Company Profile</h2>
              <p className="text-xs text-slate-400">PT. ALTRAN GUNA USAHA • Dokumen Resmi Format A4 Siap Cetak & Kirim</p>
            </div>
          </div>
          <button type="button" onClick={onClose} disabled={generating} className="rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-950/80 p-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Format A4 multi-page standar korporat.</span>
          </div>
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => window.print()} disabled={generating} className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-4 py-2.5 font-bold text-slate-200">
              <Printer className="h-4 w-4 text-amber-400" /> Cetak / Print
            </button>
            <button type="button" onClick={generatePdfDownload} disabled={generating} className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-2.5 font-extrabold text-slate-950 shadow-lg disabled:opacity-70">
              {generating ? <><Loader2 className="h-4 w-4 animate-spin" /><span>{progressText || 'Membuat PDF...'}</span></> : <><Download className="h-4 w-4" /><span>Download File PDF (.pdf)</span></>}
            </button>
          </div>
        </div>

        <div className="flex-1 space-y-6 overflow-y-auto bg-slate-950/90 p-6">
          <div className="flex items-center justify-center gap-2 text-center text-xs font-bold text-amber-400">
            <CheckCircle2 className="h-4 w-4" />
            <span>Pratinjau Dokumen PDF (4 Halaman)</span>
          </div>
          <div className="flex justify-center overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-inner">
            <div className="my-2 origin-top scale-[0.8] sm:scale-[0.85]">
              <PdfExportDocument data={data} innerRef={pdfRef} />
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 bg-slate-950 p-4 text-center text-xs text-slate-400">
          File PDF dapat dilampirkan ke calon klien, proposal tender, atau WhatsApp.
        </div>
      </div>
    </div>
  );
};
