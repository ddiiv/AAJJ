import React,{useEffect,useState} from "react";
import { getProductsHighlist } from "../../api/apiFunctions";
import '../../css/HighlistProducts.css'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HighlightCard from "../highlightProduct/HighlightCard.js"

const Recommended = () => {
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
        speed: 1000,
        slidesToShow: 3, 
        slidesToScroll: 1,
        scrollX: true,
        screenX: true,
        statusbar: true,
        autoplay: true,
        initialSlide: 0,
        toolbar: true,
        screenTop: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        
        cssEase: "linear",
        pauseOnDotsHover: true,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1, 
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
     
        
      };

    return (
    
        <div className="productsHighlist">
        <h2 className="highList">Recomendados</h2> 
        <Slider  {...settings}>

        {listProduct?.map(product =>
          (
            <HighlightCard key={product.idProduct} product={product}/>
          ))}
        </Slider>
      </div>

  );
    


}
export default Recommended;