import axios from 'axios';
import { Notifikasi } from '../../../../component/atom/Notifikasi';

export const getDataSubclass = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://localhost:2000/services/read-subclass`, data.pagination).then((res) => {
            let data = res.data;  
                                  
            dispatch({ type: 'SET_DATA_SUBCLASS', value: data });
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

export const getselectSubclass = (data) => (dispatch) => {    
    console.log("data_subclass");
    console.log(data.idsubclass);
    let result ={};
    if(data.idsubclass == 1){
         result=
            {
                "1": "A",
                "2": "B"
            
            };
    }else{

             result=
            {
                "3": "C",
                "4": "D"
            };

    }
   
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_SELECT_SUBCLASS', value: result });
        dispatch({ type: 'SET_LOADING', value: true })
        
    })
}



export const addDataSubclass = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://localhost:2000/services/create-student`, data).then((res) => {
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

export const deleteDataSubclass = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://localhost:2000/services/delete-student`, data).then((res) => {
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
    console.log(data);
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://153.92.5.209:3000/services/update-subclass`, data).then((res) => {
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