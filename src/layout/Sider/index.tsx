import { Menu, message } from 'antd';
import { useEffect, useState } from 'react'
import styles from './index.scss'
import { connect } from 'dva'
import { getMenuList } from '@/services/menu'
import { useIntl, useHistory } from 'umi';
const { SubMenu } = Menu;
export default connect(((state: any) => ({ state: state.Login })))(props => {
    let { userId, isLogin, userName } = props.state
    // formatMessage: 多语言切换方法
    const { formatMessage } = useIntl()
    const { location, push } = useHistory()
    const [menuList, setMenuList] = useState([])
    useEffect(() => {
        let loginInformation = {
            userId,
            isLogin,
            userName
        }
        getMenuList(loginInformation).then(res => {
            let { data: { list }, errorCode, success, errorMsg } = res
            if (success) {
                setMenuList(list)
            } else {
                message.error(errorMsg)
            }
        })
    }, [])
    const defaultSelectedKeys = (pathname:string):string[] => {
        if(pathname == '' ) return []
        let paths: string[] = pathname.split('/')
        let selectedKeys: string[] = []
        paths.forEach((ele, i) => {
            selectedKeys.push(paths.slice(0,paths.length - i).join('/'));
        })
        return selectedKeys
    }
    const handleClick = (item: any) => {
        push(item.key)
    }
    return (
        <div className={styles.t_npx_sider}>
            <Menu
                onClick={handleClick}
                defaultSelectedKeys={defaultSelectedKeys(location.pathname)}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
                {menuList && menuList.length > 0 && menuList.map(item => (<SubMenu key={item.path} title={formatMessage({ id: item.id, defaultMessage: item.name })}>
                    {item.children && item.children.length > 0 && item.children.map(ele => <Menu.Item key={ele.path}>
                        {formatMessage({ id: ele.id, defaultMessage: ele.name })}
                    </Menu.Item>)}
                </SubMenu>))}
            </Menu>
        </div>
    )
})