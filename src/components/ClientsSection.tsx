import React from 'react';
import { CompanyProfileData } from '../types';
import { Building2, Handshake, MapPin, CheckCircle2 } from 'lucide-react';

interface ClientsSectionProps {
  data: CompanyProfileData;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ data }) => {
  return (
    <section id="clients" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            Mitra & Klien Perusahaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dipercaya Oleh Korporasi Industri Terkemuka
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            PT. ALTRAN GUNA USAHA bangga menjadi bagian dari rantai pasok dan mitra logistik terpercaya bagi berbagai BUMN dan perusahaan multinasional di Indonesia.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {data.clients.map((client, idx) => (
            <div
              key={client.id}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-black text-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    {idx + 1}
                  </div>
                  <span className="text-[10px] font-bold text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 uppercase">
                    Klien Utama
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {client.name}
                </h3>

                <p className="text-xs text-slate-400 font-medium">
                  {client.industry}
                </p>
              </div>

              {client.location && (
                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{client.location}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Summary Partnership Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <Handshake className="w-6 h-6 text-amber-400 flex-shrink-0" />
          <span>
            Siap menjadi mitra strategis baru untuk kebutuhan transportasi & logistik industri perusahaan Anda.
          </span>
        </div>

      </div>
    </section>
  );
};
