import React,{useState,useEffect} from 'react'
import search from '../../img/search.png'
import user from'../../img/user.png'
import bichologo from '../../img/bichologo.png'
import cart from '../../img/carro.png'
import '../../css/NavBar.css'
import { getCategories } from '../../api/apiFuntions.js';
import { BrowserRouter as Routes, Link} from "react-router-dom";


const Nav =()=>{

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
                <Link to="/" ><img className='logo' src={bichologo} alt=""/></Link>
                </div>
                <div className='containerItems'>
                <button className='buttonItem'><img className='items' src={search} alt=""/></button>
                <button className='buttonItem' id="center"><img className='items' src={user} alt=""/></button>
                <button className='buttonItem'> <img className='items' src={cart} alt=""/> </button>
                </div>
                </div>

            <div className='navbar'>
                <ul className='nav'>
                    { category.map((categories) => {
                        return <li className='nav-item'  key={categories.IdCategory} ><Link to={`/category/${categories.Category}`}  className='navItem'>{categories.Category}</Link></li>
                    })}
                    
                </ul>
            </div>
            </div>
        </div>

</>
);
}
export default Nav;