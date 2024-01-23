//---------------CSS
import './App.css';

//-------------Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

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
import Register from './pages/Register'
import UserProfile from './pages/UserProfile'
//---------Context
import { UserProvider, useUserContext } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext.js';
import { SearchProvider, useSearchFunctions } from './context/SearchContext';
//--------ApiFunctions
import { getCategories, getProducts, getGeoLocation, getDolarBlue } from './api/apiFunctions';
//--------Pages
import NotFound from './pages/NotFound.js';
import EditAccountSettings from './pages/EditAccountSettings.js';
import HaveToLogin from './components/HaveToLogin.js';
import EditPersonalData from './pages/EditPersonalData.js';
import ViewOrders from './pages/ViewOrders.js';
import ViewPayMethod from './pages/ViewPayMethod.js';

function App() {
  const contextUser = useUserContext();
  const contextSearch = useSearchFunctions();
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async position => {
      const { latitude, longitude } = position.coords;
      const lat = Number(latitude).toFixed(4);
      const lon = Number(longitude).toFixed(4);
      getGeoLocation(lat, lon)
    });

    getDolarBlue()

    getCategories()
      .then((Categories) => {
        setCategory(Categories)
        return category
      })
      .catch((error) => {
        alert(error)
      })

    getProducts()
      .then(Products => {
        setProducts(Products)
        return products
      })
      .catch((error) => {
        alert(error)
      })
    // eslint-disable-next-line
  }, [])
  function isLogged() {
    if (contextUser?.User !== null) {
      return (
        <>
          <Route path='/profile' element={<UserProfile />}></Route>
          <Route path='/cartdetail' element={<CartDetail />}></Route>
          <Route path='/profile/account_settings' element={<EditAccountSettings />} />
          <Route path='/profile/personal_data' element={<EditPersonalData />} />
          <Route path={`/profile/orders_${localStorage.getItem("token")}`} element={<ViewOrders />} />
          <Route path='/profile/pay_methods' element={<ViewPayMethod />} />
        </>
      )
    } else {
      return (
        <>
          <HaveToLogin />
        </>
      )
    }
  }

  return (
    <>
      <div className="App">
        <div className="page">
          <article className="MainContainer">
            <UserProvider>
              <ProductProvider>
                <CartProvider>
                  <SearchProvider>

                    <BrowserRouter>
                      <TopNav category={category} />
                      <BottomNav category={category} />
                      <Routes>
                        <Route path='/' element={<Home />} />
                        {category?.map((categories) => {
                          const categorytoLowerCase = categories.Category
                          return (
                            <Route path={`/category/${categorytoLowerCase.toLowerCase()}`} key={categories.IdCategory} element={<CategoryCatalog categorySelected={categories.IdCategory} />} />
                          )
                        })}
                        {products?.map((product) => {
                          return (
                            <Route path={`/product/${product.Title}`} key={product.idProduct} element={<ProductDetail key={product.idProduct} productSelected={product} />} />
                          )
                        })}
                        <Route path={`/search=?${contextSearch?.searchInput}`} element={<Search />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                        <Route path='/register' element={<Register />}></Route>
                        <Route path='*' element={<NotFound />} />
                        {isLogged()}
                      </Routes>
                      <Footer />
                    </BrowserRouter>
                  </SearchProvider>
                </CartProvider>
              </ProductProvider>
            </UserProvider>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
