import { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { SelectCountries } from "../../helpers";
import './RegisterPage.css';

const initialState = {
    name: '',
    surname: '',
    email: '',
    password: '',
    repassword: '',
    country: 1
}

export const RegisterPage = () => {

    const { name, surname, email, password, repassword, country, onInputChange } = useForm( initialState );
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector( state => state.auth );
    const [mensajeError, setMensajeError] = useState('');
    const [validacionNombre, setValidacionNombre] = useState(false);
    const [validacionApellido, setValidacionApellido] = useState(false);
    const [validacionEmail, setValidacionEmail] = useState(false);
    const [validacionPais, setValidacionPais] = useState(false);
    const [validacionPassword, setValidacionPassword] = useState(false);
    const [validacionRepassword, setValidacionRepassword] = useState(false);

    const onSubmit = ( event ) => {
        event.preventDefault();

        if (name === "") {
            setValidacionNombre(true);
            return;
        } else {
            setValidacionNombre(false);
        }

        if (surname === "") {
            setValidacionApellido(true);
            return;
        } else {
            setValidacionApellido(false);
        }

        if (email === "") {
            setValidacionEmail(true);
            return;
        } else {
            setValidacionEmail(false);
        }

        if (country === "") {
            setValidacionPais(true);
            return;
        } else {
            setValidacionPais(false);
        }

        if (password === "") {
            setValidacionPassword(true);
            return;
        } else {
            setValidacionPassword(false);
        }

        if (password !== repassword) {
            setValidacionRepassword(true);
            return;
        } else {
            setValidacionRepassword(false);
        }

        dispatch( startCreatingUserWithEmailPassword({ email, password, name, surname, country }) );
    }

    useEffect(() => {
        errorMessage && errorMessage != "Not found" ? setMensajeError( errorMessage ) : ""
    }, [errorMessage]);

    useEffect(() => {
        if (name !== '') {
            setValidacionNombre(false);
        }
    }, [name]);

    useEffect(() => {
        if (surname !== '') {
            setValidacionApellido(false);
        }
    }, [surname]);

    useEffect(() => {
        if (email !== '') {
            setValidacionEmail(false);
        }
    }, [email]);

    useEffect(() => {
        if (country !== '') {
            setValidacionPais(false);
        }
    }, [country]);

    useEffect(() => {
        if (password !== '') {
            setValidacionPassword(false);
        }
    }, [password]);

    useEffect(() => {
        if (repassword === password) {
            setValidacionRepassword(false);
        }
    }, [repassword]);

    return (
        <AuthLayout title="Crear cuenta">
            <Form onSubmit={ onSubmit }>
                <Form.Group className="mt-3">
                    <Form.Control 
                        className={ validacionNombre ? "register-page-input-vacio" : "" }
                        type="text" 
                        placeholder="Nombre"
                        name="name"
                        value={ name }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                { validacionNombre ? <div className="register-page-validacion">Se debe ingresar un nombre</div> : "" }
                <Form.Group className="mt-3">
                    <Form.Control 
                        className={ validacionApellido ? "register-page-input-vacio" : "" }
                        type="text" 
                        placeholder="Apellido" 
                        name="surname"
                        value={ surname }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                { validacionApellido ? <div className="register-page-validacion">Se debe ingresar un apellido</div> : "" }
                <Form.Group className="mt-3">
                    <Form.Control 
                        className={ validacionEmail ? "register-page-input-vacio" : "" }
                        type="email" 
                        placeholder="Correo electrónico" 
                        name="email"
                        value={ email }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                { validacionEmail ? <div className="register-page-validacion">Se debe ingresar un correo</div> : "" }

                <SelectCountries country={country} onInputChange={onInputChange} validacionPais={validacionPais} pageRegister={true} />
                { validacionPais ? <div className="register-page-validacion">Se debe ingresar un pais</div> : "" }

                <Form.Group className="mt-3">
                    <Form.Control 
                        className={ validacionPassword ? "register-page-input-vacio" : "" }
                        type="password" 
                        placeholder="Contraseña"
                        name="password"
                        value={ password }
                        onChange={ onInputChange } 
                    />
                </Form.Group>
                { validacionPassword ? <div className="register-page-validacion">Se debe ingresar una contraseña</div> : "" }
                <Form.Group className="mt-3">
                    <Form.Control 
                        type="password" 
                        placeholder="Confirmar contraseña"
                        name="repassword"
                        value={ repassword }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                { validacionRepassword ? <div className="register-page-validacion">Las contraseñas no coinciden</div> : "" }
                { mensajeError ? <div className="mt-1 login-page-error-message">{ mensajeError }</div> : "" }
                <Button className="mt-3" type="submit" variant="success" style={{ width: '100%' }}>
                    { status === 'checking' ? <Spinner size="sm" animation="border" variant="light" /> : "Crear" }
                </Button>
            </Form>
            <div className="texto-alternativo">
                <Button variant="link">
                    <Link to="/auth/login">Ya tengo un usuario</Link>
                </Button>
            </div>
        </AuthLayout>
    )
}
