import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Row, Upload, InputNumber } from 'antd';
import React from 'react';

const Tab2 = () => {

    // const onChange = (value, type) => {
    //     console.log(type, value);
    // }


    const normFile = e => {
        console.log(e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <Card>
            <Row>
                <Col span={6}>
                    <Form.Item
                        label="Nama Ayah"
                        name="NamaAyah"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Nama ayah tidak boleh kosong!' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Nomor Telepon Ayah"
                        name="TeleponAyah"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Nomer telepon ayah tidak boleh kosong!' },
                            { type: 'number', message: 'Input harus number!' }
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Pekerjaan Ayah"
                        name="PekerjaanAyah"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Pekerjaan ayah tidak boleh kosong!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="FotoAyah"
                        label="Foto Ayah"
                        valuePropName="fileList"
                        getValueFromEvent={normFile}
                        wrapperCol={{ span: 20 }}
                    >
                        <Upload name="upload" action="/upload.do" listType="picture">
                            <Button>
                                <UploadOutlined /> Upload foto ayah
                            </Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Form.Item
                        label="Nama Ibu"
                        name="NamaIbu"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Nama ibu tidak boleh kosong!' }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Nomor Telepon Ibu"
                        name="TeleponIbu"
                        wrapperCol={{ span: 20 }}
                        rules={[
                            { required: true, message: 'Nomer Telepon Ibu tidak boleh kosong!' },
                            { type: 'number', message: 'Input harus number' }
                        ]}
                    >
                        <InputNumber style={{ width: '100%' }} />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        label="Pekerjaan Ibu"
                        name="PekerjaanIbu"
                        wrapperCol={{ span: 20 }}
                        rules={[{ required: true, message: 'Pekerjaan ibu tidak boleh kosong!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item
                        name="FotoIbu"
                        label="Foto Ibu"
                        getValueFromEvent={normFile}
                        valuePropName="fileList"
                        wrapperCol={{ span: 20 }}
                    >
                        <Upload name="upload" action="/upload.do" listType="picture">
                            <Button>
                                <UploadOutlined /> Upload foto ibu
                            </Button>
                        </Upload>
                    </Form.Item>
                </Col>
            </Row>
        </Card>
    )
}

export default Tab2;