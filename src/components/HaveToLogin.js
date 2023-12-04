import React from "react";
import { Link } from "react-router-dom";

const HaveToLogin= () =>{
    return(
        <>
            <section className="card-havetologin-container">
                <div className="card-havetologin">
                    <h1 className="havetoLogin"><span className="rich"> Para poder comprar tenes que iniciar sesion</span> </h1>
                    <button className="havetoLogin-button"><Link to="/login" className="nothing" id="havetologin">Iniciar Sesión</Link></button>

                </div>
            </section>
        </>
    )
}

export default HaveToLogin;