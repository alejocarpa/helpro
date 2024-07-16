import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { getMasters } from "../store/helpro/thunks";

export const SelectCampus = ({campus, onInputChange, validacionSede, pageRegister}) => {

    const [data, setData] = useState([]);

    const master = "sede";

    const fetchData = async() => {
        
        setData( await getMasters( master ) );    
    }

    useEffect(() => {

        fetchData();

    }, []);

    return (
        <>
            <Form.Select
                className={ validacionSede ? "mt-3 register-page-input-vacio" : pageRegister ? "mt-3" : "" }
                name="campus"
                value={campus}
                onChange={onInputChange}
            >
                <option value="">Elige una sede</option>
                {
                    data.map((colum) => {
                        return <option 
                            key={ colum.id_campus } 
                            value={ colum.id_campus }
                        >
                            { colum.name_campus }
                        </option>
                        
                    })
                }
            </Form.Select>
        </>
    )
}
