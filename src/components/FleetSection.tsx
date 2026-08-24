import React, { useEffect, useMemo, useState } from 'react';
import { CompanyProfileData, FleetItem } from '../types';
import {
  Truck,
  ShieldCheck,
  Gauge,
  ImagePlus,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from 'lucide-react';

interface FleetSectionProps {
  data: CompanyProfileData;
  onUpdateFleetImage?: (fleetId: string, newUrl: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({
  data,
  onUpdateFleetImage,
}) => {
  const [selectedFleet, setSelectedFleet] = useState<FleetItem | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const selectedImages = useMemo(() => {
    if (!selectedFleet) return [];

    return Array.from(
      new Set(
        [selectedFleet.imageUrl, ...selectedFleet.gallery].filter(Boolean)
      )
    );
  }, [selectedFleet]);

  const openGallery = (fleet: FleetItem) => {
    setSelectedFleet(fleet);
    setActiveImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedFleet(null);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    if (selectedImages.length <= 1) return;

    setActiveImageIndex((current) =>
      current === 0 ? selectedImages.length - 1 : current - 1
    );
  };

  const showNextImage = () => {
    if (selectedImages.length <= 1) return;

    setActiveImageIndex((current) =>
      current === selectedImages.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (!selectedFleet) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeGallery();
      }

      if (event.key === 'ArrowLeft') {
        showPreviousImage();
      }

      if (event.key === 'ArrowRight') {
        showNextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedFleet, selectedImages.length]);

  return (
    <>
      <section
        id="fleet"
        className="py-20 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-amber-500/5 blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Truck className="w-3.5 h-3.5" />
              Armada Perusahaan
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Kesiapan Armada PT. ALTRAN GUNA USAHA
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Armada transportasi dan pendukung operasional yang disiapkan
              untuk kebutuhan pengangkutan barang, alat berat, dan project cargo.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
            {data.fleets.map((fleet) => {
              const imageCount =
                1 + fleet.gallery.filter(Boolean).length;

              return (
                <article
                  key={fleet.id}
                  className="group rounded-3xl overflow-hidden bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-all duration-300 shadow-xl hover:shadow-amber-950/20"
                >
                  {/* Image */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                    <img
                      src={fleet.imageUrl}
                      alt={fleet.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                    {/* Category */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex px-3 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-amber-500/30 text-amber-400 text-[11px] font-bold uppercase tracking-wider">
                        {fleet.category}
                      </span>
                    </div>

                    {/* Photo Count */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/90 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
                        <Images className="w-3.5 h-3.5 text-amber-400" />
                        {imageCount} Foto
                      </span>
                    </div>

                    {/* Fleet Name */}
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-400 transition-colors">
                        {fleet.name}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-6">

                    <p className="text-slate-300 text-sm leading-relaxed">
                      {fleet.description}
                    </p>

                    {/* Capacity */}
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                      <span className="text-[10px] uppercase font-bold text-slate-400 flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-amber-400" />
                        Kapasitas Muatan
                      </span>

                      <p className="mt-1 font-extrabold text-amber-400 text-base">
                        {fleet.capacity || 'Informasi berdasarkan kebutuhan proyek'}
                      </p>
                    </div>

                    {/* Features */}
                    {fleet.features.length > 0 && (
                      <div className="pt-4 border-t border-slate-800/80 space-y-3">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                          Karakteristik & Fitur Armada
                        </span>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300">
                          {fleet.features.map((feature, index) => (
                            <div
                              key={`${fleet.id}-feature-${index}`}
                              className="flex items-start gap-2"
                            >
                              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={() => openGallery(fleet)}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-amber-500/10"
                      >
                        <Images className="w-4 h-4" />
                        Lihat Galeri
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Gallery Modal */}
      {selectedFleet && selectedImages.length > 0 && (
        <div
          className="fixed inset-0 z-[2000] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeGallery();
            }
          }}
        >
          <div className="w-full max-w-6xl max-h-[95vh] bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">

            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-slate-800">
              <div className="min-w-0">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest">
                  {selectedFleet.category}
                </span>

                <h3 className="text-lg sm:text-xl font-black text-white truncate">
                  {selectedFleet.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={closeGallery}
                className="flex-shrink-0 p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                aria-label="Tutup galeri"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image */}
            <div className="relative bg-black flex-1 min-h-0">
              <img
                src={selectedImages[activeImageIndex]}
                alt={`${selectedFleet.name} - Foto ${activeImageIndex + 1}`}
                referrerPolicy="no-referrer"
                className="w-full h-[45vh] sm:h-[55vh] object-contain"
              />

              {selectedImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-amber-500 hover:text-slate-950 border border-white/10 flex items-center justify-center text-white transition-all"
                    aria-label="Foto sebelumnya"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    type="button"
                    onClick={showNextImage}
                    className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/70 hover:bg-amber-500 hover:text-slate-950 border border-white/10 flex items-center justify-center text-white transition-all"
                    aria-label="Foto berikutnya"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-black/70 text-white text-xs font-semibold">
                {activeImageIndex + 1} / {selectedImages.length}
              </div>
            </div>

            {/* Thumbnails */}
            {selectedImages.length > 1 && (
              <div className="p-4 border-t border-slate-800 bg-slate-950">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {selectedImages.map((image, index) => (
                    <button
                      key={`${image}-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={`flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                        index === activeImageIndex
                          ? 'border-amber-400'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
};


