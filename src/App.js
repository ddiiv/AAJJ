//---------------CSS
import './App.css';

//-------------Router
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCategories } from './api/apiFuntions';

//---------Components

import MainComponent from './pages/MainComponent';
import Nav from './components/navbar/NavBar.js';
import Footer from './components/footer/Footer.js';
import CategoryCatalog from './pages/CategoryCatalog.js';

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
            return <Route path={`/category/${categories.Category}`} key={categories.IdCategory} element={<CategoryCatalog categorySelected={categories.IdCategory}/>}/>
            })}
        </Routes>
    </BrowserRouter>
    <Footer/>
  </div>
  );
}

export default App;
