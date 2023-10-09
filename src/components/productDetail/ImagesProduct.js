import React from "react";


const ImagesProduct = ({ imageurl }) => {
    return (
        <>
        
                    <div className="ProductImages">
                    <div className="asideImages">
                    <img className="asideImage" src={imageurl} alt={imageurl} />
                    <img className="asideImage" src={imageurl} alt={imageurl} />
                    <img className="asideImage" src={imageurl} alt={imageurl} />
                    </div>
                    <div className="MainImage">

                    <img src={imageurl} alt={imageurl} />
                    </div>
        </div>
        </>
    )
}
export default ImagesProduct;