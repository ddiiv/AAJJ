import './App.css';
import FutbolCatalog from './components/futbol/Futbol';
import {BrowserRouter,Routes, Route, Switch, Link} from "react-router-dom";
import Nav from './NavBar';
import products from './futbolProducts';
import { useEffect, useState } from 'react';
import MainComponent from './components/main/MainComponent';

function App() {

const [category,setCategory] = useState();

useEffect(()=>{
setCategory(products.ca)

})


return (
  <div className="App">
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<MainComponent/>}/>
          <Route path="/futbol" element={<FutbolCatalog/>}/>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
