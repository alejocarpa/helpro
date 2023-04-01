import { useEffect } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { BotonSiguiente } from '../layout';
import './FormularioNuevo1.css';

export const FormularioNuevo1 = ({ activarFomulario1, activarFormulario2, clickBotonAtras, completoFormulario1 }) => {

    const botonSiguiente = () => {
        activarFomulario1(false);
        activarFormulario2(true);
        clickBotonAtras(false);
        completoFormulario1(true);
    }

    return (
        <div className="formulario-nuevo1-container">
            <div className="formulario-nuevo1-elements">
                <div className="formulario-nuevo1-bloque">
                    <div className="formulario-nuevo1-form">
                        <Form style={{ width: '80%' }}>
                            <FloatingLabel
                                label="Nombre del producto"
                                className="mb-4 formulario-nuevo1-input"
                            >
                                <Form.Control type="text" placeholder="name@example.com" size="lg" />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingSelect" label="Categoria" className="mb-4 formulario-nuevo1-input">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Elige una categoria</option>
                                    <option value="1">Producto</option>
                                    <option value="2">Servicio</option>
                                    <option value="3">Local Comercial</option>
                                    <option value="4">Aplicacion</option>
                                </Form.Select>
                            </FloatingLabel>

                            <FloatingLabel
                                label="Tipo"
                                className="mb-4 formulario-nuevo1-input"
                            >
                                <Form.Control type="text" placeholder="name@example.com" size="lg" list="browsers" />
                            </FloatingLabel>

                            <FloatingLabel
                                label="Marca"
                                className="mb-4 formulario-nuevo1-input"
                            >
                                <Form.Control type="text" placeholder="name@example.com" size="lg" />
                            </FloatingLabel>
                        </Form>
                        <datalist id="browsers">
                            <option value="Alimento" />
                            <option value="Electrodomestico" />
                            <option value="Comedor" />
                            <option value="Soporte celular" />
                        </datalist>
                    </div>

                    <div className="formulario-nuevo1-botones">
                        <div className="formulario-nuevo1-boton-siguiente" onClick={ botonSiguiente }>
                            <BotonSiguiente />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
