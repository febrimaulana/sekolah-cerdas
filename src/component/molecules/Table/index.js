import React, { Fragment } from 'react';
import { Table, Pagination, Button, Tooltip, Space, Input } from 'antd';
import { PrinterOutlined, DownloadOutlined, PlusOutlined } from '@ant-design/icons';

import FormModal from '../../../component/atom/FormDinamis';
const { Search } = Input;

const TableDefault = ({ dataTable , dataForm, dataPagination, form, onCreate, closeModal, showModalTambah, showModalUbah, handlePagination, formType, visible, countdata }) => {        
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
                columns={dataTable.columns}
                dataSource={dataTable.dataRow}
                onChange={dataTable.handleSort}
                bordered
                size="small"
                rowKey={dataTable.idRow}
                loading={dataTable.loading}
                pagination={false}
            />
            <Pagination
                current={dataPagination.current}                
                showSizeChanger
                onChange={dataPagination.handlePagination}
                onShowSizeChange={dataPagination.handlePagination}
                total={dataPagination.countData}
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