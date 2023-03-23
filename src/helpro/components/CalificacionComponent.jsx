import './CalificacionComponent.css';
import { BsStarFill, BsStar } from "react-icons/bs";
import { useState } from 'react';

export const CalificacionComponent = () => {

    const [unaEstrella, setUnaEstrella] = useState(false);
    const [dosEstrella, setDosEstrella] = useState(false);
    const [tresEstrella, setTresEstrella] = useState(false);
    const [cuatroEstrella, setCuatroEstrella] = useState(false);
    const [cincoEstrella, setCincoEstrella] = useState(false);

    return (
        <>
            <div className="calificacion-container">
                <div
                    className="calificacion-elements"
                >
                    <div className="calificacion-estrella"
                        onMouseEnter={() => {
                            setUnaEstrella(true);
                        }}
                        onMouseLeave={() => {
                            setUnaEstrella(false);
                        }}
                    >
                        {
                            unaEstrella
                                ?
                                <BsStarFill />
                                :
                                <BsStar />
                        }
                    </div>

                    <div className="calificacion-estrella"
                        onMouseEnter={() => {
                            setUnaEstrella(true);
                            setDosEstrella(true);
                        }}
                        onMouseLeave={() => {
                            setUnaEstrella(false);
                            setDosEstrella(false);
                        }}
                    >
                        {
                            dosEstrella
                                ?
                                <BsStarFill />
                                :
                                <BsStar />
                        }
                    </div>

                    <div className="calificacion-estrella"
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
                    >
                        {
                            tresEstrella
                                ?
                                <BsStarFill />
                                :
                                <BsStar />
                        }
                    </div>

                    <div className="calificacion-estrella"
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
                    >
                        {
                            cuatroEstrella
                                ?
                                <BsStarFill />
                                :
                                <BsStar />
                        }
                    </div>

                    <div className="calificacion-estrella"
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
                    >
                        {
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
