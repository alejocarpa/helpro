import { productos } from "./productos";

export const getItemsByCategory = ( category = '' ) => {

    return productos.filter(item =>
        item.categoria === category
    );

}