import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startloadingMaster } from "../store/auth";
import { Form } from "react-bootstrap";

export const SelectCountries = ({country, onInputChange, validacionPais, pageRegister}) => {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const table = "countries";
    const select = "id_country,name_country";
    const linkTo = "state_country";
    const equalTo = "1";
    const orderBy = "name_country";
    const orderMode = "ASC";

    const fetchData = async() => {
        const results = await dispatch( startloadingMaster( table, select, linkTo, equalTo, orderBy, orderMode ) );
        setData(results);
    }

    useEffect(() => {

        fetchData()
            // make sure to catch any error
            .catch(console.error);

    }, [])

    return (
        <>
            <Form.Select
                className={ validacionPais ? "mt-3 register-page-input-vacio" : pageRegister ? "mt-3" : "" }
                name="country"
                value={country}
                onChange={onInputChange}
            >
                <option value="">Elige una país</option>
                {
                    data.map((colum) => {
                        return <option 
                            key={ colum.id_country } 
                            value={ colum.id_country }
                        >
                            { colum.name_country }
                        </option>
                        
                    })
                }
            </Form.Select>
        </>
    )
}
