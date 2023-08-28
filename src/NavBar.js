
import search from './img/search.png'
import user from'./img/user.png'
import './NavBar.css'
import { BrowserRouter as Routes, Switch, Route,Router, Link, BrowserRouter } from "react-router-dom";
import bichologo from './img/bichologo.png'

const Nav =()=>{
return(
<>
    <header>
        <div className='navbarContent'>
            <div className='topnav'>
                <img className='logo' src={bichologo}/>
            </div>
            
            <nav className='navbar'>
                <ul className='nav'> 
                    <li className='nav-item'><Link to="/futbol">Futbol</Link></li>
                    <li className='nav-item'><Link to="/basket">Basket</Link></li>
                </ul>
            </nav>
        </div>
    </header>
</>
);
}
export default Nav;