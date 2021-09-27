import React from 'react'
import { useDispatch } from 'react-redux'

import '../UserLogout/UserLogout.css'
import { isUserLoggedOut } from '../../redux/features/user_login_status'


function UserLogout() {
    const dispatch = useDispatch()
    const userLogout = () => {
        dispatch(isUserLoggedOut())
    }

    return (
        <div className='user-logout'>
            <button className='user-logout-btn'
                onClick={() => {
                    userLogout()
                }}
            >Logout</button>
        </div>
    )
}

export default UserLogout
