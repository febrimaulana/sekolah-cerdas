import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

// Reducer
import ReducerRoot from './root';

const reducer = {
    root: ReducerRoot,
}

const configReduxPersist = {
    key: "root",
    storage,
    whitelist: []
}

const reduxPersistReducer = persistCombineReducers(configReduxPersist, reducer);

export default reduxPersistReducer;