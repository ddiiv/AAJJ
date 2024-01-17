import React from "react";
import { useUserContext /*, useUserLogged*/ } from "../context/UserContext";
import "../css/UserProfile.css";
import { Link } from "react-router-dom";

const EditPersonalData = () => {
    const context = useUserContext();
    return (
        <main className="page" id="userProfile">
            <div className="containerPage" id="userProfile">
                <section className="profile-actions">
                    <div className="navigation-section__container">
                        <div className="navigation__container--content">
                            <ol className="links-redirection__navigator">
                                <li className="linkToRedirect__navigator"> <Link className="navigatorLink" to="/profile"> Mi perfil </Link> </li>
                                {">"}
                                <li className="linkToRedirect__navigator unavailable">Información personal</li>
                            </ol>
                        </div>
                    </div>
                    <div className="header profile-card__buttons">
                        <h2 className="profile-card__title"> <span className="headerEditProfile">Información personal</span></h2>

                        <div className="profile-card__buttons-editProfile">

                            <div className="profile-action edit">
                                <div className="andres-card list-item">
                                    <span className="andres-card editProfileTitle">Nombre y Apellido</span>
                                    <span className="editProfileDetailTitle">{context?.User}</span>
                                </div>
                                <div className="separator-ui"></div>
                                <div>
                                    <button className="editProfile__button">Editar</button>
                                </div>
                            </div>
                            <div className="profile-action edit">
                                <div className="andres-card list-item">
                                    <span className="andres-card editProfileTitle">DNI</span>
                                    <span className="editProfileDetailTitle">{context?.Dni}</span>
                                </div>
                                <div className="separator-ui"></div>
                                <div>
                                    <button className="editProfile__button">Editar</button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default EditPersonalData;