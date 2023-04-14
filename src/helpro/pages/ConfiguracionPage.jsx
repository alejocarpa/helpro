import { HelproLayout } from '../layout';
import './ConfiguracionPage.css';
import { user } from '../../helpers/user';
import { RiGitRepositoryPrivateFill } from "react-icons/ri";

export const ConfiguracionPage = () => {


    return (
        <HelproLayout>
            <div className="configuracion-container">
                <div className="configuracion-elements">
                    <div className="configuracion-bloque">
                        <div className="configuracion-encabezado">
                            <div className="configuracion-logo-user">
                                <div className="configuracion-circulo-user">
                                    { user.nombre[0]+user.apellidos[0] }
                                </div>
                            </div>
                            <div className="configuracion-datos-user">
                                <div className="configuracion-nombre-user">
                                    { user.nombre+' '+user.apellidos }
                                </div>
                            </div>
                        </div>
                        <div className="configuracion-cuerpo">
                            <div className="configuracion-opciones">
                                <div className="configuracion-opcion-bloque">
                                    <div className="configuracion-opcion-logo">
                                        <RiGitRepositoryPrivateFill />
                                    </div>
                                    <div className="configuracion-opcion-datos">
                                        <div className="configuracion-datos-titulo">
                                            Privacidad
                                        </div>
                                        <div className="configuracion-datos-detalle">
                                            Cambiar contrasena
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HelproLayout>
    )
}
