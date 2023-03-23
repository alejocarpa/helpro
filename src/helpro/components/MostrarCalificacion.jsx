import './MostrarCalificacion.css';
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";

export const MostrarCalificacion = ({ calificacion }) => {

    const espacioDerecha = '2px';

    let numeroEstrellas = 0;
    switch (calificacion) {
        case 1:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case 1.5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarHalf style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case 2:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case 2.5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarHalf style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case 3:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case 3.5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarHalf style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case 4:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStar style={{ paddingRight: espacioDerecha }} /></>
            break;
        case 4.5:
            numeroEstrellas = <><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarFill style={{ paddingRight: espacioDerecha }} /><BsStarHalf style={{ paddingRight: espacioDerecha }} /></>
            break;
        case 5:
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
