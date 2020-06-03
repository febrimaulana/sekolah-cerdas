import axios from 'axios';
import { Notifikasi } from '../../../../component/atom/Notifikasi';

/* export const getDataJadwalClass = (data) => (dispatch) => {    
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_LOADING', value: true })
        axios.post(`http://localhost:2000/services/read-subclass`, data.pagination).then((res) => {
            let data = res.data;                        
            dispatch({ type: 'SET_DATA_JADWALCLASS', value: data });
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
 */

export const getDataGuruMataPelajaran = (data) => (dispatch) => {
  
    //console.log('999999999999999999999999999999');
    //console.log(data.section);
    let data1={};
    if(data.section == 1){
        data1 =	{
            "statusCode": "200",
            "elapsedTime": "144.07",
            "messages": "Success",
            "total": 14,
            "data": [
                {
                    "id": 449,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Monday",
                    "start_time": "11:00 AM",
                    "end_time": "12:30 AM",
                    "room_no": "XII-3"
                },
                {
                    "id": 450,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Tuesday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 451,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Wednesday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 452,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Thursday",
                    "start_time": "11:00 AM",
                    "end_time": "11:30 AM",
                    "room_no": "XII-3"
                },
                {
                    "id": 453,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Friday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 454,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Saturday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 455,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Sunday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 456,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Monday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 457,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Tuesday",
                    "start_time": "07:00 AM",
                    "end_time": "08:35 AM",
                    "room_no": "XII-3"
                },
                {
                    "id": 458,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Wednesday",
                    "start_time": "09:30 AM",
                    "end_time": "11:00 AM",
                    "room_no": "XII-3"
                },
                {
                    "id": 459,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Thursday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 460,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Friday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 461,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Saturday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 462,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "Matematika",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Sunday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                }
            ]
        };
    }else{
        data1 =	{
            "statusCode": "200",
            "elapsedTime": "144.07",
            "messages": "Success",
            "total": 14,
            "data": [
               
                {
                    "id": 450,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Tuesday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 451,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Wednesday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 452,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Thursday",
                    "start_time": "11:00 AM",
                    "end_time": "11:30 AM",
                    "room_no": "XII-3"
                },
                {
                    "id": 453,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Friday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 454,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Saturday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 455,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 11,
                    "teacher_id": 9,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:40:27",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPA",
                    "code": "IPA",
                    "type": "Teori",
                    "teacher_subject_id": 83,
                    "day_name": "Sunday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 456,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Monday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 457,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Tuesday",
                    "start_time": "07:00 AM",
                    "end_time": "08:35 AM",
                    "room_no": "XII-3"
                },
                {
                    "id": 458,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Wednesday",
                    "start_time": "09:30 AM",
                    "end_time": "11:00 AM",
                    "room_no": "XII-3"
                },
                {
                    "id": 459,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Thursday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 460,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Friday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 461,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "IPS",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Saturday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                },
                {
                    "id": 462,
                    "session_id": 14,
                    "class_section_id": 29,
                    "subject_id": 7,
                    "teacher_id": 17,
                    "description": null,
                    "is_active": "no",
                    "created_at": "21 November 2019 10:43:54",
                    "updated_at": "0000-00-00 00:00:00",
                    "name": "Matematika",
                    "code": "IPS",
                    "type": "Teori",
                    "teacher_subject_id": 84,
                    "day_name": "Sunday",
                    "start_time": "",
                    "end_time": "",
                    "room_no": ""
                }
            ]
        };
    }
    
    const Monday = data1.data.filter(({ day_name }) => day_name ==="Monday" );
    const Tuesday = data1.data.filter(({ day_name }) => day_name ==="Tuesday" );
    const Wednesday = data1.data.filter(({ day_name }) => day_name ==="Wednesday" );
    const Thursday = data1.data.filter(({ day_name }) => day_name ==="Thursday" );
    const Friday = data1.data.filter(({ day_name }) => day_name ==="Friday" );
    const Saturday = data1.data.filter(({ day_name }) => day_name ==="Saturday" );
    const Sunday = data1.data.filter(({ day_name }) => day_name ==="Sunday" );
    const combined1 = [].concat(Monday, Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday);
    let dataresult={
                     "statusCode": data1.statusCode,
                        "elapsedTime": data1.elapsedTime,
                     "messages": data1.messages,
                    "total": data1.total,
                 "data": combined1
                     };

  
    return new Promise((resolve, reject) => {
        dispatch({ type: 'SET_DATA_GURUMATAPELAJARAN', value: dataresult });
            dispatch({ type: 'SET_LOADING', value: false });
    })
}
export const addDataGuruMataPelajaran= (data) => (dispatch) => {    
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

export const deleteDataGuruMataPelajaran = (data) => (dispatch) => {    
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

export const updateDataGuruMataPelajaran = (data) => (dispatch) => {    
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