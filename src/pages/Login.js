import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useUserLogged } from "../context/UserContext";
import * as Yup from "yup"
import '../css/Login.css'
import { Link } from "react-router-dom";


const Login = () => {
    const context = useUserLogged();
    
    const SignupSchema = Yup.object().shape({
        User: Yup.string()
            .required("Un nombre es requerido"),

        Password: Yup.string()
            .required("Debes poner una contraseña")


    });
    return (

        <>
            <main className="page">
                <section className="containerPage">
                    <div className="landscape-view__container">
                        <div className="landscape-view__column landscape-view__column--left">
                            <h5 className="ticket-row__left-column--primary-text" id="landscape-view"><span className="rich-text" id="landscape-view-text">Ingresá tu usuario y contraseña, para entrar a BichoStore! <div className="separator-ui" id="login-separator"></div></span></h5>

                        </div>
                        <div className="andres-card landscape-view__column landscape-view__column--right ">
                            <div className="andres-card__content landscape-view__card-content">
                                <Formik
                                    initialValues={{
                                        User: '',
                                        Password: ''
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={async (values) => {
                                        await new Promise((r) => setTimeout(r, 500));
                                        alert("Bienvenido " + values.User + " !");
                                        /*context.getUser(values);*/
                                    }}
                                >
                                    <Form className="login-form">
                                        <div className="login-form__input">
                                            <div className="andres-form-control">
                                                <label className="andres-form-label-container">
                                                    <span className="andres-form-control__label">Usuario</span>
                                                    <div className="andres-form-control__control">

                                                        <Field
                                                            type="text"
                                                            placeholder="Introduce tu usuario"
                                                            name="User"
                                                            autoCapitalize="true"
                                                            className="andres-form-control--textfield andes-form-control__field"
                                                        >

                                                        </Field>
                                                    </div>
                                                    <div className="andres-form-control__bottom">
                                                        <span className="andres-form-control__error-icon">

                                                        </span>
                                                        <span className="andres-form-control__message" id="user_id-message">

                                                            <ErrorMessage name="User" className="input-error" />
                                                        </span>

                                                    </div>

                                                    <span className="andres-form-control__label">Contraseña</span>
                                                    <div className="andres-form-control__control">
                                                        <Field
                                                            type="password"
                                                            placeholder="Introduce tu contraseña"
                                                            name="Password"
                                                            autoCapitalize="true"
                                                            className="andres-form-control--textfield andes-form-control__field"
                                                        >

                                                        </Field>
                                                    </div>
                                                    <div className="andres-form-control__bottom">
                                                        <span className="andres-form-control__error-icon">
                                                        </span>
                                                        <span className="andres-form-control__message" id="user_id-message">

                                                            <ErrorMessage name="Password" className="input-error" />
                                                        </span>
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

                                            <Link to="/register" className="link" id="login">
                                                <span className="andes-button__content link" id="login">
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