import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Poppins-Regular.ttf'
import './fonts/Poppins-Medium.ttf'
import './fonts/Poppins-ExtraLight.ttf'
import './fonts/Poppins-ExtraBold.ttf'
import './fonts/Poppins-Black.ttf'


import { UserContext } from "./context/UserContext.js";
import { SearchProvider }  from "./context/SearchContext.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContext>
    <SearchProvider>
    <App />
    </SearchProvider>
    </UserContext>
  </React.StrictMode>
);


reportWebVitals();
