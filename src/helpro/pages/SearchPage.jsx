import { useParams } from "react-router-dom";
import { FichaProducto } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import { getItemsByName } from "../../helpers";
import './SearchPage.css';


export const SearchPage = () => {

    const { nombreItem } = useParams();

    const data = getItemsByName( nombreItem );
    
    return (
        <>
            <HelproLayout>
                <div className="search-container">
                    {
                        data.map((item) => (
                            <div key={ item.id } className="search-ficha-producto">
                                <FichaProducto item={ item } />
                            </div>
                        ))
                    }
                </div>
            </HelproLayout>
        </>
    )
}
