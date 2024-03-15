import { useNavigate } from 'react-router-dom';
import './LogoNavbarHelpro.css';

export const LogoNavbarHelpro = () => {

    const navigate = useNavigate();

    const returnHome = () => {
        navigate( `/helpro` );
    }

    return (
        <div className="logo-container">
            <div className="logo-elements">
                <div className="logo-imagen" onClick={ returnHome }>
                    HELPRO
                </div>
            </div>
        </div>
    )
}
