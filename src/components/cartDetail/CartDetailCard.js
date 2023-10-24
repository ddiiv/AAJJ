import React, { useState, useEffect } from "react";
import { getImage } from "../../api/apiFunctions";
import { Link } from "react-router-dom";

const CartDetailCard = ({ cartProductIn }) => {
    const [product, setProducts] = useState([]);
    const [stock, setStock] = useState(0);

    let priceTotalByProduct = 0 ;


   console.log("cartProductIn", cartProductIn)

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
            return product
        } catch (error) {
            throw new Error('Error al obtener los productos de la API. Error: ' + error)
        }
    }

    const priceTotalxProduct = () =>{
        
        priceTotalByProduct = product.Price * stock;
        
        return priceTotalByProduct;
    }
    useEffect(() => setStock(cartProductIn.QuantityCart), [cartProductIn])
    useEffect(() => {

       
        getImageProduct()
        console.log(product)
    }, [])

    return (
        <>

            <section className="item-row" >
                <article className="item-cart">
                    <div className="item-img-container">
                        <img className="item-img" src={product.Image} alt="Producto" />
                    </div>
                    <div className="item-cart__info">
                        <div className="item-name">
                            <p>{product.Title}</p>
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
                            <input className="cartitemQuantityCart" type="number" inputMode="numeric" value={stock} min={1} max={product.QuantityStock} disabled />
                        </div>
                        <button className="selector-button" onClick={handleStockAdd}>+</button>

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