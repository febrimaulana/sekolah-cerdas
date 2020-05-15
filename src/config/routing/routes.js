import Dashboard from '../../pages/Dashboard';

// Siswa import
import { DataSiswa } from '../../pages/Siswa';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/siswa/data/', name: 'Dashboard', component: DataSiswa },
];

export default routes;
