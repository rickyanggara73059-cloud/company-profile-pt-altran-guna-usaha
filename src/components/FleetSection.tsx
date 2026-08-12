import React from 'react';
import { CompanyProfileData, FleetItem } from '../types';
import { Truck, ShieldAlert, Check, Gauge, Maximize2, ShieldCheck, ImagePlus } from 'lucide-react';

interface FleetSectionProps {
  data: CompanyProfileData;
  onUpdateFleetImage?: (fleetId: string, newUrl: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ data, onUpdateFleetImage }) => {
  return (
    <section id="fleet" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            Armada Perusahaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kesiapan Armada PT. ALTRAN GUNA USAHA
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Unit kendaraan komersial pilihan yang terawat berkala untuk menjamin keamanan dan efisiensi pengiriman.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.fleets.map((fleet) => (
            <div
              key={fleet.id}
              className="rounded-3xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 overflow-hidden shadow-xl flex flex-col justify-between group"
            >
              {/* Image & Badge Header */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={fleet.imageUrl}
                  alt={fleet.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  {fleet.category}
                </div>

                {/* Optional Custom Image Trigger */}
                {onUpdateFleetImage && (
                  <button
                    onClick={() => {
                      const url = prompt("Masukkan URL Foto Armada Baru (atau link gambar online):", fleet.imageUrl);
                      if (url) onUpdateFleetImage(fleet.id, url);
                    }}
                    className="absolute top-4 right-4 bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-white p-2 rounded-full border border-slate-700 text-xs font-bold transition-all"
                    title="Ganti Foto Armada Ini"
                  >
                    <ImagePlus className="w-4 h-4" />
                  </button>
                )}

                {/* Capacity Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-400 transition-colors">
                    {fleet.name}
                  </h3>
                </div>
              </div>

              {/* Specs Body */}
              <div className="p-6 space-y-6">
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {fleet.description}
                </p>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                      <Gauge className="w-3 h-3 text-amber-400" />
                      Kapasitas Muatan
                    </span>
                    <p className="font-extrabold text-amber-400 text-sm">{fleet.capacity}</p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                    <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-amber-400" />
                      Dimensi Karoseri
                    </span>
                    <p className="font-bold text-slate-200 text-xs truncate">{fleet.dimensions}</p>
                  </div>
                </div>

                {/* Features List */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Karakteristik & Fitur Armada:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                    {fleet.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Note on Photo Updates */}
        <p className="text-center text-xs text-slate-500 mt-8">
          * Catatan: Foto armada resmi resmi dapat ditambahkan atau diperbarui sewaktu-waktu melalui tombol Edit Profile.
        </p>

      </div>
    </section>
  );
};
