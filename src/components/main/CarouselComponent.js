import React,{useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../css/Carrusel.css';
import { getCarruselImages, getImages } from '../../api/apiFuntions';

const CarouselComponent = () => {
    
    const [images, setImages] = useState([]);
    const [i ,setI] = useState([]);
    let array = [1,2,3,4,5]
    // useEffect(() => {
    //     getCarruselImages().then((data) => {
    //         data = data.map(e => {
    //             var newFoto
    //             getImages(e.Route).then((foto) => newFoto = foto)
    //             return {...e, foto: newFoto}
    //         })
    //         setI(data)
    //         console.log("DATA", data)
    //     })
    //     .catch((error) => {
    //         console.error('Error al obtener la imagen de la API:', error);
    //     })
    // }, [])

    useEffect(() => async() => {
        try {
            const response = await getCarruselImages()
            const data = response.map(async(e) => {
                console.log('e.Route', e.Route)
                const newFoto = await getImages(e.Route)
                return ({...e, foto: newFoto})
            })
            console.log('DATA', data)
            setI(data)
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
                        <div className='item' key={image.IdImageCarrusel}>
                        <img    className='carruselImg'
                                src={image.foto}
                                alt={image.Route}

                        /> </div>
                        ))}
                </Carousel>
            </div>

        </>

    );
};

export default CarouselComponent;