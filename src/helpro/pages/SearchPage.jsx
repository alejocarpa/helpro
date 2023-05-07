import { useParams } from "react-router-dom";
import { FichaProducto } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import { getItemsByName } from "../../store/helpro/thunks";
import './SearchPage.css';
import { useEffect, useState } from "react";


export const SearchPage = () => {

    const { nombreItem } = useParams();
    const [data, setData] = useState([]);

    const obtenerData = async() => {
        setData( await getItemsByName( nombreItem, 0, 50 ) );
    }

    useEffect(() => {
        obtenerData();
    }, [nombreItem])
    
    
    return (
        <>
            <HelproLayout>
                <div className="search-container">
                    {
                        data.map((item) => (
                            <div key={ item.id_product } className="search-ficha-producto">
                                <FichaProducto item={ item } />
                            </div>
                        ))
                    }
                </div>
            </HelproLayout>
        </>
    )
}
