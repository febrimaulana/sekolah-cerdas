import React, { Fragment } from 'react';
import { Table, Pagination, Button, Tooltip, Space, Input } from 'antd';
import { PrinterOutlined, DownloadOutlined, PlusOutlined } from '@ant-design/icons';

import FormModal from '../../../component/atom/FormDinamis';
const { Search } = Input;

const TableDefault = ({ dataForm, form, onCreate, closeModal, showModalTambah, showModalUbah, columns, dataRow, handleSort, handlePagination, formType, visible }) => {
    return (
        <Fragment>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200, marginBottom: 20 }}
            />
            <Space className="float-right">
                <Tooltip title="Print">
                    <Button type="default" shape="circle" >
                        <PrinterOutlined />
                    </Button>
                </Tooltip>
                <Tooltip title="Download CSV">
                    <Button type="default" shape="circle" >
                        <DownloadOutlined />
                    </Button>
                </Tooltip>
                <Tooltip title="Tambah Data">
                    <Button type="default" shape="circle" onClick={showModalTambah} >
                        <PlusOutlined />
                    </Button>
                </Tooltip>
            </Space>
            <Table
                columns={columns}
                dataSource={dataRow}
                onChange={handleSort}
                bordered
                size="small"
                rowKey="id_siswa"
                pagination={false}
            />
            <Pagination
                defaultCurrent={1}
                showSizeChanger
                onChange={handlePagination}
                onShowSizeChange={handlePagination}
                total={1000}
                className="mt-4 float-right"
            />
            <FormModal
                formType={formType}
                visible={visible}
                onCancel={closeModal}
                onCreate={onCreate}
                dataForm={dataForm}
                fields={form}
            />
        </Fragment>
    )
}

export default TableDefault;