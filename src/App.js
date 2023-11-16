//---------------CSS
import './App.css';

//-------------Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { UserProvider } from './context/UserContext';
import { useUserContext } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import { SearchProvider, useSearchFunctions } from './context/SearchContext';
function App() {

  const contextUser = useUserContext();
  const contextSearch = useSearchFunctions();
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
        <SearchProvider>
          <div className="App">
            <BrowserRouter>
              <TopNav />
              <BottomNav />
              <Routes>
                <Route path='/' element={<Home />} />
                {category.map((categories) => {
                  const categorytoLowerCase = categories.Category
                  return (
                    <Route path={`/category/${categorytoLowerCase.toLowerCase()}`} key={categories.IdCategory} element={<CategoryCatalog categorySelected={categories.IdCategory} />} />
                  )
                })}
                {products.map((product) => {

                  return (
                    <Route path={`/product/${product.Title}`} key={product.idProduct} element={<ProductDetail productSelected={product} />} />
                  )
                })}
                <Route path={`/search=?${contextSearch?.searchInput}`} element={<Search />}></Route>
                <Route path='/cartdetail' element={<CartDetail />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path={`/profile/${contextUser?.User}`} element={<Search />}></Route>
              </Routes>

            </BrowserRouter>
            <Footer />
          </div>
        </SearchProvider>
      </CartProvider>
    </UserProvider>

  );
}

export default App;
