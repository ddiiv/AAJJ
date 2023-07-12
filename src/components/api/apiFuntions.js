import React from "react";


const baseURL="http://localhost:3001/";

const getImages=()=>{
    /*hacer get img para carrusel*/



}
//-----------------------------------------GETS------------------------------------------------------------

export const getProductsById = async(id) => {
    const response = await fetch(`${baseURL}products/${id}`)
    const data = await response.json()
    console.log(data)
    return data
}
export const getProducts = async() => {
    const response = await fetch(`${baseURL}products`)
    const data = await response.json()
    console.log(data)
    return data
}