import './CalificacionComponent.css';
import { BsStarFill, BsStar } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { agregandoNuevoProducto } from '../../store/helpro/helproSlice';

export const CalificacionComponent = ({ formState }) => {

    const dispatch = useDispatch();
    const { nuevoProducto } = useSelector(state => state.helpro);

    const [unaEstrella, setUnaEstrella] = useState(false);
    const [dosEstrella, setDosEstrella] = useState(false);
    const [tresEstrella, setTresEstrella] = useState(false);
    const [cuatroEstrella, setCuatroEstrella] = useState(false);
    const [cincoEstrella, setCincoEstrella] = useState(false);

    const [presionoClick, setPresionoClick] = useState(false);

    const [calificoUnaEstrella, setCalificoUnaEstrella] = useState(false);
    const [calificoDosEstrella, setCalificoDosEstrella] = useState(false);
    const [calificoTresEstrella, setCalificoTresEstrella] = useState(false);
    const [calificoCuatroEstrella, setCalificoCuatroEstrella] = useState(false);
    const [calificoCincoEstrella, setCalificoCincoEstrella] = useState(false);

    const activarUnaEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(false);
        setCalificoTresEstrella(false);
        setCalificoCuatroEstrella(false);
        setCalificoCincoEstrella(false);
        dispatch( agregandoNuevoProducto( { ...formState, calificacion: 1 }) );
    }

    const activarDosEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(true);
        setCalificoTresEstrella(false);
        setCalificoCuatroEstrella(false);
        setCalificoCincoEstrella(false);
        dispatch( agregandoNuevoProducto( { ...formState, calificacion: 2 }) );
    }

    const activarTresEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(true);
        setCalificoTresEstrella(true);
        setCalificoCuatroEstrella(false);
        setCalificoCincoEstrella(false);
        dispatch( agregandoNuevoProducto( { ...formState, calificacion: 3 }) );
    }

    const activarCuatroEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(true);
        setCalificoTresEstrella(true);
        setCalificoCuatroEstrella(true);
        setCalificoCincoEstrella(false);
        dispatch( agregandoNuevoProducto( { ...formState, calificacion: 4 }) );
    }

    const activarCincoEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(true);
        setCalificoTresEstrella(true);
        setCalificoCuatroEstrella(true);
        setCalificoCincoEstrella(true);
        dispatch( agregandoNuevoProducto( { ...formState, calificacion: 5 }) );
    }

    useEffect(() => {
        setPresionoClick(true);
        setUnaEstrella(false);
        setDosEstrella(false);
        setTresEstrella(false);
        setCuatroEstrella(false);
        setCincoEstrella(false);
        
        if( nuevoProducto.calificacion === 1 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(false);
            setCalificoTresEstrella(false);
            setCalificoCuatroEstrella(false);
            setCalificoCincoEstrella(false);
        }
        if( nuevoProducto.calificacion === 2 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(true);
            setCalificoTresEstrella(false);
            setCalificoCuatroEstrella(false);
            setCalificoCincoEstrella(false);
        }
        if( nuevoProducto.calificacion === 3 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(true);
            setCalificoTresEstrella(true);
            setCalificoCuatroEstrella(false);
            setCalificoCincoEstrella(false);
        }
        if( nuevoProducto.calificacion === 4 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(true);
            setCalificoTresEstrella(true);
            setCalificoCuatroEstrella(true);
            setCalificoCincoEstrella(false);
        }
        if( nuevoProducto.calificacion === 5 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(true);
            setCalificoTresEstrella(true);
            setCalificoCuatroEstrella(true);
            setCalificoCincoEstrella(true);
        }
    }, [nuevoProducto.calificacion])

    const animacion = "animate__animated animate__jackInTheBox";

    return (
        <>
            <div className="calificacion-container">
                <div
                    className="calificacion-elements"
                >
                    <div className={ `calificacion-estrella ${animacion}` }
                        onMouseEnter={() => {
                            setUnaEstrella(true);
                        }}
                        onMouseLeave={() => {
                            setUnaEstrella(false);
                        }}
                        onClick={ activarUnaEstrella }
                    >
                        {
                            presionoClick
                            ?
                                calificoUnaEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                            :
                                unaEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                        }
                    </div>

                    <div className={ `calificacion-estrella ${animacion}` }
                        onMouseEnter={() => {
                            setUnaEstrella(true);
                            setDosEstrella(true);
                        }}
                        onMouseLeave={() => {
                            setUnaEstrella(false);
                            setDosEstrella(false);
                        }}
                        onClick={ activarDosEstrella }
                    >
                        {
                            presionoClick
                            ?
                                calificoDosEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                            :
                                dosEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                        }
                    </div>

                    <div className={ `calificacion-estrella ${animacion}` }
                        onMouseEnter={() => {
                            setUnaEstrella(true);
                            setDosEstrella(true);
                            setTresEstrella(true);
                        }}
                        onMouseLeave={() => {
                            setUnaEstrella(false);
                            setDosEstrella(false);
                            setTresEstrella(false);
                        }}
                        onClick={ activarTresEstrella }
                    >
                        {
                            presionoClick
                            ?
                                calificoTresEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                            :
                                tresEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                        }
                    </div>

                    <div className={ `calificacion-estrella ${animacion}` }
                        onMouseEnter={() => {
                            setUnaEstrella(true);
                            setDosEstrella(true);
                            setTresEstrella(true);
                            setCuatroEstrella(true);
                        }}
                        onMouseLeave={() => {
                            setUnaEstrella(false);
                            setDosEstrella(false);
                            setTresEstrella(false);
                            setCuatroEstrella(false);
                        }}
                        onClick={ activarCuatroEstrella }
                    >
                        {
                            presionoClick
                            ?
                                calificoCuatroEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                            :
                                cuatroEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                        }
                    </div>

                    <div className={ `calificacion-estrella ${animacion}` }
                        onMouseEnter={() => {
                            setUnaEstrella(true);
                            setDosEstrella(true);
                            setTresEstrella(true);
                            setCuatroEstrella(true);
                            setCincoEstrella(true);
                        }}
                        onMouseLeave={() => {
                            setUnaEstrella(false);
                            setDosEstrella(false);
                            setTresEstrella(false);
                            setCuatroEstrella(false);
                            setCincoEstrella(false);
                        }}
                        onClick={ activarCincoEstrella }
                    >
                        {
                            presionoClick
                            ?
                                calificoCincoEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                            :
                                cincoEstrella
                                    ?
                                    <BsStarFill />
                                    :
                                    <BsStar />
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
