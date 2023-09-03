
import search from './img/search.png'
import user from'./img/user.png'
import bichologo from './img/bichologo.png'
import cart from './img/carro.png'
import './NavBar.css'
import { BrowserRouter as Routes, Switch, Route,Router, Link, BrowserRouter } from "react-router-dom";


const Nav =()=>{
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
                    <li className='nav-item'><Link to="/futbol">Fútbol</Link></li>
                    <li className='nav-item'><Link to="/basket">Basket</Link></li>
                </ul>
            </div>
            </div>
        </div>

</>
);
}
export default Nav;