import React, { Fragment, useState } from 'react'
import MenuBar from '../../components/MenuBarComponent/MenuBar';
import Footer from '../../components/FooterComponent/Footer';
import SignupModal from '../../components/UserCredModals/SignupModal';

function HomePage() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Fragment>
            <MenuBar openModal={(setOpenModal)} />
            {openModal && <SignupModal openModal={(setOpenModal)} />}
            <Footer />
        </Fragment>
    )
}

export default HomePage
