import React, { useEffect } from "react"
import { useFiltersContext } from "../context/FiltersContext"
import { useFiltersFunctions } from "../context/FiltersContext"
import "../css/Filters.css"
import { useProductFunctions } from "../context/ProductContext"

const Filters = ({filterToQuit}) => {
  console.log(filterToQuit)
  const ProductsFR = useProductFunctions()
  const filters = useFiltersContext()
  const filterFunctions = useFiltersFunctions()
  const handleSwitchFilter = filterFunctions?.handleSwitchFilter
  const filterData = filterFunctions?.filtersData

  const SelectedCategory = filters.selectedCategory
  const SelectedSubCategory = filters.selectedSubCategory
  const SelectedSize = filters.selectedSize
  const SelectedRangePrice = filters.selectedRangePrice
  const SelectedColor = filters.selectedColor


  useEffect(() => {
    ProductsFR.filterProductsBySelected()
    // eslint-disable-next-line
  }, [filters])


  function filterCleaner() {
    if (SelectedCategory.length === 0 && SelectedSubCategory.length === 0 && SelectedSize.length === 0 && SelectedRangePrice.length === 0 && SelectedColor.length === 0) {
      return (
        <div className="filterSection__Cleaner">
          <p className="notfound-text filters">No se seleccionaron filtros</p>
        </div>
      )
    }
    else {

      return (
        <section className="filterSection__cleaner">
          <div className="filterSection__container">
            {SelectedCategory?.map((category, index) => (
              <article className="filterSelected_container" key={index}>
                <button className="filterSelected_button" name="category" value={category} onClick={handleSwitchFilter}>
                  {category}
                  <svg className="filterSelected_close-svg" viewBox="0 0 20 20">
                    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                  </svg>
                </button>
              </article>
            ))}
            {SelectedSubCategory?.map((subCategory, index) => (
              <article className="filterSelected_container" key={index}>
                <button className="filterSelected_button" name="subCategory" value={subCategory} onClick={handleSwitchFilter}>
                  {subCategory}
                  <svg className="filterSelected_close-svg" viewBox="0 0 20 20">
                    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                  </svg>
                </button>
              </article>
            ))}
            {SelectedSize?.map((size, index) => (
              <article className="filterSelected_container" key={index}>
                <button className="filterSelected_button" name="size" value={size} onClick={handleSwitchFilter}>
                  {size}
                  <svg className="filterSelected_close-svg" viewBox="0 0 20 20">
                    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                  </svg>
                </button>
              </article>
            ))}
            {SelectedRangePrice?.map((rangePrice, index) => (
              <article className="filterSelected_container" key={index}>
                <button className="filterSelected_button" name="rangePrice" value={rangePrice} onClick={handleSwitchFilter}>
                  ${rangePrice.min}- ${rangePrice.max}
                  <svg className="filterSelected_close-svg" viewBox="0 0 20 20">
                    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                  </svg>
                </button>
              </article>
            ))}
            {SelectedColor?.map((color, index) => (
              <article className="filterSelected_container" key={index}>
                <button className="filterSelected_button" name="color" value={color} onClick={handleSwitchFilter}>
                  {color}
                  <svg className="filterSelected_close-svg" viewBox="0 0 20 20">
                    <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
                  </svg>
                </button>
              </article>
            ))}
          </div>
          <button className="filters-button__cleaner" onClick={filterFunctions?.cleanFilters}>Limpiar Filtros</button>
        </section>
      )
    }
  }

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
      {
        filterCleaner()
      }
      <section>
        <div className="vertical-buttons">
          <form className="filters-form">
            <div className="filterSection__Category">
              <h3 className="filters-titles__sections">Deporte</h3>
              {filterData?.category.map((category) => (
                <div key={category.IdCategory} className="filterSection__Category__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={category.IdCategory} name="category" value={category.Category} onChange={handleSwitchFilter} />
                  <label className="filters-label__products" htmlFor={category.IdCategory}>{category.Category}</label>
                </div>
              ))}
            </div>
            <div className="filterSection__SubCategory">
              <h3 className="filters-titles__sections">Generos</h3>
              {filterData?.subCategory.map((subCategory, index) => (
                <div key={index} className="filterSection__SubCategory__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={subCategory.IdSubCategory} name="subCategory" value={subCategory.SubCategory} onChange={handleSwitchFilter} />
                  <label className="filters-label__products" >{subCategory.SubCategory}</label>
                </div>
              )
              )}
            </div>
            <div className="filterSection__Size">
              <h3 className="filters-titles__sections">Talles</h3>
              {filterData?.size.map((size, index) => (
                <div key={index} className="filterSection__Size__Item">
                  <input className="filters-checkbox__products" type="checkbox" id={size.IdSize} name="size" value={size.size} onChange={handleSwitchFilter} />
                  <label className="filters-label__products" >{size.size}</label>
                </div>
              ))}
            </div>

              <div className="filterSection__Price">
                <h3 className="filters-titles__sections">Precio</h3>
                <div className="filterSection__Price__Item">
                  <input className="filters-checkbox__products radio" type="radio" id="price1" name="rangePrice" value={JSON.stringify({ min: 0, max: 10000 })} onChange={handleSwitchFilter} />
                  <label className="filters-label__products" >Menor a $10.000</label>
                </div>
                <div className="filterSection__Price__Item">
                  <input className="filters-checkbox__products radio" type="radio" id="price2" name="rangePrice" value={JSON.stringify({ min: 10000, max: 20000 })} onChange={handleSwitchFilter} />
                  <label className="filters-label__products" >$10.000 - $20.000</label>
                </div>
                <div className="filterSection__Price__Item">
                  <input className="filters-checkbox__products radio" type="radio" id="price3" name="rangePrice" value={JSON.stringify({ min: 20000, max: 1000000 })} onChange={handleSwitchFilter} />
                  <label className="filters-label__products">Mayor a $20.000</label>
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