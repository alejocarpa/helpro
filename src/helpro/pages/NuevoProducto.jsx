import { useState } from 'react';
import { FormularioNuevo1, FormularioNuevo2 } from '../components';
import { HelproLayout } from '../layout/HelproLayout';
import './NuevoProducto.css';

export const NuevoProducto = () => {

    const claseEntradaDerecha = 'nuevo-producto-formulario animate__animated animate__backInRight';
    const claseSalidaIzquierda = 'nuevo-producto-formulario animate__animated animate__backOutLeft';

    const claseEntradaIzquierda = 'nuevo-producto-formulario animate__animated animate__backInLeft';

    const [formularioActivo1, setFormularioActivo1] = useState(true);
    const [formularioActivo2, setFormularioActivo2] = useState(false);
    const [clickBotonAtras, setClickBotonAtras] = useState(false);

    return (
        <>
            <HelproLayout>
                <div className="nuevo-producto-container">
                    <div className="nuevo-producto-elements">
                        <div className="nuevo-producto-bloque">
                            <div 
                                style={{ display: formularioActivo1 ? 'flex' : 'none' }}
                                className={ formularioActivo1 ? ( clickBotonAtras ? claseEntradaIzquierda : claseEntradaDerecha ) : claseSalidaIzquierda }
                            >
                                <FormularioNuevo1 
                                    activarFomulario1 = { setFormularioActivo1 } 
                                    activarFormulario2={ setFormularioActivo2 } 
                                    clickBotonAtras = { setClickBotonAtras }
                                />
                            </div>

                            <div 
                                style={{ display: formularioActivo2 ? 'flex' : 'none' }}
                                className={ formularioActivo2 ? ( clickBotonAtras ? claseEntradaIzquierda : claseEntradaDerecha ) : claseSalidaIzquierda }
                            >
                                <FormularioNuevo2 
                                    activarFomulario1 = { setFormularioActivo1 } 
                                    activarFormulario2={ setFormularioActivo2 }
                                    clickBotonAtras = { setClickBotonAtras }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </HelproLayout>
        </>
    )
}
