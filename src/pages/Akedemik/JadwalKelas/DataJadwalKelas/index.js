import React, { useEffect, useState } from 'react';
import { Button, Tooltip, Space, Select  } from 'antd';
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
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10
    })
    
    
    // function to select
    const { Option } = Select;

    let classSelect = {1: 'Kelas 1', 2: 'Kelas 2'};


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
        console.log(`selected ${value}`);
        dispatch(getselectSubclass({idsubclass: value}));
        
      }

    // ====================
   
    // global state
    const stateRoot = useSelector(state => state.root);
    const stateSiswa = useSelector(state => state.subclass);
    const statelistsclass = useSelector(state => state.onchangeclass);
    const statelistsubclass = useSelector(state => state.onchangesubclass);
    console.log("statelistsclass");
    console.log(statelistsclass);

    console.log("statelistsubclass");
    console.log(statelistsubclass);
    const dummysubclas=[
        {
            "id": 1,
            "section": "A",
            "is_active": "no",
            "created_at": "2019-07-08T06:16:30.000Z",
            "updated_at": "0000-00-00 00:00:00"
        },
        {
            "id": 2,
            "section": "B",
            "is_active": "no",
            "created_at": "2019-07-08T06:16:33.000Z",
            "updated_at": "0000-00-00 00:00:00"
        },
        {
            "id": 3,
            "section": "C",
            "is_active": "no",
            "created_at": "2019-07-08T06:16:36.000Z",
            "updated_at": "0000-00-00 00:00:00"
        },
        {
            "id": 4,
            "section": "D",
            "is_active": "no",
            "created_at": "2019-07-08T06:16:39.000Z",
            "updated_at": "0000-00-00 00:00:00"
        }
    ];
    console.log(stateSiswa);

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

    const showModalUbah = (record) => {
        let data = [{
            iidSubClassd: record.id,
        },{
            name: 'section',
            value: record.section
        },]

        dispatch({type: 'SET_FORM', value: data})
        dispatch({type: 'SET_MODAL', value: true})
        dispatch({type: 'SET_FORM_TYPE', value: 'ubah'})
    }

    const showModalTambah = () => {
        dispatch({type: 'SET_MODAL', value: true})
        dispatch({type: 'SET_FORM_TYPE', value: 'tambah'})
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
    
    const dataTable = {
        columns: [
            {
                title: 'Mata Pelajaran',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },
            {
                title: 'Mata Pelajaran',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },
            {
                title: 'Senin',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },
            {
                title: 'Selasa',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },
            {
                title: 'Rabu',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },
            {
                title: 'Kamis',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },
            {
                title: 'Jumat',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },

            {
                title: 'Ssabtu',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },
            {
                title: 'Minggu',
                dataIndex: 'section',            
                sorter: (a, b) => a.section - b.section
            },
           
        ],
        //dataRow: stateSiswa.data.data,
        dataRow: dummysubclas,
        idRow: 'id',
        handleSort: handleSort,
        loading: stateRoot.loading
    }

    const dataPagination = {
        handlePagination: handlePagination,
        countData: stateSiswa.data.total,
        current: pagination.page
    }

    useEffect(() => {
        dispatch(getDataJadwalClass({pagination: pagination}));
       dispatch(getDataJadwalClass({pagination: pagination}));
       dispatch(getselectclass({pagination: pagination}));
        
        
        return () => {
            dispatch(getDataJadwalClass({pagination: pagination}));
        }
    }, [dispatch, pagination])    

    return (
        <div className="animated fadeIn">
            <div className="card">
                <div className="card-header">
                    <i className="icon-user"></i> Jadwal Kelas {stateRoot.name}
                </div>
                <div className="card-body">
                <Select
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
                
                
                
                <Select
                    showSearch
                    style={{ width: 500 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                   
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value=""></Option>
                    { Object.entries(statelistsubclass.data).map((v,k) => <option key={k} value={v[0]}>{v[1]}</option>) }   
                </Select>
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