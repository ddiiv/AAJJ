
import bichologo from '../../img/bichologo.png'
import { Link } from "react-router-dom";
import Cart from './Cart'
import React, { useState } from 'react'
import SearchBar from './search/SearchBar'
import User from './User'
import '../../css/NavBar.css'

const TopNav = ({ category }) => {
    const [show, setShow] = useState(false);
    function showChangueCss() {
        if (show) {
            return 'open'
        } else {
            return ''
        }
    }
    return (
        <nav className='navbarContent'>
            <div className='topnav'>
                <div className='containerNav'>
                    <article className='containerLogo'>
                        <div className='responsive_logo disabled'>
                            <button className='hamburguer-logo__button' onClick={() => setShow(!show)}
                            >
                                <img className='logo' src={bichologo} alt="" />
                            </button>

                            <div className='modal-background' id={showChangueCss()} onClick={() => setShow(false)}>

                                <aside className='aside_nav--left' id={showChangueCss()}>

                                    <button className='close-btn' onClick={() => setShow(false)}>
                                        <svg className="svg-icon-aside" viewBox="0 0 20 20">
                                            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                        </svg>
                                    </button>
                                    <div className='aside_nav--left__container'>
                                        <Link to="/" className='nothing-aside' ><img className='logo' src={bichologo} alt="" /></Link>
                                        {category?.map((categories) => {
                                            return <li className='aside_nav-category' key={categories.IdCategory} ><Link to={`/category/${categories.Category}`} className='navItem-aside' onClick={() => setShow(false)}>{categories.Category}</Link></li>
                                        })}
                                    </div>
                                </aside>
                            </div>

                        </div>
                        <div className='responsive_logo enabled'>
                            <Link to="/" ><img className='logo' src={bichologo} alt="" /></Link>
                        </div>
                    </article>
                    <div>

                    </div>
                    <div className='containerItems'>
                        <div className='searchBar'>
                            <SearchBar />
                        </div>
                        <div className='userContainer'>
                            <User />
                        </div>
                        <div className='cartContainer'>
                            <Cart />
                        </div>
                    </div>
                </div>
            </div >
        </nav >
    )
}
export default TopNav;