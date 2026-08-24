import React from 'react';
import { CompanyProfileData } from '../types';
import {
  Calendar,
  Target,
  Compass,
} from 'lucide-react';

interface PdfExportDocumentProps {
  data: CompanyProfileData;
  innerRef?: React.RefObject<HTMLDivElement | null>;
}

const pageClass =
  'w-[210mm] h-[297mm] box-border overflow-hidden mx-auto font-sans select-none';

export const PdfExportDocument: React.FC<PdfExportDocumentProps> = ({
  data,
  innerRef,
}) => {
  return (
    <div
      ref={innerRef}
      id="pdf-document-container"
      className="bg-white text-slate-900"
      style={{
        width: '210mm',
        backgroundColor: '#ffffff',
        boxSizing: 'border-box',
      }}
    >

      {/* ========================= PAGE 1 ========================= */}
      <div
        className={`${pageClass} p-12 flex flex-col bg-[#020817] text-white`}
        style={{ backgroundColor: '#020817' }}
      >
        <div className="flex items-center justify-between border-b border-amber-500/30 pb-6">
          <div className="flex items-center gap-3">
            {data.logoUrl ? (
              <img
                src={data.logoUrl}
                alt={data.companyName}
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
            <p className="font-bold text-amber-400 uppercase">
              COMPANY PROFILE
            </p>
            <p>Edisi Resmi • {new Date().getFullYear()}</p>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center py-8">
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
              Penyedia Solusi Terpadu Transportasi Darat, Pengiriman Kargo
              Industri, Sewa Armada, dan Distribusi Logistik Lintas Pulau di
              Indonesia.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl h-64 bg-[#0f172a] mt-8">
            <img
              src="/images/hero.jpeg"
              alt="Armada PT ALTRAN GUNA USAHA"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-amber-300 font-bold">
              <span>Armada Komersial Siap Operasional</span>
              <span>Sejarah Operasional Sejak 2017</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
          <div>
            <p className="font-bold text-white">
              {data.headOfficeAddress}
            </p>
            <p>
              Telp / WA: {data.phone} • Email: {data.email}
            </p>
          </div>

          <span className="bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded">
            PT RESMI 2022
          </span>
        </div>
      </div>

      {/* ========================= PAGE 2 ========================= */}
      <div
        className={`${pageClass} p-10 flex flex-col bg-white text-slate-900`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-amber-500 rounded" />
            <h2 className="text-base font-black uppercase tracking-tight">
              1. TENTANG KAMI & VISI MISI
            </h2>
          </div>

          <span className="text-[10px] font-bold text-slate-400">
            {data.companyName}
          </span>
        </div>

        <div className="flex-1 pt-6 space-y-5">

          <div className="p-5 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
              <Calendar className="w-4 h-4" />
              <h3>Sejarah & Latar Belakang Perusahaan</h3>
            </div>

            <p className="text-slate-700 text-[11px] leading-relaxed">
              {data.aboutHistory}
            </p>

            <p className="text-slate-700 text-[11px] leading-relaxed">
              <strong>Fokus Operasional:</strong> {data.aboutFocus}
            </p>
          </div>

          {/* VISI + MISI */}
          <div className="grid grid-cols-2 gap-4 items-stretch">

            <div className="p-5 rounded-2xl bg-[#0f172a] text-white space-y-3">
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
                <Target className="w-4 h-4" />
                Visi Perusahaan
              </div>

              <p className="text-slate-200 text-[11px] italic leading-relaxed">
                "{data.vision}"
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-slate-900 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-extrabold text-xs uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                Misi Perusahaan
              </div>

              <ul className="space-y-1.5 text-[10.5px] text-slate-800 leading-snug">
                {data.mission.slice(0, 4).map((m, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="font-bold text-amber-600">•</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-extrabold text-slate-900 text-sm">
              Keunggulan Utama PT. ALTRAN GUNA USAHA
            </h3>

            <div className="grid grid-cols-2 gap-2.5">
              {data.advantages.map((adv) => (
                <div
                  key={adv.id}
                  className="p-2.5 rounded-xl bg-[#f1f5f9] border border-slate-200"
                >
                  <p className="font-bold text-slate-900 text-[10.5px] text-amber-700 leading-tight">
                    {adv.title}
                  </p>

                  <p className="text-[9px] text-slate-600 leading-snug mt-1">
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl p-4" style={{backgroundColor:"#fffbeb",border:"1px solid #fde68a"}}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">
              Ringkasan Armada
            </h3>
            <span className="text-[9px] font-bold uppercase tracking-wider" style={{color:"#b45309"}}>
              Siap Operasional
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl p-3" style={{backgroundColor:"#ffffff",border:"1px solid #fef3c7"}}>
              <p className="text-[8px] uppercase font-bold text-slate-500">KONDISI ARMADA</p><p className="text-lg font-black text-slate-900 mt-1">Selalu Prima</p>
            </div>

            <div className="rounded-xl p-3" style={{backgroundColor:"#ffffff",border:"1px solid #fef3c7"}}>
              <p className="text-[8px] uppercase font-bold text-slate-500">LAYANAN</p><p className="text-lg font-black text-slate-900 mt-1">Solusi Terpadu</p>
            </div>

            <div className="rounded-xl p-3" style={{backgroundColor:"#ffffff",border:"1px solid #fef3c7"}}>
              <p className="text-[8px] uppercase font-bold text-slate-500">Operasional</p>
              <p className="text-lg font-black mt-1" style={{color:"#d97706"}}>Multi Area</p>
            </div>
          </div>

          <p className="text-[9px] text-slate-600 mt-3 leading-relaxed">
            Armada tersedia untuk kebutuhan transportasi darat, distribusi logistik,
            project cargo, hingga heavy haulage sesuai kebutuhan pelanggan.
          </p>
        </div>
        <div className="pt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
          <span>Official Company Profile Document</span>
          <span>Halaman 2</span>
        </div>
      </div>

      {/* ========================= PAGE 3 ========================= */}
      <div
        className={`${pageClass} p-10 flex flex-col bg-white text-slate-900`}
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-amber-500 rounded" />
            <h2 className="text-base font-black uppercase tracking-tight">
              2. LAYANAN & ARMADA
            </h2>
          </div>

          <span className="text-[10px] font-bold text-slate-400">
            {data.companyName}
          </span>
        </div>

        <div className="flex-1 pt-6 space-y-5">

          <div className="space-y-2">
            <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">
              Layanan Logistik & Transportasi
            </h3>

            <div className="grid grid-cols-3 gap-2.5">
              {data.services.map((srv) => (
                <div
                  key={srv.id}
                  className="p-3 rounded-xl bg-[#0f172a] text-white"
                >
                  <p className="font-bold text-amber-400 text-[10.5px]">
                    {srv.title}
                  </p>

                  <p className="text-[9px] text-slate-300 leading-snug mt-1">
                    {srv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">
              Spesifikasi Armada Perusahaan
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {data.fleets.map((fleet) => (
                <div
                  key={fleet.id}
                  className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200 flex items-start gap-4 min-h-[112px]"
                >
                  <img
                    src={fleet.imageUrl}
                    alt={fleet.name}
                    className="w-24 h-24 object-cover rounded-xl flex-shrink-0 border"
                  />

                  <div className="space-y-1 min-w-0">
                    <span className="text-[8.5px] font-extrabold uppercase px-2 py-0.5 rounded" style={{backgroundColor:"#fef3c7",color:"#b45309"}}>
                      {fleet.category}
                    </span>

                    <p className="font-bold text-slate-900 text-xs leading-tight">
                      {fleet.name}
                    </p>

                    <p className="text-[9.5px] font-bold" style={{color:"#d97706"}}>
                      Kapasitas: {fleet.capacity}
                    </p>

                    <p className="text-[8.5px] text-slate-600 leading-tight">
                      {fleet.dimensions}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl p-4" style={{backgroundColor:"#fffbeb",border:"1px solid #fde68a"}}>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide">
              Ringkasan Armada
            </h3>
            <span className="text-[9px] font-bold uppercase tracking-wider" style={{color:"#b45309"}}>
              Siap Operasional
            </span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl p-3" style={{backgroundColor:"#ffffff",border:"1px solid #fef3c7"}}>
              <p className="text-[8px] uppercase font-bold text-slate-500">KONDISI ARMADA</p><p className="text-lg font-black text-slate-900 mt-1">Selalu Prima</p>
            </div>

            <div className="rounded-xl p-3" style={{backgroundColor:"#ffffff",border:"1px solid #fef3c7"}}>
              <p className="text-[8px] uppercase font-bold text-slate-500">LAYANAN</p><p className="text-lg font-black text-slate-900 mt-1">Solusi Terpadu</p>
            </div>

            <div className="rounded-xl p-3" style={{backgroundColor:"#ffffff",border:"1px solid #fef3c7"}}>
              <p className="text-[8px] uppercase font-bold text-slate-500">Operasional</p>
              <p className="text-lg font-black mt-1" style={{color:"#d97706"}}>Multi Area</p>
            </div>
          </div>

          <p className="text-[9px] text-slate-600 mt-3 leading-relaxed">
            Armada tersedia untuk kebutuhan transportasi darat, distribusi logistik,
            project cargo, hingga heavy haulage sesuai kebutuhan pelanggan.
          </p>
        </div>
        <div className="pt-4 border-t border-slate-200 flex justify-between text-[10px] text-slate-400">
          <span>Official Company Profile Document</span>
          <span>Halaman 3</span>
        </div>
      </div>

      {/* ========================= PAGE 4 ========================= */}
      <div
        className={`${pageClass} p-10 flex flex-col bg-[#020817] text-white`}
        style={{ backgroundColor: '#020817' }}
      >
        <div className="flex items-center justify-between border-b border-amber-500/30 pb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-6 bg-amber-500 rounded" />

            <h2 className="text-base font-black uppercase tracking-tight">
              3. MITRA, LEGALITAS, CABANG & KONTAK
            </h2>
          </div>

          <span className="text-[10px] font-bold text-amber-400">
            {data.companyName}
          </span>
        </div>

        <div className="flex-1 pt-5 space-y-4">

          {/* MITRA */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
              Daftar 12 Mitra & Klien Perusahaan Utama
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {data.clients.map((client, idx) => (
                <div
                  key={client.id}
                  className="min-h-[46px] p-2 rounded-lg bg-[#0f172a] border border-slate-800"
                >
                  <p className="font-bold text-white text-[9.5px] leading-tight">
                    {idx + 1}. {client.name}
                  </p>

                  <p className="text-slate-400 text-[8px] leading-tight mt-1">
                    {client.industry}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* LEGALITAS */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
              Legalitas & Perizinan Berbadan Hukum
            </h3>

            <div className="grid grid-cols-2 gap-2">
              {data.legalDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="min-h-[58px] p-2.5 rounded-xl bg-[#0f172a] border border-slate-800"
                >
                  <p className="font-bold text-white text-[9.5px] leading-tight">
                    {doc.title}
                  </p>

                  <p className="text-amber-400 font-mono font-bold text-[8.5px] mt-1">
                    No: {doc.number}
                  </p>

                  <p className="text-slate-400 text-[8px] leading-tight mt-1">
                    {doc.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CABANG */}
          <div className="space-y-2">
            <h3 className="font-bold text-amber-400 text-xs uppercase tracking-wider">
              Jaringan Kantor & Cabang Operasional
            </h3>

            <div className="grid grid-cols-3 gap-2">
              {data.branches.map((br) => (
                <div
                  key={br.id}
                  className="min-h-[60px] p-2.5 rounded-xl bg-[#0f172a] border border-slate-800"
                >
                  <span className="font-extrabold text-amber-400 block text-[9.5px] leading-tight">
                    {br.city}
                  </span>

                  <p className="text-slate-300 text-[8px] leading-tight mt-1">
                    {br.address}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div className="p-4 rounded-2xl bg-[#0f172a] border border-amber-500/40 text-center space-y-1.5">
            <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest">
              Hubungi Kami Untuk Penawaran Kerjasama & Logistik
            </p>

            <p className="text-sm font-extrabold text-white">
              Telepon / WA: {data.phone} • Email: {data.email}
            </p>

            <p className="text-[9px] text-slate-300">
              Kantor Pusat: {data.headOfficeAddress}
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-between text-[10px] text-slate-400">
          <span>PT. ALTRAN GUNA USAHA © {new Date().getFullYear()}</span>
          <span>Halaman 4 (Akhir)</span>
        </div>
      </div>
    </div>
  );
};








