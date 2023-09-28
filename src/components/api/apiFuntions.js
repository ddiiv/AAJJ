
import axios from 'axios';

const baseURL="http://localhost:3001/";

//----------------------------------PUT-------------------------------------------------

export const sendNewProducts = async(Product) =>{
    try {
        const { data } = await axios({
            method: 'put',
            url: `${baseURL}product`,
            data: {
                "product":
                {
                    "idCategory":Product.idCategory,
                    "idSubCategory":Product.idSubCategory,
                    "title":Product.title,
                    "price":Product.price,
                    "description":Product.description,
                    "enabled":Product.enabled,
                    "material":Product.material
                },
                "sizes":[Product.size],  
                "img":[Product.img]
            }
        });
        console.log(data);
        return alert('Producto añadido');
        
    }
    catch (err) {
        if (err.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(err.message);
        }
    }
}

export const sendStock = async(Stock) =>{
    try {
        console.log(Stock)
        const { data } = await axios({
            method: 'put',
            url: `${baseURL}managestock`,
            data: {
                
                    "idEmployee":Stock.idEmployee,
                    "idStock":Stock.idStock,
                    "date":Stock.date,
                    "idReason":Stock.idReason,
                    "quantity":Stock.quantity,
                    "description":Stock.description
                
            }
        });
        console.log(data);
        return alert(`Se añadio stock a ${Stock.title} un total de ${Stock.quantity} unidades`);
        
    }
    catch (err) {
        if (err.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(err.message);
        }
    }
}

//-----------------------------------------GETS------------------------------------------------------------

export const getReason = async() => {
    const response = await fetch(`${baseURL}reasons`)
    const data = await response.json()
    return data
}

export const getStockById = async(id) => {
    try{
        console.log(id)
        const { data } = await axios({
            method: 'get',
            url: `${baseURL}stock/${id}`
        });
        console.log(data)
        return data;
    }
    catch (err) {
        if (err.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(err.message);
        }
    }    
}

export const getProducts = async() => {
    const response = await fetch(`${baseURL}products`)
    const data = await response.json()
    return data
}
export const getSize = async() => {
    const response = await fetch(`${baseURL}size`)
    const data = await response.json()
    return data
}


export const getCategory = async() => {
    const response = await fetch(`${baseURL}category`)
    const data = await response.json()
    return data
}

export const getSubCategory = async() => {
    const response = await fetch(`${baseURL}subCategory`)
    const data = await response.json()
    return data
}

export const  getCategoryById = async(id) => {
    const response = await fetch(`${baseURL}category/${id}`)
    const data = await response.json()
    return data

}


export const  getSubCategoryById = async(id) => {
    const response = await fetch(`${baseURL}subCategory/${id}`)
    const data = await response.json()
    return data
}
//

export const getProductsById = async(id) => {
    const response = await fetch(`${baseURL}products/${id}`)
    const data = await response.json()
    console.log(data)
    return data
}


export const getProductsByTitle = async(title) => {
    const response = await fetch(`${baseURL}products/${title}`)
    const data = await response.json()
    return data
}

export const getProductsByCategory = async(category) => {
    const response = await fetch(`${baseURL}products`)
    const data = await response.json()
    return data
}

export const getProductsBySubcategory = async(subCategory) => {
    const response = await fetch(`${baseURL}products`)
    const data = await response.json()
    return data
}

export const getProductsByPrice = async(price) => {
    const response = await fetch(`${baseURL}products`)
    const data = await response.json()
    return data
}

export const getStockByIdProduct = async(idProduct) => {

    const response = await fetch(`${baseURL}stock/${idProduct}`)
    const data = await response.json()
    return data
}

export const getStockBySize = async(size) => {
    const response = await fetch(`${baseURL}stock/${size}`)
    const data = await response.json()
    return data
}
//------------------------UPDATES---------------------------------------------------------------
//------------------------DELETE---------------------------------------------------------------
export const deleteProduct = async(id) => {
    const response = await fetch(`${baseURL}product/${id}`, {
        method: 'DELETE'
    })
    const data = await response.json()
    return data
}
