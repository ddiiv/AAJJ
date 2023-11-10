import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/Carrusel.css';
import { getCarruselImages } from '../api/apiFunctions';

const CarouselComponent = () => {
    const [images, setImages] = useState([])
    useEffect(() => {
        const getImage = async () => {
        try {
                const rutas = await getCarruselImages()
                const images = rutas.map((ruta) => ({ ...ruta, foto:  `http://localhost:3001/img/${ruta.Route}` }))
                setImages(images)
            }
            catch (error) {
                throw new Error('Error al obtener las rutas de la API. Error: ' + error)
            }
        }
        getImage()
    }, [])

    return (
        <div className='carrousel'>
            <Carousel
                showThumbs={false}
                autoPlay={true}
                infiniteLoop={true}
                showArrows={false}
                interval={3000}
                transitionTime={500}
                showStatus={false}
                showIndicators={true}
                stopOnHover={false}
            >
                {images?.map((image, index) => (
                    <div className='item' key={index}>
                        <img className='carruselImg' src={image.foto} alt=""/> 
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselComponent;