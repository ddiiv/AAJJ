import React from "react"
import { useUserContext, useUserLogged } from "../context/UserContext"
import "../css/UserProfile.css"
import HaveToLogin from "../components/HaveToLogin"

const UserProfile = () => {
    const context = useUserContext()
    const contextFunction = useUserLogged();
    function isLogged() {
        if (context) {

            return (
                <>
                    <main className="page" id="cartDetail">
                        <div className="containerPage" id="cartDetail">
                            <div className="profile-container">
                                <h1><span>Perfil de usuario</span></h1>
                                <div className="profile-details">
                                    <p>Nombre: {context?.User}</p>
                                    <p>Email: {context?.Email}</p>
                                    <p>Fecha de creacion: {context?.DateCreation}</p>
                                    <p>Member Number: {context?.MembershipNumber}</p>
                                    <p>DNI: {context?.Dni}</p>
                                    <p>Birth Date: {context?.DateOfBirth}</p>
                                    <p>Phone Number: {context?.PhoneNumber}</p>

                                </div>
                                <div className="profile-buttons">
                                    <button className="havetoLogin-button" onClick={contextFunction.LogOut}>Cerrar sesion</button>
                                </div>
                            </div>
                        </div>
                    </main>
                </>
            )

        }
        else {
            return (
                <HaveToLogin />
            );
        }
    }
    return (
        <>
        {isLogged()}
        </>
    )
}
export default UserProfile