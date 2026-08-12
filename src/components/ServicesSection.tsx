import React from 'react';
import { CompanyProfileData } from '../types';
import { Truck, PackageCheck, Home, HardHat, KeyRound, Building2, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  data: CompanyProfileData;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ data }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Truck': return <Truck className="w-7 h-7 text-amber-400" />;
      case 'PackageCheck': return <PackageCheck className="w-7 h-7 text-amber-400" />;
      case 'Home': return <Home className="w-7 h-7 text-amber-400" />;
      case 'HardHat': return <HardHat className="w-7 h-7 text-amber-400" />;
      case 'KeyRound': return <KeyRound className="w-7 h-7 text-amber-400" />;
      case 'Building2': return <Building2 className="w-7 h-7 text-amber-400" />;
      default: return <Truck className="w-7 h-7 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            Layanan Utama
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Layanan Transportasi & Logistik Terpadu
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Solusi serbaguna yang dirancang untuk mendukung efisiensi distribusi barang dan rantai pasok bisnis Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((srv, idx) => (
            <div
              key={srv.id}
              className="p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Service Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="text-2xl font-black text-slate-700 group-hover:text-amber-500/40 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                  {srv.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              {/* Service Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Keunggulan Layanan:
                </p>
                <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-300">
                  {srv.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-amber-500/10 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-extrabold text-white">
              Membutuhkan Layanan Logistik Khusus atau Kontrak Rutin?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Tim profesional PT. ALTRAN GUNA USAHA siap menyusun proposal penawaran tarif sesuai spesifikasi kargo Anda.
            </p>
          </div>
          <a
            href={`https://wa.me/${data.whatsappNumber}?text=Halo%20PT.%20ALTRAN%20GUNA%20USAHA,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20logistik.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider whitespace-nowrap shadow-md transition-colors"
          >
            Konsultasi Sekarang
          </a>
        </div>

      </div>
    </section>
  );
};
