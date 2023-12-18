import React from "react";
import "../css/Register.css"
import { Formik, Form, Field, ErrorMessage, validateYupSchema } from "formik";
import * as Yup from "yup"
import { Link } from "react-router-dom";

const Register = () => {
    const SignupSchema = Yup.object().shape({
        User: Yup.string()
            .required("Un nombre es requerido"),

        Password: Yup.string()
            .required("Debes poner una contraseña")


    });
    return (
        <main className="page">
            <section className="containerPage">

                <div className="landscape-view__container register">

                    <div className="andres-card landscape-view__column landscape-view__column--right register ">
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

                                }}
                            >
                                <Form className="login-form">

                                    <div className="login-form__input">
                                    <h5 className="ticket-row__left-column--primary-text register" id="landscape-view"><span className="rich-text register" id="landscape-view-text">Registrate para comprar en la BichoStore! <div className="separator-ui" id="login-separator"></div></span></h5>
                                        <div className="andres-form-control">
                                            <label className="andres-form-label-container register">

                                                <div className="row-register-form">
                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Nombre de Usuario</span>
                                                        <div className="andres-form-control__control register">

                                                            <Field
                                                                type="text"
                                                                placeholder="Introduce tu usuario"
                                                                name="User"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
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
                                                    </div>
                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Contraseña</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="password"
                                                                placeholder="Introduce tu contraseña"
                                                                name="Password"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
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
                                                    </div>
                                                </div>
                                                <div className="row-register-form">
                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Email</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="password"
                                                                placeholder="Introduce tu contraseña"
                                                                name="Password"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
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
                                                    </div>


                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">DNI</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="password"
                                                                placeholder="Introduce tu contraseña"
                                                                name="Password"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
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
                                                    </div>
                                                </div>
                                                <div className="row-register-form">
                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Fecha de Cumpleaños</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="password"
                                                                placeholder="Introduce tu contraseña"
                                                                name="Password"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
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
                                                    </div>

                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Numero de miembro</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="password"
                                                                placeholder="Introduce tu contraseña"
                                                                name="Password"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
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
                                                    </div>
                                                </div>
                                                <div className="row-register-form">
                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Numero de telefono</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="password"
                                                                placeholder="Introduce tu contraseña"
                                                                name="Password"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
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
                                                    </div>
                                                </div>

                                            </label>
                                        </div>

                                    </div>
                                    <div className="login-form__actions">
                                        <button type="submit" className="andres-button">
                                            <span className="andres-button__content login">
                                                Registrarse!
                                            </span>
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}
export default Register;