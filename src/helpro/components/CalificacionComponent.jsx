import './CalificacionComponent.css';
import { BsStarFill, BsStar } from "react-icons/bs";
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregandoNuevaCalificacion } from '../../store/helpro/helproSlice';

export const CalificacionComponent = ({ nuevaCalificacion, formState }) => {

    const dispatch = useDispatch();

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
        dispatch( agregandoNuevaCalificacion( { calificacion: 1 }) );
    }

    const activarDosEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(true);
        setCalificoTresEstrella(false);
        setCalificoCuatroEstrella(false);
        setCalificoCincoEstrella(false);
        dispatch( agregandoNuevaCalificacion( { calificacion: 2 }) );
    }

    const activarTresEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(true);
        setCalificoTresEstrella(true);
        setCalificoCuatroEstrella(false);
        setCalificoCincoEstrella(false);
        dispatch( agregandoNuevaCalificacion( { calificacion: 3 }) );
    }

    const activarCuatroEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(true);
        setCalificoTresEstrella(true);
        setCalificoCuatroEstrella(true);
        setCalificoCincoEstrella(false);
        dispatch( agregandoNuevaCalificacion( { calificacion: 4 }) );
    }

    const activarCincoEstrella = () => {
        setPresionoClick(true);
        setCalificoUnaEstrella(true);
        setCalificoDosEstrella(true);
        setCalificoTresEstrella(true);
        setCalificoCuatroEstrella(true);
        setCalificoCincoEstrella(true);
        dispatch( agregandoNuevaCalificacion( { calificacion: 5 }) );
    }

    useEffect(() => {
        setUnaEstrella(false);
        setDosEstrella(false);
        setTresEstrella(false);
        setCuatroEstrella(false);
        setCincoEstrella(false);
        
        if( nuevaCalificacion?.calificacion === 1 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(false);
            setCalificoTresEstrella(false);
            setCalificoCuatroEstrella(false);
            setCalificoCincoEstrella(false);
            setPresionoClick(true);
        }
        if( nuevaCalificacion?.calificacion === 2 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(true);
            setCalificoTresEstrella(false);
            setCalificoCuatroEstrella(false);
            setCalificoCincoEstrella(false);
            setPresionoClick(true);
        }
        if( nuevaCalificacion?.calificacion === 3 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(true);
            setCalificoTresEstrella(true);
            setCalificoCuatroEstrella(false);
            setCalificoCincoEstrella(false);
            setPresionoClick(true);
        }
        if( nuevaCalificacion?.calificacion === 4 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(true);
            setCalificoTresEstrella(true);
            setCalificoCuatroEstrella(true);
            setCalificoCincoEstrella(false);
            setPresionoClick(true);
        }
        if( nuevaCalificacion?.calificacion === 5 ){
            setCalificoUnaEstrella(true);
            setCalificoDosEstrella(true);
            setCalificoTresEstrella(true);
            setCalificoCuatroEstrella(true);
            setCalificoCincoEstrella(true);
            setPresionoClick(true);
        }
    }, [nuevaCalificacion?.calificacion])

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
