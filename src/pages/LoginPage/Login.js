import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import '../LoginPage/Login.css'
// import * as actionTypes from '../../redux/actionTypes/actionTypes'

//import actions: user_login_status - state
import { isUserLoggedIn } from '../../redux/features/user_login_status'

//Importing routes
import { protectedRoutes } from '../../routes/ConfigRoutes/configRoutes'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()
    const dispatch = useDispatch()

    const authUserData = async () => {
        const response = await axios.post('https://nc-maz.herokuapp.com/api/login', {
            email: email,
            password: password
        })
        const result = response.data

        if (!email) {
            alert('Enter Email!')
        } else if (!password) {
            alert('Enter Password!')
        }

        if (result.status === 'ok') {
            dispatch(isUserLoggedIn(true)) //Now user can go to dashboard page
            history.push(protectedRoutes.userDashboardPage)
        }
    }

    return (
        <div className='login-container'>
            <div className='login-container-row-2'>
                <div className='lc-sub-container-row-1'>
                    <div>
                        <span>Login</span>
                    </div>
                    <div className='login-btn-cancel'>
                        <button
                            onClick={() => {
                                history.push('/')
                            }}
                        >X</button>
                    </div>
                </div>
                <div className='lc-sub-login-container'>
                    <div>
                        <div className='lc-sub-login-email-container'>
                            <div><p className='login-container-text'>Email Address</p></div>
                            <div>
                                <input className='login-input-field' type='text' onChange={(event) => {
                                    setEmail(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className='lc-sub-login-password-container'>
                            <div><p className='login-container-text'>Password</p></div>
                            <div>
                                <input className='login-input-field' type='password' onChange={(event) => {
                                    setPassword(event.target.value)
                                }} />
                            </div>
                        </div>
                        <div className='login-btn-container'>
                            <button
                                id='login-btn'
                                onClick={() => {
                                    authUserData()
                                }}
                            >Login</button>
                        </div>
                        <div>
                            <p>Don't have an account? <button id='login-redirect-btn'
                                onClick={() => {
                                    history.push('/user/sign-up')
                                }}
                            >Sign Up</button></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
