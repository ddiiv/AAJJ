import './App.css';
import CategoryCatalog from './components/category/CategoryCatalog.js';
import {BrowserRouter,Routes, Route, Switch, Link} from "react-router-dom";
import Nav from './NavBar';
import { useEffect, useState } from 'react';
import MainComponent from './components/main/MainComponent';
import { getCategories } from './components/api/apiFuntions';
import Footer from './Footer';


function App() {


const [category, setCategory] = useState([]);

useEffect(() => {
    getCategories()
    .then(Categories => {
        setCategory(Categories)
    })
}, [])




return (
  <div className="App">
    <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<MainComponent/>}/>
          {category.map((categories) => {
          return <Route path={`/category/${categories.Category}`} key={categories.IdCategory} element={<CategoryCatalog categorySelected={categories.IdCategory}/>}/>}
          )}
        </Routes>
        
    </BrowserRouter>
    <Footer/>
  </div>
  );
}

export default App;
