import React from 'react'
import '../UserDashboardPage/UserDashboard.css'
import SidePanel from '../../components/SidePanel/SidePanel'
import MainPanel from '../../components/MainPanel/MainPanel'

function UserDashboard() {
    return (
        <div className='dashboard-container'>
            <SidePanel />
            <MainPanel />
        </div>
    )
}

export default UserDashboard
