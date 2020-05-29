import { Row, Col, Card, Avatar, Divider, Typography, Tabs, Space, Tooltip } from 'antd';
import React from 'react';
import { EditOutlined, ReadOutlined, DislikeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Profile, Biaya } from '../../../component/molecules/InformasiSiswa';

const { TabPane } = Tabs;

const menu = (
    <Space>
        <Tooltip placement="top" title="Ubah">
            <Link to="/siswa/data/tambah">
                <EditOutlined />
            </Link>
        </Tooltip>
        <Tooltip placement="top" title="Rincian Masuk">
            <ReadOutlined onClick={() => alert('oke')} />
        </Tooltip>
        <Tooltip placement="top" title="Nonaktifkan">
            <DislikeOutlined onClick={() => alert('oke')} />
        </Tooltip>
    </Space>
)

const DetailSiswa = () => {
    return (
        <div className="animated fadeIn">
            <h1>Informasi Siswa</h1>
            <Row>
                <Col span={8}>
                    <Card className="center" style={{ width: '100%', height: 420, marginBottom: 200 }}>
                        <Row className="justify-content-center">
                            <Avatar size={64} src="https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407__340.png" />
                        </Row>
                        <Row className="justify-content-center mt-3">
                            <h6>Febri Maulana Yunus</h6>
                        </Row>
                        <Divider />
                        <Row className="ant-row-space-between">
                            <Typography.Text strong>Nomor Pendaftaran</Typography.Text>
                            <Typography.Text copyable>04-CLASS4-00004</Typography.Text>
                            <Divider style={{ padding: 0, marginTop: 0 }} />
                        </Row>
                        <Row className="ant-row-space-between">
                            <Typography.Text strong>NISN</Typography.Text>
                            <Typography.Text copyable>00004</Typography.Text>
                            <Divider style={{ padding: 0, marginTop: 0 }} />
                        </Row>
                        <Row className="ant-row-space-between">
                            <Typography.Text strong>Kelas</Typography.Text>
                            <Typography.Text copyable>Kelas 4 (2019-20)</Typography.Text>
                            <Divider style={{ padding: 0, marginTop: 0 }} />
                        </Row>
                        <Row className="ant-row-space-between">
                            <Typography.Text strong>Sub Kelas</Typography.Text>
                            <Typography.Text copyable>A</Typography.Text>
                            <Divider style={{ padding: 0, marginTop: 0 }} />
                        </Row>
                        <Row className="ant-row-space-between">
                            <Typography.Text strong>Jenis Kelamin</Typography.Text>
                            <Typography.Text copyable>Female</Typography.Text>
                            <Divider style={{ padding: 0, marginTop: 0 }} />
                        </Row>
                    </Card>
                </Col>
                <Col className="ml-3" span={15}>
                    <Card>
                        <Tabs tabBarExtraContent={menu}>
                            <TabPane tab="Profile" key="1">
                                <Profile />
                            </TabPane>
                            <TabPane tab="Biaya" key="2">
                                <Biaya />
                            </TabPane>
                            <TabPane tab="Ujian" key="3">
                                Content of tab 3
                            </TabPane>
                            <TabPane tab="Dokumen" key="4">
                                Content of tab 3
                            </TabPane>
                            <TabPane tab="Linimasa" key="5">
                                Content of tab 3
                            </TabPane>
                        </Tabs>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default DetailSiswa;