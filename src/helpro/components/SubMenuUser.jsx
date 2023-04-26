import './SubMenuUser.css';
import { FaTools } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { BiHelpCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';

export const SubMenuUser = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navegarSubmenu = ( pantalla ) => {
        
        if( pantalla === 'configuracion' ){
            navigate(`/configuracion`);
        }
    }

    const logoutUser = () => {
        dispatch( logout() );
    }

    return (
        <div className="submenu-container animate__animated animate__fadeInDown">
            <div className="submenu-elements">

                <div 
                    className="submenu-seccion"
                    onClick = { () => navegarSubmenu('configuracion') }
                >
                    <div className="submenu-icono">
                        <FaTools />
                    </div>
                    <div className="submenu-nombre">
                        Configuración
                    </div>
                </div>
                
                <div className="submenu-seccion" onClick={ logoutUser }>
                    <div className="submenu-icono">
                        <ImExit />
                    </div>
                    <div className="submenu-nombre">
                        Cerrar sesión
                    </div>
                </div>

                <div className="submenu-seccion">
                    <div className="submenu-icono">
                        <BiHelpCircle />
                    </div>
                    <div className="submenu-nombre">
                        Ayuda
                    </div>
                </div>
                
            </div>
        </div>
    )
}
