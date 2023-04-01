import './BarraEtapas.css';

export const BarraEtapas = ({ activarFomulario1, activarFormulario2, activarFormulario3, clickBotonAtras, completoFormulario1, completoFormulario2 }) => {

    const formularioActivo1 = () => {
        activarFomulario1(true);
        activarFormulario2(false);
        activarFormulario3(false);
        clickBotonAtras(true);
    }

    const formularioActivo2 = () => {
        activarFomulario1(false);
        activarFormulario2(true);
        activarFormulario3(false);
        clickBotonAtras(true);
    }

    const funcionVacia = () => {}

    return (
        <div className="barra-etapas-container">
            <div className="barra-etapas-elements">

                <div className="barra-etapas-imagen-superior">
                    <div 
                        className="barra-etapas-superior-imagen" 
                        style={{ 
                            backgroundColor: completoFormulario1 ? '#E1DCEE' : 'transparent',
                            cursor: completoFormulario1 ? 'pointer' : 'auto'
                        }}
                        onClick = { completoFormulario1 ? formularioActivo1 : funcionVacia }
                    >
                        <img 
                            src='/images/etapa-datos.png' 
                            alt="element-category"
                            width="35"
                            height="35"
                        />
                    </div>
                    <div className="barra-etapas-superior-linea">
                        
                    </div>
                    <div className="barra-etapas-superior-texto">
                        Datos
                    </div>
                </div>

                <div className="barra-etapas-imagen-inferior">
                    <div className="barra-etapas-inferior-texto">
                        Fotos
                    </div>
                    <div className="barra-etapas-inferior-linea">
                        
                    </div>
                    <div 
                        className="barra-etapas-inferior-imagen" 
                        style={{ 
                            backgroundColor: completoFormulario2 ? '#E1DCEE' : 'transparent',
                            cursor: completoFormulario2 ? 'pointer' : 'auto'
                        }}
                        onClick = { completoFormulario2 ? formularioActivo2 : funcionVacia }
                    >
                        <img 
                            src='/images/etapa-fotos.png' 
                            alt="element-category"
                            width="40"
                            height="40"
                        />
                    </div>
                </div>

                <div className="barra-etapas-imagen-superior">
                    <div className="barra-etapas-superior-imagen">
                        <img 
                            src='/images/etapa-calificacion.png' 
                            alt="element-category"
                            width="30"
                            height="30"
                        />
                    </div>
                    <div className="barra-etapas-superior-linea">
                        
                    </div>
                    <div className="barra-etapas-superior-texto">
                        Calificacion
                    </div>
                </div>

                <div className="barra-etapas-imagen-inferior">
                    <div className="barra-etapas-inferior-texto">
                        Vista
                    </div>
                    <div className="barra-etapas-inferior-linea">
                        
                    </div>
                    <div className="barra-etapas-inferior-imagen">
                        <img 
                            src='/images/etapa-vista.png' 
                            alt="element-category"
                            width="30"
                            height="30"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
