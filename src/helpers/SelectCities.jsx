import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getMasters } from "../store/helpro/thunks";

export const SelectCities = ({country, city, onInputChange}) => {

    const [data, setData] = useState([]);
    
    const master = "ciudad";
        
    const fetchData = async() => {

        const where = `pais=${ country }`;

        setData ( await getMasters( master, where ) );
    }

    useEffect(() => {

        fetchData()

    }, [country]);

    return (
        <>
            <Form.Select
                name="city"
                value={city}
                onChange={onInputChange}
            >
                <option value="">Elige una ciudad</option>
                {
                    data.map((colum) => (
                        <option key={ colum.id_city } value={ colum.id_city }>{ colum.name_city }</option>
                    ))
                }
            </Form.Select>
        </>
    )
}
