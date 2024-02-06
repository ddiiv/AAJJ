import React, { useEffect, useState } from "react"
import { getCategories, getSizes, getSubCategories } from "../api/apiFunctions"
import "../css/Filters.css"


const Filters = () => {
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [size, setSize] = useState([])


  const handleClick = (e) => {
    e.preventDefault();


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

  }, [])
  /* --------------------Filter useEffect --------------------*/

  function localCoin() {
    if (localStorage.getItem("geoLocation-country") === "AR") {
      return (<>
        <svg class="svg-filter-localcoin text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
          <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </svg>
        <b className="bCoin"> ARG </b>
      </>)
    } else {
      return (<>
        <svg class="svg-filter-localcoin text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clip-rule="evenodd" />
          <path fill-rule="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clip-rule="evenodd" />
          <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </svg>
        USD
      </>)
    }
  }
  return (


    <div className="filterSection">
      <h2 className="titleFilter">
        <svg class="svg-filter-tag text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24">
          <path d="M18 3h-5.7a2 2 0 0 0-1.4.6L3.6 11a2 2 0 0 0 0 2.8l6.6 6.6a2 2 0 0 0 2.8 0l7.4-7.5a2 2 0 0 0 .6-1.4V6a3 3 0 0 0-3-3Zm-2.4 6.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>
        Filtros
      </h2>


      <section>
        <div className="vertical-buttons">
          <form className="filters-form">
            <div className="filterSection__Category">
              <h3 className="filters-titles__sections">Deporte</h3>
              {category.map((category) => (
                <div key={category.IdCategory} className="filterSection__Category__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={category.IdCategory} name={category.Category} value={category.Category} />
                  <label className="filters-label__products" htmlFor={category.IdCategory}>{category.Category}</label>
                </div>
              ))}
            </div>
            <div className="filterSection__SubCategory">
              <h3 className="filters-titles__sections">Generos</h3>
              {subCategory.map((subCategory, index) => (
                <div key={index} className="filterSection__SubCategory__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={subCategory.IdSubCategory} name={subCategory.SubCategory} value={subCategory.SubCategory} />
                  <label className="filters-label__products" htmlFor={subCategory.IdSubCategory}>{subCategory.SubCategory}</label>
                </div>
              ))}
            </div>
            <div className="filterSection__Size">
              <h3 className="filters-titles__sections">Talles</h3>
              {size.map((size, index) => (
                <div key={index} className="filterSection__Size__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={size.IdSize} name={size.size} value={size.size} />
                  <label className="filters-label__products" htmlFor={size.IdSize}>{size.size}</label>
                </div>
              ))}
            </div>
            <div className="filterSection__Price">
              <h3 className="filters-titles__sections">Precio</h3>
              <div className="filterSection__Price__Item">
                <input className="filters-checkbox__products" type="checkbox" id="price1" name="price1" value="price1" />
                <label className="filters-label__products" htmlFor="price1">Menor a $20.000</label>
              </div>
              <div className="filterSection__Price__Item">
                <input className="filters-checkbox__products" type="checkbox" id="price2" name="price2" value="price2" />
                <label className="filters-label__products" htmlFor="price2">$20.000 - $50.000</label>
              </div>
              <div className="filterSection__Price__Item">
                <input className="filters-checkbox__products" type="checkbox" id="price3" name="price3" value="price3" />
                <label className="filters-label__products" htmlFor="price3">Mayor a $50.000</label>
              </div>
            </div>
            <div className="filterSection__Color">
              <h3 className="filters-titles__sections">Color</h3>
              <ul>
                <div className="filterSection__Color__Item">
                  <input className="filters-checkbox__products" type="checkbox" value="red" />
                  <label className="filters-label__products" >Rojo</label>
                </div>
                <div className="filterSection__Color__Item">
                  <input className="filters-checkbox__products" type="checkbox" value="blue" />
                  <label className="filters-label__products" >Azul</label>
                </div>
                <div className="filterSection__Color__Item">
                  <input className="filters-checkbox__products" type="checkbox" value="green" />
                  <label className="filters-label__products" >Verde</label>
                </div>
                <div className="filterSection__Color__Item">
                  <input className="filters-checkbox__products" type="checkbox" value="yellow" />
                  <label className="filters-label__products" >Amarillo</label>
                </div>
                <div className="filterSection__Color__Item">
                  <input className="filters-checkbox__products" type="checkbox" value="black" />
                  <label className="filters-label__products" >Negro</label>
                </div>
              </ul>
            </div>
            <span className="product-rich-text__LocalCoin-filters" >{localCoin()}</span>
          </form>
        </div>

      </section>
    </div>
  )

}

export default Filters;