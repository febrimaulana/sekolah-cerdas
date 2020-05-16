import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// Reducer
import ReducerRoot from './root';
import ReducerSiswa from './siswa';

const reducer = {
    root: ReducerRoot,
    siswa: ReducerSiswa
}

const configReduxPersist = {
    key: "root",
    storage,
    whitelist: []
}

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;