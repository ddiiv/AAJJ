import React from "react";


const ImagesProduct = ({ imageurl }) => {
    return (
        <>
         <div className="ProductImages">
                    <img src={imageurl} alt={imageurl} />

                </div>
        </>
    )
}
export default ImagesProduct;