import React,{ useEffect, useState } from "react"
import { getProductsByCategory} from "../api/apiFunctions"
import { BrowserRouter as Routes, Link} from "react-router-dom";
import CardList from "../components/CardList";
/*  import Filters from "../components/Filters";  */


import { getCategories,getSizes,getSubCategories } from "../api/apiFunctions"
import { Dropdown }from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/CategoryCatalog.css'

const CategoryCatalog = (categorySelected) => {

  const [listProduct, setListProduct] = useState([])

  /* ------------------GetProducts useEffect------------------*/ 
useEffect(() => {
    const getProductByCategorySelected = async () => {  

      try{
      const products=  await getProductsByCategory(categorySelected)
      
      setListProduct(products)

    } catch (error) {
      throw new Error('Error al obtener los productos de la API. Error: ' + error)
    }
  }
  getProductByCategorySelected()
  },[categorySelected])

  /*------------------------------filter.js---------------------------------------*/
  const [productosFiltrados, setProductosFiltrados] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])  
  const [size, setSize] = useState([])    
  const [filters, setFilters] = useState([])

const handleClick = (e) => {
  e.preventDefault();
  setFilters(filters => ({ ...filters, [e.target.name]: e.target.value }))
}
const handleResetFilters = () => {
  setFilters({}); // Restablece los filtros a un objeto vacío
  setProductosFiltrados(listProduct); // Muestra todos los productos originales
};

/* -------------------Category useEffect -------------------*/ 
useEffect(() => {
  getCategories()
    .then(Categories => {
    setCategory(Categories)
  })
  
  /*getProducts()
  .then(products =>{
    setListProduct(products)
  })*/

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

  let filteredProducts = [...listProduct];

  // Aplicar filtro de SubCategoría
  if (filters.SubCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.SubCategory === filters.SubCategory
    );
  }

  // Aplicar filtro de Talla
  if (filters.Size) {
    filteredProducts = filteredProducts.filter((product) =>
      product?.Size?.includes(filters.Size)
    );
  }

  // Aplicar filtro de Categoría
  if (filters.Category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.Category === filters.Category
    );
  }

  setProductosFiltrados(filteredProducts); // Guardar productos filtrados en el estado
}, [filters, listProduct]);
/*-------------------------fin filter.js ------------------------------*/


return (
  <div className="page">
    <div className="containerPage">
    <div className="catalog">
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
                  <button onClick={handleClick} className="size-buttons" value={subcategory.SubCategory} name= 'SubCategory'>{subcategory.SubCategory}</button>
                </Dropdown.Item>
                ))}

              </Dropdown.Menu>
            </Dropdown> 

                <Dropdown>
                <Dropdown.Toggle className="size-buttons" variant = "success" id = "dropdown-basic">
                  Talles
                </Dropdown.Toggle>
                <Dropdown.Menu>
                {size.map(size => (
                <Dropdown.Item className="item-filter" key={size.IdSize}> 
                  <button onClick={handleClick} className="size-buttons" value={size.size} name='Size'>{size.size}</button>
                </Dropdown.Item>
                ))}
          
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
                  <button onClick={handleClick} className="size-buttons" value={categories.Category} name = 'Category'>{categories.Category}</button>
                </Dropdown.Item>
                ))}
              
                </Dropdown.Menu>
              </Dropdown>
              <button onClick={() => handleResetFilters()} className="size-buttons" value="">Resetear filtros</button>
            </div>
          </div>
            </section>
        </div>  
      </aside>
      <div className="products">
        <CardList props={productosFiltrados} />
      </div>
    </div>
    </div>
    </div>

    

);
}

export default CategoryCatalog;