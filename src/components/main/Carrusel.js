import React from 'react';
import './Carrusel.css';
import "../../../node_modules/bootstrap/js/src/carousel.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";




const MCarrusel = () => {

    



    return (
        <div className='CarruselLocation'>
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img className='item' src="https://unsplash.it/650/420?image=924" />
                </div>
                <div class="carousel-item">
                    <img className='item' src="https://unsplash.it/650/420?image=924" />
                </div>
                <div class="carousel-item">
                    <img className='item' src="https://unsplash.it/650/420?image=924" />
                </div>
                <div class="carousel-item">
                    <img className='item' src="https://unsplash.it/650/420?image=922" />
                </div>
                <div class="carousel-item">
                    <img className='item' src="https://unsplash.it/650/420?image=923" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div>
    );
}
export default MCarrusel;
