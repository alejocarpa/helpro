import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { startloadingMaster } from "../store/auth";
import { Form } from "react-bootstrap";

export const SelectType = ({categoria, tipo, onInputChange}) => {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

        const table = "types";
        const select = "id_type,name_type";
        const linkTo = "state_type,id_category_type";
        const equalTo = `1*|*${categoria}`;
        const orderBy = "name_type";
        const orderMode = "ASC";

        const fetchData = async() => {
            const results = await dispatch( startloadingMaster( table, select, linkTo, equalTo, orderBy, orderMode ) );
            setData(results);
        }

        fetchData()
            // make sure to catch any error
            .catch(console.error);

    }, [categoria])

    return (
        <>
            <Form.Select
                name="tipo"
                value={tipo}
                onChange={onInputChange}
            >
                <option value="">Elige un tipo</option>
                {
                    data.map((colum) => (
                        <option key={ colum.id_type } value={ colum.id_type }>{ colum.name_type }</option>
                    ))
                }
                <option value="otro">Otro...</option>
            </Form.Select>
        </>
    )
}
