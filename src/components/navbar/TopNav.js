
import bichologo from '../../img/bichologo.png'
import cart from '../../img/carro.png'
import React from 'react'
import SearchBar from './search/SearchBar'
import User from './User'
import '../../css/NavBar.css'


import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <nav className='navbarContent'>
        <div className='topnav'>
            <div className='containerNav'>
                <div className='containerLogo'>
                    <Link to="/" ><img className='logo' src={bichologo} alt="" /></Link>
                </div>
                <div>

                </div>
                <div className='containerItems'>                    
                    <div className='searchBar'>
                    <SearchBar/>
                    </div>
                    <div className='userContainer'>
                    <User/>
                    </div>
                    <div>
                    <button className='buttonItem'> <img className='items' src={cart} alt="" /> </button>
                    </div>
                </div>
            </div>
        </div>
        </nav>
    )
}
export default TopNav;