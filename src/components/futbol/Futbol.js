import { useEffect, useState } from "react"
import { getProducts } from "../api/apiFuntions"
import { Card, Dropdown, button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FutbolCatalog.css'
import products from "../../futbolProducts"


const FutbolCatalog = () => {
  const [listaProductos, setListaProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [category, setCategory] = useState([])
  const [images, setImages] = useState([])

  const [filtros, setFiltros] = useState({})

  const handleClick = e => setFiltros(filtros => ({ ...filtros, [e.target.name]: e.target.value }))

  useEffect(() => {

    getProducts().then(products => {
      setListaProductos(products)
      setProductosFiltrados(products)
    })
    
    products.map(product => {
      setImages(images => [...images, product.images[0]])
    }
    )
  }, [])

  useEffect(() => {
    if(!listaProductos.length) return
    let newProductos = [...listaProductos]
    // filtro por subcategory
    if (filtros.subcategory) newProductos = newProductos.filter(producto => producto.subcategory === filtros.subcategory)
    // filtro por size
    if (filtros.size) newProductos = newProductos.filter(producto => producto.sizes.includes(filtros.size))
    // mostramos solo los productos filtrados
    setProductosFiltrados(newProductos)
  }, [filtros])


  /* separadores */ 

  return (

  <div className="catalog">
    <h2>Productos</h2>
      {/* <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filtros
          </Dropdown.Toggle>

          <Dropdown name="">
            <Dropdown.Item><button onClick={handleClick} name="subcategory" value="hombre">Hombre</button></Dropdown.Item>
            <Dropdown.Item><button onClick={handleClick} name="subcategory" value="mujer">Mujer</button></Dropdown.Item>
            <Dropdown.Item><button onClick={handleClick} name="subcategory" value="niño">Niño</button></Dropdown.Item>
            <Dropdown.Item><button onClick={handleClick} name="subcategory" value="" variant="subcategory">Reset</button></Dropdown.Item>
          </Dropdown>
        </Dropdown>
        <section>
          <button onClick={handleClick} name="size" value="S">Short</button>
          <button onClick={handleClick} name="size" value="M">Medium</button>
          <button onClick={handleClick} name="size" value="L">Large</button>
          <button onClick={handleClick} name="size" value="" variant="success">Reset</button>
        </section> */}
      {/* </div> */}

      <ul className="products">
      {productosFiltrados.map(productFutbol => (

        <div class="card" key={productFutbol.idProduct}>
        <img src={images[productFutbol.idProduct]} alt="Producto"/>
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
  )

}

export default FutbolCatalog;