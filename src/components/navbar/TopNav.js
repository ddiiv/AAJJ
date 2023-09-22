import search from '../../../public/img/search.png'
import user from '../../img/user.png'
import bichologo from '../../img/bichologo.png'
import cart from '../img/carro.png'
import React from 'react'
import SearchBar from './search/SearchBar'

import { Link } from "react-router-dom";

const TopNav = () => {
    return (
        <div className='topnav'>
            <div className='containerNav'>
                <div className='containerLogo'>
                    <Link to="/" ><img className='logo' src={bichologo} alt="" /></Link>
                </div>
                <div>
                    <SearchBar/>
                </div>
                <div className='containerItems'>
                    <button className='buttonItem'><img className='items' src={search} alt="" /></button>
                    <button className='buttonItem' id="center"><img className='items' src={user} alt="" /></button>
                    <button className='buttonItem'> <img className='items' src={cart} alt="" /> </button>
                </div>
            </div>
        </div>
    )
}
export default TopNav;