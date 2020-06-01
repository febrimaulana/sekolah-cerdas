import React, { useEffect, useState } from 'react';
import { Button, Tooltip, Space,Tag} from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import TableDefault from '../../../../component/molecules/Table';
import { dataForm } from './data';
import { useSelector, useDispatch } from 'react-redux';
import { getDataKelas, addDataKelas, deleteDataKelas, updateDataKelas } from '../../../../config/redux/action/kelas';
import { ModalConfirm } from '../../../../component/atom/Notifikasi';

const DataKelas = () => {    
    // State
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10
    })

    // global state
    const stateRoot = useSelector(state => state.root);
    const stateKelas = useSelector(state => state.kelas);
    const dispatch = useDispatch();
    // End State
  
    const onCreate =  async (values, status) => {        
        const date = moment(new Date(values.dateOfBirthStudent)).format('YYYY-MM-DD')
        const dataInput = {
            ...values,
            dateOfBirthStudent: date
        }
        
        if (status === 'tambah') {                                  
            await dispatch(addDataKelas(dataInput));
            dispatch(getDataKelas({pagination: pagination}));
        } else if (status === 'ubah') {            
            const id = stateRoot.form[0].id;
            const dataUbah = {
                ...dataInput,
                idStudent: id
            }
            await dispatch(updateDataKelas(dataUbah));
            dispatch(getDataKelas({pagination: pagination}));
        }
    };

    const handleHapus = (record) => {         
        ModalConfirm(
            'Apa anda yakin ?',
            'Data yang sudah dihpaus tidak bisa kembali lagi!',
            'Hapus',
            async () => {
                await dispatch(deleteDataKelas({idStudent: record.id_siswa}));
                dispatch(getDataKelas({pagination: pagination}));
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
        dispatch(getDataKelas({pagination: pagination}));
    }

    // end handle table action

    const showModalUbah = (record) => {
        let data = [{
            id: record.id_siswa,
        },{
            name: 'nameStudent',
            value: record.nama_siswa
        }, {
            name: 'placeOfBirthStudent',
            value: record.tempat_lahir_siswa
        }, {
            name: 'dateOfBirthStudent',
            value: moment(new Date(record.tanggal_lahir_siswa))
        }, {
            name: 'genderStudent',
            value: record.jenis_kelamin_siswa
        }, {
            name: 'addressStudent',
            value: record.alamat_siswa
        }, {
            name: 'parentsStudent',
            value: record.orang_tua_siswa
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
            name: 'nameStudent',
            value: ''
        }, {
            name: 'placeOfBirthStudent',
            value: ''
        }, {
            name: 'dateOfBirthStudent',
            value: moment(new Date())
        }, {
            name: 'genderStudent',
            value: ''
        }, {
            name: 'addressStudent',
            value: ''
        }, {
            name: 'parentsStudent',
            value: ''
        },]

        dispatch({type: 'SET_FORM', value: data})
        dispatch({type: 'SET_MODAL', value: false})
    }

    // end modal
    
    const dataTable = {
        columns: [
            {
                title: 'Kelas',
                dataIndex: 'namakelas',
                sorter: (a, b) => a.nama_siswa.length - b.nama_siswa.length,                
            },
            {
                title: 'Subkelas',
                key: 'section',
                dataIndex: 'section',
                render: section => (
                    <>
                      {Object.entries(section).map((tag,key) => {
                       
                        return (
                          <Tag  key={key}>
                            {tag[1]}
                          </Tag>
                        );
                      })}
                    </>
                  ),
              
             },
           
            {
                title: 'Aksi',
                dataIndex: 'aksi',            
                align: 'center',
                render: (text, record) => {
                    return (
                        <Space >
                            <Tooltip title="Lihat Data">
                                <Button onClick={() => console.log(record)} type="default" shape="circle" >
                                    <SearchOutlined />
                                </Button>
                            </Tooltip>
                            <Tooltip title="Edit Data">
                                <Button type="default" shape="circle" onClick={() => showModalUbah(record)} >
                                    <EditOutlined />
                                </Button>
                            </Tooltip>
                            <Tooltip title="Hapus Data">
                                <Button type="default" onClick={() => handleHapus(record)} shape="circle" >
                                    <DeleteOutlined />
                                </Button>
                            </Tooltip>
                        </Space>
                    )
                }
            },
        ],
        dataRow: stateKelas.data.data,
        idRow: 'id_siswa',
        handleSort: handleSort,
        loading: stateRoot.loading
    }

    const dataPagination = {
        handlePagination: handlePagination,
        countData: stateKelas.data.total,
        current: pagination.page
    }

    useEffect(() => {
        dispatch(getDataKelas({pagination: pagination}));
        return () => {
            dispatch(getDataKelas({pagination: pagination}));
        }
    }, [dispatch, pagination])    

    return (
        <div className="animated fadeIn">
            <div className="card">
                <div className="card-header">
                    <i className="icon-user"></i> Kelas {stateRoot.name}
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

export default DataKelas;