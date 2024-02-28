import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getMasters } from "../store/helpro/thunks";

export const SelectCountries = ({country, onInputChange, validacionPais, pageRegister}) => {

    const [data, setData] = useState([]);

    const master = "pais";

    const fetchData = async() => {
        
        setData( await getMasters( master ) );    
    }

    useEffect(() => {

        fetchData();

    }, []);

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
