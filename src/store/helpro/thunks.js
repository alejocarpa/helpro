import axios from "axios";
import { limpiarNuevoProducto, respuestaGuardandoProducto, validarGuardandoProducto } from "./helproSlice";
import { apikeyEndpoint, urlEndpoint } from "../../helpers/entorno";

export const startSavingNewProduct = ({ nuevoProducto, nuevoComentario, nuevaCalificacion, totalImagenes, token }) => {
    return async (dispatch) => {
        dispatch(validarGuardandoProducto());

        const { ok:estadoRespuesta, data, errorMessage:mensajeRespuesta } = await savingNewProduct({ nuevoProducto, nuevoComentario, nuevaCalificacion, totalImagenes, token });
        
        if (!estadoRespuesta){
            dispatch(respuestaGuardandoProducto({ mensajeRespuesta, estadoRespuesta }));

            return { mensajeRespuesta, estadoRespuesta };
        } 

        dispatch(respuestaGuardandoProducto({ mensajeRespuesta, estadoRespuesta }));
        dispatch(limpiarNuevoProducto());
        return { mensajeRespuesta, estadoRespuesta };

    }
}

export const savingNewProduct = async ({ nuevoProducto, nuevoComentario, nuevaCalificacion, totalImagenes, token }) => {

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    let idType = nuevoProducto?.tipo;
    let idMark = nuevoProducto?.marca;
    let idProduct = 0;
    let idComment = 0;
    let idImage = 0;

    if (nuevoProducto?.tipo === 'otro') {

        const urlTypes = `${urlEndpoint}/tipo/tipo.php`;

        const nameNewType = nuevoProducto.otroTipo[0].toUpperCase() + nuevoProducto.otroTipo.slice(1);

        const formTypes = {
            name_type: nameNewType,
            id_category_type: nuevoProducto.categoria,
            date_created_type: `${year}-${month}-${day}`,
            state_type: true
        }

        try {
            const { data } = await axios.post(urlTypes, formTypes, {
                headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
            });

            if (data?.status === 404 || data?.status === 400) {
                return {
                    ok: false,
                    data: [],
                    errorMessage: data?.results
                }
            }

            idType = data?.results?.lastId;

        } catch (error) {
            const errorResponse = error.message;

            if (errorResponse) {
                return {
                    ok: false,
                    data: [],
                    errorMessage: errorResponse
                }
            }
        }

    }

    if (nuevoProducto?.marca === 'otra') {

        const urlMarks = `${urlEndpoint}/marca/marca.php`;

        const nameNewMark = nuevoProducto.otraMarca[0].toUpperCase() + nuevoProducto.otraMarca.slice(1);

        const formMarks = {
            name_mark: nameNewMark,
            id_category_mark: nuevoProducto.categoria,
            date_created_mark: `${year}-${month}-${day}`,
            state_mark: true
        }

        try {
            const { data } = await axios.post(urlMarks, formMarks, {
                headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
            });

            if (data?.status === 404 || data?.status === 400) {
                return {
                    ok: false,
                    data: [],
                    errorMessage: data?.results
                }
            }

            idMark = data?.results?.lastId;

        } catch (error) {
            const errorResponse = error.message;

            if (errorResponse) {
                return {
                    ok: false,
                    data: [],
                    errorMessage: errorResponse
                }
            }
        }

    }

    const urlProducts = `${urlEndpoint}/producto/producto`;

    const nameNewProduct = nuevoProducto.nombre[0].toUpperCase() + nuevoProducto.nombre.slice(1);

    const formProducts = {
        name_product: nameNewProduct,
        image_product: '/'+totalImagenes[0]?.name,
        id_category_product: nuevoProducto.categoria,
        id_type_product: idType,
        id_mark_product: idMark,
        score_product: nuevaCalificacion.calificacion,
        id_country_product: nuevoProducto.country,
        id_city_product: nuevoProducto.city,
        id_user_product: nuevoComentario[0].idUser,
        date_created_product: `${year}-${month}-${day}`,
        state_product: true
    }

    try {
        const { data } = await axios.post(urlProducts, formProducts, {
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });

        if (data?.status === 404 || data?.status === 400 || data?.results?.error) {

            return {
                ok: false,
                data: [],
                errorMessage: data?.results?.error
            }
        }

        idProduct = data?.results?.lastId;

    } catch (error) {
        if (error) {

            return {
                ok: false,
                data: [],
                errorMessage: error.message
            }
        }
    }

    const urlComments = `${urlEndpoint}/comentario/comentario`;

    const formComments = {
        text_comment: nuevoComentario[0]?.comentario,
        score_comment: nuevaCalificacion.calificacion,
        id_product_comment: idProduct,
        id_user_comment: nuevoComentario[0].idUser,
        date_created_comment: `${year}-${month}-${day}`,
        state_comment: true
    }

    try {
        const { data } = await axios.post(urlComments, formComments, {
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });

        if (data?.status === 404 || data?.status === 400) {

            const urlProductDelete = `${urlEndpoint}//producto/producto?id_product=${ idProduct }`;
            await axios.delete(urlProductDelete, { 
                headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
            });

            return {
                ok: false,
                data: [],
                errorMessage: data?.results
            }
        }

        idComment = data?.results?.lastId;

    } catch (error) {
        if (error) {
            
            const urlProductDelete = `${urlEndpoint}//producto/producto?id_product=${ idProduct }`;
            await axios.delete(urlProductDelete, { 
                headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
            });

            return {
                ok: false,
                data: [],
                errorMessage: error.message
            }
        }
    }

    const urlImages = `${urlEndpoint}/imagen/imagen`;

    for (let i = 0; i < totalImagenes.length; i++) {

        const formImages = {
            link_image: '/'+idProduct+'/'+totalImagenes[i]?.name,
            id_product_image: idProduct,
            date_created_image: `${year}-${month}-${day}`,
            state_image: true
        }
    
        try {
            const { data } = await axios.post(urlImages, formImages, {
                headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
            });
    
            if (data?.status === 404 || data?.status === 400) {
                
                const urlProductDelete = `${urlEndpoint}//producto/producto?id_product=${ idProduct }`;
                await axios.delete(urlProductDelete, { 
                    headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
                });

                const urlCommentDelete = `${urlEndpoint}/comentario/comentario?id_comment=${ idComment }`;
                await axios.delete(urlCommentDelete, { 
                    headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
                });

                const urlImageDelete = `${urlEndpoint}/imagen/imagen.php?id_product=${ idProduct }`;
                await axios.delete(urlImageDelete, { 
                    headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
                });

                return {
                    ok: false,
                    data: [],
                    errorMessage: data?.results
                }
            }

            idImage = data?.results?.lastId;

            const urlImagesUpload = `${urlEndpoint}/imagen/imagen?uploadImages=true`;

            const formData = new FormData();
            formData.append('id_product', idProduct);
            formData.append('file', totalImagenes[i]);

            await axios.post(urlImagesUpload, formData, {
                headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
            });
    
        } catch (error) {
            if (error) {
                
                const urlProductDelete = `${urlEndpoint}//producto/producto?id_product=${ idProduct }`;
                await axios.delete(urlProductDelete, { 
                    headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
                });

                const urlCommentDelete = `${urlEndpoint}/comentario/comentario?id_comment=${ idComment }`;
                await axios.delete(urlCommentDelete, { 
                    headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
                });

                const urlImageDelete = `${urlEndpoint}/imagen/imagen.php?id_product=${ idProduct }`;
                await axios.delete(urlImageDelete, { 
                    headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
                });

                return {
                    ok: false,
                    data: [],
                    errorMessage: error.message
                }
            }
        }

    }

    return {
        ok: true,
        data: "Se creo el producto correctamente",
        errorMessage: "Se creo el producto correctamente"
    }

}

