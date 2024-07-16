import { Placeholder } from 'react-bootstrap';
import './CardProductoLoading.css';

export const CardProductoLoading = () => {
    return (
        <>
            <div className="cardproduct-container-loading">
                <div className="cardproduct-elements-loading">
                    <div className="cardproduct-imagen-loading">
                        <Placeholder animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                    </div>
                    <div className="cardproduct-detalle-loading">
                        <div className="cardproduct-titulo-loading">
                            <Placeholder animation="glow">
                                <Placeholder xs={6} />
                                <Placeholder xs={8} />
                            </Placeholder>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
