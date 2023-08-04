import { useEffect, useState } from "react"
import { getProducts } from "../api/apiFuntions"
import { Card, Dropdown, button} from 'react-bootstrap'
import './FutbolCatalog.css'
import products from "../../futbolProducts"
// esta linea ponerla en el index.js:
import 'bootstrap/dist/css/bootstrap.min.css'

const FutbolCatalog = () => {
  const [listaProductos, setListaProductos] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])

  const [filtros, setFiltros] = useState({})

  const handleClick = e => setFiltros(filtros => ({ ...filtros, [e.target.name]: e.target.value }))

  useEffect(() => {
   // getProducts().then(data => {
    // temporal por array hardcodeado
    setListaProductos(products)
    setProductosFiltrados(products)
    //  setListaProductos(data)
     // setProductosFiltrados(data)
   // })
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

      <div className="products">
      {productosFiltrados.map((productFutbol) => (

        <div class="card" key={productFutbol.id}>
        <img src={productFutbol.images[0]} alt="Producto"/>
        <div class="container">
          <h4><b className="title">{productFutbol.title}</b></h4>
          <h5><span className="price">${productFutbol.price}</span></h5>
          <p>Talles:{productFutbol.sizes.map(size => " " + size)}</p>
        </div>
        <button variant="primary">Comprar</button>
      </div>
      ))}
    </div>
  </div>
  )

}

export default FutbolCatalog;