import './App.css';
import MainMainComponent from './components/main/MainMainComponent';
import search from'./img/search.png'
import user from'./img/user.png'
import FutbolCatalog from './components/futbol/Futbol';

function App() {
  return (

  <body>
  <ul class="topnav">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about"><img className="img" src={search}/></a></li>
  <li class="right"><a href="#about"><img className="img" src={user}/></a></li>
  
 
</ul>

<div className='main'>
  <h2>Responsive Topnav Example</h2>
 { /*<p><MainMainComponent/></p>
  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>  <p><MainMainComponent/></p>*/}
    <FutbolCatalog/>

</div>

       
  </body>

  );
}

export default App;
