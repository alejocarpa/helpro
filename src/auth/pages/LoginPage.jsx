import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import './LoginPage.css';
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startLoginWithEmailPassword } from "../../store/auth";
import { useEffect, useState } from "react";

const initialForm = {
    email: '',
    password: '' 
}

export const LoginPage = () => {

    const [mensajeError, setMensajeError] = useState('')
    const { email, password, onInputChange } = useForm(initialForm);
    const dispatch = useDispatch();
    const { status, errorMessage } = useSelector( state => state.auth );
    const { urlArray } = useSelector( state => state.helpro );
    const navigate = useNavigate();

    const onSubmit = async( event ) => {
        event.preventDefault();

        const resp = await dispatch( startLoginWithEmailPassword({ email, password }) );
        if(resp?.payload?.errorMessage) return;
        
        navigate( urlArray[urlArray.length-1] );
    }

    useEffect(() => {
        errorMessage === "Wrong email" ? setMensajeError("Usuario o contraseña incorrectas") : ""
        errorMessage === "Wrong password" ? setMensajeError("Usuario o contraseña incorrectas") : ""
        errorMessage === "Network Error" ? setMensajeError("Error: error de conexión") : ""
    }, [errorMessage]);
    

    return (
        <AuthLayout title="Iniciar sesión">
            <Form onSubmit={ onSubmit }>
                <Form.Group className="mt-3">
                    <Form.Control 
                        type="email" 
                        placeholder="Correo electrónico"
                        name="email"
                        value={ email }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Control 
                        type="password" 
                        placeholder="Contraseña" 
                        name="password"
                        value={ password }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                { errorMessage ? <div className="mt-1 login-page-error-message">{ mensajeError }</div> : "" }
                <Button className="mt-3" style={{ width: '100%' }} type="submit">
                    { status === 'checking' ? <Spinner size="sm" animation="border" variant="light" /> : "Entrar" }
                </Button>
            </Form>
            <hr />
            <Link to="/auth/register">
                <Button variant="success" style={{ width: '100%' }}>
                    Crear cuenta
                </Button>
            </Link>
            <Link to="/auth/recover_password">
                <div className="texto-alternativo">
                    <Button variant="link">¿Has olvidado la contraseña?</Button>
                </div>
            </Link>
        </AuthLayout>
    )
}
