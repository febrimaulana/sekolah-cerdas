import Dashboard from '../../pages/Dashboard';

// Siswa import
import { DataSiswa, Form, DetailSiswa } from '../../pages/Siswa';

const routes = [
  { path: '/', exact: true },
  { path: '/dashboard', exact: true, component: Dashboard },
  { path: '/siswa/data/', exact: true, component: DataSiswa },
  { path: '/siswa/data/detail/:id', exact: true, component: DetailSiswa },
  { path: '/siswa/data/tambah', exact: true, component: Form },
];

export default routes;
