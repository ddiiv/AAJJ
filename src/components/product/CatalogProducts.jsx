import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {getProducts} from "../api/apiFuntions";
import './CatalogProduct.css'
import ProductDetail from "./ProductDetail";

const CatalogP = () => {

const [products, setProducts] = useState([]);
// const product = Product; 
useEffect(() => {
    getProducts()
    .then(data => setProducts(data));
}, []);


    const enabledShow=(e)=>{
    if(e === true){
        
        e="Activo";
    }
    else if(e === false)
    {
        e="Desactivado";
    }
    return e;
}


return(
    <div className="ProductTable">
        <Table>
            <thead>
                <tr>
                    <th className="th">Activo/Desactivo</th>
                    <th className="productNameth">Nombre Producto</th>
                    <th className="th">Categoria</th>
                    <th className="th">SubCategoria</th>
                    <th className="th">Precio</th>
                    <th className="th">Descripcion</th>
                    <th className="th">Material</th>
                    <th className="th">Funciones</th>
                </tr>
            </thead>
            <tbody>  
            {products?.map((product)=>(
                    <tr key={product.idProduct} className=''>
                    <td className="products">{enabledShow(product.Enabled)} </td>
                    <td className="productName">{product.Title}</td>
                    <td className="products">{product.Category}</td>
                    <td className="products">{product.SubCategory}</td>
                    <td className="products">{product.Price}</td>
                    <td className="products">{product.Description}</td>
                    <td className="products">{product.Material}</td>
                    <td><ProductDetail id={product.idProduct}/></td> 
                    
                </tr>
                ))}
            </tbody>
        </Table>
    </div>
);

}

export default CatalogP;