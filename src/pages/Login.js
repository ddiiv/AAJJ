import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup"
import '../css/Login.css'
import { Link } from "react-router-dom";


const Login = () => {

    return (

        <>
            <main className="page">
                <section className="containerPage">
                    <div className="landscape-view__container">
                        <div className="landscape-view__column landscape-view__column--left">
                            <h5 className="ticket-row__left-column--primary-text" id="landscape-view"><span className="rich-text" id="landscape-view-text">Ingresá tu usuario y contraseña</span></h5>
                            <div className="separator-ui"></div>
                        </div>
                        <div className="andres-card landscape-view__column landscape-view__column--right ">
                            <div className="andres-card__content landscape-view__card-content">
                                <Formik
                                    initialValues={{
                                        name: '',
                                        password: ''
                                    }}
                                >
                                    <Form className="login-form">
                                        <div className="login-form__input">
                                            <div className="andres-form-control">
                                                <label>
                                                    <span className="andres-form-control__label">Usuario</span>
                                                    <div className="andres-form-control__control">

                                                        <Field
                                                            type="text"
                                                            placeholder="Introduce tu usuario"
                                                            name="name"
                                                            autoCapitalize="true"
                                                            className="andres-form-control--textfield andes-form-control__field"
                                                        >

                                                        </Field>
                                                        <div className="andres-form-control__bottom">
                                                            <span className="andres-form-control__error-icon">

                                                            </span>
                                                            <span className="andres-form-control__message" id="user_id-message">

                                                                {/* <ErrorMessage  className="input-error"/> */}
                                                            </span>

                                                        </div>
                                                    </div>
                                                    <span className="andres-form-control__label">Contraseña</span>
                                                    <div className="andres-form-control__control">
                                                        <Field
                                                            type="password"
                                                            placeholder="Introduce tu contraseña"
                                                            name="password"
                                                            autoCapitalize="true"
                                                            className="andres-form-control--textfield andes-form-control__field"
                                                        >

                                                        </Field>
                                                        <div className="andres-form-control__bottom">
                                                            <span className="andres-form-control__error-icon">

                                                            </span>
                                                            <span className="andres-form-control__message" id="user_id-message">

                                                                {/* <ErrorMessage  className="input-error"/> */}
                                                            </span>
                                                        </div>
                                                    </div>

                                                </label>
                                            </div>

                                        </div>
                                        <div className="login-form__actions">
                                            <button type="submit" className="andres-button">
                                                <span className="andres-button__content login">
                                                    Iniciar sesion
                                                </span>
                                            </button>

                                            <Link to="/register" className="link">
                                                <span className="andes-button__content link">
                                                    Crear cuenta
                                                </span>
                                            </Link>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Login;