import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startloadingMaster } from "../store/auth";
import { Form } from "react-bootstrap";

export const SelectCities = ({country, city, onInputChange}) => {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    
    useEffect(() => {

        const table = "cities";
        const select = "id_city,name_city";
        const linkTo = "state_city,id_country_city";
        const equalTo = `1*|*${country}`;
        const orderBy = "name_city";
        const orderMode = "ASC";

        const fetchData = async() => {
            const results = await dispatch( startloadingMaster( table, select, linkTo, equalTo, orderBy, orderMode ) );
            setData(results);
        }

        fetchData()
            // make sure to catch any error
            .catch(console.error);

    }, [country])

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
