import React from "react";

const DescriptionProduct = ({ product }) => {
    return (
        <>

            <div className="ProductDescription">
                <h1>{product.Description}</h1>
            </div>
        </>
    )
}
export default DescriptionProduct;