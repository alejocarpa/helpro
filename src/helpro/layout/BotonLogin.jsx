import { useNavigate } from 'react-router-dom';
import './BotonLogin.css';
import { FiLogIn } from "react-icons/fi";

export const BotonLogin = () => {

    const navigate = useNavigate();

    const navegarLogin = () => {
        navigate('/auth/login');
    }

    return (
        <div className="boton-login-container">
            <div className="boton-login-elements" onClick={ navegarLogin }>
                <div className="boton-login-icono">
                    <FiLogIn />
                </div>
                <div className="boton-login-texto">
                    Inisiar sesion
                </div>
            </div>
        </div>
    )
}
