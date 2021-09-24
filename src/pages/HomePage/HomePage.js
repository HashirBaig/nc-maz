import React, { Fragment, useState } from 'react'
import '../HomePage/HomePage.css'
import MenuBar from '../../components/MenuBarComponent/MenuBar';
import Footer from '../../components/FooterComponent/Footer';
import SignupModal from '../../components/UserCredModals/SignupModal';

function HomePage() {
    const [openModal, setOpenModal] = useState(false);
    return (
        <Fragment>
            <MenuBar setOpenModal={(setOpenModal)} />
            {openModal && <SignupModal setOpenModal={(setOpenModal)} />}
            <Footer className='home-row-3' />
        </Fragment>
    )
}

export default HomePage