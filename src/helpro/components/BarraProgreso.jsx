import './BarraProgreso.css';

export const BarraProgreso = ({ porcentaje }) => {
    return (
        <div className="barraprogreso-container">
            <div 
                className="barraprogreso-progreso"
                style={{ width: porcentaje }}
            >
            </div>
        </div>
    )
}
