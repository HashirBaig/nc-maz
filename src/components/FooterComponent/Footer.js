import React from 'react'
import './Footer.css'

import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-row-1">
                <div><a href="https://nc-maz.netlify.app">Home</a></div>
                <div><a href="https://nc-maz.netlify.app">Pricing</a></div>
                <div><a href="https://nc-maz.netlify.app">Blog</a></div>
                <div><a href="https://nc-maz.netlify.app">Guides</a></div>
                <div><a href="https://nc-maz.netlify.app">Discovery</a></div>
                <div><a href="https://nc-maz.netlify.app">Calls for Entry</a></div>
                <div><a href="https://nc-maz.netlify.app">About</a></div>
                <div><a href="https://nc-maz.netlify.app">Contact</a></div>
                <div><a href="https://nc-maz.netlify.app">Terms</a></div>
                <div><a href="https://nc-maz.netlify.app">Privacy</a></div>
            </div>
            <div className="footer-row-2">
                <span>Follow Us:</span>
            </div>
            <div className="footer-row-3">
                <div>
                    <FaFacebookSquare className="social-media-icons" />
                </div>
                <div>
                    <FaTwitterSquare className="social-media-icons" />
                </div>
                <div>
                    <FaInstagram className="social-media-icons" />
                </div>
            </div>
        </div>
    )
}

export default Footer
