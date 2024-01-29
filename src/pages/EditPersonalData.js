import React, { useState } from "react";
import { useUserContext, useUserLogged } from "../context/UserContext";
import "../css/UserProfile.css";
import { Link } from "react-router-dom";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";
import HaveToLogin from "../components/HaveToLogin";

const EditPersonalData = () => {
    const context = useUserContext();
    const contextUserFunctions = useUserLogged();
    const [DateOfBirthForm, setDateOfBirthForm] = useState(false);
    const [DniForm, setDniForm] = useState(false);

    const HandleDeriveForms = (e) => {
        switch (e.target.value) {

            case "DateOfBirth":
                setDniForm(false);
                setDateOfBirthForm(true);
                break;

            case "Dni":
                setDniForm(true);
                setDateOfBirthForm(false);
                break;

            default:
                setDniForm(false);
                setDateOfBirthForm(false);
        }

    }
    function DniFormEdit() {
        if (DniForm === false) {
            const dni = context?.Dni
            return (<>

                <div className="andres-card list-item">
                    <span className="andres-card editProfileTitle">Dni</span>
                    <span className="editProfileDetailTitle">{dni}</span>
                </div>
                <div className="separator-ui editprofile-separator"></div>
                <div>
                    <button className="editProfile__button" value="Dni" onClick={HandleDeriveForms}>Editar</button>
                </div>

            </>)
        }
        else {
            const SignupSchema = Yup.object().shape({
                Dni: Yup.number()
                    .required("Un Dni es requerida")
                    .meta(5, "Mínimo de numeros")
                    .max(70000000, "No existe un dni de mas caracteres")
                    .positive("No puede ser negativo")
            });

            return (<>
                <Formik
                    initialValues={{
                        Dni: context?.Dni
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={
                        async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            contextUserFunctions.editProfile(values.Dni, "Dni")
                        }}
                >
                    <Form className="editProdile__Forms">
                        <div className="andres-card list-item onEdit">

                            <span className="andres-card editProfileTitle">Dni</span>
                            <Field
                                type="number"
                                placeholder={context?.Dni}
                                name="Dni"
                                autoCapitalize="true"
                                className="searchInput editProfile-forms number"
                                min={2000000}
                                max={70000000}
                            >

                            </Field>
                            <span className="andres-form-control__message" id="user_id-message">
                                <ErrorMessage name="Dni" className="input-error" />
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
    function DateOfBirthFormEdit() {
        if (DateOfBirthForm === false) {
            const dateofbirth = new Date(context?.DateOfBirth)
            const month = dateofbirth.toLocaleString('default', { month: '2-digit' })
            const day = dateofbirth.getDate();
            const year = dateofbirth.getFullYear();

            return (<>

                <div className="andres-card list-item">
                    <span className="andres-card editProfileTitle">Fecha de Cumpleaños</span>
                    <span className="editProfileDetailTitle">{`${year}-${month}-${day}`}</span>
                </div>
                <div className="separator-ui editprofile-separator"></div>
                <div>
                    <button className="editProfile__button" value="DateOfBirth" onClick={HandleDeriveForms}>Editar</button>
                </div>

            </>)
        }
        else {
            const SignupSchema = Yup.object().shape({
                DateOfBirth: Yup.date()
                    .required("Una fecha es requerida")
            });
            const dateofbirth = new Date(context?.DateOfBirth)
            const month = dateofbirth.toLocaleString('default', { month: '2-digit' })
            const day = dateofbirth.getDate();
            const year = dateofbirth.getFullYear();
            const formatedDate = `${year}-${month}-${day}`
            return (<>
                <Formik
                    initialValues={{
                        DateOfBirth: formatedDate
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={
                        async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            contextUserFunctions.editProfile(values.DateOfBirth.toString(), "DateOfBirth")

                        }}
                >
                    <Form className="editProdile__Forms">
                        <div className="andres-card list-item onEdit">

                            <span className="andres-card editProfileTitle">Fecha de Cumpleaños</span>
                            <Field
                                type="date"
                                placeholder={context?.DateOfBirth}
                                name="DateOfBirth"
                                autoCapitalize="true"
                                className="searchInput editProfile-forms"
                            >

                            </Field>
                            <span className="andres-form-control__message" id="user_id-message">
                                <ErrorMessage name="DateOfBirth" className="input-error" />
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

    function isLogged() {
        if (context) {
            return <>
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
                                {DateOfBirthFormEdit()}
                            </div>
                            <div className="profile-action edit">
                                {DniFormEdit()}
                            </div>

                        </div>
                    </div>
                </section>
            </>
        }
        else {
            return <HaveToLogin />
        }
    }
    return (
        <>
            {isLogged()}
        </>
    );
}

export default EditPersonalData;