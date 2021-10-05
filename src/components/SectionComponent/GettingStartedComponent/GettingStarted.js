import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, withRouter } from 'react-router-dom'

//Importing css file
import './GettingStarted.css'

//Importing redux - actions
import { gettingStartedClicked } from '../../../redux/features/getting_started_free_trial'

//Importing routes
import { publicRoutes } from '../../../routes/ConfigRoutes/configRoutes'


function GettingStarted() {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div className="getting-started">
            <div className="getting-started-email">
                <input
                    type="text"
                    placeholder='Enter email to start a free trial'
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.target.value)
                    }}
                />
            </div>
            <div className="getting-started-btn">
                <button
                    onClick={(event) => {
                        dispatch(gettingStartedClicked(inputValue))
                        history.push(publicRoutes.userSignUpPage)
                    }}
                >GET STARTED</button>
            </div>
        </div>
    )
}

export default withRouter(GettingStarted)
