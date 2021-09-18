import React, { Fragment, useState } from 'react'
import '../UserCredModals/UserCredModals.css'
import axios from 'axios'

function SignupModal({ openModal }) {

    let artistBtn, collectorBtn = false;

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [entity_type, setEntityType] = useState('')

    const [btnBgColor, setBtnBgColor] = useState('#f0f0f0');
    const [btnColor, setBtnColor] = useState('gray');
    const [btnHoverBgColor, setBtnHoverBgColor] = useState('');

    const [btnCollectorBgColor, setBtnCollectorBgColor] = useState('#f0f0f0');
    const [btnCollectorColor, setBtnCollectorColor] = useState('gray');
    const [btnCollectorHoverBgColor, setBtnCollectorHoverBgColor] = useState('');

    const [btnOrgBgColor, setBtnOrgBgColor] = useState('#f0f0f0');
    const [btnOrgColor, setBtnOrgColor] = useState('gray');
    const [btnOrgHoverBgColor, setBtnOrgHoverBgColor] = useState('');

    const changeArtistBtnClickedStatus = () => {
        artistBtn = true;
        collectorBtn = false;
    }
    const changeCollectorBtnClickedStatus = () => {
        collectorBtn = true;
        artistBtn = false;
    }
    const changeOrgBtnClickedStatus = () => {
        collectorBtn = false;
        artistBtn = false;
    }

    const changeBtnColor = () => {
        if (artistBtn === true) {
            setBtnBgColor('#27548E');
            setBtnColor('#fff');
            setBtnHoverBgColor('#6DA9F7');

            // For collector btn
            setBtnCollectorBgColor('#f0f0f0');
            setBtnCollectorColor('gray');
            setBtnCollectorHoverBgColor('');
            // For Org. btn
            setBtnOrgBgColor('#f0f0f0');
            setBtnOrgColor('gray');
            setBtnOrgHoverBgColor('');

        } else if (collectorBtn === true) {
            setBtnCollectorBgColor('#27548E');
            setBtnCollectorColor('#fff');
            setBtnCollectorHoverBgColor('#6DA9F7');

            // For artist btn
            setBtnBgColor('#f0f0f0');
            setBtnColor('gray');
            setBtnHoverBgColor('');
            // For Org. btn
            setBtnOrgBgColor('#f0f0f0');
            setBtnOrgColor('gray');
            setBtnOrgHoverBgColor('');

        } else {
            setBtnOrgBgColor('#27548E');
            setBtnOrgColor('#fff');
            setBtnOrgHoverBgColor('#6DA9F7');

            // For artist btn
            setBtnBgColor('#f0f0f0');
            setBtnColor('gray');
            setBtnHoverBgColor('');
            // For collector btn
            setBtnCollectorBgColor('#f0f0f0');
            setBtnCollectorColor('gray');
            setBtnCollectorHoverBgColor('');
        }
    }



    const onMouseOverArtist = (event) => {
        event.target.style.background = btnHoverBgColor
    }
    const onMouseOutArtist = (event) => {
        event.target.style.background = btnBgColor
    }

    const onMouseOverCollector = (event) => {
        event.target.style.background = btnCollectorHoverBgColor
    }
    const onMouseOutCollector = (event) => {
        event.target.style.background = btnCollectorBgColor
    }

    const onMouseOverOrg = (event) => {
        event.target.style.background = btnOrgHoverBgColor
    }
    const onMouseOutOrg = (event) => {
        event.target.style.background = btnOrgBgColor
    }

    const sendData = async () => {
        await axios.post('http://localhost:5001/api/register', {
            username: userName,
            email: email,
            password: password,
            entity_type: entity_type
        })
    }

    return (
        <Fragment>
            <div className='modal-background'></div>
            <div className='sign-up-modal'>
                <div className='sign-up-modal-row-1'>
                    <button id='close-sign-up-model-btn' onClick={() => { openModal(false) }}>X</button>
                </div>
                <div className='sign-up-modal-row-2'>
                    <h2>GET STARTED TODAY</h2>
                    <h3>Free for 30 days. No credit card required.</h3>
                </div>
                <div className='sign-up-modal-row-3'>
                    <div>
                        <input
                            className='sign-up-modal-row-3-input'
                            placeholder='Username'
                            type='text'
                            onChange={
                                (event) => {
                                    setUserName(event.target.value)
                                }
                            }
                        />
                    </div>
                    <div>
                        <input
                            className='sign-up-modal-row-3-input'
                            placeholder='Email'
                            type='text'
                            onChange={
                                (event) => {
                                    setEmail(event.target.value)
                                }
                            }
                        />
                    </div>
                    <div>
                        <input
                            className='sign-up-modal-row-3-input'
                            placeholder='Password'
                            type='text'
                            onChange={
                                (event) => {
                                    setPassword(event.target.value)
                                }
                            }
                        />
                    </div>
                    <div><h3>Which of these best describe you?</h3></div>
                </div>
                <div className='sign-up-modal-row-4'>
                    <div>
                        <button
                            onMouseOver={(event, artistBtn) => {
                                onMouseOverArtist(event)
                            }}
                            onMouseOut={(event) => { onMouseOutArtist(event) }}

                            style={{
                                backgroundColor: btnBgColor,
                                color: btnColor,
                            }}
                            onClick={() => {
                                setEntityType('artist')
                                changeArtistBtnClickedStatus();
                                changeBtnColor();
                            }}
                        > () Artist </button>
                    </div>
                    <div>
                        <button
                            onMouseOver={(event) => { onMouseOverCollector(event) }}
                            onMouseOut={(event) => { onMouseOutCollector(event) }}

                            style={{
                                backgroundColor: btnCollectorBgColor,
                                color: btnCollectorColor,
                            }}
                            onClick={() => {
                                setEntityType('collector')
                                changeCollectorBtnClickedStatus()
                                changeBtnColor()
                            }}
                        > () Collector</button>
                    </div>
                    <div>
                        <button
                            onMouseOver={(event) => { onMouseOverOrg(event) }}
                            onMouseOut={(event) => { onMouseOutOrg(event) }}

                            style={{
                                backgroundColor: btnOrgBgColor,
                                color: btnOrgColor,
                            }}
                            onClick={() => {
                                setEntityType('organization')
                                changeOrgBtnClickedStatus();
                                changeBtnColor();
                            }}
                        > () Organization</button>
                    </div>
                </div>
                <div className='sign-up-modal-row-5'>
                    <div> <input type='checkbox' /> </div>
                    <div> <p>I agree to Terms and Privacy Policy</p> </div>
                </div>
                <div className='sign-up-modal-row-6'>
                    <button
                        onClick={() => {
                            sendData();
                            openModal(false);
                        }}
                    >SIGN UP</button>
                </div>
            </div>
        </Fragment>
    )
}

export default SignupModal
