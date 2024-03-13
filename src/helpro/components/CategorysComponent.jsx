import { useNavigate } from 'react-router-dom';
import './CategorysComponent.css';


export const CategorysComponent = () => {

    const widthImage = 60;
    const heightImage = 60;

    const navigate = useNavigate();

    const navigateCategory = ( category ) => {
        navigate(`/helpro/search/${ category }/1`);
    }


    return (
        <>
            <div className="categorys-container">
                <div className="categorys-elements">
                    <div className="categorys-block" onClick={ () => navigateCategory(5) }>
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
                    <div className="categorys-block" onClick={ () => navigateCategory(3) }>
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
                    <div className="categorys-block" onClick={ () => navigateCategory(2) }>
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
                    <div className="categorys-block" onClick={ () => navigateCategory(4) }>
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
                    <div className="categorys-block" onClick={ () => navigateCategory(6) }>
                        <div className="categorys-image animate__animated animate__backInDown">
                            <img
                                src='/images/lugares-category.png'
                                alt="element-category"
                                width={ widthImage }
                                height={ heightImage }
                            />
                        </div>
                        <div className="categorys-text">
                            Lugares
                        </div>
                    </div>
                    <div className="categorys-block" onClick={ () => navigateCategory(1) }>
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
                </div>
            </div>
        </>
    )
}