export const startSavingNewComment = ({ id_product, uid, nuevoComentario, nuevaCalificacion, token }) => {
    return async (dispatch) => {
        dispatch(validarGuardandoProducto());

        const { ok:estadoRespuesta, errorMessage:mensajeRespuesta } = await savingNewComment({ id_product, uid, nuevoComentario, nuevaCalificacion, token });

        if (!estadoRespuesta){
            dispatch(respuestaGuardandoProducto({ mensajeRespuesta, estadoRespuesta }));

            return { mensajeRespuesta, estadoRespuesta };
        }

        dispatch(respuestaGuardandoProducto({ mensajeRespuesta, estadoRespuesta }));
        dispatch(limpiarNuevoProducto());
        return { mensajeRespuesta, estadoRespuesta };

    }
}

export const savingNewComment = async ({ id_product, uid, nuevoComentario, nuevaCalificacion, token }) => {
    
    const [dataComment] = nuevoComentario;
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    const urlComments = `${urlEndpoint}/comentario/comentario`;

    const formComments = {
        text_comment: dataComment?.comentario,
        score_comment: nuevaCalificacion?.calificacion,
        id_user_comment: uid,
        id_product_comment: id_product,
        date_created_comment: `${year}-${month}-${day}`
    }

    try {
        const { data } = await axios.post(urlComments, formComments, {
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });
        
        if (data?.status === 404 || data?.status === 400) {
            return {
                ok: false,
                data: [],
                errorMessage: data?.results
            }
        }

        const idComment = data?.results?.lastId;

        const { ok:estadoRespuesta, errorMessage:mensajeRespuesta } = await updatingProduct({ id_product, token });

        if(!estadoRespuesta){

            const urlCommentDelete = `${urlEndpoint}/comentario/comentario?id_comment=${ idComment }`;
            await axios.delete(urlCommentDelete, { 
                headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
            });

            return {
                ok: false,
                data: [],
                errorMessage: mensajeRespuesta
            }
        }

        return {
            ok: true,
            data: "Se guardo el comentario",
            errorMessage: "Se guardo el comentario"
        }

    } catch (error) {
        const errorResponse = error.message;

        if (errorResponse) {
            return {
                ok: false,
                data: [],
                errorMessage: errorResponse
            }
        }
    }

}

