import axios from "axios";
import { respuestaGuardandoProducto, validarGuardandoProducto } from "./helproSlice";
import { apikeyEndpoint, urlEndpoint } from "../../helpers/entorno";

export const startSavingNewProduct = ({ nuevoProducto, nuevoComentario, nuevaCalificacion, totalImagenes, token }) => {
    return async (dispatch) => {
        dispatch(validarGuardandoProducto());

        const { ok, data, errorMessage } = await savingNewProduct({ nuevoProducto, nuevoComentario, nuevaCalificacion, totalImagenes, token });

        if (!ok) return dispatch(respuestaGuardandoProducto(errorMessage));

        dispatch(respuestaGuardandoProducto(data));

    }
}

export const savingNewProduct = async ({ nuevoProducto, nuevoComentario, nuevaCalificacion, totalImagenes, token }) => {

    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    let errorMessage = '';
    let ok = true;
    let idType = nuevoProducto?.tipo;
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

    const urlProducts = `${urlEndpoint}/products?token=${token}&table=users&suffix=user`;

    const nameNewProduct = nuevoProducto.nombre.toLowerCase().replace(/\b[a-z]/g, function (letra) {
        return letra.toUpperCase();
    });

    const formProducts = {
        name_product: nameNewProduct,
        id_category_product: nuevoProducto.categoria,
        id_type_product: idType,
        id_mark_product: '1',
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
        errorMessage: null
    }

}