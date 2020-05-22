import Dashboard from '../../pages/Dashboard';

// Siswa import
import { DataSiswa } from '../../pages/Siswa';
import { TipePendapatan , DaftarPendapatan } from '../../pages/Pendapatan';
import { DaftarPengeluaran , TipePengeluaran } from '../../pages/Pengeluaran';
import { PencapaianNilai , DaftarUjian } from '../../pages/Ujian';
import { DaftarBukuTambahBuku } from '../../pages/Perpustakaan';
import { TipeCuti , Divisi , Penugasan} from '../../pages/SumberDayaManusia';
import { DiskonBiaya , TipeBiaya , GrupBiaya } from '../../pages/DaftarBiaya';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/siswa/data/', name: 'Dashboard', component: DataSiswa },
  { path: '/pendapatan/tipependapatan/', name: 'Dashboard', component: TipePendapatan },
  { path: '/pendapatan/daftarpendapatan/', name: 'Dashboard', component: DaftarPendapatan },
  { path: '/pengeluaran/daftarpengeluaran/', name: 'Dashboard', component: DaftarPengeluaran },
  { path: '/pengeluaran/tipepengeluaran/', name: 'Dashboard', component: TipePengeluaran },
  { path: '/ujian/pencapaiannilai/', name: 'Dashboard', component: PencapaianNilai },
  { path: '/ujian/daftarujian/', name: 'Dashboard', component: DaftarUjian },
  { path: '/perpustakaan/daftarbukutambahbuku/', name: 'Dashboard', component: DaftarBukuTambahBuku },
  { path: '/sdm/tipecuti/', name: 'Dashboard', component: TipeCuti },
  { path: '/sdm/divisi/', name: 'Dashboard', component: Divisi },
  { path: '/sdm/penugasan/', name: 'Dashboard', component: Penugasan },
  { path: '/daftarbiaya/diskonbiaya/', name: 'Dashboard', component: DiskonBiaya },
  { path: '/daftarbiaya/tipebiaya/', name: 'Dashboard', component: TipeBiaya },
  { path: '/daftarbiaya/grupbiaya/', name: 'Dashboard', component: GrupBiaya },
];

export default routes;
 