import { FloatingLabel, Form } from 'react-bootstrap';
import { BotonSiguiente } from '../layout';
import './FormularioNuevo1.css';
import { useEffect, useState } from 'react';
import { SelectCategories, SelectCities, SelectCountries, SelectType } from '../../helpers';
import { useDispatch } from 'react-redux';

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
        country,
        city,
        otroTipo,
        formState,
        setFormState,
        onInputChange
    }) => {

    const dispatch = useDispatch();

    const [desplegarMarca, setDesplegarMarca] = useState(false);
    const [desplegarUbicacion, setDesplegarUbicacion] = useState(false);
    const [desplegarOtroTipo, setDesplegarOtroTipo] = useState(false);

    const [validacionNombre, setValidacionNombre] = useState(false);
    const [validacionCategoria, setValidacionCategoria] = useState(false);
    const [validacionTipo, setValidacionTipo] = useState(false);
    const [validacionMarca, setValidacionMarca] = useState(false);
    const [validacionPais, setValidacionPais] = useState(false);
    const [validacionCiudad, setValidacionCiudad] = useState(false);
    const [validacionOtroTipo, setValidacionOtroTipo] = useState(false);

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

        if( desplegarUbicacion ){
            if (country === "") {
                setValidacionPais(true);
                completoFormulario1(false);
                return;
            } else {
                setValidacionPais(false);
            }

            if (city === "") {
                setValidacionCiudad(true);
                completoFormulario1(false);
                return;
            } else {
                setValidacionCiudad(false);
            }
        }

        if( desplegarOtroTipo ){
            if (otroTipo === "") {
                setValidacionOtroTipo(true);
                completoFormulario1(false);
                return;
            } else {
                setValidacionOtroTipo(false);
            }
        }

        activarFomulario1(false);
        activarFormulario2(true);
        clickBotonAtras(false);
        completoFormulario1(true);
    }

    useEffect(() => {
        if (categoria === '1') {
            setDesplegarMarca(true);
        }else{
            setDesplegarMarca(false);
        }

        if (categoria === '3') {
            setDesplegarUbicacion(true);
        }else{
            setDesplegarUbicacion(false);
        }

        if(categoria !== '1'){
            setFormState({ ...formState, marca: '' })
        }

        if(categoria !== '3'){
            setFormState({ ...formState, country: '', city: '' })
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

        if (tipo === 'otro') {
            setDesplegarOtroTipo(true);
        }else{
            setDesplegarOtroTipo(false);
            setFormState( { ...formState, otroTipo: '' });
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

    useEffect(() => {
        if (country !== '') {
            setValidacionPais(false);
            completoFormulario1(true);
        }else{
            completoFormulario1(false);
        }

        setFormState( { ...formState, city: '' });
    }, [country]);

    useEffect(() => {
        if (city !== '') {
            setValidacionCiudad(false);
            completoFormulario1(true);
        }else{
            completoFormulario1(false);
        }
    }, [city]);

    useEffect(() => {
        if (otroTipo !== '') {
            setValidacionOtroTipo(false);
            completoFormulario1(true);
        }else{
            completoFormulario1(false);
        }
    }, [otroTipo]);

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
                                label="Categoría" 
                                className={ validacionCategoria ? "mt-3 formulario-nuevo1-input-vacio" : "mt-3 formulario-nuevo1-input" }
                            >
                                <SelectCategories categoria={categoria} onInputChange={onInputChange} />
                            </FloatingLabel>
                            {validacionCategoria ? <div className="formulario-nuevo1-validacion">El producto debe tener una categoria</div> : ""}
                            {
                                desplegarUbicacion
                                ?
                                <>
                                    <FloatingLabel 
                                        label="Ubicación" 
                                        className={ validacionPais ? "mt-3 formulario-nuevo1-input-vacio" : "mt-3 formulario-nuevo1-input" }
                                    >
                                        <SelectCountries country={country} onInputChange={onInputChange} />
                                    </FloatingLabel>
                                    {validacionPais ? <div className="formulario-nuevo1-validacion">Debes elegir una ubicación</div> : ""}

                                    <FloatingLabel 
                                        label="Ciudad" 
                                        className={ validacionCiudad ? "mt-3 formulario-nuevo1-input-vacio" : "mt-3 formulario-nuevo1-input" }
                                    >
                                        <SelectCities country={country} city={city} onInputChange={onInputChange} />
                                    </FloatingLabel>
                                    {validacionCiudad ? <div className="formulario-nuevo1-validacion">Debes elegir una ciudad</div> : ""}
                                </>
                                :
                                ""
                            }

                            <FloatingLabel
                                label="Tipo"
                                className={ validacionTipo ? "mt-3 formulario-nuevo1-input-vacio" : "mt-3 formulario-nuevo1-input" }
                            >
                                <SelectType categoria={categoria} tipo={tipo} onInputChange={onInputChange} />
                            </FloatingLabel>
                            {validacionTipo ? <div className="formulario-nuevo1-validacion">El producto debe tener un tipo</div> : ""}

                            {
                                desplegarOtroTipo
                                    ?
                                    <>
                                        <FloatingLabel
                                            label="¿cual?"
                                            className={ validacionOtroTipo ? "mt-3 formulario-nuevo1-input-vacio" : "mt-3 formulario-nuevo1-input" }
                                        >
                                            <Form.Control
                                                type="text"
                                                size="lg"
                                                name="otroTipo"
                                                value={ otroTipo }
                                                onChange={onInputChange}
                                            />
                                        </FloatingLabel>
                                        {validacionOtroTipo ? <div className="formulario-nuevo1-validacion">El producto debe tener un tipo</div> : ""}
                                    </>
                                    :
                                    ""
                            }

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
