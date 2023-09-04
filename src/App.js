import './App.css';
import MainCategory from './components/category/MainCategory';
import {BrowserRouter,Routes, Route, Switch, Link} from "react-router-dom";
import Nav from './NavBar';
import { useEffect, useState } from 'react';
import MainComponent from './components/main/MainComponent';

function App() {

const [categorySelected, setCategorySelected] = useState('');

const handleCategorySelected = (category) => {
  setCategorySelected(category);
  
}



return (
  <div className="App">
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<MainComponent/>}/>
          <Route path="/category/futbol"  value={"futbol"} handle={handleCategorySelected} element={<MainCategory categorySelected={categorySelected}/>}/>
        </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
