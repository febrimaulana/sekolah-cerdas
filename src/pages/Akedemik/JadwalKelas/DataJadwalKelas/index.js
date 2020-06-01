import React, { useEffect, useState } from 'react';
import  { Redirect,useHistory  } from 'react-router-dom'
import { Button, Tooltip, Space, Select, Row, Col  } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import TableDefault from '../../../../component/molecules/Table';
import { dataForm } from './data';
import { useSelector, useDispatch } from 'react-redux';
import { getDataJadwalClass, addDataJadwalClass, deleteDataJadwalClass, updateDataJadwalClass} from '../../../../config/redux/action/jadwalkelas';
import { getselectSubclass, getselectclass} from '../../../../config/redux/action/onchangeclass';

import { ModalConfirm } from '../../../../component/atom/Notifikasi';

const DataJadwalKelas = () => {    
    // State

    const [valclass, setValclass]= useState('');
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10

    })
    
  
    // function to select
    const { Option } = Select;
   
    function onBlur(event) {
        console.log('blur');
    }

    
    function onFocus() {
        console.log('focus');
      }

      function onSearch(val) {
        console.log('search:', val);
        
      }
      
      function onChange(value) {
       // console.log(`selected ${value}`);
       
        setValclass(value);
        dispatch(getselectSubclass({idsubclass: value}));
       // console.log('999999999999999999999999999999');
       // console.log(valclass);
      }

      function onChangesub(value) {
       // console.log(`selected ${value}`);
       // dispatch(getselectSubclass({idsubclass: value}));
       let data = {
            page: 1,
            limit: 10
            
        }
        setPagination(data)
        //console.log('999999999999999999999999999999');
        //console.log(pagination);
        dispatch(getDataJadwalClass({pagination: data,class:valclass,section:value}));
     
      }

    // ====================
   
    // global state
    const stateRoot = useSelector(state => state.root);
    const stateJadwalkelas = useSelector(state => state.jadwalkelas);
    const statelistsclass = useSelector(state => state.onchangeclass);
    const statelistsubclass = useSelector(state => state.onchangesubclass);
   
    

    const dispatch = useDispatch();
    // End State

    // handle CRUD
    const onCreate =  async (values, status) => {        
        const date = moment(new Date(values.dateOfBirthStudent)).format('YYYY-MM-DD')
        const dataInput = {
            ...values,
            dateOfBirthStudent: date
        }
        
        if (status === 'tambah') {                                  
            await dispatch(addDataJadwalClass(dataInput));
            dispatch(addDataJadwalClass({pagination: pagination}));
        } else if (status === 'ubah') {            
            const id = stateRoot.form[0].id;
            const dataUbah = {
                ...dataInput,
                idSubClass: id
            }
            await dispatch(updateDataJadwalClass(dataUbah));
            dispatch(getDataJadwalClass({pagination: pagination}));
        }
    };

    const handleHapus = (record) => {         
        ModalConfirm(
            'Apa anda yakin ?',
            'Data yang sudah dihpaus tidak bisa kembali lagi!',
            'Hapus',
            async () => {
                await dispatch(deleteDataJadwalClass({idStudent: record.id_siswa}));
                dispatch(getDataJadwalClass({pagination: pagination}));
            }
        )           
    }
    // end crud handle

    // handle table action
    const handleSort = (pagination, filters, sorter) => {
        console.log(sorter)
    }

    const handlePagination = (current, pageSize) => {        
        let data = {
            page: current,
            limit: pageSize
        }
        setPagination(data)
        dispatch(getDataJadwalClass({pagination: pagination}));
    }

    // end handle table action
    let history = useHistory();
    const showModalUbah = (record) => {
        history.push('/akademik/tambahjadwalkelas/')
    }

    const showModalTambah = () => {
       // dispatch({type: 'SET_MODAL', value: true})
       // dispatch({type: 'SET_FORM_TYPE', value: 'tambah'})
       history.push('/akademik/tambahjadwalkelas/')
    }

    const closeModal = () => {
        let data = [{
            name: 'section',
            value: ''
        }, ]

        dispatch({type: 'SET_FORM', value: data})
        dispatch({type: 'SET_MODAL', value: false})
    }

    // end modal
    let filterMonday=0;
    let filterTuesday=0;
    let filterWednesday=0;
    let filterThursday=0;
    let filterFriday=0;
    let filterSaturday=0;
    let filterSunday=0;

    const dataTable = {
      
        columns: [
            {
                title: 'HARI',
                dataIndex: 'day_name',            
                sorter: (a, b) => a.day_name - b.day_name,
                render: (a) => {
                 
                    if (a === 'Monday') {
                       // var filterMonday='1';
                       filterMonday=filterMonday+1;
                       if(filterMonday === 1){
                            return a
                       }
                    
                    } else if (a === 'Tuesday') {
                        filterTuesday=filterTuesday+1;
                        if(filterTuesday === 1){
                             return a
                        }
                    }else if (a === 'Wednesday') {
                        filterWednesday=filterWednesday+1;
                        if(filterWednesday === 1){
                             return a
                        } 
                    }else if (a === 'Thursday') {
                        filterThursday=filterThursday+1;
                        if(filterThursday === 1){
                             return a
                        }
                    }else if (a === 'Friday') {
                        filterFriday=filterFriday+1;
                        if(filterFriday === 1){
                             return a
                        }
                    }else if (a === 'Saturday') {
                        filterSaturday=filterSaturday+1;
                        if(filterSaturday === 1){
                             return a
                        }
                    }else if (a === 'Sunday') {
                        filterSunday=filterSunday+1;
                        if(filterSunday === 1){
                             return a
                        }
                    }
                  
                }
                
            },
            {
                title: 'Mata Pelajaran',
                dataIndex: 'name',            
                sorter: (a, b) => a.name - b.name
            },
            {
                title: 'Nomor Ruangan',
                dataIndex: 'room_no',            
                sorter: (a, b) => a.room_no - b.room_no
            },
            {
                title: 'Mulai',
                dataIndex: 'rabu',            
                sorter: (a, b) => a.start_time - b.start_time
            },
            {
                title: 'Selesai',
                dataIndex: 'end_time',            
                sorter: (a, b) => a.end_time - b.end_time
            },
          
           
        ],
        dataRow: stateJadwalkelas.data.data,
        //dataRow: dummysubclas,
        idRow: 'id',
        handleSort: handleSort,
        loading: stateRoot.loading
    }

    const dataPagination = {
        handlePagination: handlePagination,
        countData: stateJadwalkelas.data.total,
        current: pagination.page
    }

    useEffect(() => {
        //dispatch(getDataJadwalClass({pagination: pagination}));
       //dispatch(getDataJadwalClass({pagination: pagination}));
       dispatch(getselectclass({pagination: pagination}));
        
        
        return () => {
           // dispatch(getDataJadwalClass({pagination: pagination}));
        }
    }, [dispatch, pagination])    

    return (
        <div className="animated fadeIn">
            <div className="card">
                <div className="card-header">
                    <i className="icon-user"></i> Jadwal Kelas {stateRoot.name}
                </div>
                <div className="card-body">
                <Row gutter={16}>
     
      <Col className="gutter-row" span={6}>
        <div > <Select
                    showSearch
                    style={{ width: 500 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    
                     <Option value=""></Option>   
                    { Object.entries(statelistsclass.data).map((v,k) => <option key={k} value={v[0]}>{v[1]}</option>) }   
                </Select>
                </div>
      </Col>
      <Col className="gutter-row" span={2}>
        <div ></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>  
                <Select
                    showSearch
                    style={{ width: 500 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChangesub}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value=""></Option>
                    { Object.entries(statelistsubclass.data).map((v,k) => <option key={k} value={v[0]}>{v[1]}</option>) }   
                </Select></div>
      </Col>
    </Row>   
               
                
              
                </div>
                <div className="card-body">
                    
                    <TableDefault
                        closeModal={closeModal}                        
                        dataForm={dataForm}
                        dataTable={dataTable}
                        dataPagination={dataPagination}
                        form={stateRoot.form}
                        formType={stateRoot.formType}                        
                        handleSort={handleSort}
                        onCreate={onCreate}
                        showModalTambah={showModalTambah}
                        showModalUbah={showModalUbah}
                        visible={stateRoot.modal}
                    />
                </div>
            </div>            
        </div>
    )
}

export default DataJadwalKelas;