import Dashboard from '../../pages/Dashboard';

// Siswa import
import { DataSiswa } from '../../pages/Siswa';
// Siswa import
import { DataSubClass } from '../../pages/Akedemik/SubClass';

import { DataJadwalKelas } from '../../pages/Akedemik/JadwalKelas';


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/siswa/data/', name: 'Dashboard', component: DataSiswa },
  { path: '/akademik/jadwalkelas/', name: 'Dashboard', component: DataJadwalKelas },
  { path: '/akademik/subclass/', name: 'Dashboard', component: DataSubClass },
  
];

export default routes;
