import { FloatingLabel, Form } from 'react-bootstrap';
import { BotonSiguiente } from '../layout';
import './FormularioNuevo1.css';
import { useEffect, useState } from 'react';

export const FormularioNuevo1 = (
    {
        activarFomulario1,
        activarFormulario2,
        clickBotonAtras,
        completoFormulario1,
        nombre,
        categoria,
        tipo,
        marca,
        onInputChange
    }) => {

    const [desplegarMarca, setDesplegarMarca] = useState(false);

    const [validacionNombre, setValidacionNombre] = useState(false);
    const [validacionCategoria, setValidacionCategoria] = useState(false);
    const [validacionTipo, setValidacionTipo] = useState(false);
    const [validacionMarca, setValidacionMarca] = useState(false);

    const botonSiguiente = () => {

        if (nombre === "") {
            setValidacionNombre(true);
            completoFormulario1(false);
            return;
        } else {
            setValidacionNombre(false);
        }

        if (categoria === "") {
            setValidacionCategoria(true);
            completoFormulario1(false);
            return;
        } else {
            setValidacionCategoria(false);
        }

        if (tipo === "") {
            setValidacionTipo(true);
            completoFormulario1(false);
            return;
        } else {
            setValidacionTipo(false);
        }

        if( desplegarMarca ){
            if (marca === "") {
                setValidacionMarca(true);
                completoFormulario1(false);
                return;
            } else {
                setValidacionMarca(false);
            }
        }

        activarFomulario1(false);
        activarFormulario2(true);
        clickBotonAtras(false);
        completoFormulario1(true);
    }

    useEffect(() => {
        if (categoria === 'Producto') {
            setDesplegarMarca(true);
        }else{
            setDesplegarMarca(false);
        }
    }, [categoria]);

    useEffect(() => {
        if (nombre !== '') {
            setValidacionNombre(false);
            completoFormulario1(true);
        }else{
            completoFormulario1(false);
        }
    }, [nombre]);

    useEffect(() => {
        if (categoria !== '') {
            setValidacionCategoria(false);
            completoFormulario1(true);
        }else{
            completoFormulario1(false);
        }
    }, [categoria]);

    useEffect(() => {
        if (tipo !== '') {
            setValidacionTipo(false);
            completoFormulario1(true);
        }else{
            completoFormulario1(false);
        }
    }, [tipo]);

    useEffect(() => {
        if (marca !== '') {
            setValidacionMarca(false);
            completoFormulario1(true);
        }else{
            completoFormulario1(false);
        }
    }, [marca]);


    return (
        <div className="formulario-nuevo1-container">
            <div className="formulario-nuevo1-elements">
                <div className="formulario-nuevo1-bloque">
                    <div className="formulario-nuevo1-form">
                        <Form style={{ width: '80%' }}>
                            <FloatingLabel
                                label="Nombre del producto"
                                className={ validacionNombre ? "formulario-nuevo1-input-vacio" : "formulario-nuevo1-input" }
                            >
                                <Form.Control
                                    type="text"
                                    size="lg"
                                    name="nombre"
                                    value={nombre}
                                    onChange={onInputChange}
                                />
                            </FloatingLabel>
                            {validacionNombre ? <div className="formulario-nuevo1-validacion">El producto debe tener un nombre</div> : ""}

                            <FloatingLabel 
                                label="Categoria" 
                                className={ validacionCategoria ? "mt-3 formulario-nuevo1-input-vacio" : "mt-3 formulario-nuevo1-input" }
                            >
                                <Form.Select
                                    aria-label="Floating label select example"
                                    name="categoria"
                                    value={categoria}
                                    onChange={onInputChange}
                                >
                                    <option value="">Elige una categoria</option>
                                    <option value="Producto">Producto</option>
                                    <option value="Servicio">Servicio</option>
                                    <option value="Local Comercial">Local Comercial</option>
                                    <option value="Aplicacion">Aplicacion</option>
                                </Form.Select>
                            </FloatingLabel>
                            {validacionCategoria ? <div className="formulario-nuevo1-validacion">El producto debe tener una categoria</div> : ""}

                            <FloatingLabel
                                label="Tipo"
                                className={ validacionTipo ? "mt-3 formulario-nuevo1-input-vacio" : "mt-3 formulario-nuevo1-input" }
                            >
                                <Form.Control
                                    type="text"
                                    size="lg"
                                    list="browsers"
                                    name="tipo"
                                    value={tipo}
                                    onChange={onInputChange}
                                />
                            </FloatingLabel>
                            {validacionTipo ? <div className="formulario-nuevo1-validacion">El producto debe tener un tipo</div> : ""}

                            {
                                desplegarMarca
                                    ?
                                    <>
                                        <FloatingLabel
                                            label="Marca"
                                            className={ validacionMarca ? "mt-3 formulario-nuevo1-input-vacio" : "mt-3 formulario-nuevo1-input" }
                                        >
                                            <Form.Control
                                                type="text"
                                                size="lg"
                                                name="marca"
                                                value={marca}
                                                onChange={onInputChange}
                                            />
                                        </FloatingLabel>
                                        {validacionMarca ? <div className="formulario-nuevo1-validacion">El producto debe tener una Marca</div> : ""}
                                    </>
                                    :
                                    ""
                            }

                        </Form>
                        <datalist id="browsers">
                            <option value="Alimento" />
                            <option value="Electrodomestico" />
                            <option value="Comedor" />
                            <option value="Soporte celular" />
                        </datalist>
                    </div>

                    <div className="formulario-nuevo1-botones">
                        <div className="formulario-nuevo1-boton-siguiente" onClick={botonSiguiente}>
                            <BotonSiguiente />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
