import React from 'react'
import { Tabs, Button, Form } from 'antd';
import { Tab1 } from './Tab';

const { TabPane } = Tabs;

const FormData = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Success:', values);
    };

    return (
        <div className="animated fadeIn">
            <div className="card-container">
                <Form
                    layout="vertical"
                    name="Form Siswa"
                    form={form}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Tabs type="card">
                        <TabPane tab="Pendaftaran Siswa" key="1">
                            <Tab1 />
                        </TabPane>
                        <TabPane tab="Detail Orang Tua" key="2">
                            <p>Content of Tab Pane 2</p>
                        </TabPane>
                        <TabPane tab="Tambah Rincian" key="3">
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                        </TabPane>
                    </Tabs>
                    <Form.Item>
                        <Button className="float-right" type="primary" htmlType="submit">
                            Simpan
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default FormData;
