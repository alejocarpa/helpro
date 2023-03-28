import './BotonAgregar.css';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { MensajeAyudaBotonAgregar } from './MensajeAyudaBotonAgregar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const BotonAgregar = () => {

    const navigate = useNavigate();
    const [displayMensaje, setDisplayMensaje] = useState('none');

    const cargarNuevoProducto = () => {
        navigate(`nuevo`);
    }

    return (
        <>
            <div className="boton-agregar-container">
                <div className="boton-agregar-elements">
                    <div 
                        className="boton-agregar-circulo"
                        onMouseEnter={() => {
                            setDisplayMensaje('block');
                        }}
                        onMouseLeave={() => {
                            setDisplayMensaje('none');
                        }}
                        onClick={ cargarNuevoProducto }
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
