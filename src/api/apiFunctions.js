import axios from "axios";
import HaveToLogin from "../components/HaveToLogin";
import { RedirectFunction } from "react-router-dom";

const baseURL = "http://localhost:3001/";
const token = window.localStorage.getItem("token");
const headerToken = { user_token: `${token}` };
const headers = {
    'Content-Type': 'application/json',
    'user_token': `${token}`
};
//-----------------------------------------GETS---------------------------------------------------------

//----------------------------------------Images--------------------------------------------------------
export const getImage = async (img) => {
    return await fetch(`${baseURL}img/${img}`);
};

export const getCarruselImages = async () => {
    const response = await fetch(`${baseURL}carrousel`);
    const data = response.json();
    return data;
};
//---------------------------------------Products-------------------------------------------------------

export const getProducts = async () => {
    try {
        const response = await fetch(`${baseURL}products`);
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.log(e)
        return (<> <HaveToLogin /></>)
    }
};
export const getProductsByCategory = async (id) => {
    const response = await fetch(
        `${baseURL}product/category/${id.categorySelected}`
    );
    const data = await response.json();

    return data;
};

export const getProductsHighlist = async () => {
    try {
        const response = await fetch(`${baseURL}products/highlights`);
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.log(e)
        return e
    }
};

//-----------------------------------Categories---------------------------------------------------------

export const getCategories = async () => {
    try {
        const response = await fetch(`${baseURL}categories`);
        const data = await response.json();
        return data;
    }
    catch (e) {
        console.log(e)
        return (<> <HaveToLogin /></>)
    }

};
//-----------------------------------SubCategories------------------------------------------------------

export const getSubCategories = async () => {
    try {
        const response = await fetch(`${baseURL}subcategories`);
        const data = await response.json();

        return data;
    }
    catch (e) {
        console.log(e)
        return e
    }
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
        const { data } = await axios.post('http://localhost:3001/user/login', bodyData
        )
        return data;

    }
    catch (e) {
        if (e.response.status === 404) {
            console.log('Resource could not be found!');
        }
        else if (e.response.status === 401) {
            return false
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

        const token = window.localStorage.getItem("token");
        const headerTokenn = { user_token: `${token}` };
        const { data } = await axios.get(
            `${baseURL}cartitems/${idUser}`,
            {
                headers: headerTokenn
            }
        )

        return data
    }
    catch (e) {
        if (e.response.status === 404) {
            console.log("Resource could not be found!");
        } else {
            console.log(e.message);
        }
    }
};

//-----------------------------------------PUTS---------------------------------------------------------
export const putRegisterUser = async (dataform) => {
    try {
        const response = await axios.put(
            `${baseURL}user/register`,
            dataform
        )
        console.log(response.status)
        return response.status
    }
    catch (e) {
        console.log(e)
    }

}
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