import React from "react";
import { CompanyProfileData } from "../types";
import { FileCheck } from "lucide-react";

interface LegalitySectionProps {
  data: CompanyProfileData;
}

export const LegalitySection: React.FC<LegalitySectionProps> = ({
  data,
}) => {
  return (
    <section
      id="legal"
      className="py-20 bg-slate-900 text-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">

          <span className="inline-block px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
            Legalitas & Perizinan
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dokumen Legalitas PT. ALTRAN GUNA USAHA
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Perusahaan berbadan hukum resmi dengan kelengkapan izin
            operasional kargo, perpajakan, dan keselamatan angkutan.
          </p>

        </div>

        {/* LEGAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {data.legalDocuments.map((doc) => (

            <div
              key={doc.id}
              className="
                p-7
                rounded-3xl
                bg-slate-950
                border border-slate-800
                hover:border-amber-500/40
                transition-all
                duration-300
                shadow-xl
                space-y-5
              "
            >

              {/* ICON + STATUS */}
              <div className="flex items-start justify-between gap-3">

                <div
                  className="
                    p-3.5
                    rounded-2xl
                    bg-amber-500/10
                    border border-amber-500/20
                    text-amber-400
                  "
                >
                  <FileCheck className="w-6 h-6" />
                </div>

                <span
                  className="
                    text-[11px]
                    font-bold
                    px-3
                    py-1
                    rounded-full
                    bg-emerald-500/10
                    text-emerald-400
                    border
                    border-emerald-500/20
                    uppercase
                    tracking-wider
                  "
                >
                  {doc.status}
                </span>

              </div>

              {/* TITLE */}
              <div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {doc.title}
                </h3>

                <p className="text-xs text-amber-400 font-semibold font-mono">
                  No: {doc.number}
                </p>

              </div>

              {/* INFORMATION */}
              <div
                className="
                  p-4
                  rounded-2xl
                  bg-slate-900
                  border border-slate-800
                  space-y-2
                  text-xs
                "
              >

                <p className="text-slate-400">
                  <strong>Penerbit / Instansi:</strong>{" "}
                  {doc.issuer}
                </p>

                {doc.note && (
                  <p className="text-slate-300">
                    <strong>Keterangan:</strong>{" "}
                    {doc.note}
                  </p>
                )}

              </div>


            </div>

          ))}

        </div>

        {/* SECURITY NOTICE */}
        <div
          className="
            mt-12
            p-6
            rounded-2xl
            bg-amber-500/10
            border border-amber-500/20
            text-center
            text-xs
            text-slate-300
            max-w-3xl
            mx-auto
            space-y-1
          "
        >

          <p className="font-extrabold text-amber-400 uppercase tracking-wider">
            Sertifikasi & Keabsahan Hukum
          </p>

          <p>
            Seluruh informasi legalitas PT. ALTRAN GUNA USAHA
            disajikan sebagai informasi perusahaan dan akan
            dilengkapi dengan dokumen pendukung resmi.
          </p>

        </div>

      </div>
    </section>
  );
};