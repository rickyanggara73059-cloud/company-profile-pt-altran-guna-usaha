import React from 'react';
import { CompanyProfileData } from '../types';
import { MapPin, Phone, Building, Compass, Navigation } from 'lucide-react';

interface BranchesSectionProps {
  data: CompanyProfileData;
}

export const BranchesSection: React.FC<BranchesSectionProps> = ({ data }) => {
  return (
    <section id="branches" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            Kantor & Jaringan Operasional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kantor Pusat & Kantor Cabang
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Kehadiran fisik di lokasi strategis Jawa Timur, Kalimantan Timur, dan Jawa Barat untuk merespons rute pengiriman secara cepat.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data.branches.map((branch) => (
            <div
              key={branch.id}
              className={`p-7 rounded-3xl border transition-all duration-300 shadow-xl flex flex-col justify-between space-y-6 ${
                branch.badge === 'HEAD OFFICE'
                  ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-amber-500/50 ring-1 ring-amber-500/20'
                  : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="space-y-4">
                {/* Header Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                    <Building className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-[10px] font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${
                      branch.badge === 'HEAD OFFICE'
                        ? 'bg-amber-500 text-slate-950 border-amber-400'
                        : 'bg-slate-800 text-amber-400 border-slate-700'
                    }`}
                  >
                    {branch.badge}
                  </span>
                </div>

                {/* City & Role */}
                <div>
                  <h3 className="text-2xl font-black text-white mb-1">
                    {branch.city}
                  </h3>
                  <p className="text-xs text-amber-400 font-bold">
                    {branch.role}
                  </p>
                </div>

                {/* Address */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{branch.address}</span>
                  </div>

                  <div className="flex items-center gap-2 text-slate-300 pt-2 border-t border-slate-800/80">
                    <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <a
                      href={`tel:${data.phone}`}
                      className="font-bold hover:text-amber-400 transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>

                {/* Coverage Area */}
                <div className="space-y-1 text-xs">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                    <Navigation className="w-3 h-3 text-amber-400" />
                    Cakupan Wilayah Operasional:
                  </span>
                  <p className="text-slate-200 font-medium bg-slate-950 p-3 rounded-xl border border-slate-800">
                    {branch.coverageArea}
                  </p>
                </div>
              </div>

              {/* Quick Google Maps Button */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `PT ALTRAN GUNA USAHA ${branch.city}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-slate-700"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Buka Petunjuk Arah Google Maps</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
