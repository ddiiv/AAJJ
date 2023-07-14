import { useEffect, useState } from "react"
import { getProducts } from "../api/apiFuntions"
import { Card, Dropdown, Button} from 'react-bootstrap'
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

  return (

    <div className="products">
      <div className="dropdown">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filtros
          </Dropdown.Toggle>

          <Dropdown.Menu name="">
            <Dropdown.Item><Button onClick={handleClick} name="subcategory" value="hombre">Hombre</Button></Dropdown.Item>
            <Dropdown.Item><Button onClick={handleClick} name="subcategory" value="mujer">Mujer</Button></Dropdown.Item>
            <Dropdown.Item><Button onClick={handleClick} name="subcategory" value="niño">Niño</Button></Dropdown.Item>
            <Dropdown.Item><Button onClick={handleClick} name="subcategory" value="" variant="subcategory">Reset</Button></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <section>
          <Button onClick={handleClick} name="size" value="S">Short</Button>
          <Button onClick={handleClick} name="size" value="M">Medium</Button>
          <Button onClick={handleClick} name="size" value="L">Large</Button>
          <Button onClick={handleClick} name="size" value="" variant="success">Reset</Button>
        </section>
      </div>


      {productosFiltrados.map((productFutbol) => (
        <Card style={{ width: '18rem' }} key={productFutbol.id}>
          <Card.Img variant="top" src={productFutbol.images[0]} />
          <Card.Body>
            <Card.Title>{productFutbol.title}</Card.Title>
            <Card.Text>
              {/* {productFutbol.Description} */}
              Sizes:{productFutbol.sizes.map(size => " " + size)}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
      ))}

    </div>
  )

}

export default FutbolCatalog;