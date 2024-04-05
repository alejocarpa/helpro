import { CarouselComponent, CategorysComponent, ProductoCategoria } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import './HomePage.css';
import { getItemsByCategorys } from "../../store/helpro/thunks";
import { useEffect, useState } from "react";
import { Placeholder } from "react-bootstrap";
import { CarruselCategorias } from "../components/CarruselCategorias";
import useScreenSize from "../../hooks/useScreenSize";
import { CarruselProductoCategoria } from "../components/CarruselProductoCategoria";

export const HomePage = () => {

    const [dataProductos, setDataProductos] = useState([]);
    const [dataAplicaciones, setDataAplicaciones] = useState([]);
    const [dataServicios, setDataServicios] = useState([]);
    const [dataLocalesComerciales, setDataLocalesComerciales] = useState([]);
    const [dataEntidades, setDataEntidades] = useState([]);

    const { width } = useScreenSize();

    const obtenerData = async() => {
        /*--------------------------------------------------------
        Se hace la peticion getItemsByCategorys pasando tres argumentos
        el primero es el id de la categoria, el segundo es limit de arranque
        y el tercero es offset del limite 
        --------------------------------------------------------*/
        setDataProductos( await getItemsByCategorys( 1, 0, 5 ) );
        setDataAplicaciones( await getItemsByCategorys( 4, 0, 5 ) );
        setDataServicios( await getItemsByCategorys( 2, 0, 5 ) );
        setDataLocalesComerciales( await getItemsByCategorys( 3, 0, 5 ) );
        setDataEntidades( await getItemsByCategorys( 5, 0, 5 ) );
    }
    
    useEffect(() => {
        obtenerData();
    }, []);
    
    return (
        <>
            <HelproLayout>
                <div className="helpro-container">
                    <div className="helpro-carousel">
                        <CarouselComponent />
                    </div>
                    {
                        width <= 550
                        ?
                        <div className="helpro-categorys">
                            <CarruselCategorias />
                        </div>
                        :
                        <div className="helpro-categorys">
                            <CategorysComponent />
                        </div>
                    }
                    
                    <div className="helpro-titulo-seccion">
                        Mejores Calificados
                    </div>
                    {
                        width <= 990
                        ?
                        <>
                            <div className="helpro-productos-x-categoria">
                                <CarruselProductoCategoria 
                                    dataItems={ dataAplicaciones }
                                    tituloCategoria="Aplicaciones"
                                />
                            </div>
                            <div className="helpro-productos-x-categoria">
                                <CarruselProductoCategoria 
                                    dataItems={ dataServicios }
                                    tituloCategoria="Servicios"
                                />
                            </div>
                            <div className="helpro-productos-x-categoria">
                                <CarruselProductoCategoria 
                                    dataItems={ dataLocalesComerciales }
                                    tituloCategoria="Locales comerciales"
                                />
                            </div>
                            <div className="helpro-productos-x-categoria">
                                <CarruselProductoCategoria 
                                    dataItems={ dataProductos }
                                    tituloCategoria="Productos"
                                />
                            </div>
                            <div className="helpro-productos-x-categoria">
                                <CarruselProductoCategoria 
                                    dataItems={ dataEntidades }
                                    tituloCategoria="Entidades"
                                />
                            </div>
                        </>
                        :
                        <>
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
                            <div className="helpro-productos-x-categoria">
                                <ProductoCategoria 
                                    dataItems={ dataEntidades }
                                    tituloCategoria="Entidades"
                                />
                            </div>
                        </>
                    }
                    
                    
                </div>
            </HelproLayout>
        </>
    )
}
