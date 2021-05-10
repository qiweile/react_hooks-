import { withRouter, Redirect, connect, useHistory } from 'umi'
const Authentication = (props: any) => {
    let {location:{ pathname, search }} = useHistory()
    if (props.isLogin) {
        return (
            <>
                { props.children }
            </>
        )
    }
    return <Redirect to={{ pathname: '/login', route: `${pathname + search}`}} />
}
export default connect(((state: any) => ({
    isLogin: state.Login.isLogin
})))(withRouter(Authentication))