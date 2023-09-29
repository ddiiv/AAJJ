//---------------CSS
import './App.css';

//-------------Router
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCategories, getProducts } from './api/apiFunctions';

//---------Components

import Home from './pages/Home';
import Nav from './components/navbar/NavBar.js';
import BottomNav from './components/navbar/BottomNav';
import Footer from './components/Footer.js';
import CategoryCatalog from './pages/CategoryCatalog.js';
import ProductDetail from './pages/ProductDetail.js';
import Search from './pages/Search.js'
import CartDetail from './pages/CartDetail';
//---------Context
import {  UserProvider } from './context/UserContext';

function App() {


const [category, setCategory] = useState([]);
const [products, setProducts] = useState([]);
useEffect(() => {
    getCategories()
    .then(Categories => {
        setCategory(Categories)
    })
    getProducts()
      .then(Products => {
        setProducts(Products)
      })

}, [])




return (
<UserProvider>
    <div className="App">
      
      <BrowserRouter>
        <Nav/>
        <BottomNav/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            {category.map((categories) => {
              return <Route path={`/category/${categories.Category}`} key={categories.IdCategory} element={<CategoryCatalog categorySelected={categories.IdCategory}/>}/>
              })}
            {products.map((product) => {
              
              return <Route path={`/product/${product.Title}`} key={product.idProduct} element={<ProductDetail productSelected={product}/>}/>
              
              })}
            <Route path= "/search" element={<Search/>}></Route>
          <Route path="/cart" element={<CartDetail/>}></Route>
          </Routes>
          
      </BrowserRouter>
      <Footer/>
    </div>
  </UserProvider>

  );
}

export default App;
