import React from "react";
import { Link } from "react-router-dom";

const HaveToLogin= () =>{
    return(
        <>
            <section className="card-havetologin-container">
                <div className="card-havetologin">
                    <h1 className="havetoLogin"><span className="rich"> Para realizar esta acción tienes que iniciar sesión</span> </h1>
                    <button className="havetoLogin-button"><Link to="/login" className="nothing" id="havetologin">Iniciar Sesión</Link></button>

                </div>
            </section>
        </>
    )
}

export default HaveToLogin;