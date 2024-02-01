import React, { useState } from "react";
import maradona from "../img/bichologo.png"

const LoadingPageMaradona = () => {
    const [cont, setCont] = useState(10);

    function intervalSet() {
        const intervalo = setInterval(() => {

            setCont((prevContador) => (prevContador > 0 ? prevContador - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalo);
    }

    function loading() {
        intervalSet()
        while (cont > 1) {
            return (<>
                <div className="MainScreenLock">
                    <div className="center-img_maradona">
                        <img className="maradona-loading_reactive" alt="maradona-loading" src={maradona} />
                    </div>
                </div>
            </>)
        }
    }

    return (
        <>
            {loading()}
        </>
    )
}
export default LoadingPageMaradona;