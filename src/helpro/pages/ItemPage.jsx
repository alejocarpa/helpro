import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getItemById, getFotosById, getComentsById } from "../../store/helpro/thunks";
import { DetalleItem } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import './ItemPage.css';

export const ItemPage = () => {

    window.scroll(0, 0);

    const [dataItem, setDataItem] = useState([]);
    const [fotos, setFotos] = useState([]);
    const [comments, setComments] = useState([]);

    const { idItem } = useParams();

    const obtenerData = async() => {
        setDataItem( await getItemById( idItem ) );
        setFotos( await getFotosById( idItem ) );
        setComments( await getComentsById( idItem ) );
    }

    useEffect(() => {
        obtenerData();
    }, [])
    
 
    return (
        <HelproLayout>
            <div className="item-page-container">
                <div className="item-page-elements">
                    <DetalleItem item={ dataItem } fotos={ fotos } coments={ comments } />
                </div>
            </div>
        </HelproLayout>
    )
}
