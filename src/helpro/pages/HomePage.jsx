import { CarouselComponent, CategorysComponent, ProductoCategoria } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import './HomePage.css';
import { getItemsByCategorys } from "../../store/helpro/thunks";
import { useEffect, useState } from "react";

export const HomePage = () => {

    const [dataProductos, setDataProductos] = useState([]);
    const [dataAplicaciones, setDataAplicaciones] = useState([]);
    const [dataServicios, setDataServicios] = useState([]);
    const [dataLocalesComerciales, setDataLocalesComerciales] = useState([]);

    const obtenerData = async() => {
        setDataProductos( await getItemsByCategorys( 1 ) );
        setDataAplicaciones( await getItemsByCategorys( 4 ) );
        setDataServicios( await getItemsByCategorys( 2 ) );
        setDataLocalesComerciales( await getItemsByCategorys( 3 ) );
    }
    
    useEffect(() => {
        obtenerData();
    }, [])
    
    return (
        <>
            <HelproLayout>
                <div className="helpro-container">
                    <div className="helpro-carousel">
                        <CarouselComponent />
                    </div>
                    <div className="helpro-categorys">
                        <CategorysComponent />
                    </div>
                    <div className="helpro-titulo-seccion">
                        Mejores Calificados
                    </div>
                    <div className="helpro-productos-x-categoria">
                        <ProductoCategoria 
                            dataItems={ dataAplicaciones }
                            tituloCategoria="Aplicaciones"
                        />
                    </div>
                    <div className="helpro-productos-x-categoria">
                        <ProductoCategoria 
                            dataItems={ dataServicios }
                            tituloCategoria="Servicios"
                        />
                    </div>
                    <div className="helpro-productos-x-categoria">
                        <ProductoCategoria 
                            dataItems={ dataLocalesComerciales }
                            tituloCategoria="Locales comerciales"
                        />
                    </div>
                    <div className="helpro-productos-x-categoria">
                        <ProductoCategoria 
                            dataItems={ dataProductos }
                            tituloCategoria="Productos"
                        />
                    </div>
                </div>
            </HelproLayout>
        </>
    )
}
