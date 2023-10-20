import React, { useContext, useEffect, useState } from "react";
import '../css/CartDetail.css'


const CartDetail = () => {





    return (

        <main className="page">
            <div className="containerPage">


                <div className="card-wrapper">
                    <div className="cards-container">
                        <div className="cards-list">
                            <div className="card-header">
                                MOD SPORT
                            </div>
                            <div className="separator-ui"></div>
                            <div className="item-row">

                            </div>
                            <div className="separator-ui"></div>
                        </div>
                        <div className="card-footer">
                            <div className="ticket-row">
                            </div>
                        </div>
                    </div>

                </div>

                <div className="price-box-container">
                    <div className="price-box-container__title">
                        <span className="rich-text"></span>
                    </div>
                    <div className="separator-ui"></div>
                    <div className="cards-price-box-row">

                    </div>
                    <button className="card-price-box-button"></button>
                </div>
            </div>
        </main>
    )



}
export default CartDetail;