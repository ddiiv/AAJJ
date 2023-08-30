import './App.css';
import MainFutbol from './components/futbol/MainFutbol';
import {BrowserRouter,Routes, Route, Switch, Link} from "react-router-dom";
import Nav from './NavBar';
import products from './futbolProducts';
import { useEffect, useState } from 'react';
import MainComponent from './components/main/MainComponent';

function App() {


return (
  <div className="App">
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<MainComponent/>}/>
          <Route path="/futbol" element={<MainFutbol/>}/>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
