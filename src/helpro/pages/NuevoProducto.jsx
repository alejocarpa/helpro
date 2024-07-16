import { useEffect, useState } from 'react';
import { BarraEtapas, FormularioNuevo1, FormularioNuevo2, FormularioNuevo3, FormularioNuevo4 } from '../components';
import { HelproLayout } from '../layout/HelproLayout';
import './NuevoProducto.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks';
import { agregandoNuevoComentario, agregandoNuevoProducto } from '../../store/helpro/helproSlice';
import { startSavingNewProduct } from '../../store/helpro/thunks';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const NuevoProducto = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { nuevoProducto, fotosNuevas, nuevoComentario, nuevaCalificacion } = useSelector( state => state.helpro );
    const { uid, displayName, displaySurname, token } = useSelector( state => state.auth );

    const claseEntradaDerecha = 'nuevo-producto-formulario animate__animated animate__backInRight';
    const claseSalidaIzquierda = 'nuevo-producto-formulario animate__animated animate__backOutLeft';

    const claseEntradaIzquierda = 'nuevo-producto-formulario animate__animated animate__backInLeft';

    const [totalImagenes, setTotalImagenes] = useState([]);
    const [imagenesCargadas, setImagenesCargadas] = useState([]);

    const [formularioActivo1, setFormularioActivo1] = useState(true);
    const [formularioActivo2, setFormularioActivo2] = useState(false);
    const [formularioActivo3, setFormularioActivo3] = useState(false);
    const [formularioActivo4, setFormularioActivo4] = useState(false);
    const [clickBotonAtras, setClickBotonAtras] = useState(false);

    const [validacionNombre, setValidacionNombre] = useState(false);
    const [validacionCategoria, setValidacionCategoria] = useState(false);
    const [validacionTipo, setValidacionTipo] = useState(false);
    const [validacionMarca, setValidacionMarca] = useState(false);
    const [validacionPais, setValidacionPais] = useState(false);
    const [validacionCiudad, setValidacionCiudad] = useState(false);
    const [validacionSede, setValidacionSede] = useState(false);
    const [validacionOtroTipo, setValidacionOtroTipo] = useState(false);
    const [validacionOtraMarca, setValidacionOtraMarca] = useState(false);
    const [desplegarMarca, setDesplegarMarca] = useState(false);
    const [desplegarUbicacion, setDesplegarUbicacion] = useState(false);
    const [desplegarOtroTipo, setDesplegarOtroTipo] = useState(false);
    const [desplegarOtraMarca, setDesplegarOtraMarca] = useState(false);

    const [completoFormulario1, setCompletoFormulario1] = useState(false);
    const [completoFormulario2, setCompletoFormulario2] = useState(false);
    const [completoFormulario3, setCompletoFormulario3] = useState(false);
    const [completoFormulario4, setCompletoFormulario4] = useState(false);

    const { 
        nombre, 
        categoria, 
        tipo, 
        marca, 
        comentario, 
        country, 
        city, 
        otroTipo, 
        otraMarca, 
        onInputChange, 
        formState, 
        setFormState,
        campus
    } = useForm( nuevoProducto );

    const publicarNuevoProducto = async() => {
        if( completoFormulario1 && completoFormulario2 && completoFormulario3 ){
            const { mensajeRespuesta, estadoRespuesta } = await dispatch( startSavingNewProduct({ nuevoProducto, nuevoComentario, nuevaCalificacion, totalImagenes, token }));
            
            if( estadoRespuesta ){
                Swal.fire({
                    icon: 'success',
                    title: mensajeRespuesta,
                    showConfirmButton: false,
                    timer: 2500
                });
                navigate(`home`);
            }else{
                Swal.fire({
                    icon: 'error',
                    title: mensajeRespuesta,
                    showConfirmButton: false,
                    timer: 2500
                });
            }
        }
    }

    useEffect(() => {
        dispatch( agregandoNuevoProducto({ nombre, categoria, tipo, marca, comentario, country, city, otroTipo, otraMarca, campus, ...formState }));
        dispatch( agregandoNuevoComentario({ ...formState, uid, displayName, displaySurname }) );
    }, [nombre, categoria, tipo, marca, comentario, country, city, otroTipo, otraMarca, campus]);
    
    useEffect(() => {
        window.scroll(0, 0);
    }, [formularioActivo1, formularioActivo2, formularioActivo3, formularioActivo4]);

    return (
        <>
            <HelproLayout>
                <div className="nuevo-producto-container">
                    <div className="nuevo-producto-elements">
                        <div className="nuevo-producto-guia">
                            <BarraEtapas
                                activarFomulario1 = { setFormularioActivo1 } 
                                activarFormulario2={ setFormularioActivo2 }
                                activarFormulario3={ setFormularioActivo3 }
                                activarFormulario4={ setFormularioActivo4 }
                                clickBotonAtras = { setClickBotonAtras }
                                completoFormulario1 = { completoFormulario1 }
                                completoFormulario2 = { completoFormulario2 }
                                completoFormulario3 = { completoFormulario3 }
                                completoFormulario4 = { completoFormulario4 }
                                validacionNombre={ validacionNombre }
                                validacionCategoria={ validacionCategoria }
                                validacionTipo={ validacionTipo }
                                validacionMarca={ validacionMarca }
                                validacionPais={ validacionPais }
                                validacionCiudad={ validacionCiudad }
                                validacionOtroTipo={ validacionOtroTipo }
                                validacionOtraMarca={ validacionOtraMarca }
                                setValidacionNombre={ setValidacionNombre }
                                setValidacionCategoria={ setValidacionCategoria }
                                setValidacionTipo={ setValidacionTipo }
                                setValidacionMarca={ setValidacionMarca }
                                setValidacionPais={ setValidacionPais }
                                setValidacionCiudad={ setValidacionCiudad }
                                setValidacionOtroTipo={ setValidacionOtroTipo }
                                setValidacionOtraMarca={ setValidacionOtraMarca }
                                desplegarMarca={ desplegarMarca }
                                desplegarUbicacion={ desplegarUbicacion }
                                desplegarOtroTipo={ desplegarOtroTipo }
                                desplegarOtraMarca={ desplegarOtraMarca }
                                setDesplegarMarca={ setDesplegarMarca }
                                setDesplegarUbicacion={ setDesplegarUbicacion }
                                setDesplegarOtroTipo={ setDesplegarOtroTipo }
                                setDesplegarOtraMarca={ setDesplegarOtraMarca }
                                nombre={ nombre }
                                categoria={ categoria }
                                tipo={ tipo }
                                marca={ marca }
                                country={ country }
                                city={ city }
                                otroTipo={ otroTipo }
                                otraMarca={ otraMarca }
                                setCompletoFormulario1={ setCompletoFormulario1 }
                            />
                        </div>
                        <div className="nuevo-producto-bloque">
                            <div 
                                style={{ display: formularioActivo1 ? 'flex' : 'none' }}
                                className={ formularioActivo1 ? ( clickBotonAtras ? claseEntradaIzquierda : claseEntradaDerecha ) : claseSalidaIzquierda }
                            >
                                <FormularioNuevo1 
                                    activarFomulario1 = { setFormularioActivo1 } 
                                    activarFormulario2={ setFormularioActivo2 }
                                    clickBotonAtras = { setClickBotonAtras }
                                    completoFormulario1 = { setCompletoFormulario1 }
                                    nombre={nombre}
                                    categoria={categoria}
                                    tipo={tipo}
                                    marca={marca}
                                    country={country}
                                    city={city}
                                    otroTipo={otroTipo}
                                    otraMarca={otraMarca}
                                    formState={formState}
                                    setFormState={setFormState}
                                    onInputChange={onInputChange}
                                    validacionNombre={ validacionNombre }
                                    validacionCategoria={ validacionCategoria }
                                    validacionTipo={ validacionTipo }
                                    validacionMarca={ validacionMarca }
                                    validacionPais={ validacionPais }
                                    validacionCiudad={ validacionCiudad }
                                    validacionSede={ validacionSede }
                                    validacionOtroTipo={ validacionOtroTipo }
                                    validacionOtraMarca={ validacionOtraMarca }
                                    setValidacionNombre={ setValidacionNombre }
                                    setValidacionCategoria={ setValidacionCategoria }
                                    setValidacionTipo={ setValidacionTipo }
                                    setValidacionMarca={ setValidacionMarca }
                                    setValidacionPais={ setValidacionPais }
                                    setValidacionCiudad={ setValidacionCiudad }
                                    setValidacionSede={ setValidacionSede }
                                    setValidacionOtroTipo={ setValidacionOtroTipo }
                                    setValidacionOtraMarca={ setValidacionOtraMarca }
                                    desplegarMarca={ desplegarMarca }
                                    desplegarUbicacion={ desplegarUbicacion }
                                    desplegarOtroTipo={ desplegarOtroTipo }
                                    desplegarOtraMarca={ desplegarOtraMarca }
                                    setDesplegarMarca={ setDesplegarMarca }
                                    setDesplegarUbicacion={ setDesplegarUbicacion }
                                    setDesplegarOtroTipo={ setDesplegarOtroTipo }
                                    setDesplegarOtraMarca={ setDesplegarOtraMarca }
                                    campus={ campus }
                                />
                            </div>

                            <div 
                                style={{ display: formularioActivo2 ? 'flex' : 'none' }}
                                className={ formularioActivo2 ? ( clickBotonAtras ? claseEntradaIzquierda : claseEntradaDerecha ) : claseSalidaIzquierda }
                            >
                                <FormularioNuevo2 
                                    activarFomulario1 = { setFormularioActivo1 } 
                                    activarFormulario2={ setFormularioActivo2 }
                                    activarFormulario3={ setFormularioActivo3 }
                                    clickBotonAtras = { setClickBotonAtras }
                                    completoFormulario2 = { setCompletoFormulario2 }
                                    totalImagenes = { totalImagenes }
                                    setTotalImagenes = { setTotalImagenes }
                                    imagenesCargadas={ imagenesCargadas }
                                    setImagenesCargadas={ setImagenesCargadas }
                                    formState={ formState }
                                />
                            </div>

                            <div 
                                style={{ display: formularioActivo3 ? 'flex' : 'none' }}
                                className={ formularioActivo3 ? ( clickBotonAtras ? claseEntradaIzquierda : claseEntradaDerecha ) : claseSalidaIzquierda }
                            >
                                <FormularioNuevo3 
                                    activarFormulario2={ setFormularioActivo2 }
                                    activarFormulario3={ setFormularioActivo3 }
                                    activarFormulario4={ setFormularioActivo4 }
                                    clickBotonAtras = { setClickBotonAtras }
                                    completoFormulario3 = { setCompletoFormulario3 }
                                    completoFormulario4 = { setCompletoFormulario4 }
                                    comentario={comentario}
                                    onInputChange={onInputChange}
                                    formState={ formState }
                                />
                            </div>

                            <div 
                                style={{ display: formularioActivo4 ? 'flex' : 'none' }}
                                className={ formularioActivo4 ? ( clickBotonAtras ? claseEntradaIzquierda : claseEntradaDerecha ) : claseSalidaIzquierda }
                            >
                                <FormularioNuevo4
                                    activarFormulario3={ setFormularioActivo3 }
                                    activarFormulario4={ setFormularioActivo4 }
                                    clickBotonAtras = { setClickBotonAtras }
                                    fotosNuevas = { fotosNuevas }
                                    nuevoComentario = { nuevoComentario }
                                    nuevaCalificacion = { nuevaCalificacion }
                                    publicarNuevoProducto={ publicarNuevoProducto }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </HelproLayout>
        </>
    )
}
