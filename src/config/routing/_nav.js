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
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Buku Tamu',
          url: '/tatausaha/bukutamu',
          icon: 'icon-puzzle',
        },
        {
          name: 'Log Panggilan',
          url: '/tatausaha/logpanggilan',
          icon: 'icon-puzzle',
        },
        {
          name: 'Pengiriman Barang',
          url: '/tatausaha/pengirimanbarang',
          icon: 'icon-puzzle',
        },
        {
          name: 'Penerimaan Barang',
          url: '/tatausaha/penerimaanbarang',
          icon: 'icon-puzzle',
        },
        {
          name: 'Keluhan',
          url: '/tatausaha/keluhan',
          icon: 'icon-puzzle',
        },
        {
          name: 'Pengaturam',
          url: '/tatausaha/pengaturan',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Informasi Siswa',
      url: '/siswa',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Detail Siswa',
          url: '/siswa/data/',
          icon: 'icon-puzzle',
        }
      ],
    },
  ],
};
