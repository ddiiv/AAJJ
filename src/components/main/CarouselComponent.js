import React,{useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../css/Carrusel.css';
import { getCarruselImages, getImages } from '../../api/apiFuntions';

const CarouselComponent = () => {
    

    const [i ,setI] = useState([]);
   /*  useEffect(() => {
         getCarruselImages().then((data) => {
             data = data.map(e => {
                 var newFoto
                 getImages(e.Route).then((foto) => newFoto = foto)
                 return {...e, foto: newFoto}
             })
             setI(data)
             console.log("DATA", i)
         })
         .catch((error) => {
             console.error('Error al obtener la imagen de la API:', error);
         })
     }, [])
*/
    useEffect(() => async() => {
        try {
            const response = await getCarruselImages()
            const data = response.map(async(e) => {
                const newFoto = await getImages(e.Route)
                console.log('newFoto', newFoto)
                return (e=newFoto)
            })
            setI(data)
            console.log('data', data)
            console.log('images', i)

        }
        catch(error) {
            console.error('Error al obtener la imagen de la API:', error);
        }
    }, [])
    return (

        <>
            <div className='carrousel'>
                <Carousel 
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showArrows={false}
                    interval={5000}
                    transitionTime={500}
                    stopOnHover={false}
                    showStatus={false}
                    showIndicators={false}
                    

                >
                    {i?.map(image =>(
                        <div className='item' key={image.lenght}>
                        <img    className='carruselImg'
                                src={image}

                        /> </div>
                        ))}
                </Carousel>
            </div>

        </>

    );
};

export default CarouselComponent;