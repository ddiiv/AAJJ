import { useEffect, useState } from "react"
import { getProductsByCategory,getCategories,getSizes,getSubCategories } from "../api/apiFuntions"
import { BrowserRouter as Routes, Link} from "react-router-dom";


import { Dropdown }from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/CategoryCatalog.css'
import '../css/htmltags.css'

const CategoryCatalog = (categorySelected) => {

  const [listProduct, setListProduct] = useState([])
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])

  const [size, setSize] = useState([])
  
  const [filters, setFilters] = useState([])

  const handleClick = (e) => {
    e.preventDefault();
    setFilters(filters => ({ ...filters, [e.target.name]: e.target.value }))
    
  }

  /* ------------------GetProducts useEffect------------------*/ 
useEffect(() => {
    const getProductAndImageByCategorySelected = async () => {  
      try{
      const products=  await getProductsByCategory(categorySelected)
      console.log(products)
      const images = products.map((product) => ({ ...product, foto:  `http://localhost:3001/img/${product.Image}`}))

      setListProduct(images)
      setProductosFiltrados(products)
      setFilters(products.Category,products.SubCategory, products.Size)

    } catch (error) {
      throw new Error('Error al obtener los productos de la API. Error: ' + error)


    }
  }
  getProductAndImageByCategorySelected()
  },[categorySelected])

  /* -------------------Category useEffect -------------------*/ 
  useEffect(() => {
    getCategories()
      .then(Categories => {
      setCategory(Categories)
    })
    

  /* ------------------SubCategory useEffect -----------------*/ 

    getSubCategories()
      .then(SubCategory => {
      setSubCategory(SubCategory)
    })


  /* -------------------Size     useEffect -------------------*/ 
  
    getSizes()
      .then(Sizes => {
      setSize(Sizes)
    })
  },[])
  /* --------------------Filter useEffect --------------------*/ 
  useEffect(() => {
    if (!listProduct.length) return;
    let newProductos = [...listProduct];

    if (filters) {
      newProductos = newProductos.filter(product => product.SubCategory === filters.SubCategory);
    }

    if (filters) {
      newProductos = newProductos.filter(product => product.Size.includes(filters.Size));
    }

    if(filters){
      newProductos = newProductos.filter(product => product.Category === filters.Category);
    }

    setProductosFiltrados(newProductos);
  }, [filters])

return (
    <div className="catalog">
        <div className="products">
        {listProduct.map(product => (
           <Link className="nothing" to={`/product=/${product.Title}`}>
          <div className="card" key={product.idProduct}>
           
            <img src={product.foto} className="productImg" alt="Producto"/>
            <div className="container">
            <div className="genderContainer">
            <b className="gender">{product.SubCategory}</b>
            </div>
            <div className="TitleContainer">
            <h1 className="title">{product.Title}</h1>
            </div>
            <div className="priceContainer">
            <span className="price">${product.Price}</span>
            </div>
          </div>
        
        </div>  
        </Link>
       
        ))}
      </div>

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
              {subCategory.map(subcategory => (
                <Dropdown.Item className="item-filter" key={subcategory.IdSubCategory}> 
                  <button onClick={handleClick} className="size-buttons" value={subcategory.SubCategory}>{subcategory.SubCategory}</button>
                </Dropdown.Item>
                ))}

                <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="">Reset</button>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> 

                <Dropdown>
                <Dropdown.Toggle className="size-buttons" variant = "success" id = "dropdown-basic">
                  Talles
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {size.map(size => (
                <Dropdown.Item className="item-filter" key={size.IdSize}> 
                  <button onClick={handleClick} className="size-buttons" value={size.size}>{size.size}</button>
                </Dropdown.Item>
                ))}
                  <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="">Resetear filtros</button>
                  </Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

            <div className="filter-category">
              <Dropdown>
                <Dropdown.Toggle className="size-buttons" variant="success" id="dropdown-basic">
                  Deportes
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {category.map(categories => (
                <Dropdown.Item className="item-filter" key={categories.IdCategory}> 
                  <button onClick={handleClick} className="size-buttons" value={categories.Category}>{categories.Category}</button>
                </Dropdown.Item>
                ))}
                  <Dropdown.Item className="item-filter">
                  <button onClick={handleClick} className="size-buttons" value="">Resetear filtros</button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
                        </div>
            </section>
        </div>  
      </aside>
    </div>


    

);
}

export default CategoryCatalog;