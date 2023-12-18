import React, { useEffect, useState } from 'react';
import '../css/Carrusel.css';
import { getCarruselImages } from '../api/apiFunctions';
import Flickity from 'react-flickity-component';

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
            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={{
                    cellAlign: 'center',
                    contain: true,
                    wrapAround: true,
                    autoPlay: 5000,
                    pauseAutoPlayOnHover: false,
                    prevNextButtons: false,
                    pageDots: false,
                    draggable: true,
                    freeScroll: false,
                    groupCells: true,
                    lazyLoad: true,
                    selectedAttraction: 0.01,
                    friction: 0.15,
                    rightToLeft: false,
                    imagesLoaded: true,
                    percentPosition: false,
                    adaptiveHeight: false,
                    accessibility: true,
                    
                }}
                disableImagesLoaded={false}
                reloadOnUpdate
                static

            >
                {images?.map((image, index) => (
                    <div className='item' key={index}>
                        <img className='carruselImg' src={image.foto} alt="" />
                    </div>
                ))}
            </Flickity>
    )
}

export default CarouselComponent;