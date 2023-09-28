
// import { useState } from 'react';
import './App.css';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

function App() {
  

  return (
    <Fragment>

      <h1>APP</h1>
      <Link to = "/products">Products Catalog</Link>
      <br></br>
      <Link to = "/stock">Manage Stock</Link>
    </Fragment>

  );
}

export default App;
