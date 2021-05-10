import { Modal, Button } from 'antd';
import {useState} from 'react'
import styles from './index.scss'
export default (props: any) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div>
            <div className={styles.title}>
                hhhh
            </div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Basic Modal"
            visible={isModalVisible}
                mask={false}
                maskClosable={false}
            onOk={handleOk}
            onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}
