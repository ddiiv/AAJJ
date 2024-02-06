import React from "react";
import femeninoaajjj from "../../img/femeninoaajjj.jpg"
import inferioresaajj from  "../../img/infantiles-aajj.png"
import hombreaajj from "../../img/hombre-aajj.png"
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
                breakpoint: 630,
                settings: {
                    dots: true,
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    dots: true,
                    arrows: false,
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
                    <section className="productsHighlist" id="CarouselSubCategories">
                        <Slider  {...settings}>
                            <div className="carousel__card--subcategories">
                                <div className="carousel__card--subcategories__img">
                                    <Link className="nothing cardSubcategories">
                                        <img className="carousel_card-img" src={femeninoaajjj} alt="femeninoaajjj" />
                                        <div className="carousel__card--subcategories__title">
                                            <h3 className="carousel__card--subcategories__title--name">Mujer</h3>
                                            <div className="card--subcategories__title" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="carousel__card--subcategories">
                                <div className="carousel__card--subcategories__img">
                                    <Link className="nothing cardSubcategories">
                                        <img className="carousel_card-img" src={hombreaajj} alt="hombreaajj" />
                                        <div className="carousel__card--subcategories__title">
                                            <h3 className="carousel__card--subcategories__title--name">Hombre</h3>
                                            <div className="card--subcategories__title" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="carousel__card--subcategories">
                                <div className="carousel__card--subcategories__img">
                                    <Link className="nothing cardSubcategories">
                                        <img className="carousel_card-img" src={inferioresaajj} alt="inferioresaajj" />
                                        <div className="carousel__card--subcategories__title">
                                            <h3 className="carousel__card--subcategories__title--name">Niños</h3>
                                            <div className="card--subcategories__title" />
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