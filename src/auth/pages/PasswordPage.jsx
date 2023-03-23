import { Button, Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const PasswordPage = () => {
    return (
        <AuthLayout title="Recuperar contraseña">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Correo electrónico" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Confirmar Correo electronico" />
                </Form.Group>
                <Button style={{ width: '100%' }}>
                    Enviar
                </Button>
            </Form>
            <Link to="/auth/login">
                <div className="texto-alternativo">
                    <Button variant="link">Volver atras</Button>
                </div>
            </Link>
        </AuthLayout>
    )
}
