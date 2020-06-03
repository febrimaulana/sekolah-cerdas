import React, { useEffect, useState } from 'react';
import { Button, Tooltip, Space } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import TableDefault from '../../../component/molecules/Table';
import { dataForm } from './data';
import { useSelector, useDispatch } from 'react-redux';
import { getDataDivisi, addDataDivisi, deleteDataDivisi, updateDataDivisi } from '../../../config/redux/action/SumberDayaManusia';
import { ModalConfirm } from '../../../component/atom/Notifikasi';

const Divisi = () => {    
    // State
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10
    })

    // global state
    const stateRoot = useSelector(state => state.root);
    const stateSumberDayaManusia = useSelector(state => state.sumberdayamanusia);
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
            await dispatch(addDataDivisi(dataInput));
            dispatch(getDataDivisi({pagination: pagination}));
        } else if (status === 'ubah') {            
            const id = stateRoot.form[0].id;
            const dataUbah = {
                ...dataInput,
                idStudent: id
            }
            await dispatch(updateDataDivisi(dataUbah));
            dispatch(getDataDivisi({pagination: pagination}));
        }
    };

    const handleHapus = (record) => {         
        ModalConfirm(
            'Apa anda yakin ?',
            'Data yang sudah dihpaus tidak bisa kembali lagi!',
            'Hapus',
            async () => {
                await dispatch(deleteDataDivisi({idStudent: record.id_siswa}));
                dispatch(getDataDivisi({pagination: pagination}));
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
        dispatch(getDataDivisi({pagination: pagination}));
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
        }, ]

        dispatch({type: 'SET_FORM', value: data})
        dispatch({type: 'SET_MODAL', value: false})
    }

    // end modal
    
    const dataTable = {
        columns: [
            {
                title: 'Nama Divisi',
                dataIndex: 'nama_siswa',            
                sorter: (a, b) => a.nama - b.nama
            },
            // {
            //     title: 'Tempat Lahir',
            //     dataIndex: 'tempat_lahir_siswa',
            //     responsive: ['sm'],
            //     sorter: (a, b) => a.tgllahir - b.tgllahir
            // },
            // {
            //     title: 'Tanggal Lahir',
            //     dataIndex: 'tanggal_lahir_siswa',
            //     responsive: ['md'],
            //     sorter: (a, b) => a.alamat - b.alamat
            // },
            // {
            //     title: 'Jenis Kelamin',
            //     dataIndex: 'jenis_kelamin_siswa',
            //     responsive: ['md'],
            //     sorter: (a, b) => a.alamat - b.alamat,
            //     render: (a) => {
            //         if (a === 'L') {
            //             return 'Laki - Laki'
            //         } else {
            //             return "Perempuan"
            //         }
            //     }
            // },
            // {
            //     title: 'Alamat',
            //     dataIndex: 'alamat_siswa',
            //     responsive: ['md'],
            //     sorter: (a, b) => a.alamat - b.alamat
            // },
            // {
            //     title: 'Orang Tua',
            //     dataIndex: 'orang_tua_siswa',
            //     responsive: ['md'],
            //     sorter: (a, b) => a.alamat - b.alamat
            // },
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
        dataRow: stateSumberDayaManusia.dataDivisi.data,
        idRow: 'id_siswa',
        handleSort: handleSort,
        loading: stateRoot.loading
    }

    const dataPagination = {
        handlePagination: handlePagination,
        countData: stateSumberDayaManusia.dataDivisi.total,
        current: pagination.page
    }

    useEffect(() => {
        dispatch(getDataDivisi({pagination: pagination}));
        return () => {
            dispatch(getDataDivisi({pagination: pagination}));
        }
    }, [dispatch, pagination])    

    return (
        <div className="animated fadeIn">
            <div className="card">
                <div className="card-header">
                    <i className="icon-user"></i> DAFTAR DIVISI {stateRoot.name}
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

export default Divisi;