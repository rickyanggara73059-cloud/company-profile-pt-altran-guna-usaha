import React from 'react';
import { CompanyProfileData } from '../types';
import { Shield, Truck, MapPin, Award, ArrowDown, Download, CheckCircle2 } from 'lucide-react';

interface CoverSectionProps {
  data: CompanyProfileData;
  onOpenPdfModal: () => void;
}

export const CoverSection: React.FC<CoverSectionProps> = ({ data, onOpenPdfModal }) => {
  return (
    <section id="cover" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-slate-950 text-white">
      {/* Background Gradient & Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black opacity-90"></div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Document Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Official Company Profile Document</span>
          </div>
          <div className="text-xs text-slate-400 font-medium">
            PT. ALTRAN GUNA USAHA &copy; {new Date().getFullYear()}
          </div>
        </div>

        {/* Main Cover Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Logo Badge */}
            <div className="flex items-center gap-4 p-2 pr-5 rounded-2xl bg-slate-900/80 border border-slate-800 w-fit">
              {data.logoUrl ? (
                <img
                  src={data.logoUrl}
                  alt={data.companyName}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 object-contain rounded-xl bg-white p-1 border border-amber-500/30 shadow-md"
                />
              ) : (
                <div className="w-14 h-14 rounded-xl bg-amber-500 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg">
                  AGU
                </div>
              )}
              <div>
                <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 block">
                  Logistik & Transportasi Darat
                </span>
                <span className="text-sm font-bold text-slate-200">
                  Resmi Sejak 2017 &bull; PT sejak 2022
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                {data.companyName}
              </h1>
              <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                {data.tagline}
              </p>
            </div>

            {/* Subtitle Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Mitra terpercaya penyedia layanan <strong className="text-white font-semibold">transportasi darat, kargo proyek, dan distribusi logistik</strong> terintegrasi dengan jaringan armada prima di wilayah Jawa, Bali, dan Kalimantan.
            </p>

            {/* Key Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Armada Lengkap (Pickup, CDD, Fuso, Longbed)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Legalitas PT Resmi & NPWP Terverifikasi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Kantor Banyuwangi, Balikpapan & Depok</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Dipercaya 12+ Korporasi Nasional</span>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenPdfModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold shadow-lg shadow-amber-500/25 flex items-center gap-2 transition-all transform active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF Profile</span>
              </button>

              <a
                href="#about"
                className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold border border-slate-700 flex items-center gap-2 transition-all"
              >
                <span>Eksplor Profil</span>
                <ArrowDown className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </div>

          {/* Right Fleet Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-slate-900 group">
              <img
                src={data.heroImageUrl}
                alt="Armada PT ALTRAN GUNA USAHA"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

              {/* Bottom Badge Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3">
                <div className="flex items-center justify-between text-xs text-amber-400 font-bold tracking-wider uppercase">
                  <span className="flex items-center gap-1">
                    <Truck className="w-4 h-4" /> Armada Komersial Siap Tempur
                  </span>
                  <span>100% Verified Fleet</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-800">
                  <p className="text-xs text-slate-300 font-medium leading-normal">
                    "Siap melayani kargo industri, pengiriman pabrik, hingga project cargo lintas pulau dengan jaminan aman & tepat waktu."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Stat Pill */}
            <div className="absolute -bottom-5 -left-5 sm:left-4 bg-amber-500 text-slate-950 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-300">
              <Shield className="w-8 h-8 flex-shrink-0" />
              <div>
                <p className="text-xs font-black uppercase tracking-wider">Garansi Keamanan</p>
                <p className="text-sm font-extrabold">Standar K3 & Pengawalan</p>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">{data.foundedYear}</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Awal Pengalaman Operasional</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">{data.incYear}</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Berbadan Hukum PT Resmi</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">3 Kantor</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Banyuwangi, Balikpapan, Depok</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
            <p className="text-2xl sm:text-3xl font-black text-amber-400">{data.clients.length}+ Mitra</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Perusahaan Industri Terkemuka</p>
          </div>
        </div>

      </div>
    </section>
  );
};
