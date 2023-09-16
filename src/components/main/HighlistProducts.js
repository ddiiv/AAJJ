import React,{useEffect,useState} from "react";
import { getImages, getProductsHighlist} from '../../api/apiFuntions.js';
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
                const images = products.map((product) => ({ ...product, foto:  `http://localhost:3001/img/${product.Image}` }))
                setListProduct(images)

            }
            catch (error) {
                throw new Error('Error al obtener los productos de la API. Error: ' + error)
            }
        } 
  getProductsAndImageHightlist()        
    }, [])
/* useEffect(() => {
        const getImage = async () => {
        try {
                const rutas = await getCarruselImages()
                const images = rutas.map((ruta) => ({ ...ruta, foto:  `http://localhost:3001/img/${ruta.Route}` }))
                console.log(images)
                setImages(images)
            }
            catch (error) {
                throw new Error('Error al obtener las rutas de la API. Error: ' + error)
            }
        }
        getImage()
    }, [])*/
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
          <img src={product.foto} className="productImgHighList" alt="Producto"/>
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