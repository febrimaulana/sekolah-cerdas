import React from 'react';
import { notification, Modal } from 'antd';

import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

export const Notifikasi = (status, title, description) => {
    notification[status]({
        message: title,
        description: description,
        placement: 'bottomRight'
    });
}

export const ModalConfirm = (title, content, okText, onOk) => {
    confirm({
        title: title,
        icon: <ExclamationCircleOutlined />,
        content: content,
        okText: okText,
        cancelText: 'Batal',
        onOk() {
            onOk()
        }            
    }); 
}