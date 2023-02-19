import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = (props) => {
    const { loginData } = useSelector((store) => store.auth)

    return loginData ? (
        <Route path={props.path}>{props.children}</Route>
    ) : (
        <Redirect to="/login" />
    )
}

export default ProtectedRoute
