import React,{useState,useEffect} from 'react';
import { getProductsHighlist } from '../../api/apiFunctions';
import './Slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';

const ReactCardSlider =()=>{
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

    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
            { 
                listProduct.slides.map((slide,index)=>{
                    console.log(slide, index)    
                    return(

                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider;