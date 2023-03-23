import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import './LoginPage.css';

export const LoginPage = () => {

    return (
        <AuthLayout title="Iniciar sesión">
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Correo electrónico" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Button style={{ width: '100%' }}>
                    Entrar
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
