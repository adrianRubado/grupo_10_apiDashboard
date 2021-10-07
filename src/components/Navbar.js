import React from 'react'
import jordan from '../assets/images/jordan-walke.png'
import NavbarIcon from './NavbarIcon'
import NavbarProfile from './NavbarProfile'
import Burguer from './Burguer'

function Navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

            <Burguer/>
            <ul className="navbar-nav ml-auto">

                <NavbarIcon id='alertsDropdown' icon="fas fa-bell fa-fw" value={'3+'} />
                <NavbarIcon id='messagesDropdown' icon="fas fa-envelope fa-fw" value={7} />
                <div className="topbar-divider d-none d-sm-block"></div>
                <NavbarProfile image={jordan} name={'Jordan Walke'} />
            </ul>

        </nav>
    )
}

export default Navbar
