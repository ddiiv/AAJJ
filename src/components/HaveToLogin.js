import React from "react";

const HaveToLogin= () =>{
    return(
        <>
            <section className="card-havetologin-container">
                <div className="card-havetologin">
                    <h1 className="havetoLogin"><span className="rich"> Para poder comprar tenes que iniciar sesion</span> </h1>
                    <button className="havetoLogin-button" onClick={()=>window.location="/login"}>Iniciar Sesión</button>

                </div>
            </section>
        </>
    )
}

export default HaveToLogin;