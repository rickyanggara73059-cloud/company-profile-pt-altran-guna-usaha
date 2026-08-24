import React from 'react';
import { CompanyProfileData } from '../types';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, ShieldCheck, Download, Award } from 'lucide-react';

interface ContactSectionProps {
  data: CompanyProfileData;
  onOpenPdfModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ data, onOpenPdfModal }) => {
  const waMessage = encodeURIComponent(
    `Halo PT. ALTRAN GUNA USAHA, saya ingin berkonsultasi mengenai permintaan sewa armada / pengiriman logistik.`
  );

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Contact Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-amber-500/30 p-8 sm:p-12 shadow-2xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
                Hubungi Kami
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Konsultasikan Kebutuhan Transportasi & Logistik Anda
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Tim profesional <strong className="text-amber-400 font-semibold">{data.companyName}</strong> siap memberikan penawaran tarif terbaik dan solusi armada tepat waktu untuk bisnis Anda.
              </p>

              {/* Contact Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

                {/* WhatsApp 1 */}
                <a
                  href={`https://wa.me/${data.whatsappNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      WhatsApp 1
                    </span>
                    <span className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                      0811 2222 6808
                    </span>
                  </div>
                </a>

                {/* WhatsApp 2 */}
                <a
                  href={`https://wa.me/${data.whatsappNumber2}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      WhatsApp 2
                    </span>
                    <span className="text-sm font-extrabold text-white group-hover:text-emerald-400 transition-colors">
                      0813 4000 0879
                    </span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${data.email}`}
                  className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 transition-all flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Email Resmi
                    </span>
                    <span className="text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors truncate block max-w-[180px]">
                      {data.email}
                    </span>
                  </div>
                </a>

              </div>

              {/* Head Office Address Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-extrabold text-amber-400 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  Kantor Pusat
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {data.headOfficeAddress}
                </p>
              </div>

            </div>

            {/* Right Action & Quick Form Column */}
            <div className="lg:col-span-5 bg-slate-900/90 p-8 rounded-3xl border border-slate-800 space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-extrabold text-white">
                  Respon Cepat (Quick Action)
                </h3>
                <p className="text-xs text-slate-400">
                  Pilih opsi di bawah untuk terhubung langsung dengan tim kami.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${data.whatsappNumber}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp 1 — 0811 2222 6808</span>
                </a>

                <a
                  href={`https://wa.me/${data.whatsappNumber2}?text=${waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp 2 — 0813 4000 0879</span>
                </a>

                <a
                  href="/documents/company-profile-altran.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Company Profile PDF</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Jam Operasional: Senin - Sabtu (08:00 - 18:00 WIB)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Layanan Darurat Logistik 24 Jam Siap Dipandu</span>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Footer Credits */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>&copy; {new Date().getFullYear()} <strong>{data.companyName}</strong>. Hak Cipta Dilindungi Undang-Undang.</span>
          </div>
          <p className="text-slate-500">
            Official Transportation & Logistics Profile Document
          </p>
        </div>

      </div>
    </section>
  );
};

