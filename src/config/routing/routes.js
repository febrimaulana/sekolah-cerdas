import Dashboard from '../../pages/Dashboard';

// Siswa import
import { DataSiswa } from '../../pages/Siswa';
// Siswa import
import { DataSubClass } from '../../pages/Akedemik/SubClass';

import { DataJadwalKelas } from '../../pages/Akedemik/JadwalKelas';
import { TambahJadwalKelas } from '../../pages/Akedemik/TambahJadwalKelas';
import { DataMatapelajaran } from '../../pages/Akedemik/MataPelajaran';
import { DataKelas } from '../../pages/Akedemik/Kelas';
import { DataWaliKelas } from '../../pages/Akedemik/WaliKelas';


const routes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/akademik/jadwalkelas/', name: 'Dashboard', component: DataJadwalKelas },
  { path: '/akademik/subclass/', name: 'Dashboard', component: DataSubClass },
  { path: '/akademik/matapelajaran/', name: 'Dashboard', component: DataMatapelajaran },
  { path: '/akademik/kelas/', name: 'Dashboard', component: DataKelas },
  { path: '/akademik/walikelas/', name: 'Dashboard', component: DataWaliKelas },
  { path: '/akademik/tambahjadwalkelas/', name: 'Dashboard', component: TambahJadwalKelas },
];


export default routes;
 