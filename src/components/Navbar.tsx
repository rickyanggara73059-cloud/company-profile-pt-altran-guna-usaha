import React, { useState, useEffect } from "react";
import {
  Download,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { CompanyProfileData } from "../types";

interface NavbarProps {
  data: CompanyProfileData;
  onOpenPdfModal: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  data,
  onOpenPdfModal,
  activeSection,
  setActiveSection,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { id: "cover", label: "Sampul" },
    { id: "about", label: "Tentang Kami" },
    { id: "services", label: "Layanan" },
    { id: "fleet", label: "Armada" },
    { id: "clients", label: "Mitra & Klien" },
    { id: "legal", label: "Legalitas" },
    { id: "branches", label: "Cabang" },
    { id: "contact", label: "Kontak" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-slate-950/95 backdrop-blur-xl shadow-xl py-2 border-b border-amber-500/20"
            : "bg-slate-950/90 backdrop-blur-md py-3 border-b border-slate-800"
        }
      `}
    >
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between gap-4">

          {/* =========================
              LOGO
          ========================= */}
          <button
            onClick={() => scrollToSection("cover")}
            className="flex items-center gap-3 cursor-pointer group min-w-0 flex-shrink-0"
          >
            {data.logoUrl ? (
              <img
                src={data.logoUrl}
                alt={data.companyName}
                referrerPolicy="no-referrer"
                className="
                  w-10 h-10
                  object-contain
                  rounded-lg
                  bg-white
                  p-0.5
                  border border-amber-400/40
                  group-hover:scale-105
                  transition-transform
                "
              />
            ) : (
              <div
                className="
                  w-10 h-10
                  rounded-lg
                  bg-gradient-to-br
                  from-amber-400
                  to-amber-600
                  flex items-center justify-center
                  text-slate-950
                  font-black
                  shadow-md
                "
              >
                AGU
              </div>
            )}

            <div className="text-left min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="
                    font-extrabold
                    text-sm
                    xl:text-base
                    text-white
                    tracking-tight
                    group-hover:text-amber-400
                    transition-colors
                    whitespace-nowrap
                  "
                >
                  {data.companyName}
                </span>

              
              </div>

              <p className="hidden 2xl:block text-[10px] text-slate-400 font-medium whitespace-nowrap">
                {data.tagline}
              </p>
            </div>
          </button>

          {/* =========================
              DESKTOP NAVIGATION
          ========================= */}
          <nav
            className="
              hidden
              xl:flex
              items-center
              gap-0.5
              bg-slate-900/70
              p-1
              rounded-full
              border
              border-slate-800
              shadow-inner
            "
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`
                    px-2.5
                    2xl:px-3
                    py-1.5
                    rounded-full
                    text-[10px]
                    2xl:text-[11px]
                    font-semibold
                    whitespace-nowrap
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                        : "text-slate-300 hover:text-white hover:bg-slate-800"
                    }
                  `}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* =========================
              ACTIONS
          ========================= */}
          <div className="flex items-center gap-1.5 flex-shrink-0"> 

            {/* Download PDF */}
            <button
              onClick={onOpenPdfModal}
              className="
                inline-flex
                items-center
                gap-1.5
                px-3
                py-1.5
                rounded-lg
                text-[10px]
                2xl:text-[11px]
                font-bold
                text-slate-950
                bg-gradient-to-r
                from-amber-400
                to-amber-500
                hover:from-amber-300
                hover:to-amber-400
                shadow-md
                shadow-amber-500/20
                active:scale-95
                transition-all
                whitespace-nowrap
              "
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                Download PDF
              </span>
              <span className="sm:hidden">
                PDF
              </span>
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="
                xl:hidden
                p-2
                rounded-lg
                text-slate-300
                bg-slate-800
                hover:text-white
                hover:bg-slate-700
                border
                border-slate-700
                transition-colors
              "
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* =========================
            MOBILE / TABLET MENU
        ========================= */}
        {mobileMenuOpen && (
          <div
            className="
              xl:hidden
              mt-3
              pt-3
              border-t
              border-slate-800
              bg-slate-950/98
              rounded-2xl
              p-4
              shadow-2xl
            "
          >

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`
                      px-3
                      py-2.5
                      rounded-xl
                      text-xs
                      text-left
                      font-semibold
                      transition-all
                      ${
                        isActive
                          ? "bg-amber-500 text-slate-950 font-bold"
                          : "text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white"
                      }
                    `}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            {/* Mobile Contact */}
            <div
              className="
                mt-3
                pt-3
                border-t
                border-slate-800
                flex
                flex-col
                sm:flex-row
                sm:items-center
                sm:justify-between
                gap-3
                text-xs
              "
            >
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{data.phone}</span>
              </div>

              <a
                href={`https://wa.me/${data.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  text-amber-400
                  font-semibold
                  hover:text-amber-300
                  transition-colors
                "
              >
                Chat WhatsApp →
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};