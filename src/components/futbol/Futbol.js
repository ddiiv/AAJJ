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
        <ul className="products">
        {productosFiltrados.map(productFutbol => (

          <div class="card" key={productFutbol.idProduct}>
          <img src={images[productFutbol.idProduct]} className="productImg" alt="Producto"/>
          <div class="container">
            <p className="gender">{productFutbol.SubCategory}</p>
            <p className="title">{productFutbol.Title}</p>
            <p className="price">${productFutbol.Price}</p>
          </div>
        </div>
        ))}
      </ul>

<aside>

    <div className="filterSection">
    <h1 className="titleFilter">Filtros</h1>
      <section>
              <div className="vertical-buttons">
            <Dropdown>
              
              <Dropdown.Toggle  className="size-buttons"variant="success" id="dropdown-basic">
                Género
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item className="item-filter"> 
                  <button onClick={handleClick} className="size-buttons" value="hombre">Hombre</button>
                </Dropdown.Item>
                <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="mujer">Mujer</button>
                </Dropdown.Item >
                <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="niño">Niño</button>
                </Dropdown.Item>
                <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="">Reset</button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 

                <Dropdown>
                <Dropdown.Toggle className="size-buttons" variant = "success" id = "dropdown-basic">
                  Size
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="item-filter">
                <button onClick={handleClick} className="size-buttons" value="S">Short</button>
                  </Dropdown.Item>
                  <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="M">Medium</button>
                  </Dropdown.Item>
                  <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="L">Large</button>
                  </Dropdown.Item>
                  <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="">Reset</button>
                  </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

            <div className="filter-category">
              <Dropdown>
                <Dropdown.Toggle className="size-buttons" variant="success" id="dropdown-basic">
                  Deportes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="item-filter">
                    <button onClick={handleClick} className="size-buttons" value="Futbol">Futbol</button>
                  </Dropdown.Item>
                  <Dropdown.Item className="item-filter">
                    <button onClick={handleClick} className="size-buttons" value="Basquet">Basket</button>
                  </Dropdown.Item>
                  <Dropdown.Item className="item-filter">
                    <button onClick={handleClick} className="size-buttons" value="Indumentaria">Indumentaria</button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
                        </div>
            </section>
        </div>  
      </aside>
    </div>


      /* <div className="filterSection">
      <Dropdown >
        <Dropdown.Toggle  className="size-buttons" variant="success" id="dropdown-basic">
          Filtros
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item className="item-filter">
            <button onClick={handleClick} className="size-buttons" value="hombre">Hombre</button>
          </Dropdown.Item>
          <Dropdown.Item className="item-filter">
            <button onClick={handleClick} className="size-buttons" value="mujer">Mujer</button>
          </Dropdown.Item >
          <Dropdown.Item className="item-filter">
            <button onClick={handleClick} className="size-buttons" value="niño">Niño</button>
          </Dropdown.Item>
          <Dropdown.Item className="item-filter">
            <button onClick={handleClick} className="size-buttons" value="">Reset</button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      
        <div className="vertical-buttons">
          <Button onClick={handleClick} className="size-buttons"  clasname="size-buttons" value="S">Short</Button>
          <Button onClick={handleClick} className="size-buttons"  clasname="size-buttons" value="M">Medium</Button>
          <Button onClick={handleClick} className="size-buttons"  clasname="size-buttons" value="L">Large</Button>
          <Button onClick={handleClick} className="size-buttons"  clasname="size-buttons" value="">Reset</Button>
        </div>
        </div>
    </aside> */


);
}

export default FutbolCatalog;