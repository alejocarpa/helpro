import { CarouselComponent, CategorysComponent, ProductoCategoria } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import './HomePage.css';
import { getItemsByCategory } from "../../helpers";

export const HomePage = () => {

    const dataAplicaciones = getItemsByCategory( 'Aplicacion' );
    const dataServicios = getItemsByCategory( 'Servicio' );
    const dataLocalesComerciales = getItemsByCategory( 'Local comercial' );
    const dataProductos = getItemsByCategory( 'Producto' );

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
