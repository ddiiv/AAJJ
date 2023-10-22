//---------------CSS
import './App.css';

//-------------Router
import { BrowserRouter,Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import { getCategories, getProducts } from './api/apiFunctions';

//---------Components

import Home from './pages/Home';
import TopNav from './components/navbar/TopNav.js';
import BottomNav from './components/navbar/BottomNav';
import Footer from './components/Footer.js';
import CategoryCatalog from './pages/CategoryCatalog.js';
import ProductDetail from './pages/ProductDetail.js';
import Search from './pages/Search.js'
import CartDetail from './pages/CartDetail';
import Login from './pages/Login'
//---------Context
import {  UserProvider } from './context/UserContext';

import { CartProvider } from './context/CartContext';

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
  <CartProvider>
    <div className="App">
      
      <BrowserRouter>
        <TopNav/>
        <BottomNav/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            {category.map((categories) => {
              const categorytoLowerCase = categories.Category.toLowerCase();
              return(
              <Route path={`/category/${categorytoLowerCase}`} key={categories.IdCategory} element={<CategoryCatalog categorySelected={categories.IdCategory}/>}/>
              )})}
            {products.map((product) => {
              
              return (
              <Route path={`/product/${product.Title}`} key={product.idProduct} element={<ProductDetail productSelected={product}/>}/>
              )
              })}
            <Route path= {`/search?=`} element={<Search/>}></Route>
            <Route path='/cartdetail' element={<CartDetail/>}></Route>
            <Route path='/login' element={<Login/>}></Route>              
          </Routes>
          
      </BrowserRouter>
      <Footer/>
    </div>
    </CartProvider>
  </UserProvider>

  );
}

export default App;
