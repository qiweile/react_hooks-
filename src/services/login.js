import http from '@/utils/http';
export async function fakeAccountLogin() {
    return http('/api/users');
}
export async function userLogin(params) {
    return http('api/login', { method: 'POST', data: params })
}