import { CardProducto } from './CardProducto';
import { CardProductoLoading } from './CardProductoLoading';
import './ProductoCategoria.css';

import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import './CarruselCategorias.css';

export const CarruselProductoCategoria = ({ dataItems = [], tituloCategoria = '' }) => {

    return (
        <>
            <div className="producto-categoria-container">
                <div className="producto-categoria-elements">
                    <div className="producto-categoria-detalle">
                        <div className="producto-categoria-detalle-titulo">
                            { tituloCategoria }
                        </div>
                        <div className="producto-categoria-detalle-cards">
                            {
                                dataItems.length > 0
                                ?
                                <Flicking moveType="freeScroll" bound={true} style={{ zIndex: 0, paddingLeft: '15px' }}>
                                    {
                                        dataItems.map((item, id) => (
                                            <div 
                                                className="producto-categoria-detalle-card" 
                                                key={item.id_product}
                                                style={{ marginLeft:  id === 0 ? "0%" : "4%"  }}
                                            >
                                                <CardProducto item={item} />
                                            </div>
                                        ))
                                    }
                                </Flicking>
                                :
                                <>
                                    <Flicking moveType="freeScroll" bound={true} style={{ zIndex: 0, paddingLeft: '15px' }}>
                                        <div 
                                            className="producto-categoria-detalle-card-loading" 
                                        >
                                            <CardProductoLoading />
                                        </div>
                                        <div 
                                            className="producto-categoria-detalle-card-loading" 
                                        >
                                            <CardProductoLoading />
                                        </div>
                                        <div 
                                            className="producto-categoria-detalle-card-loading" 
                                        >
                                            <CardProductoLoading />
                                        </div>
                                        <div 
                                            className="producto-categoria-detalle-card-loading" 
                                        >
                                            <CardProductoLoading />
                                        </div>
                                        <div 
                                            className="producto-categoria-detalle-card-loading" 
                                        >
                                            <CardProductoLoading />
                                        </div>
                                    </Flicking>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
