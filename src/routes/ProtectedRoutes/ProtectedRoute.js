import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { protectedRoutes } from '../ConfigRoutes/configRoutes'

function ProtectedRoute({ component: Component, ...rest }) {
    const isAuth = useSelector((state) => state.userLoginStatus.value)
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) {
                    return <Component />
                } else {
                    return <Redirect to={{ pathName: protectedRoutes.userDashboardPage, state: props.location }} />
                }
            }}
        />
    )
}

export default ProtectedRoute
