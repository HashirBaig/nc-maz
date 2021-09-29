import React, { Fragment } from 'react'
import './Section.css'

//Importing components
import GettingStarted from './GettingStartedComponent/GettingStarted'

function Section() {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default Section
