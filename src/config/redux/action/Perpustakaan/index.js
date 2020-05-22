import axios from 'axios';
import { Notifikasi } from '../../../../component/atom/Notifikasi';

export const getDaftarBukuDataTambahBuku = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/read-student`, data.pagination).then((res) => {
            let data = res.data;                      
            console.log(data);
            dispatch({ type: 'SET_DATA_DAFTARTAMBAH_BUKU', value: data });
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


// export const getDataPencapaianNilai = (data) => (dispatch) => {    
//     return new Promise((resolve, reject) => {
//         dispatch({ type: 'SET_LOADING', value: true })
//         axios.post(`http://153.92.5.209:3000/services/read-student`, data.pagination).then((res) => {
//             let data = res.data;                      
//             console.log(data);
//             dispatch({ type: 'SET_DATA_PENCAPAIAN_NILAI', value: data });
//             dispatch({ type: 'SET_LOADING', value: false });
//             resolve(data);
//         }).catch((err) => {
//             console.log(err);
//             dispatch({ type: 'SET_LOADING', value: false });
//             Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
//             reject(err);
//         })
//     })
// }

// export const addDataPencapaianNilai = (data) => (dispatch) => {    
//     return new Promise((resolve, reject) => {
//         dispatch({ type: 'SET_LOADING', value: true })
//         axios.post(`http://153.92.5.209:3000/services/create-student`, data).then((res) => {
//             let data = res.data;
//             dispatch({ type: 'SET_LOADING', value: false });
//             Notifikasi('success', 'SUCCESS', 'Data berhasil ditambahkan');
//             dispatch({type: 'SET_MODAL', value: false});
//             resolve(data);
//         }).catch((err) => {            
//             dispatch({ type: 'SET_LOADING', value: false });
//             Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
//             dispatch({type: 'SET_MODAL', value: false});
//             reject(err);
//         })
//     })
// }

// export const deleteDataPencapaianNilai = (data) => (dispatch) => {    
//     return new Promise((resolve, reject) => {
//         dispatch({ type: 'SET_LOADING', value: true })
//         axios.post(`http://153.92.5.209:3000/services/delete-student`, data).then((res) => {
//             let data = res.data;            
//             dispatch({ type: 'SET_LOADING', value: false });
//             Notifikasi('success', 'SUCCESS', 'Data berhasil dihapus');
//             resolve(data);
//         }).catch((err) => {
//             console.log(err);
//             dispatch({ type: 'SET_LOADING', value: false });
//             Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
//             reject(err);
//         })
//     })
// }

// export const updateDataPencapaianNilai = (data) => (dispatch) => {    
//     return new Promise((resolve, reject) => {
//         dispatch({ type: 'SET_LOADING', value: true })
//         axios.post(`http://153.92.5.209:3000/services/update-student`, data).then((res) => {
//             let data = res.data;            
//             dispatch({ type: 'SET_LOADING', value: false });
//             Notifikasi('success', 'SUCCESS', 'Data berhasil ubah');
//             dispatch({type: 'SET_MODAL', value: false});
//             resolve(data);
//         }).catch((err) => {
//             console.log(err);
//             dispatch({ type: 'SET_LOADING', value: false });
//             Notifikasi('error', 'ERROR', 'Ada masalah pada server!');
//             dispatch({type: 'SET_MODAL', value: false});
//             reject(err);
//         })
//     })
// }

