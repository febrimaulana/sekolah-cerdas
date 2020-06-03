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
          icon: 'icon-puzzle',
        },
        {
          name: 'Penerimaan Siswa',
          url: '/siswa/penerimaansiswa/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Laporan Siswa',
          url: '/siswa/laporansiswa/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Wali Siswa',
          url: '/siswa/walisiswa/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Direktori Siswa',
          url: '/siswa/direktorisiswa/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Daftar Sandi Siswa',
          url: '/siswa/direktorisiswa/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Kategori Siswa',
          url: '/siswa/kategorisiswa/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Siswa Nonaktif',
          url: '/siswa/siswanonaktif/',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Daftar Biaya',
      url: '/daftarbiaya',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Pencatatan Biaya',
          url: '/daftarbiaya/pencatatanbiaya/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Grup Biaya',
          url: '/daftarbiaya/grupbiaya/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tipe Biaya',
          url: '/daftarbiaya/tipebiaya/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Diskon Biaya',
          url: '/daftarbiaya/diskonbiaya/',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Pendapatan',
      url: '/pendapatan',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Daftar Pendapatan',
          url: '/pendapatan/daftarpendapatan/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tipe Pendapatan',
          url: '/pendapatan/tipependapatan/',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Pengeluaran',
      url: '/pengeluaran',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Daftar Pengeluaran',
          url: '/pengeluaran/daftarpengeluaran/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Tipe Pengeluaran',
          url: '/pengeluaran/tipepengeluaran/',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Ujian',
      url: '/ujian',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Daftar Ujian',
          url: '/ujian/daftarujian/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Jadwal Ujian',
          url: '/ujian/jadwalujian/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Daftar Nilai',
          url: '/ujian/daftarnilai/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Pencapaian Nilai',
          url: '/ujian/pencapaiannilai/',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Perpustakaan',
      url: '/perpustakaan',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Daftar Buku',
          url: '/perpustakaan/daftarbukutambahbuku/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Peminjaman',
          url: '/perpustkaan/peminjaman/',
          icon: 'icon-puzzle',
        },
      ],
    },
    {
      name: 'Sumber Daya Manusia',
      url: '/sdm',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Tipe Cuti',
          url: '/sdm/tipecuti/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Divisi',
          url: '/sdm/divisi/',
          icon: 'icon-puzzle',
        },
        {
          name: 'Penugasan',
          url: '/sdm/penugasan/',
          icon: 'icon-puzzle',
        },
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
          url: '/unduhan/UnggahLain',
          icon: 'icon-arrow-right-circle',
        },
      ],
    },
    {
      name: 'Akademik',
      url: '/Akademi',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Jadwal Kelas',
          url: '/akademik/jadwalkelas',
          icon: 'icon-puzzle',
        },
        {
          name: 'Wali Kelas',
          url: '/akademik/walikelas',
          icon: 'icon-puzzle',
        },
        {
          name: 'Guru Mata Perlajaram',
          url: '/akademik/gurumatapelajaran',
          icon: 'icon-puzzle',
        },
        {
         name: 'Kenaikan Kelas',
         url: '/akademik/kenaikan',
         icon: 'icon-puzzle',
       },,
         {
          name: 'Daftar Mata Pelajaran',
          url: '/akademik/matapelajaran',
          icon: 'icon-puzzle',
        },
        {
          name: 'Kelas',
          url: '/akademik/kelas',
          icon: 'icon-puzzle',
        },
        {
          name: 'Sub Class',
          url: '/akademik/subclass',
          icon: 'icon-puzzle',
        }
      ],
    },
  ],
};
