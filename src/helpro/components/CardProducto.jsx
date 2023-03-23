import './CardProducto.css';
import { MostrarCalificacion } from './';
import { useNavigate } from 'react-router-dom';

export const CardProducto = ({ item }) => {

    const navigate = useNavigate();

    const openItem = () => {
        navigate( `/item/${ item.id }` );
    }

    return (
        <>
            <div className="cardproduct-container">
                <div className="cardproduct-elements" onClick={ openItem }>
                    <div className="cardproduct-imagen">
                        <img className="cardproduct-imagen-img" src={ item.ImagenURL } alt={ item.nombre } />
                    </div>
                    <div className="cardproduct-detalle">
                        <div className="cardproduct-titulo">
                            { item.nombre }
                        </div>
                        <div className="cardproduct-calificacion">
                            <MostrarCalificacion calificacion={ item.calificacion } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
