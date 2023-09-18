import React,{useEffect,useState} from "react";
import { getProductsHighlist} from '../../api/apiFuntions.js';

import '../../css/HighlistProducts.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter as Routes, Link} from "react-router-dom";


const HighlistProducts = () => {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        const getProductsAndImageHightlist = async () => {
            try {
                const products = await getProductsHighlist()
                const images = products.map((product) => ({ ...product, foto:  `http://localhost:3001/img/${product.Image}` }))
                setListProduct(images)

            }
            catch (error) {
                throw new Error('Error al obtener los productos de la API. Error: ' + error)
            }
        } 
  getProductsAndImageHightlist()        
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true

      };
    return (
    
        <div className="productsHighlist">
        <h2 className="highList">Destacados</h2> 
        <Slider  {...settings}>

        {listProduct?.map(product =>
          
          (
          <Link className="LinkConteiner" to={`/product=/${product.Title}`}>          
          <div className="CardHighList" key={product.IdProduct}>
           <img src={product.foto} className="productImgHighList" alt="Producto"/>
            <div className="container">
                <div className="genderContainer">
                <b className="gender">{product.SubCategory}</b>
                </div>
                <div className="TitleContainer">
                <h1 className="title">{product.Title}</h1>
                </div>
                <div className="priceContainer">
                <span className="price">${product.Price}</span>
                </div>
            </div>
          </div>
        </Link>
          ))}
        </Slider>
      </div>

  );
    


}
export default HighlistProducts;