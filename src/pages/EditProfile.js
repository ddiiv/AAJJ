import React, { useState } from "react";
import { useUserContext /*, useUserLogged*/ } from "../context/UserContext";
import "../css/UserProfile.css";

const EditProfile = () => {
    const context = useUserContext();
    /*const contextFunction = useUserLogged();*/

    const [name, setName] = useState(context?.User);

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <main className="page" id="userProfile">
            <div className="containerPage" id="userProfile">
                <section className="hub-title__container">
                    <section className="hub-header-card">
                        <div className="hub-header__icon">
                            <svg className="profile-img" viewBox="0 0 24 24">
                                <path className="profile-img" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                            </svg>
                        </div>
                        <div className="hub-header__title">
                            <h1 className="rich-text hubtitle"><span className="rich-text" id="principal_text_cartempty">Editar perfil {name}</span></h1>
                        </div>
                    </section>
                </section>
                <section className="profile-actions">
                    <div className="profile-card__buttons">
                        <form onSubmit={handleSubmit}>
                            <label>
                                Nombre:
                                <input type="text" value={name} onChange={handleNameChange} />
                            </label>
                            <input type="submit" value="Guardar cambios" />
                        </form>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default EditProfile;