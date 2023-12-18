import React from "react";
import CarouselComponent from "../components/CarouselComponent.js";
import HighlistProducts from "../components/highlightProduct/HighlightProducts.js";
import '../css/MainComponent.css'

const Home = () => {

   return (
      <>
         <div className="page">
            <div className="MainContainer">
               <CarouselComponent />
               <HighlistProducts />

               {/* footer */}
              
            </div>


         </div>
      </>
   )

}
export default Home;