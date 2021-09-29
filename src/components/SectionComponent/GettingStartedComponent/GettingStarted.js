import React, { Fragment } from 'react'

//Importing css file
import './GettingStarted.css'

function GettingStarted() {
    return (
        <div className="getting-started">
            <div className="getting-started-email">
                <input
                    type="text"
                    placeholder='Enter email to start a free trial'
                />
            </div>
            <div className="getting-started-btn">
                <button>GET STARTED</button>
            </div>
        </div>
    )
}

export default GettingStarted
