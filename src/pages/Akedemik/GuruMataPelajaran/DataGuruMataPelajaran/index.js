import React, { useEffect, useState } from 'react';
import  { Redirect } from 'react-router-dom'
import { Button, Tooltip, Space, Select, Row, Col, Divider,TimePicker,Modal, Form, Input, Radio, Checkbox, DatePicker, Upload ,Card } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import moment from 'moment';
//import TableDefault from '../../../../component/molecules/Table';
import { dataForm } from './data';
import { useSelector, useDispatch } from 'react-redux';
import { getDataJadwalClass, addDataJadwalClass, deleteDataJadwalClass, updateDataJadwalClass} from '../../../../config/redux/action/jadwalkelas';
import { getselectSubclass, getselectclass} from '../../../../config/redux/action/onchangeclass';

import { ModalConfirm } from '../../../../component/atom/Notifikasi';

const DataGuruMataPelajaran = () => {  
    
    const onFinish = values => {
        console.log('Received values of form:', values);
      };

    const [form] = Form.useForm();
    // State
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10
    })
    
   
    //fungtionto setting time
    function onChangetime(time, timeString) {
        console.log(time, timeString);
      }
    // function to select
    const { Option } = Select;
   
    function onBlur(event) {
        console.log('blur');
    }

    
    function onFocus() {
        console.log('focus');
      }

      function onSearch(val) {
        console.log('search:', val);
        
      }
      
      function onChange(value) {
        console.log(`selected ${value}`);
        dispatch(getselectSubclass({idsubclass: value}));
        
      }

    // ====================
   function saveForm(){
    console.log('dfdsffsdfsfsdfsfsdf');
    form
    .validateFields()
    .then(values => {
        form.resetFields();
        console.log(moment(values.username).format());
    })

   }
    // global state
    const stateRoot = useSelector(state => state.root);
    const stateJadwalkelas = useSelector(state => state.jadwalkelas);
    const statelistsclass = useSelector(state => state.onchangeclass);
    const statelistsubclass = useSelector(state => state.onchangesubclass);

   
    

    const dispatch = useDispatch();
    // End State

    // handle CRUD
    const onCreate =  async (values, status) => {        
        const date = moment(new Date(values.dateOfBirthStudent)).format('YYYY-MM-DD')
        const dataInput = {
            ...values,
            dateOfBirthStudent: date
        }
        
        if (status === 'tambah') {                                  
            await dispatch(addDataJadwalClass(dataInput));
            dispatch(addDataJadwalClass({pagination: pagination}));
        } else if (status === 'ubah') {            
            const id = stateRoot.form[0].id;
            const dataUbah = {
                ...dataInput,
                idSubClass: id
            }
            await dispatch(updateDataJadwalClass(dataUbah));
            dispatch(getDataJadwalClass({pagination: pagination}));
        }
    };

    const handleHapus = (record) => {         
        ModalConfirm(
            'Apa anda yakin ?',
            'Data yang sudah dihpaus tidak bisa kembali lagi!',
            'Hapus',
            async () => {
                await dispatch(deleteDataJadwalClass({idStudent: record.id_siswa}));
                dispatch(getDataJadwalClass({pagination: pagination}));
            }
        )           
    }
    // end crud handle

    // handle table action
    const handleSort = (pagination, filters, sorter) => {
        console.log(sorter)
    }

    const handlePagination = (current, pageSize) => {        
        let data = {
            page: current,
            limit: pageSize
        }
        setPagination(data)
        dispatch(getDataJadwalClass({pagination: pagination}));
    }

    // end handle table action

    const showModalUbah = (record) => {
        let data = [{
            iidSubClassd: record.id,
        },{
            name: 'section',
            value: record.section
        },]

        dispatch({type: 'SET_FORM', value: data})
        dispatch({type: 'SET_MODAL', value: true})
        dispatch({type: 'SET_FORM_TYPE', value: 'ubah'})
    }

    const showModalTambah = () => {
       // dispatch({type: 'SET_MODAL', value: true})
       // dispatch({type: 'SET_FORM_TYPE', value: 'tambah'})
        return <Redirect to='/login'  />
    }

    const closeModal = () => {
        let data = [{
            name: 'section',
            value: ''
        }, ]

        dispatch({type: 'SET_FORM', value: data})
        dispatch({type: 'SET_MODAL', value: false})
    }

    // end modal
   

    useEffect(() => {
        dispatch(getDataJadwalClass({pagination: pagination}));
       dispatch(getDataJadwalClass({pagination: pagination}));
       dispatch(getselectclass({pagination: pagination}));
        
        
        return () => {
            dispatch(getDataJadwalClass({pagination: pagination}));
        }
    }, [dispatch, pagination])    

    return (
        <div className="animated fadeIn">
            <div className="card">
                <div className="card-header">
                    <i className="icon-user"></i> Guru Mata Pelajaran {stateRoot.name}
                </div>
                <div className="card-body">
                <Row gutter={16}>
     
      <Col className="gutter-row" span={6}>
        <div > <Select
                    showSearch
                    style={{ width: 500 }}
                    placeholder="Pilih Kelas"
                    optionFilterProp="children"
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    
                     <Option value=""></Option>   
                    { Object.entries(statelistsclass.data).map((v,k) => <option key={k} value={v[0]}>{v[1]}</option>) }   
                </Select>
                </div>
      </Col>
      <Col className="gutter-row" span={2}>
        <div ></div>
      </Col>
      <Col className="gutter-row" span={6}>
        <div>  
                <Select
                    showSearch
                    style={{ width: 500 }}
                    placeholder="Pilih SubKelas"
                    optionFilterProp="children"
                   
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value=""></Option>
                    { Object.entries(statelistsubclass.data).map((v,k) => <option key={k} value={v[0]}>{v[1]}</option>) }   
                </Select></div>
      </Col>
    </Row>   
               
                
              
                </div>
                <div className="card-body">
                    <Form name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off">
                    <Card>                  
      <Form.List name="users">
          
        {(fields, { add, remove }) => {

          return (
            <div>
                 <Form.Item>
              
              <Button
                 style={{ width: 300 }}
                type="dashed"
                onClick={() => {
                  add();
                }}
                block 
              >
                <PlusOutlined /> Add field
              </Button>
              
            </Form.Item>
              {fields.map(field => (
                <Space key={field.key}>
                  <Form.Item
                    {...field}
                    name={[field.name, 'first']}
                    fieldKey={[field.fieldKey, 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                     <Select               
                        placeholder="Select a person"
                        optionFilterProp="children"
                        style={{ width: 500 }}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                                        >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    {...field}
                    name={[field.name, 'last']}
                    fieldKey={[field.fieldKey, 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Select               
                        placeholder="Select a person"
                        optionFilterProp="children"
                        style={{ width: 500 }}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                                        >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                        
                  <MinusCircleOutlined
                    onClick={() => {
                      remove(field.name);
                    }}
                  />
                </Space>
                
              ))
              
              }
               { Object.entries(statelistsclass.data).map((v,k) =>   
                <Space  key={k}>

                  <Form.Item
                 
                    name={['field.name', 'first']}
                    fieldKey={['field.fieldKey', 'first']}
                    rules={[{ required: true, message: 'Missing first name' }]}
                  >
                     <Select 
                                  
                        placeholder="Select a person"
                        optionFilterProp="children"
                        style={{ width: 500 }}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                                        >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                 
                    name={['field.name', 'last']}
                    fieldKey={['field.fieldKey', 'last']}
                    rules={[{ required: true, message: 'Missing last name' }]}
                  >
                    <Select               
                        placeholder="Select a person"
                        optionFilterProp="children"
                        style={{ width: 120 }}
                        style={{ width: 500 }}
                        filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                                        >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                  </Form.Item>
                        
                  <MinusCircleOutlined
                    onClick={() => {
                      
                    }}
                  />
                </Space>
                ) } 
             
            </div>
          );
        }}
        
      </Form.List>
      </Card>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
                </div>
            </div>            
        </div>
    )
}

export default DataGuruMataPelajaran;