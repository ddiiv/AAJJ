import React,{useEffect,useState} from "react";
import { getProductsHighlist} from '../../api/apiFunctions.js';
import HighlightCard from "./HighlightCard.js";

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
                setListProduct(products)

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
        slidesToShow: 4, 
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnHover: true

      };
    return (
    
        <div className="productsHighlist">
        <h2 className="highList">Destacados</h2> 
        <Slider  {...settings}>

        {listProduct?.map(product =>
          (
            <HighlightCard product={product}/>
          ))}
        </Slider>
      </div>

  );
    


}
export default HighlistProducts;