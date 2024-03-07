import { useDispatch, useSelector } from 'react-redux';
import './MenuLateral.css';
import { Spinner } from 'react-bootstrap';
import { BotonLogin } from '../layout';
import { logout } from '../../store/auth/authSlice';
import { limpiarNuevoProducto } from '../../store/helpro/helproSlice';
import { useNavigate } from 'react-router-dom';

import { FaHome, FaTools } from 'react-icons/fa';
import { ImExit } from 'react-icons/im';
import { BiHelpCircle } from 'react-icons/bi';

export const MenuLateral = ({ dezplegarMenu }) => {
    
    const { status, token, displayName } = useSelector( state => state.auth );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let fistName = '';
    if( displayName ){

        fistName = displayName.split(' ');
    }
    
    const navegarSubmenu = ( pantalla ) => {
        
        if( pantalla === 'configuracion' ){
            navigate(`/configuracion`);
        }else if( pantalla === 'home' ){
            navigate(`/home`);
        }
    }

    const logoutUser = () => {
        localStorage.setItem('tokenAnterior', JSON.stringify( token ) );
        dispatch( limpiarNuevoProducto() );
        dispatch( logout() );
    }

    return (
        <div className="menu-lateral-container" style={{ display: dezplegarMenu ? 'flex' : 'none' }}>
            <div className="menu-lateral-elements">
                <div className="menu-lateral-encabezado">
                    { 
                        status === 'checking'
                        ?
                        <Spinner animation="border" variant="light" />
                        :
                        status === 'authenticated' 
                        ? 
                        `Hola, ${ fistName[0] }` 
                        : 
                        <BotonLogin /> 
                    }
                </div>

                {
                    status === 'authenticated' &&

                    <div className="menu-lateral-cuerpo">
                        <div 
                            className="menu-lateral-seccion"
                            onClick = { () => navegarSubmenu('home') }
                        >
                            <div className="menu-lateral-icono">
                                <FaHome />
                            </div>
                            <div className="menu-lateral-nombre">
                                Home
                            </div>
                        </div>

                        <div 
                            className="menu-lateral-seccion"
                            onClick = { () => navegarSubmenu('configuracion') }
                        >
                            <div className="menu-lateral-icono">
                                <FaTools />
                            </div>
                            <div className="menu-lateral-nombre">
                                Configuración
                            </div>
                        </div>
                        
                        <div className="menu-lateral-seccion" onClick={ logoutUser }>
                            <div className="menu-lateral-icono">
                                <ImExit />
                            </div>
                            <div className="menu-lateral-nombre">
                                Cerrar sesión
                            </div>
                        </div>

                        <div className="menu-lateral-seccion">
                            <div className="menu-lateral-icono">
                                <BiHelpCircle />
                            </div>
                            <div className="menu-lateral-nombre">
                                Ayuda
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
    )
}
