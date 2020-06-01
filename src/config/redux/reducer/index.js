import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// Reducer
import ReducerRoot from './root';
import ReducerSiswa from './siswa';
import ReducerSubClass from './subclass';
import ReducerOnchangeclass from './onchangeclass';
import ReducerOnchangesubclass from './onchangesubclass';
import ReducerPendapatan from './Pendapatan';
import ReducerPengeluaran from './Pengeluaran';
import ReducerUjian from './Ujian';
import ReducerPerpustakaan from './Perpustakaan';
import ReducerSumberDayaManusia from './SumberDayaManusia';
import ReducerDaftarBiaya from './DaftarBiaya';
import ReducerJadwalKelas from './jadwalkelas';
import Reducermatapelajaran from './matapelajaran';
import ReducerKelas from './kelas';

const reducer = {
    root: ReducerRoot,
    siswa: ReducerSiswa,

    subclass: ReducerSubClass,
    onchangeclass: ReducerOnchangeclass,
    onchangesubclass: ReducerOnchangesubclass,
    pendapatan: ReducerPendapatan,
    pengeluaran: ReducerPengeluaran,
    ujian: ReducerUjian,
    perpustakaan: ReducerPerpustakaan,
    sumberdayamanusia: ReducerSumberDayaManusia,
    daftarbiaya: ReducerDaftarBiaya,
    jadwalkelas: ReducerJadwalKelas,
    matapelajaran: Reducermatapelajaran,
    kelas: ReducerKelas,
}

const configReduxPersist = {
    key: "root",
    storage,
    whitelist: []
}

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;