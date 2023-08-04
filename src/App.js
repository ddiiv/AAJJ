import './App.css';
import MainMainComponent from './components/main/MainMainComponent';
import search from'./img/search.png'
import user from'./img/user.png'
import FutbolCatalog from './components/futbol/Futbol';

function App() {




return (
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
      <div className='main'>
        <FutbolCatalog/>
      </div>
    </body>
  </div>
  );
}

export default App;
