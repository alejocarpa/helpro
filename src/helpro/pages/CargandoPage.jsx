import { HelproLayout } from '../layout/HelproLayout';
import './CargandoPage.css';
import Spinner from 'react-bootstrap/Spinner';
import { getItemsByName } from "../../store/helpro/thunks";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const CargandoPage = () => {
    
    const [data, setData] = useState([]);
    const { urlArray } = useSelector(state => state.helpro);
    const navigate = useNavigate();

    window.onpopstate = function(e) {
        const tamanoArray = urlArray.length;

        navigate(urlArray[tamanoArray-2]);
    };

    const { nombreItem } = useParams();

    const obtenerData = async() => {
        setData( await getItemsByName( nombreItem, 0, 50 ) );
    }

    useEffect(() => {

        obtenerData();

        if( data.length === 1 ){
            data.map( item => navigate(`/helpro/item/${ item.id_product }`) )
        }else if( data.length > 1 ){
            navigate(`/helpro/search/${ nombreItem }/0`)
        }
        
    }, [data]);
    

    return (
        <HelproLayout>
            <div className="cargando-page-container">
                <div className="cargando-page-elements">
                    <div className="cargando-page-loading">
                        <Spinner animation="border" variant="primary" />
                    </div>
                </div>
            </div>
        </HelproLayout>
    )
}
