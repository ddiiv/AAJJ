import React, { useState } from "react";
import { useUserContext, useUserLogged } from "../context/UserContext";
import "../css/UserProfile.css";
import { Link } from "react-router-dom";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";

const EditAccountSettings = () => {
    const context = useUserContext();
    const contextUserFunctions = useUserLogged();

    const [UserForm, setUserForm] = useState(false);
    const [PhoneNumberForm, setPhoneNumberForm] = useState(false);
    const [EmailForm, setEmailForm] = useState(false);

    const HandleDeriveForms = (e) => {
        switch (e.target.value) {
            case "User":

                setUserForm(true);
                setEmailForm(false);
                setPhoneNumberForm(false);
                break;

            case "PhoneNumber":
                setUserForm(false);
                setEmailForm(false);
                setPhoneNumberForm(true);
                break;

            case "Email":
                setUserForm(false);
                setEmailForm(true);
                setPhoneNumberForm(false);
                break;

            default:
                setUserForm(false);
                setEmailForm(false);
                setPhoneNumberForm(false);
        }

    }

    function UserFormFunction() {
        if (UserForm === false) {
            return (<>

                <div className="andres-card list-item">
                    <span className="andres-card editProfileTitle">Usuario</span>
                    <span className="editProfileDetailTitle">{context?.User}</span>
                </div>
                <div className="separator-ui editprofile-separator"></div>
                <div>
                    <button className="editProfile__button" value="User" onClick={HandleDeriveForms}>Editar</button>
                </div>

            </>)
        }
        else {
            const SignupSchema = Yup.object().shape({
                User: Yup.string()
                    .required("Un nombre es requerido")
                    .max(12, "Maximo de caracteres de 12")
                    .min(5, "Mínimo de 5 caracteres")
            });

            return (<>
                <Formik
                    initialValues={{
                        User: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={
                        async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            contextUserFunctions.editProfile(values.User, "User")
                        }}
                >
                    <Form className="editProdile__Forms">
                        <div className="andres-card list-item onEdit">

                            <span className="andres-card editProfileTitle">Usuario</span>
                            <Field
                                type="text"
                                placeholder={context?.User}
                                name="User"
                                autoCapitalize="true"
                                className="searchInput editProfile-forms"
                            >

                            </Field>
                            <span className="andres-form-control__message" id="user_id-message">
                                <ErrorMessage name="User" className="input-error" />
                            </span>
                        </div>
                        <div>
                            <button className="editProfile__button" id="form_editProfile" value="submit" >Aceptar</button>
                        </div>
                    </Form>
                </Formik>
            </>
            )
        }
    }
    function PhoneNumberFunction() {
        if (PhoneNumberForm === false) {
            return (<>

                <div className="andres-card list-item">
                    <span className="andres-card editProfileTitle">Teléfono</span>
                    <span className="editProfileDetailTitle">{context?.PhoneNumber}</span>
                </div>
                <div className="separator-ui editprofile-separator"></div>
                <div>
                    <button className="editProfile__button" value="PhoneNumber" onClick={HandleDeriveForms}>Editar</button>
                </div>

            </>)
        }
        else {
            const SignupSchema = Yup.object().shape({
                PhoneNumber: Yup.number()
                    .required("Un teléfono es requerido")
            });

            return (<>
                <Formik
                    initialValues={{
                        PhoneNumber: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={
                        async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            contextUserFunctions.editProfile(values.PhoneNumber.toString(), "PhoneNumber")
                        }}
                >
                    <Form className="editProdile__Forms">
                        <div className="andres-card list-item onEdit">

                            <span className="andres-card editProfileTitle">Teléfono</span>
                            <Field
                                type="number"
                                placeholder={context?.PhoneNumber}
                                name="PhoneNumber"
                                autoCapitalize="true"
                                className="searchInput editProfile-forms number"
                            >

                            </Field>
                            <span className="andres-form-control__message" id="user_id-message">
                                <ErrorMessage name="PhoneNumber" className="input-error" />
                            </span>
                        </div>
                        <div>
                            <button className="editProfile__button" id="form_editProfile" value="submit" >Aceptar</button>
                        </div>
                    </Form>
                </Formik>
            </>
            )
        }
    }
    function EmailFormFunction() {
        if (EmailForm === false) {
            return (<>

                <div className="andres-card list-item">
                    <span className="andres-card editProfileTitle">Email</span>
                    <span className="editProfileDetailTitle">{context?.Email}</span>
                </div>
                <div className="separator-ui editprofile-separator"></div>
                <div>
                    <button className="editProfile__button" value="Email" onClick={HandleDeriveForms}>Editar</button>
                </div>

            </>)
        }
        else {
            const SignupSchema = Yup.object().shape({
                Email: Yup.string()
                    .required("Un nombre es requerido")
                    .email("Tiene que ser un email válido")
            });

            return (<>
                <Formik
                    initialValues={{
                        Email: ''
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={
                        async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            contextUserFunctions.editProfile(values.Email, "Email")

                        }}
                >
                    <Form className="editProdile__Forms">
                        <div className="andres-card list-item onEdit">
                            <span className="andres-card editProfileTitle">Email</span>
                            <Field
                                type="text"
                                placeholder={context?.Email}
                                name="Email"
                                autoCapitalize="true"
                                className="searchInput editProfile-forms"
                            >

                            </Field>
                            <span className="andres-form-control__message" id="user_id-message">
                                <ErrorMessage name="Email" className="input-error" />
                            </span>
                        </div>
                        <div>
                            <button className="editProfile__button" id="form_editProfile" value="submit" >Aceptar</button>
                        </div>
                    </Form>
                </Formik>
            </>
            )
        }
    }

    return (
        <section className="profile-actions">
            <div className="navigation-section__container">
                <div className="navigation__container--content">
                    <ol className="links-redirection__navigator">
                        <li className="linkToRedirect__navigator"> <Link className="navigatorLink" to="/profile"> Mi perfil </Link> </li>
                        {">"}
                        <li className="linkToRedirect__navigator unavailable">Datos de cuenta</li>
                    </ol>
                </div>
            </div>
            <div className="header profile-card__buttons">
                <h2 className="profile-card__title"> <span className="headerEditProfile">Datos de cuenta</span></h2>
                <div className="profile-card__buttons-editProfile">

                    <div className="profile-action edit">
                        {UserFormFunction()}
                    </div>
                    <div className="profile-action edit">
                        {PhoneNumberFunction()}
                    </div>
                    <div className="profile-action edit">
                        {EmailFormFunction()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditAccountSettings;