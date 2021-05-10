let menuList = {
    data: {
        list: [
            {
                name: '主菜单',
                path: '/',
                id: 'menu.home',
                children:[
                    {
                        name: '列表页',
                        path: '/',
                        id: 'menu.listPage'
                    },
                    {
                        name: '详情页',
                        path: '/detail',
                        id: 'menu.detailsPage'
                    },
                    {
                        name: '结果页',
                        path: '/resultsPage',
                        id: 'menu.resultsPage'
                    }
                ]
            }
        ]
    },
    errorCode: null,
    errorMsg: null,
    extraData: null,
    success: true,
    traceId: null
}

export default {
    'POST /api/menuList': menuList
}
