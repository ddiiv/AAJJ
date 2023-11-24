import axios from "axios";


const baseURL = "http://localhost:3001/";
const headerToken = { "user_token": window.localStorage.getItem("token") }
const token = window.localStorage.getItem("token");
const headers = {
    'Content-Type': 'application/json',
    'user_token': token
};
//-----------------------------------------GETS---------------------------------------------------------

//----------------------------------------Images--------------------------------------------------------
export const getImage = (img) => {
    return fetch(`${baseURL}img/${img}`);
};

export const getCarruselImages = async () => {
    const response = await fetch(`${baseURL}carrousel`);
    const data = response.json();
    return data;
};
//---------------------------------------Products-------------------------------------------------------

export const getProducts = async () => {
    const response = await fetch(`${baseURL}products`);
    const data = await response.json();

    return data;
};
export const getProductsByCategory = async (id) => {
    const response = await fetch(
        `${baseURL}product/category/${id.categorySelected}`
    );
    const data = await response.json();

    return data;
};

export const getProductsHighlist = async () => {
    const response = await fetch(`${baseURL}products/highlights`);
    const data = await response.json();
    return data;
};

//-----------------------------------Categories---------------------------------------------------------

export const getCategories = async () => {
    const response = await fetch(`${baseURL}categories`);
    const data = await response.json();

    return data;
};
//-----------------------------------SubCategories------------------------------------------------------

export const getSubCategories = async () => {
    const response = await fetch(`${baseURL}subcategories`);
    const data = await response.json();

    return data;
};
//-----------------------------------Sizes--------------------------------------------------------------
export const getSizes = async () => {
    const response = await fetch(`${baseURL}sizes`);
    const data = await response.json();

    return data;
};
export const getSizesByIdProduct = async (id) => {
    const response = await fetch(`${baseURL}sizes/product/${id}`);
    const data = await response.json();
    return data;
};
//-----------------------------------Users--------------------------------------------------------------
export const getUserByCredentials = async (credentials) => {
    try {
        const bodyData = {
            user: credentials.User,
            password: credentials.Password
        }
        const { data } = await axios.post('http://localhost:3001/user/login',bodyData
        )
        return data;

    }
    catch (e) {
        if (e.response.status === 404) {
            console.log('Resource could not be found!');
        }
        else if (e.response.status === 401) {
            const data = null;
            return data
        }
        else {
            console.log("e.response.status")
        }
    }
}
export const getUserById = async (id) => {
    try {

        const { data } = await axios.get(
            `${baseURL}user/${id}`, {
            headers: headerToken
        }
        )
        return data
    }
    catch (e) {
        if (e.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(e.message);
        }
    }

};
//-----------------------------------Cart---------------------------------------------------------------

export const getCartByIdUser = async (idUser) => {
    try {
        const { data } = await axios.get(`${baseURL}cartitems/${idUser}`, { headers });
        return data;
    } catch (e) {
        if (e.response.status === 404) {
            console.log("Resource could not be found!");
        } else {
            console.log(e.message);
        }
    }
};

//-----------------------------------------PUTS---------------------------------------------------------
export const putCardItem = async (ids) => {
    try {
        const bodyData = {
            IdUser: ids.IdUser,
            IdStock: ids.IdStock,
            Quantity: ids.StockSelected
        }
        const { data } = await axios.put(`${baseURL}cartitem`, bodyData, { headers })
            .then(response => {
                // Manejar la respuesta exitosa
                console.log('Respuesta:', response.data);
            })
        console.log(data)
        return alert('Item Añadido')
    }
    catch (e) {

            console.log(e);

    }
}
export const putCartItemQuantity = async (ids) => {
    try {
        const bodyData = {
            IdCartItem: ids.idCartItem,
            Quantity: ids.stockToHandle
        }
        const { data } = await axios.put(`${baseURL}cartitem/quantity`, bodyData, { headers })
            .then(response => {
                console.log('Respuesta:', response.data);
            })
        return data
    }
    catch (e) {
        console.log(e)
    }
}
//-----------------------------------------DELETES---------------------------------------------------------

export const deleteCartItem = async (id) => {
    try {
        const { data } = await axios.delete(`${baseURL}cartitem/${id}`, { headers })
        .then(response => {
            console.log('Respuesta:', response.data);
        })
        
    return data
    }
    catch (e) {
        if (e.response === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(e.message);
        }
    }
}