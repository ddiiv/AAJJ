import React from "react";
import "../css/NotFound.css";

const NotFound = () => {
    return (
        <div className="notfound-container">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-text">Lo sentimos, la página que estás buscando no existe.</p>
            <a href="/" className="notfound-link">Volver al inicio</a>
        </div>
    );
}

export default NotFound;