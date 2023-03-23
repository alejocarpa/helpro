import { useParams } from "react-router-dom"
import { getComentsById, getFotosById, getItemById } from "../../helpers";
import { DetalleItem } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import './ItemPage.css';

export const ItemPage = () => {

    window.scroll(0, 0);

    const { idItem } = useParams();

    const dataItem = getItemById( idItem );

    const coments = getComentsById();

    const fotos = getFotosById();
 
    return (
        <HelproLayout>
            <div className="item-page-container">
                <div className="item-page-elements">
                    <DetalleItem item={ dataItem } fotos={ fotos } coments={ coments } />
                </div>
            </div>
        </HelproLayout>
    )
}