export const updatingProduct = async({ id_product, token }) => {

    const urlProducts = `${urlEndpoint}/producto/producto`;

    const formProducts = {
        id_product: id_product
    }

    try{

        const { data } = await axios.put(urlProducts, formProducts, {
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });
        
        if (data?.status === 404 || data?.status === 400) {
            return {
                ok: false,
                data: [],
                errorMessage: data?.results
            }
        }

        return {
            ok: true,
            data: "Se Actualizo el producto",
            errorMessage: "Se Actualizo el producto"
        }

    }catch(error){
        return {
            ok: false,
            data: [],
            errorMessage: data?.results
        }
    }

}

export const startUpdatingComment = ({ id_product, nuevoComentario, nuevaCalificacion, token, id_comment }) => {

    return async (dispatch) => {
        dispatch(validarGuardandoProducto());

        const { ok:estadoRespuesta, errorMessage:mensajeRespuesta } = await updatingComment({ id_product, nuevoComentario, nuevaCalificacion, token, id_comment });

        if (!estadoRespuesta){
            dispatch(respuestaGuardandoProducto({ mensajeRespuesta, estadoRespuesta }));

            return { mensajeRespuesta, estadoRespuesta };
        }

        dispatch(respuestaGuardandoProducto({ mensajeRespuesta, estadoRespuesta }));
        dispatch(limpiarNuevoProducto());
        return { mensajeRespuesta, estadoRespuesta };

    }
}

export const updatingComment = async ({ id_product, nuevoComentario, nuevaCalificacion, token, id_comment }) => {

    const [dataComment] = nuevoComentario;
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();

    const urlComments = `${urlEndpoint}/comentario/comentario`;
    
    const formComments = {
        text_comment: dataComment?.comentario,
        score_comment: nuevaCalificacion?.calificacion,
        id_comment: id_comment 
    }

    try {
        const { data } = await axios.put(urlComments, formComments, {
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });
        
        if (data?.status === 404 || data?.status === 400) {
            return {
                ok: false,
                data: [],
                errorMessage: data?.results
            }
        }

        const idComment = data?.results?.lastId;

        const { ok:estadoRespuesta, errorMessage:mensajeRespuesta } = await updatingProduct({ id_product, token });

        if(!estadoRespuesta){

            const urlCommentDelete = `${urlEndpoint}/comentario/comentario?id_comment=${ idComment }`;
            await axios.delete(urlCommentDelete, { 
                headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
            });

            return {
                ok: false,
                data: [],
                errorMessage: mensajeRespuesta
            }
        }

        return {
            ok: true,
            data: "Se actualizo el comentario",
            errorMessage: "Se actualizo el comentario"
        }

    } catch (error) {
        const errorResponse = error.message;

        if (errorResponse) {
            return {
                ok: false,
                data: [],
                errorMessage: errorResponse
            }
        }
    }
}

