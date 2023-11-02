import React, { useState, useEffect } from "react";
import { getImage, putCartItemQuantity } from "../../api/apiFunctions";
import { Link } from "react-router-dom";
import { Waveform } from '@uiball/loaders'
import { useCartFunctions } from "../../context/CartContext";


const CartDetailCard = ({ cartProductIn }) => {
    const [product, setProducts] = useState([]);
    const [stock, setStock] = useState(0);
    const [loading, setLoading] = useState(false)
    const cartFunctions = useCartFunctions();
    let stockToHandle;
    let idCartItem;
    let idsToPutQuantity;
    let priceTotalByProduct = 0;



    const handleStockAdd = async (e) => {
        if (stock < product.QuantityStock) {
            e.preventDefault();
            setLoading(true)
            setStock(stock + 1)
            stockToHandle = stock + 1;
            idCartItem = product.IdCartItem;
            idsToPutQuantity = { idCartItem, stockToHandle }

            cartFunctions.changueQuantityItemCart(idsToPutQuantity).then(
                setLoading(false)
            )

        }

    }
    const handleStockSubs = async (e) => {
        if (stock > 1) {
            e.preventDefault();
            setLoading(true)
            setStock(stock - 1)
            stockToHandle = stock - 1;
            idCartItem = product.IdCartItem;

            idsToPutQuantity = { idCartItem, stockToHandle }
            cartFunctions.changueQuantityItemCart(idsToPutQuantity).then(
                setLoading(false)
            )

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
                                <h5 className="ticket-row__left-column--primary-text" id="cartDetailTitlexSize"><span className="richtext-black">{product.Title}</span></h5>
                            </Link>
                            <p className="item-cart__description-text"><span className="richtext-gray-regular">Talle seleccionado: {product.Size}</span></p>
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

                        <button className="selector-button" onClick={handleStockSubs}>-</button>
                        <div className="input-controler">
                            {loading === true && (
                                <Waveform
                                    size={25}
                                    lineWeight={3.5}
                                    speed={1}
                                    color="black"
                                />
                            )} {loading === false && (<input className="cartitemQuantityCart" type="number" inputMode="numeric" value={stock} min={1} max={product.QuantityStock} disabled />)}
                        </div>
                        <button className="selector-button" onClick={handleStockAdd}>+</button>

                    </div>
                </div>
                <div className="item-price-container">
                    <div className="item-price">
                        <p className="item-price-p">{loading === false && (
                            <span className="richtext-gray-regular" id="totalPricexProduct">${priceTotalxProduct()}</span>
                        )}
                            {loading === true && (<span className="richtext-gray-regular"> Loading</span>)

                            }
                        </p>
                    </div>
                </div>

            </section >

            <div className="separator-ui"></div>
        </>
    )
}
export default CartDetailCard;