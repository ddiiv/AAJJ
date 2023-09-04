import React,{useState} from "react";
import CategoryCatalog from "./CategoryCatalog.js";


const MainFutbol = (categorySelected) => { 
    return (
        <>
            <CategoryCatalog categorySelected={categorySelected}/>
        </>
    );
}
export default MainFutbol;