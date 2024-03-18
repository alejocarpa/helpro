import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItemById, getFotosById, getComentsById, getTotalComments, getGradePercentage } from "../../store/helpro/thunks";
import { DetalleItem } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import './ItemPage.css';
import { useSelector } from "react-redux";

export const ItemPage = () => {

    const limIni = 0;
    const limFin = 10;
    const proAba = 1.2;

    const [offset, setOffset] = useState(0);
    const [dataItem, setDataItem] = useState([]);
    const [fotos, setFotos] = useState([]);
    const [comments, setComments] = useState([]);
    const [totalComments, setTotalComments] = useState([]);
    const { guardandoNuevoProducto } = useSelector( state => state.helpro );
    const [productoAbajo, setProductoAbajo] = useState(proAba);
    const [limiteInicial, setLimiteInicial] = useState(limIni);
    const [limiteFinal, setLimiteFinal] = useState(limFin);
    const [newComments, setNewComments] = useState([]);
    const [porcentaje1, setPorcentaje1] = useState(0);
    const [porcentaje2, setPorcentaje2] = useState(0);
    const [porcentaje3, setPorcentaje3] = useState(0);
    const [porcentaje4, setPorcentaje4] = useState(0);
    const [porcentaje5, setPorcentaje5] = useState(0);
    const [filtro, setFiltro] = useState(0);

    const altura = screen.height;

    const { idItem } = useParams();

    const obtenerData = async() => {
        setDataItem( await getItemById( idItem ) );
        setFotos( await getFotosById( idItem ) );
        setTotalComments( await getTotalComments( idItem ) );
    }

    const obtenerComentarios = async( limiteInicial, limiteFinal) => {
        setComments( await getComentsById( idItem, limiteInicial, limiteFinal ) );
    }

    const obtenerNuevosComentarios = async( limiteInicial, limiteFinal) => {
        setNewComments( await getComentsById( idItem, limiteInicial, limiteFinal, filtro ) );
    }

    const calcularPorcentajeComentarios = async( id ) => {

        for (let i = 1; i <= 5; i++) {
            
            if( i = 1){
                setPorcentaje1( await getGradePercentage( i, id, totalComments[0] ) )
            }
            if( i = 2){
                setPorcentaje2( await getGradePercentage( i, id, totalComments[0] ) )
            }
            if( i = 3){
                setPorcentaje3( await getGradePercentage( i, id, totalComments[0] ) )
            }
            if( i = 4){
                setPorcentaje4( await getGradePercentage( i, id, totalComments[0] ) )
            }
            if( i = 5){
                setPorcentaje5( await getGradePercentage( i, id, totalComments[0] ) )
            }
            
        }
    }
    
    const filtrarComentarios = async( estrellas ) => {

        setFiltro( estrellas );
        setProductoAbajo( proAba );
        setComments( await getComentsById( idItem, limIni, limFin, estrellas ) );
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
        calcularPorcentajeComentarios( idItem );
    }, [guardandoNuevoProducto]);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if( totalComments.length > 0 ){

            calcularPorcentajeComentarios( idItem );
        }
    }, [ totalComments ]);
    
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
                        totalComments={ totalComments }
                        porcentaje1={ porcentaje1 }
                        porcentaje2={ porcentaje2 }
                        porcentaje3={ porcentaje3 }
                        porcentaje4={ porcentaje4 }
                        porcentaje5={ porcentaje5 }
                        filtrarComentarios={ filtrarComentarios }
                        obtenerComentarios={ obtenerComentarios }
                        setFiltro={ setFiltro }
                        idItem={ idItem }
                        calcularPorcentajeComentarios={ calcularPorcentajeComentarios }
                    />
                </div>
            </div>
        </HelproLayout>
    )
}
