let login = {
    data: {
        accountIndividualDTO: null,
        accountLegalEntityDTO: {
            accountSourceId: 5,
            businessName: "数据查询企业",
            email: "1234@qq.com",
            entityCertificationStatusId: 4,
            entityName: "数据查询企业",
            id: 11400068,
            idNum: null,
            idType: null,
            isParent: true,
            legalEntityId: 10100054,
            legalIdNum: "330108198709093318",
            legalIdType: "1",
            legalName: "赵法人",
            loginName: "13388600000",
            mobile: "13388600000",
            parentId: 0,
            password: "IRY6Ql93J3iTgdg1a2Bo4g==",
            phone: null,
            realLevel: null,
            roleIds: [],
            uniscid: "123212345454354524",
            userId: null,
            userName: null
        },
        menuList: null,
        mobile: '13388600000',
        opUserDTO: null,
        roleIdList: null,
        roles: null,
        subSystemIds: [],
        userId: 11400068,
        userName: "赵法人",
        userType: "legal",
        isLogin: true
    },
    errorCode: null,
    errorMsg: null,
    extraData: null,
    success: true,
    traceId: null
}

export default {
    'POST /api/login': login
}
