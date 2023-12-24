import axios from "axios";
import HaveToLogin from "../components/HaveToLogin";


const baseURL = "https://backend-aajj.onrender.com/";
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
//-----------------------------------GeoLocation--------------------------------------------------------
const API_endpoint_GeoLocation = `https://api.openweathermap.org/data/2.5/weather?`
const API_key_GeoLocation = `3c480c60a391f0cc316c18897aabf10b`
export const getGeoLocation = async (latitude, longitude) => {
    let finalApiEndPoint = `${API_endpoint_GeoLocation}lat=${latitude}&lon=${longitude}&appid=${API_key_GeoLocation}`
    try {
        await axios.get(finalApiEndPoint)
            .then(response => {
                localStorage.setItem('geoLocation-country',response.data.sys.country)
                localStorage.setItem('geoLocation-city', response.data.name)
                localStorage.setItem('geoLocation-lat', response.data.coord.lat)
                localStorage.setItem('geoLocation-lon',response.data.coord.lon)
                if(response.data.sys.country === "AR")
                {
                    localStorage.setItem('tradecoin', "ARG")
                }
                else{
                    localStorage.setItem('tradecoin', "USD")
                }
            })
    } catch (error) {
        console.log(error)
    }
}
//-----------------------------------Dolar--------------------------------------------------------------
export const getDolarBlue = async () => {
    const response = await fetch(`https://dolarapi.com/v1/dolares/blue`)
    const data = await response.json();
    sessionStorage.setItem(`USD-BLUE`, data.compra)
    return data;

}
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
        const { data } = await axios.post(`${baseURL}user/login`, bodyData
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