import React from 'react';
import { CompanyProfileData } from '../types';
import { Target, Compass, Award, Calendar, Building2, CheckCircle, ShieldCheck, Clock, MapPin, UserCheck, BarChart3, Coins } from 'lucide-react';

interface AboutSectionProps {
  data: CompanyProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const getAdvIcon = (iconName: string) => {
    switch (iconName) {
      case 'ClockCheck': return <Clock className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-amber-400" />;
      case 'MapPin': return <MapPin className="w-6 h-6 text-amber-400" />;
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-amber-400" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-amber-400" />;
      case 'Coins': return <Coins className="w-6 h-6 text-amber-400" />;
      default: return <Award className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            Tentang Perusahaan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Profil & Sejarah PT. ALTRAN GUNA USAHA
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Perjalanan dedikasi tinggi dalam memberikan solusi logistik dan angkutan darat terpercaya sejak 2017.
          </p>
        </div>

        {/* Timeline & History Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-stretch">
          
          {/* Sejarah Box */}
          <div className="p-8 rounded-3xl bg-slate-950/70 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sejarah & Rekam Jejak</h3>
                  <p className="text-xs text-amber-400 font-semibold">Perjalanan Bertumbuh 2017 &bull; 2022</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {data.aboutHistory}
              </p>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 text-sm text-slate-300 space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span><strong>Tahun 2017:</strong> Dimulainya operasional armada kargo dan ekspedisi angkutan darat di wilayah Jawa.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <span><strong>Tahun 2022:</strong> Resmi berbadan hukum sebagai <strong>PT. ALTRAN GUNA USAHA</strong> dengan legalitas lengkap.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-xs text-slate-400 font-medium">
                <strong>Fokus Bisnis:</strong> {data.aboutFocus}
              </p>
            </div>
          </div>

          {/* Visi & Misi Box */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/20 shadow-xl space-y-6">
            
            {/* Visi */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500 text-slate-950 font-bold">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">Visi Perusahaan</h3>
                  <p className="text-xs text-amber-400 font-semibold">Arah & Komitmen Masa Depan</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 leading-relaxed font-medium italic">
                "{data.vision}"
              </div>
            </div>

            {/* Misi */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Misi Utama Perusahaan</h3>
              </div>

              <ul className="space-y-2.5">
                {data.mission.map((m, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-500/30">
                      {idx + 1}
                    </span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Keunggulan Perusahaan (Key Advantages) */}
        <div className="mt-16">
          <div className="text-center mb-10 space-y-2">
            <h3 className="text-2xl font-extrabold text-white">
              Mengapa Memilih PT. ALTRAN GUNA USAHA?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Keunggulan kompetitif yang membedakan kualitas layanan logistik kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.advantages.map((adv) => (
              <div
                key={adv.id}
                className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="p-3 rounded-xl bg-slate-900 w-fit mb-4 group-hover:bg-amber-500/10 transition-colors">
                  {getAdvIcon(adv.iconName)}
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {adv.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
