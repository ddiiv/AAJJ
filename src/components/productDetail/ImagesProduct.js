import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
const ImagesProduct = ({ imageurl }) => {

    const images = [
        {
            original: imageurl,
            thumbnail: imageurl
        },
        {
            original: imageurl,
            thumbnail: imageurl
        },
        {
            original: imageurl,
            thumbnail: imageurl
        }

    ]


    return (
        <>
            <ImageGallery
                items={images}
                className="carousel"
                showPlayButton={false}
                showFullscreenButton={true}
                showThumbnails={true}
                showNav={false}
                showBullets={true}
                autoPlay={true}
                slideInterval={5000}
                thumbnailPosition="left"
                slideOnThumbnailOver={false}
                disableKeyDown={false}
                disableThumbnailScroll={true}
                disableSwipe={false}
            >
            </ImageGallery>
        </>
    )
}
export default ImagesProduct;