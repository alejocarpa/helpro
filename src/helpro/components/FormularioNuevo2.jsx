import './FormularioNuevo2.css';

export const FormularioNuevo2 = ({ activarFomulario1, activarFormulario2, clickBotonAtras }) => {

    const formularioActivo = () => {
        activarFomulario1(true);
        activarFormulario2(false);
        clickBotonAtras(true);
    }

    return (
        <div className="formulario-nuevo2-container">
            <div className="formulario-nuevo2-elements">
                FormularioNuevo2
                <button onClick={ formularioActivo }>atras</button>
            </div>
        </div>
    )
}
