import { useEffect, useState } from "react";
import { startloadingMaster } from "../store/auth";
import { useDispatch } from "react-redux";
import { Form } from "react-bootstrap";

export const SelectMarks = ({marca, categoria, onInputChange}) => {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

        const table = "marks";
        const select = "id_mark,name_mark";
        const linkTo = "state_mark,id_category_mark";
        const equalTo = `1*|*${categoria}`;
        const orderBy = "name_mark";
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
                name="marca"
                value={marca}
                onChange={onInputChange}
            >
                <option value="">Elige una marca</option>
                {
                    data.map((colum) => (
                        <option key={ colum.id_mark } value={ colum.id_mark }>{ colum.name_mark }</option>
                    ))
                }
                <option value="otra">Otra...</option>
            </Form.Select>
        </>
    )
}
