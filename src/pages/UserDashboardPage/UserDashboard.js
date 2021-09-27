import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import '../UserDashboardPage/UserDashboard.css'
import SidePanel from '../../components/SidePanel/SidePanel'
import MainPanel from '../../components/MainPanel/MainPanel'
import UserLogout from '../../components/UserLogout/UserLogout'

function UserDashboard() {
    return (
        <Fragment>
            <UserLogout />
            <div className='dashboard-container'>
                <SidePanel />
                <MainPanel />
            </div>
        </Fragment>
    )
}

export default withRouter(UserDashboard)
