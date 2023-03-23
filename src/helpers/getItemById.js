import { productos } from "./productos";

export const getItemById = ( id = '' ) => {

    return productos.filter(
        item => item.id === id
    );

}