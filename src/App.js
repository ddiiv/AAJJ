import './App.css';
import FutbolCatalog from './components/futbol/Futbol';
import { BrowserRouter as Routes, Switch, Route,Router, Link, BrowserRouter } from "react-router-dom";
import Nav from './components/NavBar';
import products from './futbolProducts';
import { useEffect, useState } from 'react';

function App() {

const [category,setCategory] = useState();

useEffect(()=>{
setCategory(products.ca)

})


return (

  <>
    


  <div className="App">
    {/* <BrowserRouter>
      <Nav/>
        <Routes>
          <Route/>

          
        </Routes>
    </BrowserRouter> */}
    <body>
        <FutbolCatalog/>
    </body>
  </div>
  </>
  );
}

export default App;
