import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../css/Carrusel.css';

const CarouselComponent = () => {
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
                    <div className='item'>
                        <img    className='carruselImg'
                                src="https://www.gagebeasleyshop.com/cdn/shop/articles/hans-jurgen-mager-CHqbiMhQ_wE-unsplash_1200x1200.jpg?v=1647831849"
                                alt="Oso Polar"

                        />      </div>
                    <div className='item'>
                        <img    className='carruselImg'
                                src="https://avicultura.com/wp-content/uploads/2016/06/greenpeace-1.jpg"
                                alt="Greenpeace"

                        />      </div>
                    <div className='item'>
                        <img    className='carruselImg'
                                src="https://tourismmedia.italia.it/is/image/mitur/1600X900_natura_lago_di_carezza?wid=1600&hei=900&fit=constrain,1&fmt=webp"
                                alt="Naturaleza"

                        />      </div>
                </Carousel>
            </div>

        </>

    );
};

export default CarouselComponent;