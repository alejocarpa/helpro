import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { startloadingMaster } from "../store/auth";

export const OptionCities = ({country}) => {

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
            <option value="">Elige una ciudad</option>
            {
                data.map((colum) => (
                    <option key={ colum.id_city } value={ colum.id_city }>{ colum.name_city }</option>
                ))
            }
        </>
    )
}
