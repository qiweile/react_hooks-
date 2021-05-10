import { userLogin } from '@/services/login' //异步请求
import { history } from 'umi';
import { message } from 'antd'
import { handleWebStorage, getPageQuery } from '@/utils/base'
const userModel = {
    namespace: 'Login', //vuex的模块命名空间
    state: {
        //数据集合
        isLogin: handleWebStorage.getLocalData('isLogin', 'sessionStorage') || false,
        userName: handleWebStorage.getLocalData('userName', 'sessionStorage') || '',
        mobile: handleWebStorage.getLocalData('mobile', 'sessionStorage') || '',
        userId: handleWebStorage.getLocalData('userId', 'sessionStorage') || '',
        url: handleWebStorage.getLocalData('url', 'sessionStorage') || '/',
    },
    effects: {
        //相当于vuex的异步action方法集合
        //异步action方式
        // 登录
        *query(action, { call, put, select }) {
            let res = yield call(userLogin, action.payload)
            let { data, errorCode, success, errorMsg } = res
            if (success) {
                message.success('🎉 🎉 🎉  登录成功！');
                // 是否需要记住密码
                let { remember } = action.payload
                if (remember) {
                    let value = `username=${action.payload.username},password=${action.payload.password}`
                    let Days = 7;
                    let exp = new Date();
                    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
                    document.cookie = "loginInformation=" + escape(value) + ";expires=" + exp.toGMTString();
                }
                let { isLogin, userName, mobile, userId } = data
                yield put({ type: 'changeValue', isLogin, userName, mobile, userId })
                handleWebStorage.batchSetLocalData({ isLogin, userName, mobile, userId }, 'sessionStorage')
                let url = yield select(state => state.Login.url)
                history.push(url)
                yield put({ type: 'changeValue', url: 'null' })
            } else {
                history.push('/login')
                message.error(errorMsg)
            }
        },
        *setUrl(action, { put }) {
            yield put({ type: 'changeValue', url: action.payload })
            handleWebStorage.batchSetLocalData({ url: action.payload }, 'sessionStorage')
        },
        // 退出登录
        *logOut(value, { put }) {
            console.log(value, 'logOut')
            document.cookie = "loginInformation=username=null,password=null;expires=-1";
            yield put({ type: 'changeValue', isLogin: value.payload })
            handleWebStorage.batchSetLocalData({ isLogin: value.payload }, 'sessionStorage')
        }
    },
    reducers: {
        //相当于vuex 内的 mutation 内的同步 action 方法 state 是数据, action 包含 type 和 payload
        save(state, actions) {
            //state 当前命令空间内的数据
            //actions type 和 payload的{}
            //react数据是不可变数据,所以返回一个新的数据回去,用序列化,或者解构copy出新的数据也可以
            let newstate = JSON.parse(JSON.stringify(state));
            newstate.userName = actions.payload;
            return newstate;
        },
        changeValue(state, actions) {
            let newstate = {
                ...JSON.parse(JSON.stringify(state)),
                ...actions
            }
            return newstate;
        },
    },
    subscriptions: {
        //动态监听,当路由变化,或者其他数据变化,disptch出去一个值
        //vuex的数据监听对象
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/home') {
                    dispatch({ type: 'query', payload: 2, });
                }
            });
        },
    },
};
export default userModel;
