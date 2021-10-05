import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

//Importing components
import MenuBar from '../../components/MenuBarComponent/MenuBar'
import SignupModal from '../../components/UserCredModals/SignupModal'
import Section from '../../components/SectionComponent/Section'
import Footer from '../../components/FooterComponent/Footer'

function HomePage() {
    const openModal = useSelector((state) => state.viewSignUpModal.value)
    return (
        <Fragment>
            <MenuBar />
            {openModal && <SignupModal />}
            <Section />
            <Footer />
        </Fragment>
    )
}

export default withRouter(HomePage)