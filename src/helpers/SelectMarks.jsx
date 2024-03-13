import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getMasters } from "../store/helpro/thunks";

export const SelectMarks = ({marca, categoria, onInputChange}) => {

    const [data, setData] = useState([]);

    const master = "marca";
        
    const fetchData = async() => {

        const where = `categoria=${ categoria }`;

        setData ( await getMasters( master, where ) );
    }

    useEffect(() => {

        fetchData();

    }, [categoria])

    return (
        <>
            <Form.Select
                name="marca"
                value={marca}
                onChange={onInputChange}
            >
                <option value="">Elige una marca</option>
                <option value="otra">Otra...</option>
                {
                    data.map((colum) => (
                        <option key={ colum.id_mark } value={ colum.id_mark }>{ colum.name_mark }</option>
                    ))
                }                
            </Form.Select>
        </>
    )
}
