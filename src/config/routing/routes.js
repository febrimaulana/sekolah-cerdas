import Dashboard from '../../pages/Dashboard';

// Siswa import
import { DataSiswa } from '../../pages/Siswa';
import { TipePendapatan , DaftarPendapatan } from '../../pages/Pendapatan';
import { DaftarPengeluaran , TipePengeluaran } from '../../pages/Pengeluaran';
import { PencapaianNilai , DaftarUjian } from '../../pages/Ujian';
import { DaftarBukuTambahBuku } from '../../pages/Perpustakaan';
import { TipeCuti , Divisi , Penugasan} from '../../pages/SumberDayaManusia';
import { DiskonBiaya , TipeBiaya , GrupBiaya } from '../../pages/DaftarBiaya';
import { BukuTamu } from '../../pages/TataUsaha';
import { LogPanggilan } from '../../pages/TataUsaha';
import { Surat } from '../../pages/TataUsaha';
import { Keluhan } from '../../pages/TataUsaha';
import { Pengaturan } from '../../pages/TataUsaha';
import { DaftarInventaris } from '../../pages/Inventaris';
import { Jenis } from '../../pages/Inventaris';
import { Kategori } from '../../pages/Inventaris';
import { Suplier } from '../../pages/Inventaris';
import { Toko } from '../../pages/Inventaris';
import { Unggah } from '../../pages/Unduhan';
import { BahanAjar } from '../../pages/Unduhan';

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
  { path: '/TataUsaha/BukuTamu/', name: 'Dashboard', component: BukuTamu },
  { path: '/TataUsaha/LogPanggilan/', name: 'Dashboard', component: LogPanggilan },
  { path: '/TataUsaha/Surat/', name: 'Dashboard', component: Surat },
  { path: '/TataUsaha/Keluhan/', name: 'Dashboard', component: Keluhan },
  { path: '/TataUsaha/Pengaturan/', name: 'Dashboard', component: Pengaturan },
  { path: '/Inventaris/DaftarInventaris/', name: 'Dashboard', component: DaftarInventaris },
  { path: '/Inventaris/Jenis/', name: 'Dashboard', component: Jenis },
  { path: '/Inventaris/Kategori/', name: 'Dashboard', component: Kategori },
  { path: '/Inventaris/Suplier/', name: 'Dashboard', component: Suplier },
  { path: '/Inventaris/Toko/', name: 'Dashboard', component: Toko },
  { path: '/Unduhan/Unggah/', name: 'Dashboard', component: Unggah },
  { path: '/Unduhan/BahanAjar/', name: 'Dashboard', component: BahanAjar },
];

export default routes;
 