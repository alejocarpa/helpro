import { Button, Form, Spinner } from "react-bootstrap"
import { Link } from "react-router-dom"
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
    return (
        <AuthLayout title="Crear cuenta">
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Correo electrónico" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Contraseña" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Confirmar contraseña" />
                </Form.Group>
                <Button variant="success" style={{ width: '100%' }}>
                    Crear
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
