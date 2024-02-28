import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getMasters } from "../store/helpro/thunks";

export const SelectCategories = ({categoria, onInputChange}) => {

    const [data, setData] = useState([]);

    const master = "categoria";

    const fetchData = async() => {
        
        setData( await getMasters( master ) );        
    }

    useEffect(() => {

        fetchData();

    }, []);    

    return (
        <>
            <Form.Select
                name="categoria"
                value={categoria}
                onChange={onInputChange}
            >
                <option value="">Elige una categoría</option>
                {
                    data.map((colum) => {
                        return <option 
                            key={ colum.id_category } 
                            value={ colum.id_category }
                        >
                            { colum.name_category }
                        </option>
                        
                    })
                }
            </Form.Select>
        </>
    )
}
