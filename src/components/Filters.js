import React,{ useEffect, useState } from "react"
import { getCategories,getSizes,getSubCategories } from "../api/apiFunctions"
import { Dropdown }from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const Filters=({props})=>{
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])  
    const [size, setSize] = useState([])    
    const [filters, setFilters] = useState([])
    
  const handleClick = (e) => {
    e.preventDefault();
    setFilters(filters => ({ ...filters, [e.target.name]: e.target.value }))
    
  }

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

    function localCoin (){
      if(localStorage.getItem("geoLocation-country") === "AR"){
        return "Moneda de compra: ARS"
      }else{
        return "Trade Currency: USD"
      }
    }
    return(


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
          <span className="rich-text price" id="product-rich-text">{localCoin()}</span>
            </section>
        </div>  
    )

}

export default Filters;