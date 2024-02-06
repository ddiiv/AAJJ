
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
                            <Link to="/" className='nothing-aside-logo' ><img className='logo' src={bichologo} alt="" /></Link>
                            <div className='modal-background' id={showChangueCss()} onClick={() => setShow(false)}>

                                <aside className='aside_nav--left' id={showChangueCss()}>

                                    <button className='close-btn' onClick={() => setShow(false)}>
                                        <svg className="svg-icon-aside close" viewBox="0 0 20 20">
                                            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                                        </svg>
                                    </button>
                                    <div className='aside_nav--left__container'>
                                        <Link to="/" className='nothing-aside' ><img className='logo' src={bichologo} alt="" /></Link>
                                        <li className='aside_nav-category'><Link to={`/indumentaria`} className='navItem-aside' onClick={() => setShow(false)}>Indumentaria</Link></li>
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
                        <div className='cartContainer'>
                            <div className='responsive_logo disabled'>
                                <button className='hamburguer-logo__button' onClick={() => setShow(!show)}>
                                    <svg className="svg-icon-aside" viewBox="0 0 20 20">
                                        <path d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </nav >
    )
}
export default TopNav;