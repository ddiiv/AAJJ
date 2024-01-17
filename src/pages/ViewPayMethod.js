import React from "react";
import "../css/UserProfile.css";
import { Link } from "react-router-dom";

const ViewPayMethod = () => {
    return (
        <main className="page" id="userProfile">
            <div className="containerPage" id="userProfile">
                <section className="profile-actions">
                    <div className="navigation-section__container">
                        <div className="navigation__container--content">
                            <ol className="links-redirection__navigator">
                                <li className="linkToRedirect__navigator"> <Link className="navigatorLink" to="/profile"> Mi perfil </Link> </li>
                                {">"}
                                <li className="linkToRedirect__navigator unavailable">Tarjetas</li>
                            </ol>
                        </div>
                    </div>
                    <div className="header profile-card__buttons">
                        <h2 className="profile-card__title"> <span className="headerEditProfile">Tarjetas</span></h2>
                        <div className="profile-card__buttons-editProfile">
                            <span className="editProfileDetailTitle"> Todavía no registro ninguna tarjeta</span>
                        </div>
                    </div>

                </section>
            </div>
        </main>
    );
}

export default ViewPayMethod;