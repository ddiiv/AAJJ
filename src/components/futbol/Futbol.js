import { useEffect, useState } from "react"
import { getProducts } from "../api/apiFuntions"
import { Card, Dropdown, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/FutbolCatalog.css'
import Products from "../../futbolProducts"


const FutbolCatalog = () => {
  const [listProduct, setListProduct] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [category, setCategory] = useState([])
  const [images, setImages] = useState([])

  const [filters, setfilters] = useState({})

  const handleClick = e => setfilters(filters => ({ ...filters, [e.target.name]: e.target.value }))

  useEffect(() => {
    // getProducts().then(products => {
      setListProduct(Products)
      setProductosFiltrados(Products)
    // })
    Products.map(product => {
      setImages(images => [...images, product.images[0]])
    }
    )
  }, [])

  useEffect(() => {
    if (!listProduct.length) return;
    let newProductos = [...listProduct];

    if (filters.subcategory) {
      newProductos = newProductos.filter(product => product.subcategory === filters.subcategory);
    }

    if (filters.size) {
      newProductos = newProductos.filter(product => product.sizes.includes(filters.size));
    }

    if(filters.category){
      newProductos = newProductos.filter(product => product.category === filters.category);
    }

    setProductosFiltrados(newProductos);
  }, [filters])

return (
    <div className="catalog">
<aside>
<div className="filterSection">
        <Dropdown >
          <Dropdown.Toggle  className="size-buttons" variant="success" id="dropdown-basic">
            Género
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item className="item-filter"> 
              <button onClick={handleClick} name="subcategory" value="hombre">Hombre</button>
            </Dropdown.Item>
            <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="subcategory" value="mujer">Mujer</button>
            </Dropdown.Item >
            <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="subcategory" value="niño">Niño</button>
            </Dropdown.Item>
            <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="subcategory" value="">Reset</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> 
        <section>
          <div className="vertical-buttons">
            <Dropdown>
            <Dropdown.Toggle className="filters" variant = "success" id = "dropdown-basic">
              Size
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="item-filter">
            <button onClick={handleClick} name="size" value="S">Short</button>
              </Dropdown.Item>
              <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="size" value="M">Medium</button>
              </Dropdown.Item>
              <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="size" value="L">Large</button>
              </Dropdown.Item>
              <Dropdown.Item className="item-filter">
              <button onClick={handleClick} name="size" value="">Reset</button>
              </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
          </div>
        </section>
        <div className="filter-category">
          <Dropdown>
            <Dropdown.Toggle className="filters" variant="success" id="dropdown-basic">
              Deportes
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item className="item-filter">
                <button onClick={handleClick} name = "category" value="Futbol">Futbol</button>
              </Dropdown.Item>
              <Dropdown.Item className="item-filter">
                <button onClick={handleClick} name = "category" value="Basquet">Basket</button>
              </Dropdown.Item>
              <Dropdown.Item className="item-filter">
                <button onClick={handleClick} name = "category" value="Indumentaria">Indumentaria</button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      
    </div>  
</aside>
      


        <ul className="products">
        {productosFiltrados.map(productFutbol => (

          <div class="card" key={productFutbol.idProduct}>
          <img src={images[productFutbol.idProduct]} className="productImg" alt="Producto"/>
          <div class="container">
            <p className="gender">{productFutbol.SubCategory}</p>
            <b className="title">{productFutbol.Title}</b>
            <h5><span className="price">{productFutbol.Price}$</span></h5>
          </div>
          <button variant="primary" className="addcart">Agregar al carrito</button>
        </div>
        ))}
      </ul>
    </div>

);
}

export default FutbolCatalog;