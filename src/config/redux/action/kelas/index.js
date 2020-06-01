import axios from 'axios';
import { Notifikasi } from '../../../../component/atom/Notifikasi';

export const getDataKelas = (data) => (dispatch) => {    

    let data = {
        "statusCode": "200",
        "elapsedTime": "4.63",
        "messages": "Success",
        "total": 3,
        "data": [
            {
                "idkelas": 1,
                "namakelas": "Matematika",
                "section": {
                    "idsection": 1,
                    "namasection": "Matematika",
                }
                
               
            },
            {
                "id": 2,
                 "namakelas": "Matematika",
                "section": {
                    "idsection": 1,
                    "namasection": "Matematika",
                }
                
               
            }
           
        ]
    };                return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })  
                        
            dispatch({ type: 'SET_DATA_KELAS', value: data });
            dispatch({ type: 'SET_LOADING', value: false });
           
    })
}

export const addDataKelas = (data) => (dispatch) => {    
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

export const deleteDataKelas = (data) => (dispatch) => {    
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

export const updateDataKelas = (data) => (dispatch) => {    
    console.log("ARIPIN");
    console.log(data);
   // return new Promise((resolve, reject) => {
       
        dispatch({ type: 'SET_LOADING', value: true })
       /*  axios.post(`http://153.92.5.209:3000/services/update-subclass`, data).then((res) => {
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
        }) */
    //})
}