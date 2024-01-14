import React from "react";
import example from "../../img/femeninoaajjj.jpg"
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselSubCategories = () => {
    const settings = {
        useTransform: true,
        autoplay: true,
        autoplaySpeed: 4500,
        infinite: true,
        slide: '.slider-pic',
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'ease-out',
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    dots: true,
                    arrows:false,
                    slidesToShow: 1,
                }
            }]
    };
    return (
        <>
            <div className="containerCarousel">
                <div className="header_container-mainSubCategories">
                    <h2 className="header_title-mainSubCategories"> Géneros</h2>
                </div>
                <div className="carousel__cards--subcategories">
                    <section className="productsHighlist">
                        <Slider  {...settings}>
                            <div className="carousel__card--subcategories">
                                <div className="carousel__card--subcategories__img">
                                    <Link className="nothing cardSubcategories">
                                        <img className="carousel_card-img" src={example} alt="example" />
                                        <div className="carousel__card--subcategories__title">
                                            <h3 className="carousel__card--subcategories__title--name">Mujer</h3>
                                            <after className="card--subcategories__title" />
                                        </div>
                                    </Link>
                                </div>

                            </div>
                            <div className="carousel__card--subcategories">
                                <div className="carousel__card--subcategories__img">
                                    <Link className="nothing cardSubcategories">
                                        <img className="carousel_card-img" src={example} alt="example" />
                                        <div className="carousel__card--subcategories__title">
                                            <h3 className="carousel__card--subcategories__title--name">Hombre</h3>
                                            <after className="card--subcategories__title" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="carousel__card--subcategories">
                                <div className="carousel__card--subcategories__img">
                                    <Link className="nothing cardSubcategories">
                                        <img className="carousel_card-img" src={example} alt="example" />
                                        <div className="carousel__card--subcategories__title">
                                            <h3 className="carousel__card--subcategories__title--name">Niños</h3>
                                            <after className="card--subcategories__title" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </Slider>
                    </section>
                </div>
            </div >
        </>
    )
}
export default CarouselSubCategories