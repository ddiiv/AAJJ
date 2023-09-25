
const baseURL = "http://localhost:3001/";


//-----------------------------------------GETS---------------------------------------------------------    

//----------------------------------------Images--------------------------------------------------------
export const getImages =  (img) => {
        return fetch(`${baseURL}img/${img}`)        
}

export const getCarruselImages = async () => {
    const response = await fetch(`${baseURL}carrousel`)
    const data = response.json()
    return data
}
//---------------------------------------Products-------------------------------------------------------

export const getProducts = async () => {
    const response = await fetch(`${baseURL}products`)
    const data = await response.json()

    return data
}
export const getProductsByCategory = async (id) => {

    const response = await fetch(`${baseURL}product/category/${id.categorySelected}`)
    const data = await response.json()

    return data
}

export const getProductsHighlist = async () => {
    const response = await fetch(`${baseURL}products/highlights`)
    const data = await response.json()
    return data
}

//-----------------------------------Categories---------------------------------------------------------

export const getCategories = async () => {
    const response = await fetch(`${baseURL}categories`)
    const data = await response.json()

    return data
}
//-----------------------------------SubCategories------------------------------------------------------

export const getSubCategories = async () => {
    const response = await fetch(`${baseURL}subcategories`)
    const data = await response.json()

    return data
}
//-----------------------------------Sizes--------------------------------------------------------------
export const getSizes = async () => {
    const response = await fetch(`${baseURL}sizes`)
    const data = await response.json()

    return data
}
export const getSizesByIdProduct = async (id) => {

    const response = await fetch(`${baseURL}sizes/product/${id}`)
    const data = await response.json()
    console.log(data)
    return data
}
//-----------------------------------Users--------------------------------------------------------------
export const getUsers = async () => {
    const response = await fetch(`${baseURL}users`)
    const data = await response.json()

    return data
}
