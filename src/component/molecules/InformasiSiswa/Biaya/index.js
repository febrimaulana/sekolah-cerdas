import React, { useState } from 'react';
import { Table, Tooltip, Space, Button, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const Biaya = () => {

    const [modal, setModal] = useState(false);
    const [dataModal, setDataModal] = useState([]);

    const showModal = (data) => {
        setModal(true);
        const arrayData = [];

        arrayData.push(data);
        setDataModal(arrayData);
    }

    const columns = [
        {
            title: 'Group Biaya',
            align: 'center',
            dataIndex: 'GroupBiaya',
            key: 'GroupBiaya',
        },
        {
            title: 'Kode Biaya',
            align: 'center',
            dataIndex: 'KodeBiaya',
            key: 'KodeBiaya',
        },
        {
            title: 'Tanggal Jatuh Tempo',
            align: 'center',
            dataIndex: 'TanggalJatuhTempo',
            key: 'TanggalJatuhTempo',
        },
        {
            title: 'Status',
            align: 'center',
            dataIndex: 'Status',
            key: 'Status',
        },
        {
            title: 'Jumlah (Rp.)',
            align: 'center',
            dataIndex: 'Jumlah',
            key: 'Jumlah',
        },
        {
            title: 'ID Pembayaran',
            align: 'center',
            dataIndex: 'IDPembayaran',
            key: 'IDPembayaran',
        },
        {
            title: 'Pembayaran',
            align: 'center',
            render: (text, record) => {
                return (
                    <Space >
                        <Tooltip title="Lihat Pembayaran">
                            <Button onClick={(e) => showModal(record)} type="default" shape="circle" >
                                <SearchOutlined />
                            </Button>
                        </Tooltip>
                    </Space>
                )
            }
        }
    ];

    const data = [
        {
            key: '1',
            GroupBiaya: 'Kelas 1',
            KodeBiaya: 'SPP_jan_19',
            TanggalJatuhTempo: '20/01/2019',
            Status: 'Status',
            Jumlah: '80000',
            IDPembayaran: '38/1',
            Mode: 'cash',
            Tanggal: '14/05/2020',
            Diskon: 0,
            Denda: 0,
            Dibayar: 80000,
            Saldo: 0
        },
        {
            key: '2',
            GroupBiaya: 'Kelas 2',
            KodeBiaya: 'SPP_jan_20',
            TanggalJatuhTempo: '20/03/2019',
            Status: 'success',
            Jumlah: 10000,
            IDPembayaran: '39/1',
            Mode: 'cash',
            Tanggal: '14/07/2020',
            Diskon: 0,
            Denda: 0,
            Dibayar: 10000,
            Saldo: 0
        },
    ];

    const columnsModal = [
        {
            title: 'Mode',
            align: 'center',
            dataIndex: 'Mode',
            key: 'Mode',
        },
        {
            title: 'Tanggal',
            align: 'center',
            dataIndex: 'Tanggal',
            key: 'Tanggal',
        },
        {
            title: 'Diskon',
            align: 'center',
            dataIndex: 'Diskon',
            key: 'Diskon',
        },
        {
            title: 'Denda',
            align: 'center',
            dataIndex: 'Denda',
            key: 'Denda',
        },
        {
            title: 'Dibayar',
            align: 'center',
            dataIndex: 'Dibayar',
            key: 'Dibayar',
        },
        {
            title: 'Saldo',
            align: 'center',
            dataIndex: 'Saldo',
            key: 'Saldo',
        },
    ]

    return (
        <>
            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
            />
            <Modal
                title="Basic Modal"
                visible={modal}
                onOk={() => console.log(dataModal)}
                onCancel={() => setModal(false)}
            >
                <Table
                    pagination={false}
                    columns={columnsModal}
                    dataSource={dataModal}
                />
            </Modal>
        </>
    )
}

export default Biaya;
