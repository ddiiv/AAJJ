import React, { useEffect } from "react";
import '../../css/HighlistProducts.css'
import '../../css/htmltags.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HighlightCard from "../highlightProduct/HighlightCard.js"
import { useProductFunctions } from "../../context/ProductContext.js";

const Recommended = () => {
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
    slidesToShow: 3,
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
      <h2 className="highList">Recomendados</h2>
      <Slider  {...settings}>

        {ProductFunctions.listProduct?.map(product =>
        (
          <HighlightCard key={product.idProduct} product={product} />
        ))}
      </Slider>
    </div>

  );



}
export default Recommended;