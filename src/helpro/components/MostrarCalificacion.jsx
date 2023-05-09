import './MostrarCalificacion.css';
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

export const MostrarCalificacion = ({ calificacion }) => {

    const espacioDerecha = '2px';

    let numeroEstrellas = 0;
    switch (true) {
        case calificacion >= 1 && calificacion < 1.5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case calificacion >= 1.5 && calificacion < 2:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarHalf style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case calificacion >= 2 && calificacion < 2.5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case calificacion >= 2.5 && calificacion < 3:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarHalf style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case calificacion >= 3 && calificacion < 3.5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case calificacion >= 3.5 && calificacion < 4:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarHalf style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case calificacion >= 4 && calificacion < 4.5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case calificacion >= 4.5 && calificacion < 5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarHalf style={{ paddingRight: espacioDerecha }} /></>
            break;
        case calificacion >= 5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /></>
            break;
        default:
            numeroEstrellas = <><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
    }

    return (
        <>
            <div className="mostrar-calificacion-container">
                <div className="mostrar-calificacion-elements">
                    <div className="mostrar-calificacion-estrella">
                        {numeroEstrellas}
                    </div>
                </div>
            </div>
        </>
    )
}
