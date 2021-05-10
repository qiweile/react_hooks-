import { Layout, ConfigProvider } from 'antd'
import Header from './Header'
import Sider from './Sider'
import Authentication from '@/hooks/authentication'
import { useIntl } from 'umi';
import styles from './index.scss'
export default (props: any) => {
    const { formatMessage } = useIntl();
    return (
        <Authentication>
            <ConfigProvider>
                <Layout className={styles.main}>
                    <Header />
                    <Layout>
                        <div className={styles.subject}>
                            <Sider />
                            {/* {formatMessage( { id: 'WELCOME_TO_UMI_WORLD', defaultMessage: '你好，旅行者', }, { name: '小伙', }, )} */}
                            <div>
                                {props.children}
                            </div>
                        </div>
                    </Layout>
                </Layout>
            </ConfigProvider>
        </Authentication>
    )
}