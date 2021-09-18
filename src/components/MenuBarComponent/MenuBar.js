import React from 'react'
import { useHistory } from 'react-router-dom'
import '../MenuBarComponent/MenuBar.css'
import logo from '../../images/logo.png'


function MenuBar({ openModal }) {
    const history = useHistory();
    return (
        <div className="menu-bar-container">
            <div className="menu-bar-container-col-1">
                <img src={logo} className='menu-bar-logo'></img>
            </div>

            <div className="menu-bar-container-col-2">
                <div className="menu-bar-container-col-2-sub-col-1">
                    <div>
                        <button className='menu-bar-features-btn'>Features</button>
                    </div>
                    <div>
                        <span>↓</span>
                    </div>
                </div>

                <div> <button className='menu-bar-pricing-btn'>Pricing</button> </div>
                <div> <button className='menu-bar-discovery-btn'>Discovery</button> </div>

                <div className="menu-bar-container-col-2-sub-col-2">
                    <div>
                        <button className='menu-bar-resources-btn'>Resources</button>
                    </div>
                    <div>
                        <span>↓</span>
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
                            openModal(true);
                        }}
                    >Sign Up
                    </button>
                </div>
            </div>

        </div>
    )
}

export default MenuBar
