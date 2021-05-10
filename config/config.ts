// import { defineConfig } from 'umi';
// // import routes from './router'
// export default defineConfig({
//     layout: {},
//     plugins: [
//         [
//             'umi-plugin-react',
//             {
//                 antd: true,
//                 dva: {
//                     hmr: true,
//                 },
//             }
//         ]
//     ],
//     sass: {
//         implementation: require('node-sass'),
//     },
//     nodeModulesTransform: {
//         type: 'none',
//     },
//     routes: [
//         // {
//         //     path: '/login',
//         //     component: '@/pages/login'
//         // },
//         {
//             path: '/',
//             redirect: '@/pages/login',
//         },
//         // {
//         //     path: '/',
//         //     // Routes: ['@/pages/index'],
//         //     // component: '@/pages/index',

//         //     component: '@/pages/login',
//         //     // wrappers: ['@/login/index.tsx'],
//         //     routes: [
//         //         { path: '/', component: './mainPages/main' },
//         //     ],
//         // },
//         // {
//         //     component: '@/pages/404'
//         // },
//     ],
//     fastRefresh: {},
// });