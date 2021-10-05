import React from 'react'
import { withRouter } from 'react-router-dom'
import './Section.css'

//Importing components
import GettingStarted from './GettingStartedComponent/GettingStarted'

function Section() {
    return (
        <div className='section-container'>
            <div className='slogan'>
                <h1>ART INVENTROY, SIMPLIFIED</h1>
            </div>
            <div className="slogan-sub-heading">
                <h3>
                    Artwork Archive provides artists, collectors and organizations
                    powerful tools to manage their artwork, career or collection.
                </h3>
            </div>
            <GettingStarted />
        </div>
    )
}

export default withRouter(Section)
