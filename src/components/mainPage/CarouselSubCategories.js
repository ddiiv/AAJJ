import React from "react";
import example from "../../img/femeninoaajjj.jpg"
import Flickity from "react-flickity-component";

const CarouselSubCategories = () => {

    return (
        <>
            <div className="containerCarousel">
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
                    <div className="item">
                        <img src={example}  className="carruselImg" alt="example" />
                    </div>
                    <div className="item">
                        <img src={example}  className="carruselImg" alt="example" />
                    </div>
                    <div className="item">
                        <img src={example}  className="carruselImg" alt="example" />
                    </div>
                      <div className="item">
                        <img src={example}  className="carruselImg" alt="example" />
                    </div>
                    
                </Flickity>
            </div>
        </>
    )
}
export default CarouselSubCategories