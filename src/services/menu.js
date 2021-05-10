import http from '@/utils/http';
export async function getMenuList(params) {
    console.log('请求信息',params)
    return http('api/menuList', { method: 'POST', data: params })
}