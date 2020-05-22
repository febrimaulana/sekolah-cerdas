import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// Reducer
import ReducerRoot from './root';
import ReducerSiswa from './siswa';
import ReducerPendapatan from './Pendapatan';
import ReducerPengeluaran from './Pengeluaran';
import ReducerUjian from './Ujian';
import ReducerPerpustakaan from './Perpustakaan';
import ReducerSumberDayaManusia from './SumberDayaManusia';
import ReducerDaftarBiaya from './DaftarBiaya';

const reducer = {
    root: ReducerRoot,
    siswa: ReducerSiswa,
    pendapatan: ReducerPendapatan,
    pengeluaran: ReducerPengeluaran,
    ujian: ReducerUjian,
    perpustakaan: ReducerPerpustakaan,
    sumberdayamanusia: ReducerSumberDayaManusia,
    daftarbiaya: ReducerDaftarBiaya,
}

const configReduxPersist = {
    key: "root",
    storage,
    whitelist: []
}

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;