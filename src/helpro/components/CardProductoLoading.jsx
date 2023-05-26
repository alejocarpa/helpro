import { Placeholder } from 'react-bootstrap';
import './CardProductoLoading.css';

export const CardProductoLoading = () => {
    return (
        <>
            <div className="cardproduct-container">
                <div className="cardproduct-elements">
                    <div className="cardproduct-imagen">
                        <Placeholder animation="glow">
                            <Placeholder xs={12} />
                        </Placeholder>
                    </div>
                    <div className="cardproduct-detalle">
                        <div className="cardproduct-titulo">
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
