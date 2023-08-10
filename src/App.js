import './App.css';
import MainMainComponent from './components/main/MainMainComponent';
import search from'./img/search.png'
import user from'./img/user.png'
import FutbolCatalog from './components/futbol/Futbol';
import { BrowserRouter as Routes, Switch, Route,Router, Link, BrowserRouter } from "react-router-dom";


function App() {




return (

  <>
    
        <Router>
          <Route path="/" component={MainMainComponent}  />
          <Route path="/futbol" component={FutbolCatalog}/>
        </Router>
 

  <div className="App">
    <div className='navbarContent'>
    <header className='navbar'>
        <ul class="topnav">
          <li><a href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li class="right"><a href="#about"> <img className="img" src={search}/></a></li>
          <li class="right"><a href="#about"><img className="img" src={user}/></a></li>
        </ul> 
    </header>
    </div>
    <body>
        <FutbolCatalog/>
    </body>
  </div>
  </>
  );
}

export default App;