export const getItemsByCategorys = async ( category = '', startAt = 0, endAt = 5 ) => {
    
    //const url = `${urlEndpoint}/products?select=*&linkTo=id_category_product&equalTo=${category}&startAt=${startAt}&endAt=${endAt}&orderBy=score_product&orderMode=DESC`;
    const url = `${urlEndpoint}/producto/producto?categoria=${ category }&limit=${ endAt }&offset=${ startAt }`;

    try{

        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });

        return data.results;
    }catch(error){
        
        return [];
    }

}

export const getItemsByName = async ( name = '', startAt = 0, endAt = 10 ) => {

    //const url = `${urlEndpoint}/relations?select=id_product,name_product,image_product,name_type,score_product,name_category&linkTo=name_product&equalTo=${name}&startAt=${startAt}&endAt=${endAt}&searchByName=true&rel=products,types,categories&type=product,type,category`;
    const url = `${urlEndpoint}/producto/producto?nombre=${ name }&limit=${ endAt }&offset=${ startAt }`;
    
    try{
        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT } 
        });
        if(data.status === 200){
            return data.results;
        }else{
            return [];
        }
    }catch(error){
        return [];
    }

}

export const getItemById = async ( id = '' ) => {

    //const url = `${urlEndpoint}/relations?select=id_product,name_product,image_product,name_type,score_product,id_category_product,name_category,id_mark_product,name_mark,id_country_product,name_country,id_city_product,name_city&linkTo=id_product&equalTo=${id}&rel=products,types,categories,marks,countries,cities&type=product,type,category,mark,country,city`;
    const url = `${urlEndpoint}/producto/producto?producto=${ id }`;

    try{
        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT } 
        });

        if(data.status === 200){
            return data.results;
        }else{
            return [];
        }
    }catch(error){
        return [];
    }

}

export const getFotosById = async ( id = '' ) => {

    //const url = `${urlEndpoint}/images?select=id_image,link_image&linkTo=id_product_image&equalTo=${id}&orderBy=id_image&orderMode=ASC`;
    const url = `${urlEndpoint}/imagen/imagen?producto=${ id }`;

    try{
        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });

        if(data.status === 200){
            return data.results;
        }else{
            return [];
        }
    }catch(error){
        return [];
    }

}

export const getComentsById = async ( id = '', offset = 0, limit = 10, score = '', user = '' ) => {
    
    if(score > 0){
        score = score;
    }else{
        score = '';
    }

    //const url = `${urlEndpoint}/relations?select=score_comment,text_comment,date_updated_comment,date_created_comment,name_user,surname_user&linkTo=id_product_comment${selectScore}&equalTo=${id}${filtroScore}&orderBy=date_updated_comment&orderMode=DESC&startAt=${limit}&endAt=${offset}&rel=comments,users&type=comment,user`;
    const url = `${urlEndpoint}/comentario/comentario?producto=${ id }&puntuacion=${ score }&usuario=${ user }&limit=${ limit }&offset=${ offset }`;
    
    try{
        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });

        if(data.status === 200){
            return data.results;
        }else{
            return [];
        }
    }catch(error){
        return [];
    }

}

export const getTotalComments = async ( id = '' ) => {

    //const url = `${urlEndpoint}/comments?select=count(*) as total&linkTo=id_product_comment&equalTo=${id}&noValidate=true`;
    const url = `${urlEndpoint}/comentario/comentario?producto=${ id }`;

    try{

        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT } 
        });

        return [ data.total ];
    }catch(error){
        
        return [];
    }

}

export const getGradePercentage = async ( score = 0, id = '', totalComments ) => {
    
    //const url = `${urlEndpoint}/comments?select=*&linkTo=id_product_comment,score_comment&equalTo=${id}*|*${score}&percentageScore=true`;
    const url = `${urlEndpoint}/comentario/comentario?producto=${ id }&puntuacion=${ score }`;

    try{

        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });

        let totalNumeroCalificacion = 0;
        if (data?.status === 200) {

            totalNumeroCalificacion = data.total
        }
        
        return (totalNumeroCalificacion*100)/totalComments;
    }catch(error){
        
        return 0;
    }

}

export const getMasters = async( master, where ) => {

    const url = `${urlEndpoint}/${ master }/${ master }?${ where }`;

    try{
        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT } 
        });
        
        if(data.status === 200){
            return data.results;
        }else{
            return [];
        }
    }catch(error){
        return [];
    }
}