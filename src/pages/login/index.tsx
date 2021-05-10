import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect, Redirect } from 'umi'
import { strToObject } from '@/utils/base'
import styles from './index.scss'

const Login = props => {
    const { dispatch, location: { route } } = props;
    console.log(props,'location')
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const onFinish = (values) => {
        dispatch({
            type: 'Login/query',
            payload: { ...values },
        })
    };
    if (!props.isLogin) {
        if ( route ) {
            dispatch({ type: 'Login/setUrl', payload: route })
        }
        let loginInformation = document.cookie ? document.cookie : 'null'
        if ( loginInformation && loginInformation.indexOf('null') < 0) {
            // 将cookie中的登录信息格式化为输入框中的键值对
            let loginValues = strToObject(unescape(loginInformation.split('=')[1]).replace(/,/g, '&'))
            let values = {
                ...loginValues,
                remember: false
            }
            onFinish(values)
        }
        return (
            <div className={styles.logMain}>
                <p className={styles.titleSty}>后台管理系统</p>
                <div className={styles.login}>
                    <div className={styles.bar}>欢迎登陆</div>
                    <Form layout="vertical" name="basic" preserve={false} initialValues={{ username: '', password: '', remember: false }} onFinish={onFinish} onFinishFailed={onFinishFailed} >
                        <Form.Item className={styles.formItem} label="用户账号" name="username"
                            rules={[{ required: true, message: '请输入账号!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户账号" />
                        </Form.Item>
                        <Form.Item className={styles.formItem} label="登陆密码" name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="请输入用户密码" />
                        </Form.Item>
                        <Form.Item className={styles.remember} name="remember" valuePropName="checked">
                            <Checkbox>记住密码</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button className={styles.Btn} htmlType="submit">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    } else {
        // 只有在登录成功的情况下访问 login 页面次重定向才起作用
        return <Redirect to="/" />
    }
};
export default connect(((state: any) => ({ isLogin: state.Login.isLogin })))(Login)
