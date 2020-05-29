import React, { Fragment, useRef } from 'react';
import { Table, Pagination, Button, Tooltip, Space, Input } from 'antd';
import { PrinterOutlined, DownloadOutlined, PlusOutlined } from '@ant-design/icons';

import CsvDownloader from 'react-csv-downloader';
import { useReactToPrint } from 'react-to-print';
import PrintTemplate from 'react-print';
import moment from 'moment';

import FormModal from '../../../component/atom/FormDinamis';
const { Search } = Input;

class TablePrint extends React.Component {

    render() {

        let data = this.props.dataTable;
        let columns = data.columns;
        let row = data.dataRow;
        columns.pop();

        return (
            <PrintTemplate>
                <div className="container-fluid">
                    <div className="row mb-5">
                        <img src="http://demo.sekolahcerdas.id/backend/images/s_logo.png" alt="print-logo" />
                    </div>
                    <div className="row">
                        <Table
                            columns={columns}
                            dataSource={row}
                            bordered
                            size="small"
                            rowKey={data.idRow}
                            pagination={false}
                        />
                    </div>
                </div>
            </PrintTemplate>
        )
    }
}

const TableDefault = ({ dataTable, dataForm, dataPagination, form, onCreate, closeModal, showModalTambah, formType, visible }) => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        copyStyles: true,
        content: () => componentRef.current
    });

    return (
        <Fragment>
            <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 200, marginBottom: 20 }}
            />
            <Space className="float-right">
                <Tooltip title="Print">
                    <Button type="default" onClick={handlePrint} shape="circle" >
                        <PrinterOutlined />
                    </Button>
                </Tooltip>
                <CsvDownloader separator="|" datas={dataTable.dataRow} filename={moment(new Date()).format('YYYYMMDDHHmmss')} >
                    <Tooltip title="Download CSV">
                        <Button type="default" shape="circle" >
                            <DownloadOutlined />
                        </Button>
                    </Tooltip>
                </CsvDownloader>
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
            <TablePrint dataTable={dataTable} ref={componentRef} />
        </Fragment>
    )
}

export default TableDefault;