import React, { useEffect, useState } from "react";
import { getProductsHighlist } from '../../api/apiFunctions.js';
import HighlightCard from "./HighlightCard.js";

import '../../css/HighlistProducts.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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
    useTransform: true,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false,
    slide: '.slider-pic',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false
        }
      }]
  };

  return (

    <div className="productsHighlist">
      <h2 className="highList">Destacados</h2>
      <Slider  {...settings}>

        {listProduct?.map(product =>
        (
          <HighlightCard key={product.idProduct} product={product} />
        ))}
      </Slider>
    </div>

  );



}
export default HighlistProducts;