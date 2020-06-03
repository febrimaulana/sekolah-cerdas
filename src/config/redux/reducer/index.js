import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// Reducer
import ReducerRoot from './root';
import ReducerSiswa from './siswa';
import ReducerSubClass from './subclass';
import ReducerOnchangeclass from './onchangeclass';
import ReducerOnchangesubclass from './onchangesubclass';
import ReducerJadwalKelas from './jadwalkelas';
import Reducermatapelajaran from './matapelajaran';
import ReducerKelas from './kelas';

const reducer = {
    root: ReducerRoot,
    siswa: ReducerSiswa,

    subclass: ReducerSubClass,
    onchangeclass: ReducerOnchangeclass,
    onchangesubclass: ReducerOnchangesubclass,
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