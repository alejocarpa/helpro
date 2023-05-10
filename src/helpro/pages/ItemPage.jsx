import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItemById, getFotosById, getComentsById } from "../../store/helpro/thunks";
import { DetalleItem } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import './ItemPage.css';
import { useSelector } from "react-redux";

export const ItemPage = () => {

    const limIni = 0;
    const limFin = 10;
    const proAba = 1.7;

    const [offset, setOffset] = useState(0);
    const [dataItem, setDataItem] = useState([]);
    const [fotos, setFotos] = useState([]);
    const [comments, setComments] = useState([]);
    const { guardandoNuevoProducto } = useSelector( state => state.helpro );
    const [productoAbajo, setProductoAbajo] = useState(proAba);
    const [limiteInicial, setLimiteInicial] = useState(limIni);
    const [limiteFinal, setLimiteFinal] = useState(limFin);
    const [newComments, setNewComments] = useState([]);

    const altura = screen.height;

    const { idItem } = useParams();

    const obtenerData = async() => {
        setDataItem( await getItemById( idItem ) );
        setFotos( await getFotosById( idItem ) );
    }

    const obtenerComentarios = async( limiteInicial, limiteFinal) => {
        setComments( await getComentsById( idItem, limiteInicial, limiteFinal ) );
    }

    const obtenerNuevosComentarios = async( limiteInicial, limiteFinal) => {
        setNewComments( await getComentsById( idItem, limiteInicial, limiteFinal ) );
    }

    if(altura*productoAbajo <= offset){
        setLimiteInicial( limiteInicial+limiteFinal );
        setProductoAbajo( productoAbajo+productoAbajo );

        obtenerNuevosComentarios( limiteInicial+limiteFinal, limiteFinal );
    }

    useEffect(() => {
        window.scroll(0, 0);
        obtenerData();
        obtenerComentarios( limiteInicial, limiteFinal );
        setLimiteInicial(limIni);
        setLimiteFinal(limFin);
        setProductoAbajo(proAba);
    }, [guardandoNuevoProducto]);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    
    return (
        <HelproLayout>
            <div className="item-page-container" id="container">
                <div className="item-page-elements">
                    <DetalleItem 
                        item={ dataItem } 
                        fotos={ fotos } 
                        coments={ comments } 
                        newComments={ newComments }
                        setLimiteInicial={ setLimiteInicial }
                        setLimiteFinal={ setLimiteFinal }
                        setProductoAbajo={ setProductoAbajo }
                        limIni={ limIni }
                        limFin={ limFin }
                        proAba={ proAba }
                    />
                </div>
            </div>
        </HelproLayout>
    )
}
