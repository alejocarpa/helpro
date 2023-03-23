import './BotonAgregar.css';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MensajeAyudaBotonAgregar } from './MensajeAyudaBotonAgregar';
import { useState } from 'react';

export const BotonAgregar = () => {

    const [displayMensaje, setDisplayMensaje] = useState('none');

    return (
        <>
            <div className="boton-agregar-container">
                <div className="boton-agregar-elements">
                    <div 
                        className="boton-agregar-circulo"
                        onMouseEnter={() => {
                            setDisplayMensaje('block');
                            setEntroBloque(true);
                        }}
                        onMouseLeave={() => {
                            setDisplayMensaje('none');
                            setEntroBloque(false);
                        }}
                    >
                        <div className="boton-agregar-circulo-contenido">
                            <AiOutlineAppstoreAdd />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: displayMensaje }}><MensajeAyudaBotonAgregar /></div>
        </>
    )
}
