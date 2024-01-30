import React from "react";
import maradona from "../img/bichologo.png"

const LoadingPageMaradona = () => {
    function loading() {
        const loadingsesionstorage = window.sessionStorage.getItem("loading-info")

        if (loadingsesionstorage === "true") {
            return (<>
                <div className="MainScreenLock">
                    <div className="center-img_maradona">
                        <img className="maradona-loading_reactive" alt="maradona-loading" src={maradona} />
                    </div>
                </div>
            </>)
        }
        else {
            return (<></>)
        }
    }
    return (
        <>
            {loading()}
        </>
    )
}
export default LoadingPageMaradona;