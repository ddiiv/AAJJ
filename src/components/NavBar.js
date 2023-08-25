
import search from '../img/search.png'
import user from'../img/user.png'
import { BrowserRouter as Routes, Switch, Route,Router, Link, BrowserRouter } from "react-router-dom";

const Nav =()=>{
return(
<>
    <header><div className='topnav'>
        <img/>

        
        </div>
    </header>
    
    <div className='navbarContent'>
    <nav className='navbar'>
        <ul class="topnav">
            <li><a href="#home">Home</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
            <li class="right"><a href="#about"> <img className="img" src={search}/></a></li>
            <li class="right"><a href="#about"><img className="img" src={user}/></a></li>
        </ul> 
    </nav>
    </div>
</>
);
}
export default Nav;