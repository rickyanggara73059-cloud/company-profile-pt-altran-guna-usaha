import React, { useRef, useState } from 'react';
import { CompanyProfileData } from '../types';
import { PdfExportDocument } from './PdfExportDocument';
import { X, Download, Printer, FileText, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: CompanyProfileData;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({ isOpen, onClose, data }) => {
  const [generating, setGenerating] = useState(false);
  const [progressText, setProgressText] = useState('');
  const pdfRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const generatePdfDownload = async () => {
    if (!pdfRef.current) return;
    setGenerating(true);
    setProgressText('Menyiapkan dokumen A4 Company Profile...');

    try {
      const container = pdfRef.current;
      
      // Select all page element blocks inside the hidden/preview container
      const pageElements = container.querySelectorAll('.page-break-after-always, #pdf-document-container > div');
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth(); // ~210mm
      const pdfHeight = pdf.internal.pageSize.getHeight(); // ~297mm

      const totalPages = pageElements.length > 0 ? pageElements.length : 4;

      for (let i = 0; i < pageElements.length; i++) {
        const pageEl = pageElements[i] as HTMLElement;
        setProgressText(`Memproses Halaman ${i + 1} dari ${totalPages}...`);

        const canvas = await html2canvas(pageEl, {
          scale: 2, // High resolution crisp PDF render
          useCORS: true,
          allowTaint: true,
          logging: false,
          backgroundColor: '#0f172a'
        });

        const imgData = canvas.toDataURL('image/jpeg', 0.95);

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
      }

      setProgressText('Menyimpan file PDF...');
      const fileName = `Company_Profile_PT_ALTRAN_GUNA_USAHA_${new Date().getFullYear()}.pdf`;
      pdf.save(fileName);

      setProgressText('PDF berhasil diunduh!');
      setTimeout(() => {
        setGenerating(false);
        setProgressText('');
      }, 1500);

    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Terjadi kesalahan saat membuat file PDF. Mencoba metode cetak browser.');
      window.print();
      setGenerating(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 text-white rounded-3xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">Download & Pratinjau PDF Company Profile</h2>
              <p className="text-xs text-slate-400">
                PT. ALTRAN GUNA USAHA &bull; Dokumen Resmi Format A4 Siap Cetak & Kirim
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Actions Bar */}
        <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Format A4 Multi-Page standar korporat dengan layout resmi & bersih.</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              disabled={generating}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold flex items-center gap-2 transition-colors border border-slate-700"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Cetak / Print Directly</span>
            </button>

            <button
              onClick={generatePdfDownload}
              disabled={generating}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
            >
              {generating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>{progressText || 'Membuat PDF...'}</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download File PDF (.pdf)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Document Preview Stage */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-950/90 space-y-6">
          
          <div className="text-center text-xs text-amber-400 font-bold flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Tampilan Pratinjau Dokumen PDF (4 Halaman):</span>
          </div>

          {/* Render PDF Printable Container inside scrollable preview wrapper */}
          <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 shadow-inner overflow-x-auto flex justify-center">
            <div className="transform scale-[0.8] sm:scale-[0.85] origin-top my-2">
              <PdfExportDocument data={data} innerRef={pdfRef} />
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 text-center text-xs text-slate-400">
          File PDF dapat dilampirkan langsung ke calon klien, proposal tender, atau kontak WhatsApp.
        </div>

      </div>
    </div>
  );
};
