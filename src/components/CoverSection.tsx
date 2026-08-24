import React from 'react';
import {
  Truck,
  Download,
  ArrowRight,
  CalendarDays,
  UsersRound,
  ShieldCheck,
  Weight,
  Container,
} from 'lucide-react';
import { CompanyProfileData } from '../types';

interface CoverSectionProps {
  data: CompanyProfileData;
  onOpenPdfModal: () => void;
}

const FleetStat = ({
  icon: Icon,
  value,
  label,
  description,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}) => (
  <div className="flex items-start gap-4 px-5 py-4 lg:px-6">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-amber-400">
      <Icon className="h-6 w-6" strokeWidth={1.8} />
    </div>

    <div className="min-w-0">
      <div className="text-3xl font-black leading-none tracking-tight text-white">
        {value}
      </div>
      <div className="mt-1 text-sm font-extrabold text-amber-400">
        {label}
      </div>
      <div className="mt-1 text-xs leading-relaxed text-slate-300">
        {description}
      </div>
    </div>
  </div>
);

const FleetItem = ({
  icon: Icon,
  name,
  capacity,
}: {
  icon: React.ElementType;
  name: string;
  capacity: string;
}) => (
  <div className="flex min-w-[170px] items-center gap-3 px-4 py-3">
    <Icon className="h-7 w-7 shrink-0 text-amber-400" strokeWidth={1.8} />
    <div>
      <div className="text-sm font-extrabold text-white">{name}</div>
      <div className="mt-0.5 text-xs text-slate-300">{capacity}</div>
    </div>
  </div>
);

export const CoverSection: React.FC<CoverSectionProps> = ({
  data,
  onOpenPdfModal,
}) => {
  return (
    <section
      id="cover"
      className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-slate-950 text-white"
    >
      {/* Full-bleed hero photo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-altran-hd.jpg"
          alt="Armada PT. ALTRAN GUNA USAHA"
          className="absolute left-0 top-0 h-[320px] w-full object-contain object-top sm:inset-0 sm:h-full sm:w-full sm:object-cover sm:object-[66%_center]"
        />
      </div>

      {/* Cinematic overlays: keep the truck visible while protecting the text */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(2,8,23,0.92)_0%,rgba(2,8,23,0.78)_28%,rgba(2,8,23,0.38)_52%,rgba(2,8,23,0.08)_78%,rgba(2,8,23,0.16)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(2,8,23,0.82)_0%,rgba(2,8,23,0.18)_38%,rgba(2,8,23,0.06)_72%,rgba(2,8,23,0.30)_100%)]" />
      <div className="absolute inset-0 z-10 bg-slate-950/0" />

      <div className="relative z-20 mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-[1700px] flex-col justify-end px-5 pb-5 pt-20 sm:px-8 lg:px-12 lg:pb-6">
        {/* Main hero content */}
        <div className="max-w-3xl pb-8 lg:pb-10">
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-amber-400 sm:text-sm">
            <span className="h-1 w-8 rounded-full bg-amber-400" />
            Transportation &amp; Logistics Solutions
          </div>

          <h1 className="max-w-4xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.035em] text-white sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem]">
            <span className="block">PT. ALTRAN</span>
            <span className="block text-amber-400">GUNA USAHA</span>
          </h1>

          <div className="mt-5 h-1.5 w-20 rounded-full bg-amber-400" />

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
            Solusi transportasi darat untuk kebutuhan{' '}
            <strong className="font-extrabold text-white">general cargo</strong>,{' '}
            <strong className="font-extrabold text-white">project cargo</strong>,
            dan <strong className="font-extrabold text-white">heavy haulage</strong>{' '}
            dengan armada prima dan layanan terpercaya.
          </p>

          <div className="mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-2 text-sm text-slate-200 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" />
              <span>Armada lengkap &amp; siap beroperasi</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" />
              <span>Legalitas PT resmi</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" />
              <span>Standar keselamatan &amp; K3</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 shrink-0 text-amber-400" />
              <span>Jawa • Bali • Kalimantan</span>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#fleet"
              className="inline-flex items-center gap-3 rounded-xl bg-amber-400 px-6 py-3.5 text-sm font-black text-slate-950 shadow-[0_10px_35px_rgba(251,191,36,0.28)] transition hover:bg-amber-300"
            >
              <Truck className="h-5 w-5" />
              Lihat Armada
              <ArrowRight className="h-4 w-4" />
            </a>

            <button
              type="button"
              onClick={onOpenPdfModal}
              className="inline-flex items-center gap-3 rounded-xl border border-white/25 bg-slate-950/55 px-6 py-3.5 text-sm font-black text-white backdrop-blur-md transition hover:border-amber-400/50 hover:bg-slate-950/75"
            >
              <Download className="h-5 w-5" />
              Download Profile
            </button>
          </div>
        </div>

        {/* Bottom company metrics */}
        <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 divide-y divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-y-0">
            <FleetStat
              icon={CalendarDays}
              value={`${data.foundedYear}+`}
              label="Tahun Pengalaman"
              description="Berpengalaman di bidang transportasi & logistik"
            />
            <FleetStat
              icon={UsersRound}
              value={`${data.clients.length}+`}
              label="Mitra Korporasi"
              description="Telah dipercaya berbagai perusahaan terkemuka"
            />
            <FleetStat
              icon={ShieldCheck}
              value="K3"
              label="Keselamatan Utama"
              description="Standar keselamatan kerja dan armada terjamin"
            />
            <FleetStat
              icon={Weight}
              value="50 Ton"
              label="Kapasitas Armada"
              description="Mampu mengangkut beban hingga 50 Ton"
            />
          </div>
        </div>

        {/* Fleet capacity strip */}
        <div className="mt-3 overflow-x-auto rounded-2xl border border-white/15 bg-slate-950/85 shadow-2xl backdrop-blur-md">
          <div className="flex min-w-max divide-x divide-white/10">
            <FleetItem icon={Truck} name="Pickup" capacity="Max. 1 Ton" />
            <FleetItem icon={Truck} name="CDD Box" capacity="Max. 5 Ton" />
            <FleetItem icon={Truck} name="Long Bed" capacity="Max. 10 Ton" />
            <FleetItem icon={Truck} name="Lowboy" capacity="Max. 50 Ton" />
            <FleetItem icon={Truck} name="Trailer" capacity="Max. 50 Ton" />
            <FleetItem icon={Container} name="Heavy Duty" capacity="Project Cargo" />
          </div>
        </div>
      </div>
    </section>
  );
};


