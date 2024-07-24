import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponent.css';

export const CarouselComponent = () => {

    const altoImagen = '390px';

    return (
        <Carousel>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100 imagen-carousel"
                    src="../images/1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1>Objetivo</h1>
                    <p style={{ fontWeight: '400', fontSize: 25 }}>Entre todos podamos crear una gran base de datos critica, destacando lo bueno y lo malo de cada producto o servicio</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100 imagen-carousel"
                    src="../images/2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h1>¿Como?</h1>
                    <p style={{ fontWeight: '400', fontSize: 25 }}>Deja tu comentario y calificación sobre un producto que hayas comprado o hayas probado</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={5000}>
                <img
                    className="d-block w-100 imagen-carousel"
                    src="../images/3.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h1>Juntos hacemos la diferencia</h1>
                    <p style={{ fontWeight: '400', fontSize: 25 }}>
                        Los comentarios nos ayudaran a tomar la mejor decisión
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
