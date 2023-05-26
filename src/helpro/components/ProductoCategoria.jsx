import { CardProducto } from './CardProducto';
import { CardProductoLoading } from './CardProductoLoading';
import './ProductoCategoria.css';

export const ProductoCategoria = ({ dataItems = [], tituloCategoria = '' }) => {

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
                                dataItems.map((item, id) => (
                                    <div 
                                        className="producto-categoria-detalle-card" 
                                        key={item.id_product}
                                        style={{ marginLeft:  id === 0 ? "0%" : "4%"  }}
                                    >
                                        <CardProducto item={item} />
                                    </div>
                                ))
                                :
                                <>
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
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
