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

        const urlTypes = `${urlEndpoint}/types?token=${token}&table=users&suffix=user`;

        const nameNewType = nuevoProducto.otroTipo.toLowerCase().replace(/\b[a-z]/g, function (letra) {
            return letra.toUpperCase();
        });

        const formTypes = {
            name_type: nameNewType,
            id_category_type: nuevoProducto.categoria,
            date_created_type: `${year}-${month}-${day}`,
            state_type: true
        }

        try {
            const { data } = await axios.post(urlTypes, formTypes, {
                headers: { "Authorization": `${apikeyEndpoint}` }
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

        const urlMarks = `${urlEndpoint}/marks?token=${token}&table=users&suffix=user`;

        const nameNewMark = nuevoProducto.otraMarca.toLowerCase().replace(/\b[a-z]/g, function (letra) {
            return letra.toUpperCase();
        });

        const formMarks = {
            name_mark: nameNewMark,
            id_category_mark: nuevoProducto.categoria,
            date_created_mark: `${year}-${month}-${day}`,
            state_mark: true
        }

        try {
            const { data } = await axios.post(urlMarks, formMarks, {
                headers: { "Authorization": `${apikeyEndpoint}` }
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

    const urlProducts = `${urlEndpoint}/products?token=${token}&table=users&suffix=user`;

    const nameNewProduct = nuevoProducto.nombre.toLowerCase().replace(/\b[a-z]/g, function (letra) {
        return letra.toUpperCase();
    });

    const formProducts = {
        name_product: nameNewProduct,
        image_product: '/'+totalImagenes[0]?.name,
        id_category_product: nuevoProducto.categoria,
        id_type_product: idType,
        id_mark_product: idMark,
        id_country_product: nuevoProducto.country,
        id_city_product: nuevoProducto.city,
        id_user_product: nuevoComentario[0].idUser,
        date_created_product: `${year}-${month}-${day}`,
        state_product: true
    }

    try {
        const { data } = await axios.post(urlProducts, formProducts, {
            headers: { "Authorization": `${apikeyEndpoint}` }
        });

        if (data?.status === 404 || data?.status === 400) {
            if (nuevoProducto?.tipo === 'otro') {
                const urlTypesDelete = `${urlEndpoint}/types?token=${token}&id=${idType}&nameId=id_type`;
                await axios.delete(urlTypesDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
            }
            if (nuevoProducto?.marca === 'otra') {
                const urlMarksDelete = `${urlEndpoint}/marks?token=${token}&id=${idMark}&nameId=id_mark`;
                await axios.delete(urlMarksDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
            }

            return {
                ok: false,
                data: [],
                errorMessage: data?.results
            }
        }

        idProduct = data?.results?.lastId;

    } catch (error) {
        if (error) {

            if (nuevoProducto?.tipo === 'otro') {
                const urlTypesDelete = `${urlEndpoint}/types?token=${token}&id=${idType}&nameId=id_type`;
                await axios.delete(urlTypesDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
            }
            if (nuevoProducto?.marca === 'otra') {
                const urlMarksDelete = `${urlEndpoint}/marks?token=${token}&id=${idMark}&nameId=id_mark`;
                await axios.delete(urlMarksDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
            }

            return {
                ok: false,
                data: [],
                errorMessage: error.message
            }
        }
    }

    const urlComments = `${urlEndpoint}/comments?token=${token}&table=users&suffix=user`;

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
            headers: { "Authorization": `${apikeyEndpoint}` }
        });

        if (data?.status === 404 || data?.status === 400) {
            if (nuevoProducto?.tipo === 'otro') {
                const urlTypesDelete = `${urlEndpoint}/types?token=${token}&id=${idType}&nameId=id_type`;
                await axios.delete(urlTypesDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
            }
            if (nuevoProducto?.marca === 'otra') {
                const urlMarksDelete = `${urlEndpoint}/marks?token=${token}&id=${idMark}&nameId=id_mark`;
                await axios.delete(urlMarksDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
            }
            const urlProductDelete = `${urlEndpoint}/products?token=${token}&id=${idProduct}&nameId=id_product`;
            await axios.delete(urlProductDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});

            return {
                ok: false,
                data: [],
                errorMessage: data?.results
            }
        }

        idComment = data?.results?.lastId;

    } catch (error) {
        if (error) {
            if (nuevoProducto?.tipo === 'otro') {
                const urlTypesDelete = `${urlEndpoint}/types?token=${token}&id=${idType}&nameId=id_type`;
                await axios.delete(urlTypesDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
            }
            if (nuevoProducto?.marca === 'otra') {
                const urlMarksDelete = `${urlEndpoint}/marks?token=${token}&id=${idMark}&nameId=id_mark`;
                await axios.delete(urlMarksDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
            }
            const urlProductDelete = `${urlEndpoint}/products?token=${token}&id=${idProduct}&nameId=id_product`;
            await axios.delete(urlProductDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});

            return {
                ok: false,
                data: [],
                errorMessage: error.message
            }
        }
    }

    const urlImages = `${urlEndpoint}/images?token=${token}&table=users&suffix=user`;

    for (let i = 0; i < totalImagenes.length; i++) {

        const formImages = {
            link_image: '/'+idProduct+'/'+totalImagenes[i]?.name,
            id_product_image: idProduct,
            date_created_image: `${year}-${month}-${day}`,
            state_image: true
        }
    
        try {
            const { data } = await axios.post(urlImages, formImages, {
                headers: { "Authorization": `${apikeyEndpoint}` }
            });
    
            if (data?.status === 404 || data?.status === 400) {
                if (nuevoProducto?.tipo === 'otro') {
                    const urlTypesDelete = `${urlEndpoint}/types?token=${token}&id=${idType}&nameId=id_type`;
                    await axios.delete(urlTypesDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
                }
                if (nuevoProducto?.marca === 'otra') {
                    const urlMarksDelete = `${urlEndpoint}/marks?token=${token}&id=${idMark}&nameId=id_mark`;
                    await axios.delete(urlMarksDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
                }
                const urlProductDelete = `${urlEndpoint}/products?token=${token}&id=${idProduct}&nameId=id_product`;
                await axios.delete(urlProductDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
                const urlCommentDelete = `${urlEndpoint}/comments?token=${token}&id=${idComment}&nameId=id_comment`;
                await axios.delete(urlCommentDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
                const urlImageDelete = `${urlEndpoint}/comments?token=${token}&id=${idImage}&nameId=id_image`;
                await axios.delete(urlImageDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});

                return {
                    ok: false,
                    data: [],
                    errorMessage: data?.results
                }
            }

            idImage = data?.results?.lastId;

            const urlImagesUpload = `${urlEndpoint}/types?uploadImages=true`;

            const formData = new FormData();
            formData.append('id_product', idProduct);
            formData.append('file', totalImagenes[i]);

            await axios.post(urlImagesUpload, formData, {
                headers: { "Authorization": `${apikeyEndpoint}` }
            });
    
        } catch (error) {
            if (error) {
                if (nuevoProducto?.tipo === 'otro') {
                    const urlTypesDelete = `${urlEndpoint}/types?token=${token}&id=${idType}&nameId=id_type`;
                    await axios.delete(urlTypesDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
                }
                if (nuevoProducto?.marca === 'otra') {
                    const urlMarksDelete = `${urlEndpoint}/marks?token=${token}&id=${idMark}&nameId=id_mark`;
                    await axios.delete(urlMarksDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
                }
                const urlProductDelete = `${urlEndpoint}/products?token=${token}&id=${idProduct}&nameId=id_product`;
                await axios.delete(urlProductDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
                const urlCommentDelete = `${urlEndpoint}/comments?token=${token}&id=${idComment}&nameId=id_comment`;
                await axios.delete(urlCommentDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});
                const urlImageDelete = `${urlEndpoint}/comments?token=${token}&id=${idImage}&nameId=id_image`;
                await axios.delete(urlImageDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});

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

    const urlComments = `${urlEndpoint}/comments?token=${token}&table=users&suffix=user`;

    const formComments = {
        text_comment: dataComment?.comentario,
        score_comment: nuevaCalificacion?.calificacion,
        id_user_comment: uid,
        id_product_comment: id_product,
        date_created_comment: `${year}-${month}-${day}`
    }

    try {
        const { data } = await axios.post(urlComments, formComments, {
            headers: { "Authorization": `${apikeyEndpoint}` }
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
            const urlCommentsDelete = `${urlEndpoint}/types?token=${token}&id=${idComment}&nameId=id_comment`;
            await axios.delete(urlCommentsDelete, { headers: { "Authorization": `${apikeyEndpoint}` }});

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

    const urlProducts = `${urlEndpoint}/products?token=${token}&table=users&suffix=user&updateProduct=true`;

    const formProducts = {
        id_product: id_product
    }

    try{

        const { data } = await axios.put(urlProducts, formProducts, {
            headers: { "Authorization": `${apikeyEndpoint}` }
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

export const getItemsByCategorys = async ( category = '', startAt = 0, endAt = 5 ) => {

    const url = `${urlEndpoint}/products?select=*&linkTo=id_category_product&equalTo=${category}&startAt=${startAt}&endAt=${endAt}&orderBy=score_product&orderMode=DESC`;

    try{

        const { data } = await axios.get(url, { 
            headers: {"Authorization": `${ apikeyEndpoint }`} 
        });

        return data.results;
    }catch(error){
        
        return [];
    }

}

export const getItemsByName = async ( name = '', startAt = 0, endAt = 10 ) => {

    const url = `${urlEndpoint}/relations?select=id_product,name_product,image_product,name_type,score_product,name_category&linkTo=name_product&equalTo=${name}&startAt=${startAt}&endAt=${endAt}&searchByName=true&rel=products,types,categories&type=product,type,category`;

    try{
        const { data } = await axios.get(url, { 
            headers: {"Authorization": `${ apikeyEndpoint }`} 
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

    const url = `${urlEndpoint}/relations?select=id_product,name_product,image_product,name_type,score_product,id_category_product,name_category,id_mark_product,name_mark,id_country_product,name_country,id_city_product,name_city&linkTo=id_product&equalTo=${id}&rel=products,types,categories,marks,countries,cities&type=product,type,category,mark,country,city`;

    try{
        const { data } = await axios.get(url, { 
            headers: {"Authorization": `${ apikeyEndpoint }`} 
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

    const url = `${urlEndpoint}/images?select=id_image,link_image&linkTo=id_product_image&equalTo=${id}&orderBy=id_image&orderMode=ASC`;

    try{
        const { data } = await axios.get(url, { 
            headers: {"Authorization": `${ apikeyEndpoint }`} 
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

export const getComentsById = async ( id = '', limit = 0, offset = 10 ) => {

    const url = `${urlEndpoint}/relations?select=score_comment,text_comment,date_updated_comment,date_created_comment,name_user,surname_user&linkTo=id_product_comment&equalTo=${id}&orderBy=date_updated_comment&orderMode=DESC&startAt=${limit}&endAt=${offset}&rel=comments,users&type=comment,user`;

    try{
        const { data } = await axios.get(url, { 
            headers: {"Authorization": `${ apikeyEndpoint }`} 
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