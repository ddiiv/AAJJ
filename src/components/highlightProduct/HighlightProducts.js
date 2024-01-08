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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const settings = {
    useTransform: true,
    autoplay: true,
    autoplaySpeed: 4500,
    infinite: true,
    slide: '.slider-pic',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
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

    <section className="productsHighlist">
      <header className="header_productHighlist--container">
        <h2 className="highList">Productos 
        <strong className="highList-Strong">Destacados</strong>
        </h2>
       

      </header>
      <Slider  {...settings}>

        {ProductFunctions.listProduct?.map(product =>
        (
          <HighlightCard key={product.idProduct} product={product} />
        ))}
      </Slider>
    </section>

  );



}
export default HighlistProducts;