import React from "react";
import { CarouselProvider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ImagesProduct = ({ imageurl }) => {
    return (
        <>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={3}
                visibleSlides={1}
                className="carousel"
            >

                <div className="ProductImages">
                    <div className="asideImages">
                        <img className="asideImage" src={imageurl} alt={imageurl} />
                        <img className="asideImage" src={imageurl} alt={imageurl} />
                        <img className="asideImage" src={imageurl} alt={imageurl} />
                    </div>
                    <div className="MainImage">

                        <img className="mainImage-resolution" src={imageurl} alt={imageurl} />
                    </div>
                </div>
            </CarouselProvider>
        </>
    )
}
export default ImagesProduct;