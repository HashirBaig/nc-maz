import React from 'react'
import { useDispatch } from 'react-redux'

//Importing CSS file
import '../UserLogout/UserLogout.css'

//Importing actions from state
import { isUserLoggedOut } from '../../redux/features/user_login_status'

//Importing Icons
import { FiLogOut } from 'react-icons/fi'


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
            ><FiLogOut className='user-logout-icon' /></button>
        </div>
    )
}

export default UserLogout
