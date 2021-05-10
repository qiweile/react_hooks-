import { defineConfig } from 'umi';
import px2rem from 'postcss-plugin-px2rem';
export default defineConfig({
    mock: {},
    dva: {
        hmr: true,
    },
    nodeModulesTransform: {
        type: 'none',
    },
    locale: {
        default: 'zh-CN',
        antd: true,
        baseNavigator: true,
        baseSeparator: '-',
    },
    title: '信安数智',
    routes: [
        {
            path: '/login/',
            component: './login'
        },
        {
            path: '/',
            // 鉴权有坑鉴权下级一定要 component everyPage
            wrappers: [ '@/hooks/authentication' ],
            component: '@/layout',
            routes: [
                {
                    path: '/',
                    title: '内容列表',
                    component: './everyPages/main'
                },
                {
                    path: '/user',
                    title: '个人中心',
                    component: './everyPages/user'
                },
                {
                    component: '@/pages/404'
                }
            ],
        },
        {
            component: '@/pages/404'
        }
    ],
    extraPostCSSPlugins: [
        px2rem({
            rootValue: 25.6,//开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256
            propBlackList: ['border', 'border-top', 'border-left', 'border-right', 'border-bottom', 'border-radius'],//这些属性不需要转换
            selectorBlackList: ['t_npx','ant-']//以包含t_npx的class不需要转换
        })
    ],
    fastRefresh: {},
    proxy: {
        '/api': {
            // target: 'http://59.202.49.19:18089/',
            // target: 'http://59.202.50.21:18087/usercenter',
            // target: 'http://59.202.51.177:18080/',
            target: 'http://59.202.215.52:8091/',
            // target: 'http://59.202.215.52:8086',
            pathRewrite: {
                '^/api': '',
            },
            changeOrigin: true,
            // bypass: function (req, res, proxyOptions) {
            //     if (req.headers.accept && req.headers.accept.indexOf('html') !== -1) {
            //         return '/index.html';
            //     }
            // },
        },
    },
});