import React,{useEffect,useState} from "react";
import { getImages, getProductsHighlist} from '../../api/apiFuntions.js';
import '../../css/HighlistProducts.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HighlistProducts = () => {
    const [listProduct, setListProduct] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        getProductsHighlist()
        .then(products => {
            setListProduct(products)
        })

          getImages("asd")
            .then((data) => { 
              setImages(data)
            })
              .catch((error) => {
                  // console.error('Error al obtener la imagen de la API:', error);
                

              })
          
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
      };
    return (
        <div className="catalog">
        <ul className="productsHighlist">
        <Slider {...settings}> 
        {listProduct?.map(product =>
          
          (
          <div className="card" key={product.IdProduct}>
          <img src={images} className="productImgHighList" alt="Producto"/>
          <div className="container">
            <p className="gender">{product.SubCategory}</p>
            <p className="title">{product.Title}</p>
            <p className="price">${product.Price}</p>
          </div>
        </div>
          ))}
</Slider>


      </ul>
    </div>
  );
    


}
export default HighlistProducts;