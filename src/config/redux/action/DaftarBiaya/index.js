import axios from 'axios';
import { Notifikasi } from '../../../../component/atom/Notifikasi';

//Diskon biaya
export const getDataDiskonBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/read-student`, data.pagination).then((res) => {
            let data = res.data;                      
            console.log(data);
            dispatch({ type: 'SET_DATA_DISKON_BIAYA', value: data });
            dispatch({ type: 'SET_LOADING', value: false });
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            reject(err);
        })
    })
}

export const addDataSiswa = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/create-student`, data).then((res) => {
            let data = res.data;
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil ditambahkan');
            dispatch({type: 'SET_MODAL', value: false});
            resolve(data);
        }).catch((err) => {            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            dispatch({type: 'SET_MODAL', value: false});
            reject(err);
        })
    })
}

export const deleteDataSiswa = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/delete-student`, data).then((res) => {
            let data = res.data;            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil dihapus');
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            reject(err);
        })
    })
}

export const updateDataSiswa = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/update-student`, data).then((res) => {
            let data = res.data;            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil ubah');
            dispatch({type: 'SET_MODAL', value: false});
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            dispatch({type: 'SET_MODAL', value: false});
            reject(err);
        })
    })
}

//Tipe Biaya
export const getDataTipeBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/read-student`, data.pagination).then((res) => {
            let data = res.data;  
            console.log(data);                     
            console.log(data);
            dispatch({ type: 'SET_DATA_TIPE_BIAYA', value: data });
            dispatch({ type: 'SET_LOADING', value: false });
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            reject(err);
        })
    })
}

export const addTipeBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/create-student`, data).then((res) => {
            let data = res.data;
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil ditambahkan');
            dispatch({type: 'SET_MODAL', value: false});
            resolve(data);
        }).catch((err) => {            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            dispatch({type: 'SET_MODAL', value: false});
            reject(err);
        })
    })
}

export const deleteTipeBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/delete-student`, data).then((res) => {
            let data = res.data;            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil dihapus');
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            reject(err);
        })
    })
}

export const updateTipeBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/update-student`, data).then((res) => {
            let data = res.data;            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil ubah');
            dispatch({type: 'SET_MODAL', value: false});
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            dispatch({type: 'SET_MODAL', value: false});
            reject(err);
        })
    })
}


//Grup Biaya
export const getDataGrupBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/read-student`, data.pagination).then((res) => {
            let data = res.data;  
            console.log(data);                     
            console.log(data);
            dispatch({ type: 'SET_DATA_GRUP_BIAYA', value: data });
            dispatch({ type: 'SET_LOADING', value: false });
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            reject(err);
        })
    })
}

export const addGrupBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/create-student`, data).then((res) => {
            let data = res.data;
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil ditambahkan');
            dispatch({type: 'SET_MODAL', value: false});
            resolve(data);
        }).catch((err) => {            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            dispatch({type: 'SET_MODAL', value: false});
            reject(err);
        })
    })
}

export const deleteGrupBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/delete-student`, data).then((res) => {
            let data = res.data;            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil dihapus');
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            reject(err);
        })
    })
}

export const updateGrupBiaya = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/update-student`, data).then((res) => {
            let data = res.data;            
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('success', 'SUCCESS', 'Data berhasil ubah');
            dispatch({type: 'SET_MODAL', value: false});
            resolve(data);
        }).catch((err) => {
            console.log(err);
            dispatch({ type: 'SET_LOADING', value: false });
            Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
            dispatch({type: 'SET_MODAL', value: false});
            reject(err);
        })
    })
}