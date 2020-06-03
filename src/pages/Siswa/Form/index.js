import React from 'react'
import { Tabs, Button, Form } from 'antd';
import { Tab1, Tab2 } from './Tab';
import { getBase64 } from '../../../utils/config';

const { TabPane } = Tabs;

const FormData = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Success:', values);
    };

    const onChange = (value, type) => {
        console.log(type, value);
    }

    const normFile = e => {
        getBase64(e.file.originFileObj).then(res => {
            console.log(res);
        })
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
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
                            <Tab1 onChange={onChange} normFile={normFile} />
                        </TabPane>
                        <TabPane tab="Detail Orang Tua" key="2">
                            <Tab2 />
                        </TabPane>
                        <TabPane tab="Tambah Rincian" key="3">
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                            <p>Content of Tab Pane 3</p>
                        </TabPane>
                    </Tabs>
                    <Form.Item>
                        <Button className="float-right mt-3" type="primary" htmlType="submit">
                            Simpan
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default FormData;
