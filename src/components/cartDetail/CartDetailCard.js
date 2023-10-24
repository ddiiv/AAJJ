import React, { useState, useEffect } from "react";
import { getImage, putCartItemQuantity } from "../../api/apiFunctions";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";


const CartDetailCard = ({ cartProductIn }) => {
    const [product, setProducts] = useState([]);
    const [stock, setStock] = useState(0);

    let priceTotalByProduct = 0;

    const SignupSchema = Yup.object().shape({
        stock: Yup.number()
            .max(product.QuantityStock, `No puedes elegir mas de` + product.QuantityStock)

    });

    const handleStockAdd = (e) => {
        if (stock < product.QuantityStock) {

            setStock(stock + 1);
        }
    }
    const handleStockSubs = (e) => {
        if (stock > 1) {
            setStock(stock - 1);
        }
    }

    const getImageProduct = async () => {
        try {
            const staticProduct = cartProductIn
            const res = await getImage(cartProductIn.Image)
            const url = await res.url;
            setProducts({
                ...staticProduct,
                Image: url
            });
        } catch (error) {
            throw new Error('Error al obtener los productos de la API. Error: ' + error)
        }
    }

    const priceTotalxProduct = () => { priceTotalByProduct = product.Price * stock; return priceTotalByProduct; }

    useEffect(() => {
        setStock(cartProductIn.QuantityCart)
        getImageProduct()

    }, [cartProductIn])


    return (
        <>

            <section className="item-row" >
                <article className="item-cart">
                    <div className="item-img-container">
                        <Link to={`/product/${product.Title}`} className="nothing">
                            <img className="item-img" src={product.Image} alt="Producto" />
                        </Link>
                    </div>
                    <div className="item-cart__info">
                        <div className="item-name">
                            <Link to={`/product/${product.Title}`} className="nothing">
                                <h5><p>{product.Title}</p></h5>
                            </Link>
                        </div>
                        <div className="ui-link-container">
                            <div className="item-link">
                                <Link to={`/product/${product.Title}`} className="link">Eliminar</Link>
                            </div>
                            <div className="item-link">
                                <Link className="link" to={`/product/${product.Title}`} >Guardar</Link>
                            </div>
                            <div className="item-link">
                                <Link to={`/product/${product.Title}`} className="link">Comprar Ahora</Link>
                            </div>
                        </div>

                    </div>
                </article>
                <div className="bf-quantity-selector">
                    <div className="item-quantity-selector--box">
                
                        <button className="selector-button" onChange={handleStockSubs}>-</button>
                        <div className="input-controler">
                            <input className="cartitemQuantityCart" type="number" inputMode="numeric" value={stock} min={1} max={product.QuantityStock} disabled />
                        </div>
                        <button className="selector-button" onChange={handleStockAdd}>+</button>

                    </div>
                </div>
                <div className="item-price-container">
                    <div className="item-price">
                        <p className="item-price-p">${priceTotalxProduct()}</p>
                    </div>
                </div>

            </section >

            <div className="separator-ui"></div>
        </>
    )
}
export default CartDetailCard;