import React from 'react'
import BottomNav from './BottomNav';
import TopNav from './TopNav';
import '../../css/NavBar.css'

const Nav = () => {

    return (
        <>
            <nav className='navbarContent'>
                <TopNav />
                <div className='CategoryNavbar'>
                    <BottomNav />
                </div>
            </nav>

        </>
    );
}
export default Nav;