import React from 'react';
import { CompanyProfileData } from '../types';
import { Truck, CheckCircle2, MapPin, Phone, Mail, Award, ShieldCheck, Building2, Calendar, Target, Compass } from 'lucide-react';

interface PdfExportDocumentProps {
  data: CompanyProfileData;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

export const PdfExportDocument: React.FC<PdfExportDocumentProps> = ({ data, innerRef }) => {
  return (
    <div
      ref={innerRef}
      id="pdf-document-container"
      className="bg-white text-slate-900 w-[210mm] min-h-[297mm] mx-auto shadow-2xl font-sans text-xs leading-normal select-none"
      style={{ boxSizing: 'border-box' }}
    >
      
      {/* PAGE 1: COVER PAGE */}
      <div className="w-[210mm] min-h-[297mm] p-12 flex flex-col justify-between bg-slate-950 text-white relative overflow-hidden page-break-after-always">
        {/* Background Accent Lines */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-amber-500/30 pb-6">
          <div className="flex items-center gap-3">
            {data.logoUrl ? (
              <img
                src={data.logoUrl}
                alt={data.companyName}
                referrerPolicy="no-referrer"
                className="w-12 h-12 object-contain rounded-lg bg-white p-1"
              />
            ) : (
              <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center font-black text-slate-950 text-lg">
                AGU
              </div>
            )}
            <div>
              <h2 className="text-base font-extrabold text-white tracking-tight">
                {data.companyName}
              </h2>
              <p className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                {data.tagline}
              </p>
            </div>
          </div>

          <div className="text-right text-[10px] text-slate-400">
            <p className="font-bold text-amber-400 uppercase">COMPANY PROFILE</p>
            <p>Edisi Resmi &bull; {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Center Title & Hero Image */}
        <div className="my-auto space-y-8 py-6">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-bold uppercase tracking-widest">
              Transportation & Logistics
            </span>
            <h1 className="text-4xl font-black text-white tracking-tight leading-tight">
              PROFIL PERUSAHAAN
            </h1>
            <p className="text-xl font-bold text-amber-400">
              {data.companyName}
            </p>
            <p className="text-slate-300 text-xs leading-relaxed max-w-lg">
              Penyedia Solusi Terpadu Transportasi Darat, Pengiriman Kargo Industri, Sewa Armada, dan Distribusi Logistik Lintas Pulau di Indonesia.
            </p>
          </div>

          {/* Hero Fleet Showcase Photo */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl h-64 bg-slate-900">
            <img
              src={data.heroImageUrl}
              alt="Armada PT ALTRAN GUNA USAHA"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-amber-300 font-bold">
              <span>Armada Komersial Siap Operasional</span>
              <span>Sejarah Operasional Sejak 2017</span>
            </div>
          </div>
        </div>

        {/* Bottom Contact Footer */}
        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
          <div>
            <p className="font-bold text-white">{data.headOfficeAddress}</p>
            <p>Telp / WA: {data.phone} &bull; Email: {data.email}</p>
          </div>
          <div className="text-right">
            <span className="bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded">
              PT RESMI 2022
            </span>
          </div>
        </div>
      </div>

      {/* PAGE 2: TENTANG KAMI & VISI MISI */}
      <div className="w-[210mm] min-h-[297mm] p-12 flex flex-col justify-between bg-white text-slate-900 page-break-after-always">
        
        {/* Page Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-amber-500 rounded"></div>
            <h2 className="text-base font-black text-slate-900 uppercase tracking-tight">
              1. TENTANG KAMI & VISI MISI
            </h2>
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            {data.companyName}
          </span>
        </div>

        {/* Main Body */}
        <div className="my-auto space-y-6">
          
          {/* Sejarah Box */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
              <Calendar className="w-4 h-4" />
              <h3>Sejarah & Latar Belakang Perusahaan</h3>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {data.aboutHistory}
            </p>
            <p className="text-slate-700 leading-relaxed">
              <strong>Fokus Operasional:</strong> {data.aboutFocus}
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Visi */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Visi Perusahaan
              </div>
              <p className="text-slate-200 text-xs italic leading-relaxed">
                "{data.vision}"
              </p>
            </div>

            {/* Misi */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-extrabold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                Misi Perusahaan
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-800">
                {data.mission.slice(0, 4).map((m, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="font-bold text-amber-600">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Keunggulan Perusahaan */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-slate-900 text-sm">
              Keunggulan Utama PT. ALTRAN GUNA USAHA
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {data.advantages.map((adv) => (
                <div key={adv.id} className="p-3 rounded-xl bg-slate-100 border border-slate-200 space-y-1">
                  <p className="font-bold text-slate-900 text-[11px] text-amber-700">{adv.title}</p>
                  <p className="text-[10px] text-slate-600 leading-snug">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Page Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400 font-medium">
          <span>Official Company Profile Document</span>
          <span>Halaman 2</span>
        </div>
      </div>

      {/* PAGE 3: LAYANAN & ARMADA */}
      <div className="w-[210mm] min-h-[297mm] p-12 flex flex-col justify-between bg-white text-slate-900 page-break-after-always">
        
        {/* Page Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-amber-500 rounded"></div>
            <h2 className="text-base font-black text-slate-900 uppercase tracking-tight">
              2. LAYANAN & ARMADA
            </h2>
          </div>
          <span className="text-[10px] font-bold text-slate-400">
            {data.companyName}
          </span>
        </div>

        {/* Main Body */}
        <div className="my-auto space-y-6">
          
          {/* Layanan Section */}
          <div className="space-y-3">
            <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">
              Layanan Logistik & Transportasi
            </h3>
            <div className="grid grid-cols-3 gap-3">
              {data.services.map((srv) => (
                <div key={srv.id} className="p-3 rounded-xl bg-slate-900 text-white space-y-1">
                  <p className="font-bold text-amber-400 text-[11px]">{srv.title}</p>
                  <p className="text-[9.5px] text-slate-300 leading-tight">{srv.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Armada Section */}
          <div className="space-y-3 pt-2">
            <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">
              Spesifikasi Armada Perusahaan
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {data.fleets.map((fleet) => (
                <div key={fleet.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <img
                    src={fleet.imageUrl}
                    alt={fleet.name}
                    referrerPolicy="no-referrer"
                    className="w-20 h-20 object-cover rounded-xl flex-shrink-0 border"
                  />
                  <div className="space-y-1">
                    <span className="text-[9px] font-extrabold uppercase bg-amber-500/20 text-amber-700 px-2 py-0.5 rounded">
                      {fleet.category}
                    </span>
                    <p className="font-bold text-slate-900 text-xs">{fleet.name}</p>
                    <p className="text-[10px] text-amber-600 font-bold">Kapasitas: {fleet.capacity}</p>
                    <p className="text-[9.5px] text-slate-600">{fleet.dimensions}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Page Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400 font-medium">
          <span>Official Company Profile Document</span>
          <span>Halaman 3</span>
        </div>
      </div>

      {/* PAGE 4: MITRA KLIEN, LEGALITAS, CABANG & KONTAK */}
      <div className="w-[210mm] min-h-[297mm] p-12 flex flex-col justify-between bg-slate-950 text-white">
        
        {/* Page Header */}
        <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-amber-500 rounded"></div>
            <h2 className="text-base font-black text-white uppercase tracking-tight">
              3. MITRA, LEGALITAS, CABANG & KONTAK
            </h2>
          </div>
          <span className="text-[10px] font-bold text-amber-400">
            {data.companyName}
          </span>
        </div>

        {/* Main Body */}
        <div className="my-auto space-y-6">
          
          {/* Mitra Klien (12 Companies) */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
              Daftar 12 Mitra & Klien Perusahaan Utama
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {data.clients.map((client, idx) => (
                <div key={client.id} className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[10px]">
                  <p className="font-bold text-white truncate">{idx + 1}. {client.name}</p>
                  <p className="text-slate-400 text-[9px] truncate">{client.industry}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Legalitas */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
              Legalitas & Perizinan Berbadan Hukum
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {data.legalDocuments.map((doc) => (
                <div key={doc.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] space-y-0.5">
                  <p className="font-bold text-white">{doc.title}</p>
                  <p className="text-amber-400 font-mono font-bold text-[9.5px]">No: {doc.number}</p>
                  <p className="text-slate-400 text-[9px]">{doc.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Kantor Cabang */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
              Jaringan Kantor & Cabang Operasional
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {data.branches.map((br) => (
                <div key={br.id} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[10px] space-y-1">
                  <span className="font-extrabold text-amber-400 block">{br.city}</span>
                  <p className="text-slate-300 text-[9px] leading-tight line-clamp-2">{br.address}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Box */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-slate-900 to-amber-500/20 border border-amber-500/40 text-center space-y-1">
            <p className="text-xs font-black text-amber-400 uppercase tracking-widest">
              Hubungi Kami Untuk Penawaran Kerjasama & Logistik
            </p>
            <p className="text-sm font-extrabold text-white">
              Telepon / WA: {data.phone} &bull; Email: {data.email}
            </p>
            <p className="text-[10px] text-slate-300">
              Kantor Pusat: {data.headOfficeAddress}
            </p>
          </div>

        </div>

        {/* Page Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-between text-[10px] text-slate-400 font-medium">
          <span>PT. ALTRAN GUNA USAHA &copy; {new Date().getFullYear()}</span>
          <span>Halaman 4 (Akhir)</span>
        </div>
      </div>

    </div>
  );
};
