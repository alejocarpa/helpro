import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { startloadingMaster } from "../store/auth";

export const OptionCategories = ({categoria}) => {

    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const table = "categories";
    const select = "id_category,name_category";
    const linkTo = "state_category";
    const equalTo = "1";
    const orderBy = "name_category";
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
            <option value="">Elige una categoría</option>
            {
                data.map((colum) => {
                    return <option 
                        key={ colum.id_category } 
                        value={ colum.id_category }
                        // selected={ parseInt(categoria) === parseInt(colum.id_category) ? "on" : "" }
                    >
                        { colum.name_category }
                    </option>
                    
                })
            }
        </>
    )
}
