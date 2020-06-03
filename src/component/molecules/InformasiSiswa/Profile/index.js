import React from 'react';
import { Typography, List, Space } from 'antd';

const Profile = () => {

    const dataProfile = [
        {
            title: 'Tanggal Pendaftaran',
            text: '05/08/2019'
        },
        {
            title: 'Tanggal Lahir',
            text: '	11/01/2009'
        },
        {
            title: 'Kategori',
            text: ''
        },
        {
            title: 'Nomor Ponsel',
            text: '	010000000004'
        },
        {
            title: 'Agama',
            text: '	Islam'
        },
        {
            title: 'Email',
            text: 'dinda@gmail.com'
        },
    ];

    const dataAlamat = [
        {
            title: 'Alamat Saat Ini',
            text: ''
        },
        {
            title: 'Alamat Tetap',
            text: ''
        },
    ];

    const dataOrangTua = [
        {
            title: 'Nama Ayah',
            text: 'Sonny'
        },
        {
            title: 'Nomor Telepon Ayah',
            text: '	011000000004'
        },
        {
            title: 'Pekerjaan Ayah',
            text: '	Pegawai Negeri Sipil'
        },
        {
            title: 'Nama Ibu',
            text: 'Fairuz'
        },
        {
            title: 'Nomor Telepon Ibu',
            text: '012000000004'
        },
        {
            title: 'Pekerjaan Ibu',
            text: 'Ibu Rumah Tangga'
        },
        {
            title: 'Nama Wali',
            text: 'Sonny'
        },
        {
            title: 'Email Wali',
            text: 'sonny@gmail.com'
        },
        {
            title: 'Hubungan Wali',
            text: 'ayah'
        },
        {
            title: 'Nomor Telepon Wali',
            text: '011000000004'
        },
        {
            title: 'Pekerjaan Wali',
            text: 'Pegawai Negeri Sipil'
        },
        {
            title: 'Alamat Wali',
            text: 'Bekasi Utara'
        },
    ];

    const dataRincian = [
        {
            title: 'Golongan Darah',
            text: '	AB+'
        },
        {
            title: 'Tinggi Badan',
            text: ''
        },
        {
            title: 'Berat Badan',
            text: ''
        },
        {
            title: 'Tanggal Pengukuran',
            text: '	05/08/2019'
        },
        {
            title: 'Detail Sekolah Sebelumnya',
            text: '	'
        },
        {
            title: 'Catatan',
            text: '	'
        },
        {
            title: 'Nomor Kartu Keluarga',
            text: '	'
        },
        {
            title: 'NIK',
            text: '	'
        },
    ]

    return (
        <Space direction="vertical" style={{ width: '100%' }}>
            <List
                size="small"
                bordered
                dataSource={dataProfile}
                renderItem={item =>
                    <List.Item>
                        <Typography.Text strong>{item.title}</Typography.Text>
                        <Typography.Text copyable>{item.text}</Typography.Text>
                    </List.Item>
                }
            />
            <List
                size="small"
                bordered
                header={<Typography.Title level={4}>Alamat</Typography.Title>}
                dataSource={dataAlamat}
                renderItem={item =>
                    <List.Item>
                        <Typography.Text strong>{item.title}</Typography.Text>
                        <Typography.Text copyable>{item.text}</Typography.Text>
                    </List.Item>
                }
            />
            <List
                size="small"
                bordered
                header={<Typography.Title level={4}>Orang Tua / Detail Wali</Typography.Title>}
                dataSource={dataOrangTua}
                renderItem={item =>
                    <List.Item>
                        <Typography.Text strong>{item.title}</Typography.Text>
                        <Typography.Text copyable>{item.text}</Typography.Text>
                    </List.Item>
                }
            />
            <List
                size="small"
                bordered
                header={<Typography.Title level={4}>Rincian Lain-Lain</Typography.Title>}
                dataSource={dataRincian}
                renderItem={item =>
                    <List.Item>
                        <Typography.Text strong>{item.title}</Typography.Text>
                        <Typography.Text copyable>{item.text}</Typography.Text>
                    </List.Item>
                }
            />
        </Space>
    )
}

export default Profile;