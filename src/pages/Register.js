import React, { useEffect } from "react";
import "../css/Register.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"
import { useUserLogged } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const UserFunctions = useUserLogged();

    const navigate = useNavigate();
    const SignupSchema = Yup.object().shape({
        User: Yup.string()
            .min(5, "El nombre de usuario es muy corto!")
            .max(25, "El nombre de usuario es muy largo!")
            .required("Un nombre es requerido"),
        Password: Yup.string()
            .required("Debes poner una contraseña"),
        Email: Yup.string()
            .email('El correo electrónico no es válido')
            .required("Debes poner un email"),
        MemberShipNumber: Yup.number()
            .positive("El numero de miembro no puede ser negativo")
            .max(9999, "No puede superar los 4 digitos")
            .nullable(),
        Dni: Yup.number()
            .positive("El dni no puede ser negativo")
            .max(59999999999, "El dni no puede tener mas de 11 digitos")
            .nullable(),
        Birthday: Yup.date()
            .max(new Date(), "La fecha de cumpleaños no puede ser mayor a la actual")
            .nullable(),
        PhoneNumber: Yup.number()
            .positive("El numero de telefono no puede ser negativo")
            .nullable()
    });

    function isLogged() {
        if (UserFunctions.Logged === false) {
            return (<>
                <div className="landscape-view__container register">

                    <div className="andres-card landscape-view__column landscape-view__column--right register ">
                        <div className="andres-card__content landscape-view__card-content">
                            <Formik
                                initialValues={{
                                    User: '',
                                    Password: '',
                                    Email: '',
                                    MemberShipNumber: null,
                                    Dni: null,
                                    Birthday: null,
                                    PhoneNumber: null
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={async (values) => {
                                    await new Promise((r) => setTimeout(r, 500));
                                    alert("Bienvenido " + values.User + " !");
                                    values.PhoneNumber = values.PhoneNumber?.toString()
                                    UserFunctions.registerForm(values)
                                }}
                            >
                                <Form className="login-form register">
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
                                                                type="email"
                                                                placeholder="Introduce tu email"
                                                                name="Email"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
                                                            >

                                                            </Field>
                                                        </div>
                                                        <div className="andres-form-control__bottom">
                                                            <span className="andres-form-control__error-icon">
                                                            </span>
                                                            <span className="andres-form-control__message" id="user_id-message">

                                                                <ErrorMessage name="Email" className="input-error" />
                                                            </span>
                                                        </div>
                                                    </div>


                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">DNI</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="number"
                                                                placeholder="Introduce tu dni"
                                                                name="Dni"
                                                                maxLength={11}

                                                                className="andres-form-control--textfield andes-form-control__field register"
                                                            >

                                                            </Field>
                                                        </div>
                                                        <div className="andres-form-control__bottom">
                                                            <span className="andres-form-control__error-icon">
                                                            </span>
                                                            <span className="andres-form-control__message" id="user_id-message">

                                                                <ErrorMessage name="Dni" className="input-error" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row-register-form">
                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Fecha de Cumpleaños</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="date"
                                                                placeholder="Introduce tu fecha de cumpleaños"
                                                                name="Birthday"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
                                                            >

                                                            </Field>
                                                        </div>
                                                        <div className="andres-form-control__bottom">
                                                            <span className="andres-form-control__error-icon">
                                                            </span>
                                                            <span className="andres-form-control__message" id="user_id-message">

                                                                <ErrorMessage name="Birthday" className="input-error" />
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Numero de miembro</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="number"
                                                                placeholder="Introduce tu numero de miembro"
                                                                name="MemberShipNumber"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
                                                            >

                                                            </Field>
                                                        </div>
                                                        <div className="andres-form-control__bottom">
                                                            <span className="andres-form-control__error-icon">
                                                            </span>
                                                            <span className="andres-form-control__message" id="user_id-message">

                                                                <ErrorMessage name="MemberShipNumber" className="input-error" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row-register-form">
                                                    <div className="andres-form-control__itemcontainer register">
                                                        <span className="andres-form-control__label">Numero de telefono</span>
                                                        <div className="andres-form-control__control register">
                                                            <Field
                                                                type="number"
                                                                placeholder="Introduce tu numero de telefono"
                                                                name="PhoneNumber"
                                                                autoCapitalize="true"
                                                                className="andres-form-control--textfield andes-form-control__field register"
                                                            >

                                                            </Field>
                                                        </div>
                                                        <div className="andres-form-control__bottom">
                                                            <span className="andres-form-control__error-icon">
                                                            </span>
                                                            <span className="andres-form-control__message" id="user_id-message">

                                                                <ErrorMessage name="PhoneNumber" className="input-error" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                            </label>
                                        </div>

                                    </div>
                                    <div className="login-form__actions register">
                                        <button type="submit" className="andres-button register">
                                            <span className="andres-button__content register">
                                                Registrarse!
                                            </span>
                                        </button>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>

                </div>

            </>)
        }
    }
    useEffect(() => {
        if (UserFunctions.Logged === true) {
            navigate('/profile');
        }
    }, [UserFunctions.Logged, navigate]);

    return (
        <main className="page">
            <section className="containerPage">
                {isLogged()}
            </section>
        </main>
    )
}
export default Register;