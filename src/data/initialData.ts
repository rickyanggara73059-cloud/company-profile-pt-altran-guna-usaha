import { CompanyProfileData } from '../types';

export const initialCompanyProfileData: CompanyProfileData = {
  companyName: "PT. ALTRAN GUNA USAHA",
  tagline: "Transportation & Logistics Solutions",
  foundedYear: "2017",
  incYear: "2022",
  phone: "+62 811-2222-6808",
  whatsappNumber: "6281122226808",
  email: "altran.gunausaha@gmail.com",
  website: "www.altrangunausaha.co.id",
  headOfficeAddress: "Jl. Raya Jember - Banyuwangi, Kec. Kabat, Kabupaten Banyuwangi, Jawa Timur 68461",

  heroImageUrl: "/src/assets/images/altran_fleet_hero_1786547030649.jpg",
  logoUrl: "/src/assets/images/altran_logo_1786547051420.jpg",

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
      name: "Pickup Box & Open Deck",
      category: "Light Freight",
      capacity: "S.d. 1.5 Ton",
      dimensions: "Panjang 2.3m - 2.5m | Lebar 1.6m | Tinggi 1.5m",
      description: "Armada lincah untuk pengiriman cepat intra-kota, pindahan skala sedang, dan kargo ritel dengan efisiensi tinggi.",
      imageUrl: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=800&q=80",
      features: ["Lincah Rute Dalam Kota", "Pilihan Box Tutup / Bak Terbuka", "Loading Cepat", "Sangat Ekonomis"]
    },
    {
      id: "fleet-2",
      name: "Colt Diesel (CDE & CDD)",
      category: "Medium Duty",
      capacity: "4.0 Ton - 8.0 Ton",
      dimensions: "Panjang 4.3m - 6.2m | Lebar 2.0m | Tinggi 2.1m",
      description: "Truk pekerja keras ideal untuk distribusi barang pabrikan, komoditas pertanian, bahan bangunan, dan kargo antar wilayah.",
      imageUrl: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=80",
      features: ["Tersedia Box & Bak Terbuka", "Daya Angkut Sedang-Tinggi", "Cocok Jalan Antar Kota", "Terpercaya Sejak Lama"]
    },
    {
      id: "fleet-3",
      name: "Fuso Tronton / Heavy Freight",
      category: "Heavy Duty",
      capacity: "12.0 Ton - 20.0 Ton",
      dimensions: "Panjang 7.5m - 9.6m | Lebar 2.4m | Tinggi 2.5m",
      description: "Armada tonase besar dirancang khusus untuk memenuhi volume tinggi bahan baku industri, hasil tambang, dan muatan kontainer.",
      imageUrl: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
      features: ["Volume Kargo Ekstra Luas", "Chassis Kokoh & Tangguh", "Jangkauan Jalur Antar Pulau", "Sistem Pengikat Cargo Standar"]
    },
    {
      id: "fleet-4",
      name: "Long Bed & Flatbed Heavy Truck",
      category: "Project & Heavy Haulage",
      capacity: "S.d. 25.0 Ton",
      dimensions: "Panjang Dek 9.5m - 12.0m | Lebar 2.5m",
      description: "Solusi utama pengangkutan struktur baja panjang, pipa industri, tiang pancang, mesin berat, dan kargo proyek berdimensi khusus.",
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      features: ["Dek Rata Ekstra Panjang", "Kapasitas Beban Berat", "Penanganan Project Cargo", "Pengawalan Safety"]
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
