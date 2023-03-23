import { productos } from "./productos";

export const getItemsByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim();
    
    if ( name.length === 0 ) return [];

    return productos.filter(
        item => item.nombre.toLocaleLowerCase().includes( name ) 
    );

}