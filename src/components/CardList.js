import React from "react";
import Card from "./Card";

const ListCard = ({props}) => {
return(
    <>
    {props?.map(product => (
        <Card product={product} key={product.idProduct}/>
    ))}
    </>
)
}
export default ListCard;