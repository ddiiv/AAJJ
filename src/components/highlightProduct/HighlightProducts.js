import React, { useEffect } from "react";
import HighlightCard from "./HighlightCard.js";
import '../../css/HighlistProducts.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useProductFunctions } from "../../context/ProductContext.js";

const HighlistProducts = () => {
  const ProductFunctions = useProductFunctions();
  useEffect(() => {
    ProductFunctions.getProductsHightlist();

  }, [])

  const settings = {
    useTransform: true,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
    slide: '.slider-pic',
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    cssEase: 'ease-out',
    responsive: [
      {
        breakpoint: 450,
        settings: {
          dots: false,
          slidesToShow: 2,
        }
      }]
  };

  return (

    <div className="productsHighlist">
      <h2 className="highList">Destacados</h2>
      <Slider  {...settings}>

        {ProductFunctions.listProduct?.map(product =>
        (
          <HighlightCard key={product.idProduct} product={product} />
        ))}
      </Slider>
    </div>

  );



}
export default HighlistProducts;