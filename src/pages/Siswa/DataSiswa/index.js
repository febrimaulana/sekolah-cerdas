import React, { useState } from 'react';
import { Button, Tooltip, Space } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import moment from 'moment';
import TableDefault from '../../../component/molecules/Table';
import dataForm from './dataForm';

const DataSiswa = () => {

    const columns = [
        {
            title: 'Nama Siswa',
            dataIndex: 'nama_siswa',
            sorter: (a, b) => a.nama - b.nama
        },
        {
            title: 'Tanggal Lahir',
            dataIndex: 'tempat_lahir_siswa',
            sorter: (a, b) => a.tgllahir - b.tgllahir
        },
        {
            title: 'Alamat',
            dataIndex: 'tanggal_lahir_siswa',
            sorter: (a, b) => a.alamat - b.alamat
        },
        {
            title: 'Jenis Kelamin',
            dataIndex: 'jenis_kelamin_siswa',
            sorter: (a, b) => a.alamat - b.alamat,
            render: (a) => {
                if (a === 'L') {
                    return 'Laki - Laki'
                } else {
                    return "Perempuan"
                }
            }
        },
        {
            title: 'Alamat',
            dataIndex: 'alamat_siswa',
            sorter: (a, b) => a.alamat - b.alamat
        },
        {
            title: 'Orang Tua',
            dataIndex: 'orang_tua_siswa',
            sorter: (a, b) => a.alamat - b.alamat
        },
        {
            title: 'Akasi',
            dataIndex: 'aksi',
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
    ];

    const data = [
        {
            id_siswa: 1,
            nama_siswa: "Ekal Hadiyatma",
            tempat_lahir_siswa: "Depok",
            tanggal_lahir_siswa: "08 June 1995",
            jenis_kelamin_siswa: "L",
            alamat_siswa: "Depok Jawa Barat",
            orang_tua_siswa: "Syauqi",
        },
        {
            id_siswa: 2,
            nama_siswa: "Febri",
            tempat_lahir_siswa: "jakarta",
            tanggal_lahir_siswa: "24 February 1998",
            jenis_kelamin_siswa: "L",
            alamat_siswa: "Depok Jawa Barat",
            orang_tua_siswa: "marali",
        },
        {
            id_siswa: 3,
            nama_siswa: "Dwi",
            tempat_lahir_siswa: "Kepo",
            tanggal_lahir_siswa: "22 February 1995",
            jenis_kelamin_siswa: "P",
            alamat_siswa: "Kepo",
            orang_tua_siswa: "kepo",
        },
    ];

    // Action CRUD

    const onCreate = (values, status) => {
        console.log('Received values of form: ', values);
        if (status === 'tambah') {
            // action tambah data
            console.log('tambah data')
            setVisible(false);
        } else if (status === 'ubah') {
            // action ubah data
            console.log('ubah data')
            setVisible(false);
        }
    };

    const handleHapus = (record) => {
        console.log(record)
    }

    // end crud action

    // table action
    const handleSort = (pagination, filters, sorter) => {
        console.log(sorter)
    }

    const handlePagination = (current, pageSize) => {
        console.log(current, pageSize)
    }

    // end table action

    // modal
    const [visible, setVisible] = useState(false);
    const [form, setForm] = useState([]);
    const [formType, setFormType] = useState('');

    const showModalUbah = (record) => {
        let data = [{
            name: 'nama_siswa',
            value: record.nama_siswa
        }, {
            name: 'tempat_lahir_siswa',
            value: record.tempat_lahir_siswa
        }, {
            name: 'tanggal_lahir_siswa',
            value: moment(new Date(record.tanggal_lahir_siswa))
        }, {
            name: 'jenis_kelamin_siswa',
            value: record.jenis_kelamin_siswa
        }, {
            name: 'alamat_siswa',
            value: record.alamat_siswa
        }, {
            name: 'orang_tua_siswa',
            value: record.orang_tua_siswa
        },]

        setForm(data);
        setVisible(true);
        setFormType('ubah');
    }

    const showModalTambah = () => {
        setVisible(true);
        setFormType('tambah');
    }

    const closeModal = () => {
        let data = [{
            name: 'nama_siswa',
            value: ''
        }, {
            name: 'tempat_lahir_siswa',
            value: ''
        }, {
            name: 'tanggal_lahir_siswa',
            value: moment(new Date())
        }, {
            name: 'jenis_kelamin_siswa',
            value: ''
        }, {
            name: 'alamat_siswa',
            value: ''
        }, {
            name: 'orang_tua_siswa',
            value: ''
        },]

        setForm(data);
        setVisible(false);
    }

    // end modal

    return (
        <div className="animated fadeIn">
            <div className="card">
                <div className="card-header">
                    <i className="icon-user"></i> DATA SISWA
                </div>
                <div className="card-body">
                    <TableDefault
                        closeModal={closeModal}
                        columns={columns}
                        dataForm={dataForm}
                        dataRow={data}
                        form={form}
                        formType={formType}
                        handlePagination={handlePagination}
                        handleSort={handleSort}
                        onCreate={onCreate}
                        showModalTambah={showModalTambah}
                        showModalUbah={showModalUbah}
                        visible={visible}
                    />
                </div>
            </div>
        </div>
    )
}

export default DataSiswa;