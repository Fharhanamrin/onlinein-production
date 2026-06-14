import type { Resources } from './en'

// Bahasa Indonesia — harus mengikuti bentuk `Resources` (typecheck menjamin paritas key).
const id: Resources = {
  meta: {
    title: 'Tampilo — Tampil Online',
    description:
      'Tampilo — jasa landing page & toko online terjangkau untuk UMKM kecil. Tampil online profesional dan mulai jualan, dari ratusan ribu saja.',
  },

  common: {
    consultFree: 'Konsultasi Gratis',
    consultFreeWa: 'Konsultasi Gratis via WhatsApp',
    seePricing: 'Lihat Paket Harga',
    orderWhatsapp: 'Pesan via WhatsApp',
    askWhatsapp: 'Tanya via WhatsApp',
    visitWebsite: 'Kunjungi Website',
  },

  lang: {
    switch: 'Ganti bahasa',
    en: 'EN',
    id: 'ID',
  },

  nav: {
    primary: 'Navigasi utama',
    openMenu: 'Buka menu',
    closeMenu: 'Tutup menu',
    links: {
      services: 'Layanan',
      dashboard: 'Dashboard',
      pricing: 'Harga',
      how: 'Cara Kerja',
      portfolio: 'Portofolio',
      work: 'Karya',
      faq: 'FAQ',
    },
  },

  hero: {
    badge: 'Solusi digital untuk UMKM Indonesia',
    title: { before: 'Tampilo', highlight: 'tampil', after: 'online' },
    subtitle:
      'Bikin <strong>landing page profesional</strong> & <strong>toko online</strong> buat usahamu — rapi, terjangkau, dan tanpa istilah teknis yang bikin pusing.',
    stats: [
      { value: '7–14', unit: 'hari', label: 'Proses cepat' },
      { value: '350rb', unit: 'mulai', label: 'Harga jujur' },
      { value: '100%', unit: '', label: 'Mobile-friendly' },
    ],
    ratingChip: 'UMKM puas',
    socialNote: 'Aktif berbagi tiap hari di Instagram & TikTok — @{{handle}}',
  },

  problem: {
    eyebrow: 'Masalah yang sering dialami',
    title: 'Usahamu rame, tapi terasa stuck?',
    subtitle:
      'Chat numpuk. Order kelewat. Buyer ragu. Tiga masalah ini yang bikin banyak UMKM susah naik kelas.',
    items: [
      {
        title: 'Susah dipercaya buyer',
        desc: 'Cuma jualan lewat IG biasa — tanpa website, calon pembeli ragu. Pesaing yang punya landing page langsung kelihatan lebih meyakinkan.',
      },
      {
        title: 'Orderan berantakan di chat',
        desc: 'Order masuk lewat WA, DM, komentar — campur aduk. Sering kelewat, susah dilacak, buyer pun bingung cara pesannya.',
      },
      {
        title: 'Belum bisa jualan rapi',
        desc: 'Katalog cuma foto di story, harga harus nanya dulu. Nggak ada keranjang, nggak ada checkout — buyer yang males nanya kabur.',
      },
    ],
    bridgeTop: 'Kabar baiknya, ketiga masalah ini ada solusinya —',
    bridgeBottom: 'dan Tampilo hadir untuk menjawabnya.',
  },

  services: {
    eyebrow: 'Dua lini layanan',
    title: 'Satu solusi, dua kebutuhan usahamu',
    subtitle:
      'Mulai dari tampil profesional, lalu naik ke jualan online — atau langsung keduanya sekaligus.',
    items: [
      {
        tag: 'Tampil Profesional',
        title: 'Landing Page',
        desc: 'Halaman web tunggal yang fokus meyakinkan calon pembeli dan mengarahkan mereka ke satu aksi — order, hubungi, atau daftar.',
        features: [
          'Desain modern & mobile-friendly',
          'Tombol WhatsApp langsung terhubung',
          'Selesai dalam 7–14 hari kerja',
          'Revisi sampai puas',
        ],
        cta: 'Lihat Paket Landing Page',
      },
      {
        tag: 'Jualan Online',
        title: 'Toko Online',
        desc: 'Solusi jualan online sederhana — katalog produk rapi, keranjang belanja, dan checkout yang gampang. Cocok banget untuk UMKM kecil.',
        features: [
          'Katalog produk dengan foto & harga',
          'Keranjang & proses checkout',
          'Panel kelola produk sendiri',
          'Checkout via WA / transfer / COD',
        ],
        cta: 'Lihat Paket Toko Online',
      },
    ],
  },

  dashboard: {
    eyebrow: 'Content Dashboard',
    title: 'Studio konten kamu, langsung di browser',
    subtitle:
      'Kenalan sama Tampilo Content Dashboard — edit postingan sosmed lewat form sederhana, lihat preview-nya update langsung, lalu export gambar & video siap posting. Tanpa aplikasi desain, tanpa terminal.',
    badge: 'Demo langsung',
    videoAria: 'Video demo Tampilo Content Dashboard',
    features: [
      'Edit judul & copy lewat form sederhana',
      'Live preview update sambil kamu ngetik',
      'Ganti layout Instagram & TikTok',
      'Export PNG + MP4 siap upload',
      'Semua dari browser — tanpa instal apa pun',
    ],
  },

  pricing: {
    eyebrow: 'Harga jujur & transparan',
    title: 'Mulai dari ratusan ribu saja',
    subtitle:
      'Nggak harus mahal buat tampil profesional. Pilih paket yang pas sama kebutuhan usahamu.',
    tabLanding: 'Landing Page',
    tabStore: 'Toko Online',
    popular: 'Paling Populer',
    landing: [
      {
        name: 'Basic',
        price: 'Rp 350rb – 500rb',
        desc: 'Mulai hadir online dengan cepat.',
        features: [
          '1 halaman (1–3 section)',
          'Desain mobile-friendly',
          'Tombol WhatsApp',
          'Revisi 1x',
        ],
      },
      {
        name: 'Standard',
        price: 'Rp 800rb – 1,5jt',
        desc: 'Paling cocok untuk UMKM yang mau tampil profesional.',
        features: [
          '5–7 section lengkap',
          'Copywriting ringan',
          'Form / halaman order',
          'Integrasi sosial media',
          'Revisi 2x',
        ],
      },
      {
        name: 'Premium',
        price: 'Rp 2jt – 3,5jt',
        desc: 'Solusi lengkap dengan domain & hosting.',
        features: [
          'Desain custom penuh',
          'Copywriting profesional',
          'Domain .com + hosting 1 tahun',
          'Animasi & interaksi',
          'SEO dasar',
          'Revisi unlimited',
        ],
      },
    ],
    store: [
      {
        name: 'Toko Basic',
        price: 'Rp 1jt – 2jt',
        desc: 'Tampilkan produkmu secara rapi online.',
        features: [
          'Katalog produk dengan foto & harga',
          'Tampilan mobile-friendly',
          'Checkout via WhatsApp',
          'Revisi 1x',
        ],
      },
      {
        name: 'Toko Standard',
        price: 'Rp 2,5jt – 4,5jt',
        desc: 'Toko online lengkap dengan keranjang & panel kelola.',
        features: [
          'Katalog + keranjang belanja',
          'Panel kelola produk sendiri',
          'Ongkos kirim sederhana',
          'Checkout transfer / COD',
          'Revisi 2x',
        ],
      },
      {
        name: 'Toko Premium',
        price: 'Rp 5jt ke atas',
        desc: 'Toko online penuh fitur dengan payment gateway.',
        features: [
          'Semua fitur Standard',
          'Payment gateway (QRIS / transfer otomatis)',
          'Domain + hosting',
          'Laporan penjualan dasar',
          'Revisi unlimited',
        ],
      },
    ],
    addOnsTitle: 'Add-On — Layanan Tambahan',
    addOns: [
      { label: 'Copywriting per halaman', price: 'Rp 150.000' },
      { label: 'Setup domain + hosting / tahun', price: 'Rp 300.000' },
      { label: 'Maintenance bulanan', price: 'Rp 100rb–300rb/bln' },
      { label: 'Tambah / update produk toko', price: 'Rp 50.000/batch' },
      { label: 'Desain logo', price: 'Rp 250.000' },
    ],
    note: '* Harga dapat berubah sewaktu-waktu. Konsultasi gratis dulu untuk penawaran terbaik.',
  },

  why: {
    eyebrow: 'Kenapa Tampilo?',
    title: 'Dibuat khusus untuk UMKM kecil',
    subtitle:
      'Kami ngerti kondisi UMKM — makanya semua layanan dirancang biar gampang, terjangkau, dan hasilnya bisa langsung dipakai.',
    items: [
      {
        title: 'Cepat Jadi',
        desc: 'Selesai dalam 7–14 hari kerja. Nggak perlu nunggu berbulan-bulan — usahamu bisa online lebih cepat.',
      },
      {
        title: 'Harga Bersahabat',
        desc: 'Mulai dari Rp 350.000. Cocok untuk UMKM dengan budget terbatas yang mau hasil profesional.',
      },
      {
        title: 'Hasil Profesional',
        desc: 'Desain modern, mobile-friendly, dan kelihatan mahal — tanpa harus bayar mahal.',
      },
      {
        title: 'Bebas Istilah Teknis',
        desc: 'Kami ngomong pakai bahasa yang gampang dipahami. Nggak ada jargon teknis yang bikin pusing.',
      },
    ],
  },

  how: {
    eyebrow: 'Cara kerja',
    title: 'Gampang banget, cuma 4 langkah',
    subtitle:
      'Prosesnya simpel & transparan — kamu selalu tahu apa yang sedang dikerjakan. Beres dalam 7–14 hari.',
    steps: [
      {
        step: '01',
        title: 'DM / Hubungi Kami',
        desc: 'Hubungi Tampilo via WhatsApp atau DM Instagram @{{handle}}. Ceritakan kebutuhan usahamu.',
      },
      {
        step: '02',
        title: 'Konsultasi Gratis',
        desc: 'Kami diskusi bareng — paket apa yang cocok, konten apa yang perlu disiapkan, dan estimasi biaya & waktu.',
      },
      {
        step: '03',
        title: 'Proses Pengerjaan',
        desc: 'Tim kami mulai mengerjakan. Kamu bisa pantau progres dan kasih masukan. Revisi termasuk dalam paket.',
      },
      {
        step: '04',
        title: 'Launch & Online!',
        desc: 'Website siap, kamu terima hasilnya, dan usahamu resmi online. Kami bantu sampai kamu puas.',
      },
    ],
  },

  testimonials: {
    eyebrow: 'Testimoni klien',
    title: 'UMKM yang sudah naik kelas',
    subtitle:
      'Satu testimoni jujur lebih kuat dari 100 posting promo. Ini cerita dari usaha kecil yang kini tampil profesional & bisa jualan online.',
    ratingLabel: 'Rating {{count}} dari 5',
    items: [
      {
        name: 'Ibu Sari',
        business: 'Kue & Snack Homemade',
        location: 'Surabaya',
        text: 'Sebelumnya orderan sering kelewat di WA. Sekarang punya landing page sendiri, calon pembeli bisa langsung lihat menu dan pesan. Hasilnya rapi banget dan cepat jadi!',
      },
      {
        name: 'Mas Rizal',
        business: 'Konveksi Kaos Custom',
        location: 'Bandung',
        text: 'Tim Tampilo sabar banget ngelayanin saya yang buta teknologi. Harganya masuk akal, dan hasilnya kelihatan profesional. Udah dapat 3 klien baru minggu pertama website live!',
      },
      {
        name: 'Kak Dewi',
        business: 'MUA Freelance',
        location: 'Jakarta',
        text: 'Portfolio dan booking saya sekarang rapih di satu halaman. Klien tinggal klik, lihat hasil kerja, terus langsung WA. Jumlah inquiry naik drastis setelah pakai Tampilo!',
      },
    ],
    stats: [
      { value: '50+', label: 'Proyek Selesai' },
      { value: '100%', label: 'Klien Puas' },
      { value: '7–14 hari', label: 'Rata-rata Pengerjaan' },
    ],
  },

  portfolio: {
    eyebrow: 'Portofolio',
    title: 'Produk yang sudah kami buat',
    subtitle:
      'Beberapa landing page & toko online yang sudah kami kerjakan untuk UMKM. Klik untuk lihat hasilnya langsung.',
    catLanding: 'Landing Page',
    catStore: 'Toko Online',
    items: [
      { name: 'Kopi Senja', category: 'landing', desc: 'Landing page kedai kopi dengan menu & tombol order WhatsApp.' },
      { name: 'Dapur Bunda Catering', category: 'store', desc: 'Katalog paket catering dengan checkout transfer & COD.' },
      { name: 'Hijab Anaya', category: 'store', desc: 'Toko online fashion muslim, keranjang & kelola produk sendiri.' },
      { name: 'Studio Lumen', category: 'landing', desc: 'Portfolio & booking jasa foto dalam satu halaman rapi.' },
      { name: 'Garda Barbershop', category: 'landing', desc: 'Landing page reservasi potong rambut + galeri hasil.' },
      { name: 'Rotan Jaya Craft', category: 'store', desc: 'Toko kerajinan rotan dengan katalog produk & ongkir.' },
    ],
  },

  showcase: {
    eyebrow: 'Karya & Konten',
    title: 'Aktif berbagi tiap hari',
    subtitle:
      'Edukasi, tips, showcase, sampai behind the scene — kami konsisten hadir buat UMKM Indonesia.',
    follow: 'Follow @{{handle}}',
    posts: [
      'Before & After — klien Tampilo',
      'Behind the scene — proses ngerjain Tampilo',
      'Paket Landing Page Basic — mulai Rp 350.000',
      '5 tanda UMKM butuh toko online',
      'Kenalan Tampilo — solusi digital buat UMKM',
      '2 layanan Tampilo: landing page & toko online',
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Pertanyaan yang sering ditanya',
    subtitle: 'Masih ada pertanyaan lain? Hubungi kami langsung via WhatsApp.',
    askCta: 'Tanya langsung via WhatsApp',
    items: [
      {
        q: 'Berapa lama waktu pengerjaan?',
        a: 'Untuk Landing Page, biasanya 7–14 hari kerja tergantung paket dan kelengkapan konten dari kamu. Toko Online membutuhkan 10–21 hari kerja. Kami selalu komunikasikan progres secara rutin.',
      },
      {
        q: 'Saya tidak punya konten / foto produk — apakah bisa tetap dibantu?',
        a: 'Bisa! Kami menyediakan add-on copywriting untuk bantu tulis konten. Untuk foto, kami bisa pakai ilustrasi atau placeholder dulu — dan kamu bisa update nanti. Konsultasi gratis untuk tahu lebih lanjut.',
      },
      {
        q: 'Setelah website jadi, saya bisa update sendiri?',
        a: 'Untuk Toko Online paket Standard ke atas, ya — kamu mendapat panel admin untuk kelola produk sendiri. Untuk Landing Page, kami sediakan add-on update berkala atau paket maintenance bulanan.',
      },
      {
        q: 'Apakah hasil website mobile-friendly?',
        a: '100% — semua hasil kerja kami dioptimasi untuk tampil sempurna di HP. Karena sebagian besar pengunjung usaha UMKM datang dari HP.',
      },
      {
        q: 'Bagaimana cara pembayaran?',
        a: 'Pembayaran via transfer bank (BCA, Mandiri, BRI, BNI) atau dompet digital (GoPay, OVO, Dana). Kami minta DP 50% di awal, sisanya setelah website selesai dan kamu puas.',
      },
    ],
  },

  cta: {
    title: 'Siap tampil online?',
    subtitle:
      'Mulai dengan konsultasi gratis — ceritakan usahamu, dan kami bantu tentukan solusi terbaik. Tanpa syarat, tanpa biaya.',
    trustPoints: ['Konsultasi gratis', 'Tanpa syarat', 'Respon cepat'],
  },

  footer: {
    tagline:
      'Jasa digital untuk UMKM kecil — bantu tampil profesional dan jualan online, cepat, terjangkau, dan tanpa ribet.',
    navTitle: 'Navigasi',
    contactTitle: 'Hubungi Kami',
    links: {
      landing: 'Landing Page',
      store: 'Toko Online',
      pricing: 'Paket Harga',
      portfolio: 'Portofolio',
      work: 'Karya & Konten',
      faq: 'FAQ',
    },
    igAria: 'Instagram Tampilo',
    tiktokAria: 'TikTok Tampilo',
    copyright: '© {{year}} Tampilo. Dibuat dengan semangat untuk UMKM Indonesia.',
    credits: 'Fharhan · Yana · Tfan — UAP Kewirausahaan',
  },

  wa: {
    konsultasi: 'Halo Tampilo, saya mau konsultasi gratis untuk usaha saya',
    paket: 'Halo Tampilo, saya tertarik paket {{paket}}',
    tanya: 'Halo Tampilo, saya mau tanya layanan kalian',
  },
}

export default id
