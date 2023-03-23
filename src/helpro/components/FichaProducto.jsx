import { useNavigate } from 'react-router-dom';
import './FichaProducto.css';
import { MostrarCalificacion } from "./MostrarCalificacion";

export const FichaProducto = ({ item }) => {

    const navigate = useNavigate();

    const openItem = () => {
        navigate( `/item/${ item.id }` );
    }

    return (
        <>
            <div className="ficha-producto-container">
                <div className="ficha-producto-elements" onClick={ openItem }>
                    <div className="ficha-producto-imagen">
                        <img
                            className="ficha-producto-imagen-img"
                            src={item.ImagenURL}
                            alt={item.nombre}
                        />
                    </div>
                    <div className="ficha-producto-detalle">
                        <div className="ficha-producto-detalle-nombre">
                            {item.nombre}
                        </div>
                        <div className="ficha-producto-detalle-categoria">
                            {item.categoria}
                        </div>
                        <div className="ficha-producto-detalle-tipo">
                            Tipo: {item.tipo}
                        </div>
                        <div className="ficha-producto-detalle-calificacion">
                            <MostrarCalificacion calificacion={ item.calificacion } />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
