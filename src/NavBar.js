
// import search from './img/search.png'
// import user from'./img/user.png'
import './NavBar.css'
import { BrowserRouter as Routes, Switch, Route,Router, Link, BrowserRouter } from "react-router-dom";
import bichologo from './img/bichologo.png'

const Nav =()=>{
return(
<>
        <div className='navbarContent'>
            <div className='topnav'>
                <div className='containerLogo'>
                <Link to="/" ><img className='logo' src={bichologo}/></Link>
                </div>

            <div className='navbar'>
                <ul className='nav'> 
                    <li className='nav-item'><Link to="/futbol">Futbol</Link></li>
                    <li className='nav-item'><Link to="/basket">Basket</Link></li>
                </ul>
            </div>
            </div>
        </div>

</>
);
}
export default Nav;