import './BarraProgreso.css';

export const BarraProgreso = ({ porcentaje }) => {
    return (
        <div className="barraprogreso-container"> 
            <div 
                className="animate__animated animate__zoomInLeft barraprogreso-progreso"
                style={{ width: porcentaje }}
            >
            </div>
        </div>
    )
}
