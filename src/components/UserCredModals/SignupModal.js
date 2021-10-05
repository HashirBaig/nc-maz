import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

//Importing Icons
import { FaCircle, FaCheck } from 'react-icons/fa'

//Importing CSS file
import '../UserCredModals/UserCredModals.css'

//Importing axios
import axios from 'axios'

//Importing Redux-Actions
import { closeSignUpModal } from '../../redux/features/view_sign_up'
import { resetGettingStarted } from '../../redux/features/getting_started_free_trial'


function SignupModal() {

    let artistBtn, collectorBtn = false;

    //Access state
    const isClicked = useSelector(state => state.viewSignUpModal.value)
    const getStartedEmail = useSelector(state => state.getStarted.value)

    const [artistIcon, setArtistIcon] = useState(<FaCircle className='fas-fa-circle' />)
    const [collectorIcon, setCollectorIcon] = useState(<FaCircle className='fas-fa-circle' />)
    const [orgIcon, setOrgIcon] = useState(<FaCircle className='fas-fa-circle' />)

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

    const dispatch = useDispatch()
    const getStartedState = useSelector(state => state.getStarted.value)

    const closeMainSignUpModal = async () => {
        dispatch(closeSignUpModal())
    }

    const changeArtistBtnClickedStatus = async () => {
        artistBtn = true;
        collectorBtn = false;
    }
    const changeCollectorBtnClickedStatus = async () => {
        collectorBtn = true;
        artistBtn = false;
    }
    const changeOrgBtnClickedStatus = async () => {
        collectorBtn = false;
        artistBtn = false;
    }

    const changeBtnColor = async () => {
        if (artistBtn === true) {
            setBtnBgColor('#27548E');
            setBtnColor('#fff');
            setBtnHoverBgColor('#6DA9F7');
            setArtistIcon(<FaCheck className='fas-fa-check' />)

            // For collector btn
            setBtnCollectorBgColor('#f0f0f0');
            setBtnCollectorColor('gray');
            setBtnCollectorHoverBgColor('');
            setCollectorIcon(<FaCircle className='fas-fa-circle' />)
            // For Org. btn
            setBtnOrgBgColor('#f0f0f0');
            setBtnOrgColor('gray');
            setBtnOrgHoverBgColor('');
            setOrgIcon(<FaCircle className='fas-fa-circle' />)

        } else if (collectorBtn === true) {
            setBtnCollectorBgColor('#27548E');
            setBtnCollectorColor('#fff');
            setBtnCollectorHoverBgColor('#6DA9F7');
            setCollectorIcon(<FaCheck className='fas-fa-check' />)

            // For artist btn
            setBtnBgColor('#f0f0f0');
            setBtnColor('gray');
            setBtnHoverBgColor('');
            setArtistIcon(<FaCircle className='fas-fa-circle' />)
            // For Org. btn
            setBtnOrgBgColor('#f0f0f0');
            setBtnOrgColor('gray');
            setBtnOrgHoverBgColor('');
            setOrgIcon(<FaCircle className='fas-fa-circle' />)

        } else {
            setBtnOrgBgColor('#27548E');
            setBtnOrgColor('#fff');
            setBtnOrgHoverBgColor('#6DA9F7');
            setOrgIcon(<FaCheck className='fas-fa-check' />)

            // For artist btn
            setBtnBgColor('#f0f0f0');
            setBtnColor('gray');
            setBtnHoverBgColor('');
            setArtistIcon(<FaCircle className='fas-fa-circle' />)
            // For collector btn
            setBtnCollectorBgColor('#f0f0f0');
            setBtnCollectorColor('gray');
            setBtnCollectorHoverBgColor('');
            setCollectorIcon(<FaCircle className='fas-fa-circle' />)
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
        if (!userName) {
            alert('Enter Username!')
        } else if (!email && getStartedEmail === null) {
            alert('Enter Email!: ', 'email->', email, ' getStartedEmail->', getStartedEmail)
        } else if (!password) {
            alert('Enter Password!')
        } else if (!entity_type) {
            alert('Enter Role Not Selected!')
        }

        await axios.post('https://nc-maz.herokuapp.com/api/register', {
            username: userName,
            email: (getStartedEmail !== null) ? getStartedEmail : email,
            password: password,
            entity_type: entity_type
        })

        //Reseting Fields
        dispatch(resetGettingStarted())
        setUserName('')
        setEmail('')
        setPassword('')
        setEntityType('')
    }



    return (
        <Fragment>
            <div className='modal-background'></div>
            <div className='sign-up-modal'>
                <div className='sign-up-modal-row-1'>

                    {
                        (isClicked) ?
                            <button
                                id='close-sign-up-model-btn'
                                onClick={() => { closeMainSignUpModal() }}
                            >
                                X
                            </button>
                            :
                            null
                    }



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
                            value={(getStartedState) ? getStartedState : email}
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
                            type='password'
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
                                changeArtistBtnClickedStatus()
                                changeBtnColor()
                            }}
                        > {artistIcon}Artist </button>
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
                        > {collectorIcon} Collector</button>
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
                        > {orgIcon} Organization</button>
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
                            closeMainSignUpModal()
                        }}
                    >SIGN UP</button>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(SignupModal)
