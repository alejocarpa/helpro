import './SubMenuUser.css';
import { FaTools } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { BiHelpCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/authSlice';
import { limpiarNuevoProducto } from '../../store/helpro/helproSlice';

export const SubMenuUser = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token } = useSelector( state => state.auth );

    const navegarSubmenu = ( pantalla ) => {
        
        if( pantalla === 'configuracion' ){
            navigate(`/helpro/configuracion`);
        }
    }

    const logoutUser = () => {
        localStorage.setItem('tokenAnterior', JSON.stringify( token ) );
        dispatch( limpiarNuevoProducto() );
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
