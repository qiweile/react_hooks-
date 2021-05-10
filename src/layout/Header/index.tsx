// import logo from '@/assets/logo.svg';
import styles from './index.scss'
import userImg from '@/assets/userImg.png'
import { SearchOutlined, BellOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Select, Tooltip, Badge, Menu, Dropdown } from 'antd'
import headLogic from '@/hooks/header'
import { SelectLang, useIntl, connect } from 'umi'
export default connect(((state) => ({ userName: state.Login.userName })))(props => {
    const { Option } = Select
    const { formatMessage } = useIntl()
    const { isSelect, switchSelectShow } = headLogic()
    const optionClick = ({ key }) => {
        const { dispatch } = props;
        switch (key) {
            case '0':

                break;
            case '1':

                break;
            case '2':
                dispatch({
                    type: 'Login/logOut',
                    payload: false,
                })
                break;
            default:
                break;
        }
    };
    const menu = (
        <Menu onClick={optionClick}>
            <Menu.Item key="0">
                <span className="pointer">{formatMessage({ id: 'menu.account.center' })}</span>
            </Menu.Item>
            <Menu.Item key="1">
                <span className="pointer">{formatMessage({ id: 'menu.account.settings' })}</span>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="2">
                <span className="pointer">{formatMessage({ id: 'menu.account.logout' })}</span>
            </Menu.Item>
        </Menu>
    )
    return (
        <header className={styles.t_npx_header}>
            <a className={styles.logoBox} href="/">
                {/* <img src={logo} className={styles.img} alt="logo" /> */}
                <h1 className={styles.name}>
                    Ant Design Pro
                </h1>
            </a>
            <div className={styles.headRight}>
                <div>
                    <SearchOutlined onClick={switchSelectShow} className={styles.icon} />
                </div>
                <div className={isSelect ? styles.showSelect : styles.noneSelect}>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Select a person"
                        optionFilterProp="children"
                        // onChange={onChange}
                        // onFocus={onFocus}
                        // onBlur={onBlur}
                        // onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="tom">Tom</Option>
                    </Select>
                </div>
                <div>
                    <Tooltip placement="bottom" title="使用文档">
                        <span>
                            <QuestionCircleOutlined className={styles.icon} />
                        </span>
                    </Tooltip>
                </div>
                <div>
                    <Badge size="small" count={56} overflowCount={100} offset={[-8, -5]}>
                        <BellOutlined className={styles.icon} />
                    </Badge>
                </div>
                <div>
                    <Dropdown overlay={menu} getPopupContainer={() => document.body} placement="bottomCenter">
                        <div className={styles.userInformation}>
                            <span className={styles.userBox}>
                                <img src={userImg} className={styles.userImg} alt="头像" />
                            </span>
                            <span>{props.userName}</span>
                        </div>
                    </Dropdown>
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <SelectLang className={styles.lang} />
                </div>
            </div>
        </header>
    )
})