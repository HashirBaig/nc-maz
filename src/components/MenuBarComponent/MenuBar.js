import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { FaAngleDown } from 'react-icons/fa'

import '../MenuBarComponent/MenuBar.css'
import logo from '../../images/logo.png'

import { openSignUpModal } from '../../redux/features/view_sign_up'

function MenuBar() {
    const history = useHistory()
    const dispatch = useDispatch()

    const openMainSignUpModal = async () => {
        dispatch(openSignUpModal(true))
    }
    return (
        <div className="menu-bar-container">
            <div className="menu-bar-container-col-1">
                <img src={logo} className='menu-bar-logo' alt=''></img>
            </div>

            <div className="menu-bar-container-col-2">
                <div className="menu-bar-container-col-2-sub-col-1">
                    <div>
                        <button className='menu-bar-features-btn'>
                            Features
                        </button>
                    </div>
                    <div >
                        <FaAngleDown className='fas-fa-downward-arrow' />
                    </div>
                </div>

                <div> <button className='menu-bar-pricing-btn'>Pricing</button> </div>
                <div> <button className='menu-bar-discovery-btn'>Discovery</button> </div>

                <div className="menu-bar-container-col-2-sub-col-2">
                    <div>
                        <button className='menu-bar-resources-btn'>Resources</button>
                    </div>
                    <div className='fas-fa-downward-arrow'>
                        <FaAngleDown />
                    </div>
                </div>

            </div>

            <div className="menu-bar-container-col-3">
                <div>
                    <button className='menu-bar-login-btn'
                        onClick={() => {
                            history.push('/user/login')
                        }}
                    >Login</button>
                </div>
                <div>
                    <button className='menu-bar-signup-btn'
                        onClick={() => {
                            openMainSignUpModal()
                        }}
                    >Sign Up
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MenuBar
