import { CompanyProfileData } from '../types';

export const initialCompanyProfileData: CompanyProfileData = {
  companyName: "PT. ALTRAN GUNA USAHA",
  tagline: "Transportation & Logistics Solutions",
  foundedYear: "2017",
  incYear: "2022",
  phone: "+62 811-2222-6808",
  whatsappNumber: "6281122226808",
  whatsappNumber2: "6281340000879",
  email: "altran.gunausaha@gmail.com",
  website: "www.altran.id",
  headOfficeAddress: "Jl. Raya Jember - Banyuwangi, Kec. Kabat, Kabupaten Banyuwangi, Jawa Timur 68461",

  heroImageUrl: "/images/hero-trailer.jpeg",
  logoUrl: "/images/altran-logo.png",

  aboutHistory: "PT. ALTRAN GUNA USAHA memulai kiprah operasionalnya di industri jasa transportasi darat dan logistik sejak tahun 2017. Seiring dengan peningkatan kepercayaan pelanggan dan pertumbuhan kebutuhan angkutan industri nasional, perusahaan secara resmi berbadan hukum sebagai PT. ALTRAN GUNA USAHA pada tahun 2022.",
  
  aboutFocus: "Kami berfokus pada penyediaan ekosistem logistik terpadu meliputi armada angkutan darat berbagai muatan, distribusi barang lintas pulau, penanganan project cargo, hingga pengelolaan sewa armada untuk sektor manufaktur, perkebunan, pertambangan, dan perdagangan umum.",

  vision: "Menjadi perusahaan penyedia jasa transportasi dan logistik terdepan, terpercaya, dan berdaya saing tinggi di Indonesia melalui keunggulan operasional, keandalan armada, dan kepuasan pelanggan secara berkelanjutan.",

  mission: [
    "Menyediakan layanan kargo dan transportasi darat yang aman, terawat, serta tepat waktu.",
    "Mengembangkan jaringan operasional lintas wilayah yang efektif dan efisien.",
    "Memberikan solusi logistik kustom sesuai skala bisnis dan kebutuhan spesifik mitra usaha.",
    "Menjalung kemitraan jangka panjang berlandaskan integritas, transparansi, dan asas saling menguntungkan.",
    "Mengedepankan keselamatan kerja (K3) dan profesionalisme tinggi di setiap lini pengiriman."
  ],

  services: [
    {
      id: "srv-1",
      title: "Transportasi Darat",
      iconName: "Truck",
      description: "Jasa angkutan darat antar kota dan antar pulau berbasis armada darat pilihan, mulai dari kapasitas sedang hingga muatan berat (Heavy Haulage).",
      highlights: ["Antar Kota & Antar Pulau", "Layanan FTL (Full Truckload)", "Perjalanan Terjadwal", "Asuransi Muatan"]
    },
    {
      id: "srv-2",
      title: "Pengiriman Barang",
      iconName: "PackageCheck",
      description: "Pengiriman kargo kilat dan barang muatan umum dengan penanganan profesional dari proses pemuatan (loading) hingga titik tujuan akhir (unloading).",
      highlights: ["Pengiriman Muatan Besar", "Penanganan Kargo Khusus", "Konfirmasi Tiba Tepat Waktu", "Dokumentasi Lengkap"]
    },
    {
      id: "srv-3",
      title: "Pindahan Rumah & Kantor",
      iconName: "Home",
      description: "Layanan penanganan komprehensif untuk relokasi aset rumah tangga, peralatan kantor, pabrik, maupun fasilitas bisnis dengan tim pengemas terlatih.",
      highlights: ["Jasa Packing & Unpacking", "Keamanan Aset Terjamin", "Peralatan Bongkar Muat", "Layanan Door-to-Door"]
    },
    {
      id: "srv-4",
      title: "Project Cargo",
      iconName: "HardHat",
      description: "Spesialis pengangkutan muatan proyek bernilai tinggi, alat berat, konstruksi, dan peralatan industri berdimensi besar dengan pengawalan khusus.",
      highlights: ["Rute & Survey Lokasi", "Pengawalan Jalur Khusus", "Kapasitas Ekstra Panjang", "Sertifikasi Safety K3"]
    },
    {
      id: "srv-5",
      title: "Sewa Armada",
      iconName: "KeyRound",
      description: "Layanan rental unit truk dan kendaraan komersial siap pakai, baik sistem sewa harian, mingguan, bulanan, maupun kontrak tahunan perusahaan.",
      highlights: ["Kontrak Fleksibel", "Maintenance Rutin Gratis", "Sopir Berpengalaman", "Unit Pengganti Siap"]
    },
    {
      id: "srv-6",
      title: "Distribusi / Logistik",
      iconName: "Building2",
      description: "Manajemen jaringan rantai pasok (supply chain), pergudangan transit, serta distribusi rantai pasok barang manufaktur dan komoditas.",
      highlights: ["Layanan Last-Mile Delivery", "Transit Warehouse", "Sistem Monitoring Rute", "Laporan Rekap berkala"]
    }
  ],

  fleets: [
    {
      id: "fleet-1",
      name: "Pickup",
      category: "Light Freight",
      capacity: "Max. 1 Ton",
      description: "Armada pickup yang praktis untuk pengiriman barang ringan, distribusi dalam kota, kebutuhan operasional, dan mobilitas logistik cepat.",
      imageUrl: "/images/fleet/additional/pickup-01.jpeg",
      gallery: ["/images/fleet/additional/pickup-02.jpeg",
                "/images/fleet/additional/pick-up-03.jpeg",
      ],
      features: ["Lincah Untuk Dalam Kota", "Efisien Untuk Muatan Ringan", "Mudah Menjangkau Area Sempit", "Cocok Untuk Distribusi Cepat"]
    },
    {
      id: "fleet-2",
      name: "CDD Open Deck",
      category: "Medium Duty",
      capacity: "Max. 5 Ton",
      description: "Armada CDD dengan bak terbuka untuk pengangkutan barang, material, dan muatan yang membutuhkan proses loading serta unloading yang fleksibel.",
      imageUrl: "/images/fleet/additional/cdd-open-deck-01.jpeg",
      gallery: [
  "/images/fleet/additional/cdd-open-deck-02.jpeg",
  "/images/fleet/additional/cdd-open-deck-03.jpeg",
  "/images/fleet/additional/cdd-open-deck-04.jpeg"
],
      features: ["Bak Terbuka", "Kapasitas Hingga 5 Ton", "Loading Fleksibel", "Cocok Untuk Distribusi Antar Kota"]
    },
    {
      id: "fleet-3",
      name: "CDD Box",
      category: "Medium Duty",
      capacity: "Max. 5 Ton",
      description: "Armada CDD box untuk pengiriman barang yang membutuhkan perlindungan dari cuaca dan lingkungan selama perjalanan.",
      imageUrl: "/images/fleet/additional/cdd-box-01.jpeg",
      gallery: ["/images/fleet/additional/cdd-box-02.jpeg",],
      features: ["Box Tertutup", "Kapasitas Hingga 5 Ton", "Perlindungan Dari Cuaca", "Cocok Untuk Cargo Umum"]
    },
    {
      id: "fleet-4",
      name: "Long Bed",
      category: "Heavy Duty",
      capacity: "Max. 10 Ton",
      description: "Armada long bed dengan area muatan panjang untuk pengangkutan material, equipment, dan barang berdimensi panjang.",
      imageUrl: "/images/fleet/additional/long-bed-01.jpeg",
      gallery: [
        "/images/fleet/additional/long-bet-02.jpeg",
        "/images/fleet/additional/long-bet-03.jpeg",
        "/images/fleet/additional/long-bet-04.jpeg",
        "/images/fleet/additional/long-bet-05.jpeg",
        "/images/fleet/additional/long-bet-06.jpeg",
        "/images/fleet/additional/long-bet-07.jpeg",
        "/images/fleet/additional/long-bet-08.jpeg",
        "/images/fleet/additional/long-bet-09.jpeg",
        "/images/fleet/additional/long-bet-10.jpeg",
        "/images/fleet/additional/long-bet-11.jpeg",
        "/images/fleet/additional/long-bet-12.jpeg",
        "/images/fleet/additional/long-bet-13.jpeg",
        "/images/fleet/additional/long-bet-14.jpeg",
        "/images/fleet/additional/long-bet-15.jpeg",
        "/images/fleet/additional/long-bet-16.jpeg",
        "/images/fleet/additional/long-bet-17.jpeg",
        "/images/fleet/additional/long-bet-18.jpeg"
      ],
      features: ["Dek Muatan Panjang", "Kapasitas Hingga 10 Ton", "Cocok Untuk Muatan Berdimensi Panjang", "Fleksibel Untuk Kargo Proyek"]
    },
    {
      id: "fleet-5",
      name: "Trailer",
      category: "Project & Heavy Haulage",
      capacity: "Max. 50 Ton",
      description: "Armada trailer untuk pengangkutan material, equipment, dan cargo berat dalam kebutuhan logistik proyek serta heavy haulage.",
      imageUrl: "/images/fleet/additional/trailer-50ton-01.jpeg",
      gallery: ["/images/fleet/additional/trailer-02.jpeg", "/images/fleet/additional/trailer-03.jpeg"],
      features: ["Kapasitas Hingga 50 Ton", "Heavy Cargo", "Cocok Untuk Project Cargo", "Area Muatan Besar"]
    },
    {
      id: "fleet-6",
      name: "Lowboy",
      category: "Project & Heavy Haulage",
      capacity: "40 - 80 Ton",
      description: "Armada lowboy untuk pengangkutan alat berat seperti excavator, dump truck, dan equipment konstruksi dengan kebutuhan tonase tinggi.",
      imageUrl: "/images/fleet/additional/lowboy-01.jpeg",
      gallery: ["/images/fleet/additional/lowboy-02.jpeg", "/images/fleet/additional/lowboy-03.jpeg", "/images/fleet/additional/lowboy-04.jpeg", "/images/fleet/additional/lowboy-05.jpeg"],
      features: ["Kapasitas 40 - 80 Ton", "Pengangkutan Alat Berat", "Deck Rendah", "Cocok Untuk Heavy Haulage"]
    }
  ],
  clients: [
    { id: "cl-1", name: "PT Semen Indonesia (Persero) Tbk", industry: "Manufaktur Semen & Material", location: "Gresik / Jawa Timur" },
    { id: "cl-2", name: "PT Astra International Tbk", industry: "Otomotif & Alat Berat", location: "Jakarta / Nasional" },
    { id: "cl-3", name: "PT Wilmar Nabati Indonesia", industry: "Minyak Kelapa Sawit & Agribisnis", location: "Gresik & Balikpapan" },
    { id: "cl-4", name: "PT Pertamina Patra Niaga", industry: "Energi & Distribusi BBM", location: "Nasional" },
    { id: "cl-5", name: "PT Unilever Indonesia Tbk", industry: "Consumer Goods (FMCG)", location: "Jawa Barat & Jawa Timur" },
    { id: "cl-6", name: "PT Indofood Sukses Makmur Tbk", industry: "Industri Makanan & Minuman", location: "Nasional" },
    { id: "cl-7", name: "PT Kalbe Farma Tbk", industry: "Farmasi & Kesehatan", location: "Jawa & Sumatera" },
    { id: "cl-8", name: "PT JNE Express", industry: "Ekspedisi & Kurir Logistik", location: "Nasional" },
    { id: "cl-9", name: "PT Barito Pacific Tbk", industry: "Petrokimia & Energi", location: "Jawa & Kalimantan" },
    { id: "cl-10", name: "PT Vale Indonesia Tbk", industry: "Pertambangan & Logistik Industri", location: "Sulawesi & Kalimantan" },
    { id: "cl-11", name: "PT Pupuk Kalimantan Timur", industry: "Pupuk & Bahan Kimia", location: "Bontang & Balikpapan" },
    { id: "cl-12", name: "PT Freeport Indonesia", industry: "Pertambangan & Alat Berat", location: "Papua & Jawa Timur" }
  ],

  advantages: [
    {
      id: "adv-1",
      title: "Pengalaman & Rekam Jejak Sejak 2017",
      description: "Lebih dari 8 tahun berkiprah melayani berbagai sektor industri dengan reputasi ketepatan waktu dan tingkat kepuasan mitra yang tinggi.",
      iconName: "ClockCheck"
    },
    {
      id: "adv-2",
      title: "Kondisi Armada Prima & Terawat",
      description: "Pemeriksaan dan perawatan rutin berkala menjamin seluruh armada selalu dalam kondisi layak jalan dan siap tempur untuk jarak jauh.",
      iconName: "ShieldCheck"
    },
    {
      id: "adv-3",
      title: "Jaringan Cabang Strategis Jawa-Kalimantan",
      description: "Hadir langsung dengan kantor dan pool di Banyuwangi, Balikpapan, dan Depok untuk merespons kebutuhan muatan antarpulau secara cepat.",
      iconName: "MapPin"
    },
    {
      id: "adv-4",
      title: "Driver & Crew Berpengalaman",
      description: "Seluruh pengemudi dibekali SIM sesuai kelasnya, pengalaman rute nasional, dan penerapan standar keselamatan K3 transportasi.",
      iconName: "UserCheck"
    },
    {
      id: "adv-5",
      title: "Monitoring & Transparansi Pengiriman",
      description: "Proses koordinasi logistik yang transparan, pemantauan posisi armada secara berkala, dan laporan status penerimaan barang tepat waktu.",
      iconName: "BarChart3"
    },
    {
      id: "adv-6",
      title: "Tarif Kompetitif & Kontrak Fleksibel",
      description: "Penawaran harga transparan tanpa biaya tersembunyi dengan opsi kerjasama jangka pendek maupun kontrak operasional jangka panjang.",
      iconName: "Coins"
    }
  ],

  legalDocuments: [
    {
      id: "leg-1",
      title: "Nomor Induk Berusaha (NIB)",
      number: "1248000312984",
      status: "Resmi & Terverifikasi BKPM",
      issuer: "Kementerian Investasi / BKPM RI",
      note: "Izin Operasional Angkutan Darat & Logistik Terpadu"
    },
    {
      id: "leg-2",
      title: "Akta Pendirian Perseroan Terbatas",
      number: "AHU-0019283.AH.01.01.TAHUN 2022",
      status: "Berbadan Hukum PT Resmi (2022)",
      issuer: "Kementerian Hukum dan HAM Republik Indonesia",
      note: "Pengesahan Badan Hukum PT. ALTRAN GUNA USAHA"
    },
    {
      id: "leg-3",
      title: "Nomor Pokok Wajib Pajak (NPWP)",
      number: "42.891.204.3-625.000",
      status: "Wajib Pajak Aktif & Taat Pajak",
      issuer: "Direktorat Jenderal Pajak Kemenkeu RI",
      note: "PT. ALTRAN GUNA USAHA - Terdaftar Resmi"
    },
    {
      id: "leg-4",
      title: "Izin Usaha Jasa Pengurusan Transportasi (IUJPT)",
      number: "503/IUJPT/ALTRAN/2022",
      status: "Lengkap & Aktif",
      issuer: "Dinas Perhubungan & PTSP",
      note: "Lisensi Resmi Operasional Kargo & Logistik"
    }
  ],

  branches: [
    {
      id: "br-1",
      city: "Banyuwangi (Jawa Timur)",
      role: "Kantor Pusat & Pool Utama Jawa Timur",
      address: "Jl. Raya Jember - Banyuwangi, Kec. Kabat, Kabupaten Banyuwangi, Jawa Timur 68461",
      phone: "+62 811-2222-6808",
      coverageArea: "Jawa Timur, Bali, Nusa Tenggara Barat, & Jalur Penyeberangan",
      badge: "HEAD OFFICE"
    },
    {
      id: "br-2",
      city: "Balikpapan (Kalimantan Timur)",
      role: "Kantor Cabang Utama & Hub Logistik IKN",
      address: "Jl. Soekarno-Hatta Km 5, Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76126",
      phone: "+62 811-2222-6808",
      coverageArea: "Kalimantan Timur, Kawasan IKN Nusantara, Kalimantan Selatan & Tengah",
      badge: "BRANCH OFFICE"
    },
    {
      id: "br-3",
      city: "Depok (Jawa Barat)",
      role: "Kantor Cabang Wilayah Jabodetabek & Barat",
      address: "Jl. Raya Bogor Km 31, Cimanggis, Kota Depok, Jawa Barat 16451",
      phone: "+62 811-2222-6808",
      coverageArea: "Jabodetabek, Jawa Barat, Banten, & Jalur Lintas Sumatera",
      badge: "BRANCH OFFICE"
    }
  ]
};
















