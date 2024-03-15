import { useNavigate } from 'react-router-dom';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import './CarruselCategorias.css';

export const CarruselCategorias = () => {

    const navigate = useNavigate();

    const widthImage = 60;
    const heightImage = 60;

    const navigateCategory = ( category ) => {
        navigate(`/helpro/search/${ category }/1`);
    }

    return (
        <div className="carrusel-categoria-container">
            <Flicking moveType="freeScroll" bound={true} style={{ zIndex: 0, paddingLeft: '15px' }}>
                <div className="carrusel-categoria-block" onClick={ () => navigateCategory(5) }>
                    <div className="categorys-image animate__animated animate__backInDown">
                        <img
                            src='/images/entidad-category.png'
                            alt="element-category"
                            width={ widthImage }
                            height={ heightImage }
                        />
                    </div>
                    <div className="categorys-text">
                        Entidades
                    </div>
                </div>

                <div className="carrusel-categoria-block" onClick={ () => navigateCategory(3) }>
                    <div className="categorys-image animate__animated animate__backInLeft">
                        <img
                            src='/images/tienda-category.png'
                            alt="element-category"
                            width={ widthImage }
                            height={ heightImage }
                        />
                    </div>
                    <div className="categorys-text">
                        Locales comerciales
                    </div>
                </div>

                <div className="carrusel-categoria-block" onClick={ () => navigateCategory(2) }>
                    <div className="categorys-image animate__animated animate__backInRight">
                        <img
                            src='/images/servicio-category.png'
                            alt="element-category"
                            width={ widthImage }
                            height={ heightImage }
                        />
                    </div>
                    <div className="categorys-text">
                        Servicios
                    </div>
                </div>

                <div className="carrusel-categoria-block" onClick={ () => navigateCategory(4) }>
                    <div className="categorys-image animate__animated animate__backInUp">
                        <img
                            src='/images/app-category.png'
                            alt="element-category"
                            width={ widthImage }
                            height={ heightImage }
                        />
                    </div>
                    <div className="categorys-text">
                        Aplicaciones
                    </div>
                </div>

                <div className="carrusel-categoria-block" onClick={ () => navigateCategory(1) }>
                    <div className="categorys-image animate__animated animate__backInLeft">
                        <img
                            src='/images/productos-category.png'
                            alt="element-category"
                            width={ widthImage }
                            height={ heightImage }
                        />
                    </div>
                    <div className="categorys-text">
                        Productos
                    </div>
                </div>
            </Flicking>
            
        </div>
    )
}
