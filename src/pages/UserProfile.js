import React from "react"
import { useUserContext, useUserLogged } from "../context/UserContext"
import "../css/UserProfile.css"
import HaveToLogin from "../components/HaveToLogin"
import { Link } from "react-router-dom"

const UserProfile = () => {
    const context = useUserContext()
    const contextFunction = useUserLogged();
    function isLogged() {
        if (context) {

            return (
                <>

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
                                        <h1 className="rich-text hubtitle"><span className="rich-text" id="principal_text_cartempty">Bienvenido {context?.User}!</span></h1>
                                    </div>
                                </section>
                            </section>
                            <section className="profile-actions">
                                <div className="profile-card__buttons">
                                    <article className="profile-action">
                                        <div className="hub-header__icon">
                                            <svg className="profile-img-action" viewBox="0 0 20 20">
                                                <path className="profile-img-action" d="M19.471,8.934L18.883,8.34c-2.096-2.14-4.707-4.804-8.903-4.804c-4.171,0-6.959,2.83-8.996,4.897L0.488,8.934c-0.307,0.307-0.307,0.803,0,1.109l0.401,0.403c2.052,2.072,4.862,4.909,9.091,4.909c4.25,0,6.88-2.666,8.988-4.807l0.503-0.506C19.778,9.737,19.778,9.241,19.471,8.934z M9.98,13.787c-3.493,0-5.804-2.254-7.833-4.3C4.182,7.424,6.493,5.105,9.98,5.105c3.536,0,5.792,2.301,7.784,4.332l0.049,0.051C15.818,11.511,13.551,13.787,9.98,13.787z"></path>
                                                <circle cx="9.98" cy="9.446" r="1.629"></circle>
                                            </svg>
                                        </div>
                                        <div className="detail-card__action">
                                            <div className="detail-card_header">
                                                <h3 className="detail-card__title">Información personal</h3>
                                            </div>
                                            <div className="detail-card-description">
                                                <span className="rich-text"><p className="detail-card__text">Ver información personal</p></span>

                                            </div>
                                        </div>
                                        <div className="profileCard__button">
                                            <button className="redirect_action--profilebutton" onClick={contextFunction.ShowOrders}>
                                                <svg className="profile-img-action" viewBox="0 0 20 20">
                                                    <path className="profile-img-action" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </article>
                                    <Link className="nothing--profile" to="/editprofile">
                                    <article className="profile-action">
                                        
                                        <div className="hub-header__icon">
                                            <svg className="profile-img-action" viewBox="0 0 20 20">
                                                <path className="profile-img-action" d="M16.803,18.615h-4.535c-1,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.535C18.616,17.803,17.804,18.615,16.803,18.615zM17.71,12.268c0-0.502-0.405-0.906-0.907-0.906h-4.535c-0.501,0-0.906,0.404-0.906,0.906v4.535c0,0.502,0.405,0.906,0.906,0.906h4.535c0.502,0,0.907-0.404,0.907-0.906V12.268z M16.803,9.546h-4.535c-1,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.814-1.814,1.814-1.814h4.535c1.001,0,1.813,0.812,1.813,1.814v4.534C18.616,8.734,17.804,9.546,16.803,9.546zM17.71,3.198c0-0.501-0.405-0.907-0.907-0.907h-4.535c-0.501,0-0.906,0.406-0.906,0.907v4.534c0,0.501,0.405,0.908,0.906,0.908h4.535c0.502,0,0.907-0.406,0.907-0.908V3.198z M7.733,18.615H3.198c-1.002,0-1.814-0.812-1.814-1.812v-4.535c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.535C9.547,17.803,8.735,18.615,7.733,18.615zM8.64,12.268c0-0.502-0.406-0.906-0.907-0.906H3.198c-0.501,0-0.907,0.404-0.907,0.906v4.535c0,0.502,0.406,0.906,0.907,0.906h4.535c0.501,0,0.907-0.404,0.907-0.906V12.268z M7.733,9.546H3.198c-1.002,0-1.814-0.812-1.814-1.814V3.198c0-1.002,0.812-1.814,1.814-1.814h4.535c1.002,0,1.814,0.812,1.814,1.814v4.534C9.547,8.734,8.735,9.546,7.733,9.546z M8.64,3.198c0-0.501-0.406-0.907-0.907-0.907H3.198c-0.501,0-0.907,0.406-0.907,0.907v4.534c0,0.501,0.406,0.908,0.907,0.908h4.535c0.501,0,0.907-0.406,0.907-0.908V3.198z"></path>
                                            </svg>
                                        </div>
                                        <div className="detail-card__action">
                                            <div className="detail-card_header">
                                                <h3 className="detail-card__title">Datos de la cuenta</h3>
                                            </div>
                                            <div className="detail-card-description">
                                                <span className="rich-text"><p className="detail-card__text">Aquí podras ver datos registrados de tu cuenta de socio</p></span>

                                            </div>
                                        </div>
                                        <div className="profileCard__button">
                                            <button className="redirect_action--profilebutton" onClick={contextFunction.ShowOrders}>
                                                <svg className="profile-img-action" viewBox="0 0 20 20">
                                                    <path className="profile-img-action" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                       
                                    </article> 
                                    </Link>
                                    <article className="profile-action">
                                        <div className="hub-header__icon">
                                            <svg className="profile-img-action" viewBox="0 0 20 20">
                                                <path className="profile-img-action" d="M17.35,2.219h-5.934c-0.115,0-0.225,0.045-0.307,0.128l-8.762,8.762c-0.171,0.168-0.171,0.443,0,0.611l5.933,5.934c0.167,0.171,0.443,0.169,0.612,0l8.762-8.763c0.083-0.083,0.128-0.192,0.128-0.307V2.651C17.781,2.414,17.587,2.219,17.35,2.219M16.916,8.405l-8.332,8.332l-5.321-5.321l8.333-8.332h5.32V8.405z M13.891,4.367c-0.957,0-1.729,0.772-1.729,1.729c0,0.957,0.771,1.729,1.729,1.729s1.729-0.772,1.729-1.729C15.619,5.14,14.848,4.367,13.891,4.367 M14.502,6.708c-0.326,0.326-0.896,0.326-1.223,0c-0.338-0.342-0.338-0.882,0-1.224c0.342-0.337,0.881-0.337,1.223,0C14.84,5.826,14.84,6.366,14.502,6.708"></path>
                                            </svg>
                                        </div>
                                        <div className="detail-card__action">
                                            <div className="detail-card_header">
                                                <h3 className="detail-card__title">Ver ordenes</h3>
                                            </div>
                                            <div className="detail-card-description">
                                                <span className="rich-text"><p className="detail-card__text">Ingresando aquí veras el estado de tus ordenes</p></span>

                                            </div>
                                        </div>
                                        <div className="profileCard__button">
                                            <button className="redirect_action--profilebutton" onClick={contextFunction.ShowOrders}>
                                                <svg className="profile-img-action" viewBox="0 0 20 20">
                                                    <path className="profile-img-action" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                                                </svg>
                                            </button>

                                        </div>
                                    </article>
                                    <article className="profile-action">
                                        <div className="hub-header__icon">
                                            <svg className="profile-img-action" viewBox="0 0 20 20">
                                                <path className="profile-img-action noborder" d="M11.174,14.993h1.647c0.228,0,0.412-0.184,0.412-0.411v-1.648c0-0.228-0.185-0.411-0.412-0.411h-1.647c-0.227,0-0.412,0.184-0.412,0.411v1.648C10.762,14.81,10.947,14.993,11.174,14.993 M3.759,13.346h4.943c0.227,0,0.412-0.184,0.412-0.412c0-0.228-0.185-0.411-0.412-0.411H3.759c-0.227,0-0.412,0.184-0.412,0.411C3.347,13.162,3.532,13.346,3.759,13.346 M3.759,14.993h3.295c0.228,0,0.412-0.184,0.412-0.411S7.282,14.17,7.055,14.17H3.759c-0.227,0-0.412,0.185-0.412,0.412S3.532,14.993,3.759,14.993 M14.881,5.932H1.7c-0.455,0-0.824,0.369-0.824,0.824v9.886c0,0.454,0.369,0.823,0.824,0.823h13.181c0.455,0,0.823-0.369,0.823-0.823V6.755C15.704,6.301,15.336,5.932,14.881,5.932M14.881,16.642H1.7v-5.767h13.181V16.642z M14.881,8.403H1.7V6.755h13.181V8.403z M18.176,2.636H4.995c-0.455,0-0.824,0.37-0.824,0.824v1.236c0,0.228,0.185,0.412,0.412,0.412c0.228,0,0.412-0.184,0.412-0.412V3.46h13.181v9.886H16.94c-0.228,0-0.412,0.185-0.412,0.412s0.185,0.412,0.412,0.412h1.235c0.455,0,0.824-0.369,0.824-0.824V3.46C19,3.006,18.631,2.636,18.176,2.636"></path>
                                            </svg>
                                        </div>
                                        <div className="detail-card__action">
                                            <div className="detail-card_header">
                                                <h3 className="detail-card__title">Tarjetas</h3>
                                            </div>
                                            <div className="detail-card-description">
                                                <span className="rich-text"><p className="detail-card__text">Tarjetas registradas en pagos con tu cuenta</p></span>

                                            </div>
                                        </div>
                                        <div className="profileCard__button">
                                            <button className="redirect_action--profilebutton" onClick={contextFunction.ShowOrders}>
                                                <svg className="profile-img-action" viewBox="0 0 20 20">
                                                    <path className="profile-img-action" d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </article>
                                    <article className="logOut-action">
                                        <div className="profileCard__button">
                                            <button className="redirect_action--profilebutton logOut" onClick={contextFunction.LogOut}>Cerrar sesion</button>
                                        </div>
                                    </article>
                                </div>

                            </section>
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