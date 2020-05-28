export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Tata Usaha',
      url: '/tatausaha',
      icon: 'icon-home',
      children: [
        {
          name: 'Buku Tamu',
          url: '/tatausaha/bukutamu',
          icon: 'icon-note',
        },
        {
          name: 'Log Panggilan',
          url: '/tatausaha/LogPanggilan',
          icon: 'icon-call-in',
        },
        {
          name: 'Surat Menyurat',
          url: '/tatausaha/surat',
          icon: 'icon-envelope',
        },
        {
          name: 'Keluhan',
          url: '/tatausaha/keluhan',
          icon: 'icon-bubbles',
        },
        {
          name: 'Pengaturan',
          url: '/tatausaha/pengaturan',
          icon: 'icon-settings',
        },
      ],
    },
    {
      name: 'Informasi Siswa',
      url: '/siswa',
      icon: 'icon-people',
      children: [
        {
          name: 'Detail Siswa',
          url: '/siswa/data/',
          icon: 'icon-user-following',
        }
      ],
    },
    {
      name: 'Inventaris',
      url: '/inventaris',
      icon: 'icon-layers',
      children: [
        {
          name: 'Daftar Inventaris',
          url: '/inventaris/DaftarInventaris',
          icon: 'icon-arrow-right-circle',
        },
        {
          name: 'Jenis Barang',
          url: '/inventaris/Jenis',
          icon: 'icon-arrow-right-circle',
        },
        {
          name: 'Kategori Barang',
          url: '/inventaris/Kategori',
          icon: 'icon-arrow-right-circle',
        },
        {
          name: 'Toko',
          url: '/inventaris/Toko',
          icon: 'icon-arrow-right-circle',
        },
        {
          name: 'Suplier',
          url: '/inventaris/Suplier',
          icon: 'icon-arrow-right-circle',
        },
      ],
    },
    {
      name: 'Pusat Unduhan',
      url: '/unduhan',
      icon: 'icon-cloud-download',
      children: [
        {
          name: 'Unggah Konten',
          url: '/unduhan/Unggah',
          icon: 'icon-arrow-right-circle',
        },
        {
          name: 'Tugas',
          url: '/unduhan/Tugas',
          icon: 'icon-arrow-right-circle',
        },
        {
          name: 'Bahan Ajar',
          url: '/unduhan/BahanAjar',
          icon: 'icon-arrow-right-circle',
        },
        {
          name: 'Silabus',
          url: '/unduhan/Silabus',
          icon: 'icon-arrow-right-circle',
        },
        {
          name: 'Unggahan Lainnya',
          url: '/unduhan/UnggahanLain',
          icon: 'icon-arrow-right-circle',
        },
      ],
    },
  ],
};
