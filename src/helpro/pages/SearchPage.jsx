import { useParams } from "react-router-dom";
import { FichaProducto } from "../components";
import { HelproLayout } from "../layout/HelproLayout";
import { getItemsByCategorys, getItemsByName } from "../../store/helpro/thunks";
import './SearchPage.css';
import { useEffect, useState } from "react";


export const SearchPage = () => {

    const { nombreItem, tipoConsulta } = useParams();

    const [data, setData] = useState([]);

    const obtenerDataByName = async() => {
        setData( await getItemsByName( nombreItem, 0, 50 ) );
    }

    const obtenerDataByCategory = async() => {
        setData( await getItemsByCategorys( nombreItem, 0, 50 ) );
    }

    useEffect(() => {
        if(tipoConsulta === '1'){
            obtenerDataByCategory();
        }else if(tipoConsulta === '0'){
            obtenerDataByName();
        }
    }, [nombreItem]);

    useEffect(() => {
        window.scroll(0, 0);
    }, []);    
    
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
