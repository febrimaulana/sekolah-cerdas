import React from 'react';
import { Modal, Form, Input, Radio, Col, Checkbox, Row, Select, DatePicker, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

const FormModal = ({ visible, onCreate, onCancel, formType, dataForm, fields }) => {
    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title={`From ${formType}`}
            okText="Simpan"
            cancelText="Batal"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values, formType);
                    })
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                fields={fields}
                initialValues={{
                    modifier: 'public',
                }}
            >
                {
                    dataForm.map((item, key) => {
                        return (
                            <Form.Item key={key}
                                name={item.name}
                                label={item.label}
                                rules={item.rules}
                            >
                                {
                                    item.type === 'radio' ? (
                                        <Radio.Group>
                                            {
                                                item.radio.map((radio, key) => {
                                                    return (
                                                        <Radio key={key} value={radio.value}>{radio.name}</Radio>
                                                    )
                                                })
                                            }
                                        </Radio.Group>
                                    ) : item.type === 'password' ? (
                                        <Input.Password type={item.type} />
                                    ) : item.type === 'checkbox' ? (
                                        <Checkbox.Group>
                                            <Row>
                                                {
                                                    item.checkbox.map((item, key) => {
                                                        return (
                                                            <Col key={key}>
                                                                <Checkbox value={item.value} style={{ lineHeight: '32px' }}>
                                                                    {item.name}
                                                                </Checkbox>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Checkbox.Group>
                                    ) : item.type === 'select' ? (
                                        <Select showSearch placeholder="Please select a country">
                                            {
                                                item.select.map((select, key) => {
                                                    return (
                                                        <Select.Option key={key} value={select.value}>{select.name}</Select.Option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    ) : item.type === 'select-multiple' ? (
                                        <Select mode="multiple" placeholder="Please select favourite colors">
                                            {
                                                item.select.map((select, key) => {
                                                    return (
                                                        <Select.Option key={key} value={select.value}>{select.name}</Select.Option>
                                                    )
                                                })
                                            }
                                        </Select>
                                    ) : item.type === 'date' ? (
                                        <DatePicker placeholder="Pilih Tanggal" style={{width: '100%'}} />
                                    ) : item.type === 'textarea' ? (
                                        <TextArea rows={3} />
                                    ) : item.type === 'upload' ? (
                                        <Upload name="upload" action="/upload.do" listType="picture">
                                            <Button>
                                                <UploadOutlined /> Click to upload
                                            </Button>
                                        </Upload>
                                    ) : (
                                        <Input type={item.type} />
                                    )
                                }
                            </Form.Item>
                        )
                    })
                }
            </Form>
        </Modal>
    );
};

export default FormModal;