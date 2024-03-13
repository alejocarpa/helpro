import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import './BarraBusqueda.css';
import { ItemBusqueda } from "./";
import { getItemsByName } from "../../store/helpro/thunks";

export const BarraBusqueda = () => {

    const { elementClicked } = useSelector(state => state.helpro);

    const navigate = useNavigate();

    const [cardItem, setCardItem] = useState();
    const [idItem, setIdItem] = useState(0);
    const [countData, setCountData] = useState([]);
    const [nombreItem, setNombreItem] = useState('');
    const [tecla, setTecla] = useState('');

    const onSubmit = (event) => {
        
        event.preventDefault();
        navigate(`/helpro/loading/${nombreItem}/0`);
    }

    const handleKeyDown = (event) => {
        
        if (event.key === "ArrowDown") {

            if (idItem < countData) {
                const item = document.getElementById(`item${idItem}`);

                if (idItem > 0) {
                    const itemAnterior = document.getElementById(`item${idItem - 1}`);
                    itemAnterior.style.backgroundColor = "#FFFFFF";
                }

                item.style.backgroundColor = "#F1F1F1";

                const nombreItemSelected = item.attributes.aria_label.value;
                setIdItem(idItem + 1);
                setNombreItem(nombreItemSelected);

            }
        }

        if (event.key === "ArrowUp") {
            if (idItem > 0) {
                if (idItem > 1) {
                    const item = document.getElementById(`item${idItem - 2}`);
                    item.style.backgroundColor = "#F1F1F1";
                    const nombreItemSelected = item.attributes.aria_label.value;
                    setNombreItem(nombreItemSelected);
                }

                const itemAnterior = document.getElementById(`item${idItem - 1}`);
                itemAnterior.style.backgroundColor = "#FFFFFF";


                setIdItem(idItem - 1);

            }
        }

        setTecla(event.key);
    };

    const onInputChange = ({ target }) => {
        const { value } = target;
        setNombreItem(value);
    }

    const obtenerData = async() => {
        if (nombreItem !== "") {

            if (tecla !== "ArrowDown" && tecla !== "ArrowUp") {
                
                /*--------------------------------------------------------
                Se hace la peticion getItemsByName pasando tres argumentos
                el primero es el nombre del articulo, el segundo es limit de arranque
                y el tercero es offset del limite 
                --------------------------------------------------------*/
                const data = await getItemsByName( nombreItem, 0, 10 );

                setCardItem(<ItemBusqueda data={ data } />);
                setCountData(data.length);
                setIdItem(0);
            }

        } else {

            setCardItem(<ItemBusqueda data={[]} />);

        }
    }

    useEffect(() => {

        obtenerData();

    }, [nombreItem]);



    const divFiltroItem = document.getElementById("filtroItem");
    const inputSearchItem = document.getElementById("nombreItem");

    if (divFiltroItem) {

        const click = elementClicked;

        if (click === inputSearchItem.outerHTML) {
            divFiltroItem.style.display = "block"
        }

        if (divFiltroItem.style.display === "block" && click.substr(0,100) !== inputSearchItem.outerHTML.substr(0,100)) {
            divFiltroItem.style.display = "none";
        }
    }



    return (
        <>
            <form
                style={{ width: '100%' }}
                onSubmit={onSubmit}
            >
                <InputGroup>
                    <Form.Control
                        placeholder="Buscar producto, tienda, servicio, etc."
                        
                        type="search"
                        name="nombreItem"
                        id="nombreItem"
                        value={nombreItem}
                        autoComplete="off"
                        onKeyDown={handleKeyDown}
                        onChange={onInputChange}
                    />
                    <button className="boton-busqueda">
                        
                        <BsSearch style={{ fontSize: '20px' }} />
                        
                    </button>
                </InputGroup>
                <div
                    id="filtroItem"
                >
                    {cardItem}
                </div>
            </form>
        </>
    )
}

