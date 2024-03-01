import React, { useState, useContext, createContext, useEffect } from "react";
import { getCategories, getSizes, getSubCategories } from "../api/apiFunctions"

const FiltersContext = createContext();
const FiltersFunctionsContext = createContext();

export function useFiltersContext() {
    return useContext(FiltersContext);
}
export function useFiltersFunctions() {
    return useContext(FiltersFunctionsContext);
}

export const FiltersProvider = ({ children }) => {

    const initialValues = {
        category: [],
        subCategory: [],
        size: []
    }
    const initialValuesSelected = {
        selectedCategory: [],
        selectedSubCategory: [],
        selectedSize: [],
        selectedRangePrice: [],
        selectedColor: []
    }
    const [filtersData, setFiltersData] = useState(initialValues);
    const [filters, setFilters] = useState(initialValuesSelected);

    useEffect(() => {
        getCategories()
            .then(Categories => {
                setFiltersData(prev => ({ ...prev, category: Categories }))
            })

        getSubCategories()
            .then(SubCategory => {
                setFiltersData(prev => ({ ...prev, subCategory: SubCategory }))
            })

        getSizes()
            .then(Sizes => {
                setFiltersData(prev => ({ ...prev, size: Sizes }))
            })

    }, [])

    function handleSwitchFilter(e) {
        if (e.target.checked === true) {
            switch (e.target.name) {
                case "category":
                    setFilters(prev => ({ ...prev, selectedCategory: [...prev.selectedCategory, e.target.value] }))
                    break;
                case "subCategory":
                    setFilters(prev => ({ ...prev, selectedSubCategory: [...prev.selectedSubCategory, e.target.value] }));
                    break;
                case "size":
                    setFilters(prev => ({ ...prev, selectedSize: [...prev.selectedSize, e.target.value] }));
                    break;
                case "color":
                    setFilters(prev => ({ ...prev, selectedColor: [...prev.selectedColor, e.target.value] }));
                    break;
                case "rangePrice":

                    const value = JSON.parse(e.target.value);
                    setFilters(prev => ({ ...prev, selectedRangePrice: [value] }));
                    break;
                default:
                    console.log("No se selecciono nada")
                    break;
            }
        }
        else {
            switch (e.target.name) {
                case "category":
                    setFilters(prev => ({ ...prev, selectedCategory: prev.selectedCategory.filter(category => category !== e.target.value) }))
                    break;
                case "subCategory":
                    setFilters(prev => ({ ...prev, selectedSubCategory: prev.selectedSubCategory.filter(subCategory => subCategory !== e.target.value) }));
                    break;
                case "size":
                    setFilters(prev => ({ ...prev, selectedSize: prev.selectedSize.filter(size => size !== e.target.value) }));
                    break;
                case "color":
                    setFilters(prev => ({ ...prev, selectedColor: prev.selectedColor.filter(color => color !== e.target.value) }));
                    break;
                case "rangePrice":
                    setFilters(prev => ({ ...prev, selectedRangePrice: []}));
                    break;
                default:
                    console.log("No se selecciono nada")
                    break;

            }
        }

    }

    function cleanFilters() {
        setFilters(initialValuesSelected)
    }

    return (
        <FiltersContext.Provider value={filters}>
            <FiltersFunctionsContext.Provider value={{ handleSwitchFilter, filtersData, cleanFilters }}>
                {children}
            </FiltersFunctionsContext.Provider>
        </FiltersContext.Provider>
    )
}
