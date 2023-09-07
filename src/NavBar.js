import React,{useState,useEffect} from 'react'
import search from './img/search.png'
import user from'./img/user.png'
import bichologo from './img/bichologo.png'
import cart from './img/carro.png'
import './components/css/NavBar.css'
import { getCategories } from './components/api/apiFuntions.js';
import { BrowserRouter as Routes, Switch, Route,Router, Link, BrowserRouter } from "react-router-dom";


const Nav =()=>{
const [categorySelected , setCategorySelected] = useState([]);
const [category, setCategory] = useState([]);

useEffect(() => {
    getCategories()
    .then(Categories => {
        setCategory(Categories)
    })
}, [])


return(
<>
        <div className='navbarContent'>
            <div className='topnav'>
                <div className='containerNav'>
                <div className='containerLogo'>
                <Link to="/" ><img className='logo' src={bichologo}/></Link>
                </div>
                <div className='containerItems'>
                <button className='buttonItem'><img className='items' src={search}/></button>
                <button className='buttonItem' id="center"><img className='items' src={user}/></button>
                <button className='buttonItem'> <img className='items' src={cart}/> </button>
                </div>
                </div>

            <div className='navbar'>
                <ul className='nav'>
                    { category.map((categories) => {
                        return <li className='nav-item'  key={categories.IdCategory} ><Link to={`/category/${categories.Category}`} >{categories.Category}</Link></li>
                    })}
                </ul>
            </div>
            </div>
        </div>

</>
);
}
export default Nav;