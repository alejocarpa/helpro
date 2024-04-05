import Carousel from 'react-bootstrap/Carousel';
import { urlEndpointImages } from '../../helpers';
import './CarruselFotos.css';

export const CarruselFotos = ({ fotos, indexImagen }) => {
    
    return (
        <Carousel
            interval={ null }
            controls={ true }
            indicators={ false }
            defaultActiveIndex={ indexImagen }
        >
            {
                fotos.length > 0 &&

                    fotos.map((foto, id) => {
                        const fotoURL = `${urlEndpointImages}${foto?.link_image}`;
                        return <Carousel.Item key={ id }>
                            <img
                                className="carrusel-fotos-img"
                                src={fotoURL}
                                alt={ id }
                            />
                        </Carousel.Item>
                    })
            }
        </Carousel>
    )
}
