import { HelproLayout } from '../layout/HelproLayout';
import './CargandoPage.css';
import Spinner from 'react-bootstrap/Spinner';
import { getItemsByName } from '../../helpers';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const CargandoPage = () => {

    const navigate = useNavigate();
    const { nombreItem } = useParams();
    const data = getItemsByName( nombreItem );

    useEffect(() => {
        if( data.length === 1 ){
            data.map( item => navigate(`/item/${ item.id }`) )
        }else if( data.length > 1 ){
            navigate(`/search/${ nombreItem }`)
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
