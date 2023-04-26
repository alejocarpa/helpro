import { Button, Form, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from "../../hooks"
import { useDispatch, useSelector } from "react-redux"
import { startCreatingUserWithEmailPassword } from "../../store/auth"
import { useEffect, useState } from "react"

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
    const [mensajeError, setMensajeError] = useState('')

    const onSubmit = ( event ) => {
        event.preventDefault();

        dispatch( startCreatingUserWithEmailPassword({ email, password, name, surname, country }) );
    }

    useEffect(() => {
        errorMessage === "The email already exists" ? setMensajeError("El correo electronico ya existe") : ""
    }, [errorMessage]);

    return (
        <AuthLayout title="Crear cuenta">
            <Form onSubmit={ onSubmit }>
                <Form.Group className="mt-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Nombre"
                        name="name"
                        value={ name }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Control 
                        type="text" 
                        placeholder="Apellido" 
                        name="surname"
                        value={ surname }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Control 
                        type="email" 
                        placeholder="Correo electrónico" 
                        name="email"
                        value={ email }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                <Form.Select
                    className="mt-3"
                    name="country"
                    value={country}
                    onChange={onInputChange}
                >
                    <option value="">Elige un pais</option>
                    <option value="1">Colombia</option>
                </Form.Select>
                <Form.Group className="mt-3">
                    <Form.Control 
                        type="password" 
                        placeholder="Contraseña"
                        name="password"
                        value={ password }
                        onChange={ onInputChange } 
                    />
                </Form.Group>
                <Form.Group className="mt-3">
                    <Form.Control 
                        type="password" 
                        placeholder="Confirmar contraseña"
                        name="repassword"
                        value={ repassword }
                        onChange={ onInputChange }
                    />
                </Form.Group>
                { errorMessage ? <div className="mt-1 login-page-error-message">{ mensajeError }</div> : "" }
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
