import React from 'react';
import { Card, Row, Col, Form, Input, Select, DatePicker, Upload, Button, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Tab1 = ({ normFile, onChange }) => {

    return (
        <Card>
            <Row>
                <Col span={6}>
                    <Form.Item
                        label="Nomer Pendaftaran"
                        name="NoPendaftaran"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Nomer Pendaftaran tidak boleh kosong!' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="NISN"
                        name="NISN"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Nomer NISN tidak boleh kosong!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Kelas"
                        name="kelas"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Silahkan pilih kelas!' }]}
                    >
                        <Select showSearch placeholder="Pilih" onChange={(value) => onChange(value, 'kelas')}>
                            <Select.Option value="1">Kelas 1</Select.Option>
                            <Select.Option value="2">Kelas 2</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Sub Kelas"
                        name="subKelas"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Silahakan Pilih Subkelas!' }]}
                    >
                        <Select showSearch placeholder="Pilih" onChange={(value) => onChange(value, 'subKelas')}>
                            <Select.Option value="china">China</Select.Option>
                            <Select.Option value="usa">U.S.A</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Form.Item
                        label="Nama Depan"
                        name="namaDepan"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Nama Depan tidak boleh kosong!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Nama Belakang"
                        name="namaBelakang"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Nama belakang tidak boleh kosong!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Jenis Kelamin"
                        name="jeniskelamin"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Silahkan pilih jenis kelamin!' }]}
                    >
                        <Select showSearch placeholder="Pilih" onChange={(value) => onChange(value, 'kelas')}>
                            <Select.Option value="Laki - Laki">Laki - Laki</Select.Option>
                            <Select.Option value="Perempuan">Perempuan</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Tanggal Lahir"
                        name="tanggalLahir"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Silahakn pilih tanggal lahir!' }]}
                    >
                        <DatePicker placeholder="Pilih" style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Form.Item
                        label="Kategori"
                        name="kategori"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Silahkan pilih kategori!' }]}
                    >
                        <Select showSearch placeholder="Pilih" onChange={(value) => onChange(value, 'kelas')}>
                            <Select.Option value="Beasiswa">Jalur Beasiswa</Select.Option>
                            <Select.Option value="Pindahan">Pindahan</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Agama"
                        name="agama"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Agama tidak boleh kosong!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Nomor Ponsel"
                        name="NomorPonsel"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Nomer ponsel tidak boleh kosong' },
                            { type: 'number', message: 'Input harus number' }
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Email"
                        name="Email"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Email tidak boleh kosong!' },
                            { type: 'email', message: 'Input email tidak valid' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Form.Item
                        label="Tinggi Badan"
                        name="TinggiBadan"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Tinggi badan tidak boleh kosong!' },
                            { type: 'number', message: 'Input harus number' }
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Berat Badan"
                        name="BeratBadan"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Berat badan tidak boleh kosong!' },
                            { type: 'number', message: 'Input harus number' }
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item
                        label="Tanggal Pengukuran"
                        name="TanggalPengukuran"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Silahkan pilih tanggal pengukuran!' }]}
                    >
                        <DatePicker placeholder="Pilih" style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Form.Item
                        name="foto"
                        label="Foto Siswa"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Silahkan pilih foto siswa' }
                        ]}
                    >
                        <Upload name="logo" action="/upload.do" listType="picture">
                            <Button>
                                <UploadOutlined /> Upload Foto Siswa
                            </Button>
                        </Upload>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Golongan Darah"
                        name="GoloanganDarah"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Silahkan pilih golongan darah!' }]}
                    >
                        <Select showSearch placeholder="Pilih" onChange={(value) => onChange(value, 'kelas')}>
                            <Select.Option value="0+">O+</Select.Option>
                            <Select.Option value="A+">A+</Select.Option>
                            <Select.Option value="B+">B+</Select.Option>
                            <Select.Option value="AB+">AB+</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Tambah Sodara Kandung"
                        name="SodaraKandung"
                        wrapperCol={{ span: 20 }}
                    >
                        <Select
                            mode="multiple"
                            onSearch={(value) => console.log(value)}
                            placeholder="Pilih"
                            showSearch
                        >
                            <Select.Option value="Yuni">Yuni</Select.Option>
                            <Select.Option value="Vika">Vika</Select.Option>
                            <Select.Option value="Dwi">Dwi</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
        </Card>
    )
}

export default Tab1;