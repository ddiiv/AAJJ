import React, { useEffect, useState } from "react"
import { getCategories, getSizes, getSubCategories } from "../api/apiFunctions"
import { useFiltersContext } from "../context/FiltersContext"
import { useFiltersFunctions } from "../context/FiltersContext"
import "../css/Filters.css"


const Filters = () => {

  const filters = useFiltersContext()
  const { handleSwitchFilter } = useFiltersFunctions()

console.log(filters)
  function localCoin() {
    if (localStorage.getItem("geoLocation-country") === "AR") {
      return (<>
        <svg className="svg-filter-localcoin text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd" />
          <path fill="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
          <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </svg>
        <b className="bCoin"> ARG </b>
      </>)
    } else {
      return (<>
        <svg className="svg-filter-localcoin text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path fill="evenodd" d="M7 6c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-2v-4a3 3 0 0 0-3-3H7V6Z" clipRule="evenodd" />
          <path fill="evenodd" d="M2 11c0-1.1.9-2 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7Zm7.5 1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" clipRule="evenodd" />
          <path d="M10.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
        </svg>
        USD
      </>)
    }
  }
  return (


    <div className="filterSection">
      <h2 className="titleFilter">
        Filtros
        <svg className="svg-filter-tag text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24">
          <path d="M18 3h-5.7a2 2 0 0 0-1.4.6L3.6 11a2 2 0 0 0 0 2.8l6.6 6.6a2 2 0 0 0 2.8 0l7.4-7.5a2 2 0 0 0 .6-1.4V6a3 3 0 0 0-3-3Zm-2.4 6.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
        </svg>



      </h2>
    
      <section>
        <div className="vertical-buttons">
          <form className="filters-form">
            <div className="filterSection__Category">
              <h3 className="filters-titles__sections">Deporte</h3>
              {filters?.category.map((category) => (
                <div key={category.IdCategory} className="filterSection__Category__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={category.IdCategory} name="category" value={category.Category} onChange={handleSwitchFilter}  />
                  <label className="filters-label__products" htmlFor={category.IdCategory}>{category.Category}</label>
                </div>
              ))}
            </div>
            <div className="filterSection__SubCategory">
              <h3 className="filters-titles__sections">Generos</h3>
              {filters?.subCategory.map((subCategory, index) => (
                <div key={index} className="filterSection__SubCategory__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={subCategory.IdSubCategory} name="subCategory" value={subCategory.SubCategory} onChange={handleSwitchFilter}  />
                  <label className="filters-label__products" >{subCategory.SubCategory}</label>
                </div>
              )
              )}
            </div>
            <div className="filterSection__Size">
              <h3 className="filters-titles__sections">Talles</h3>
              {filters?.size.map((size, index) => (
                <div key={index} className="filterSection__Size__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={size.IdSize} name="size" value={size.size} onChange={handleSwitchFilter}  />
                  <label className="filters-label__products" >{size.size}</label>
                </div>
              ))}
            </div>
            <div className="filterSection__Price">
              <h3 className="filters-titles__sections">Precio</h3>
              <div className="filterSection__Price__Item">
                <input className="filters-checkbox__products" type="checkbox" id="price1" name="price1" value="price1" />
                <label className="filters-label__products" >Menor a $20.000</label>
              </div>
              <div className="filterSection__Price__Item">
                <input className="filters-checkbox__products" type="checkbox" id="price2" name="price2" value="price2" />
                <label className="filters-label__products" >$20.000 - $50.000</label>
              </div>
              <div className="filterSection__Price__Item">
                <input className="filters-checkbox__products" type="checkbox" id="price3" name="price3" value="price3" />
                <label className="filters-label__products">Mayor a $50.000</label>
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
    </div >
  )

}

export default Filters;