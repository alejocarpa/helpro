import './CategorysComponent.css';


export const CategorysComponent = () => {

    const widthImage = 60;
    const heightImage = 60;


    return (
        <>
            <div className="categorys-container">
                <div className="categorys-elements">
                    <div className="categorys-block">
                        <div className="categorys-image">
                            <img
                                src='/images/electrodomesticos-category.png'
                                alt="element-category"
                                width={ widthImage }
                                height={ heightImage }
                            />
                        </div>
                        <div className="categorys-text">
                            Electrodomesticos
                        </div>
                    </div>
                    <div className="categorys-block">
                        <div className="categorys-image">
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
                    <div className="categorys-block">
                        <div className="categorys-image">
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
                    <div className="categorys-block">
                        <div className="categorys-image">
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
                    <div className="categorys-block">
                        <div className="categorys-image">
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
                    <div className="categorys-block">
                        <div className="categorys-image">
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
