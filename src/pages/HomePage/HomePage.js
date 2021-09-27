import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import MenuBar from '../../components/MenuBarComponent/MenuBar';
import Footer from '../../components/FooterComponent/Footer';
import SignupModal from '../../components/UserCredModals/SignupModal';

function HomePage() {
    const openModal = useSelector((state) => state.viewSignUpModal.value)
    return (
        <Fragment>
            <MenuBar />
            {openModal && <SignupModal />}
            <Footer />
        </Fragment>
    )
}

export default HomePage