import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getMasters } from "../store/helpro/thunks";

export const SelectType = ({categoria, tipo, onInputChange}) => {

    const [data, setData] = useState([]);

    const master = "tipo";
        
    const fetchData = async() => {

        const where = `categoria=${ categoria }`;

        setData ( await getMasters( master, where ) );
    }

    useEffect(() => {

        fetchData();

    }, [categoria]);

    return (
        <>
            <Form.Select
                name="tipo"
                value={tipo}
                onChange={onInputChange}
            >
                <option value="">Elige un tipo</option>
                <option value="otro">Otro...</option>
                {
                    data.map((colum) => (
                        <option key={ colum.id_type } value={ colum.id_type }>{ colum.name_type }</option>
                    ))
                }                
            </Form.Select>
        </>
    )
}
