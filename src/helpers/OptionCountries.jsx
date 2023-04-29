import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { startloadingMaster } from "../store/auth";

export const OptionCountries = () => {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {

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

        fetchData()
            // make sure to catch any error
            .catch(console.error);

    }, [])
    

    return (
        <>
            <option value="">Elige un pais</option>
            {
                data.map((colum) => (
                    <option key={ colum.id_country } value={ colum.id_country }>{ colum.name_country }</option>
                ))
            }
        </>
    )
}
