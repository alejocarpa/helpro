import axios from "axios";
import { chekingCredentials, login, logout } from "./authSlice";
import { apikeyEndpoint, urlEndpoint } from "../../helpers/entorno";

export const startLoginWithEmailPassword = ({ email, password }) => {
    
    return async (dispatch) => {

        dispatch(chekingCredentials());

        const { ok, data, errorMessage } = await loginWithEmailPassword({ email, password });
        
        if( !ok ) return dispatch( logout( { errorMessage: "Usuario y/o contraseña invalido" } ) );
        
        const [ resultData ] = data?.results;
        const { id_user:uid, name_user:displayName, surname_user:displaySurname, token_user:token } = resultData

        localStorage.setItem('token', JSON.stringify( token ) );
        dispatch( login( { uid, displayName, email, displaySurname, token } ) );
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {
    const url = `${urlEndpoint}/auth/auth.php?usuario=${ email }&password=${ password }&login=1`;

    try{
        const { data } = await axios.get(url, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT } 
        });

        let errorMessage = '';
        let ok = true;
        if( data?.status === 404 ){
            errorMessage = data?.results;
            ok = false;
        }

        return {
            ok: ok,
            data: data,
            errorMessage: errorMessage
        }
    }catch(error){
        const errorResponse = error.message;

        if( errorResponse ){
            return {
                ok: false,
                data: [],
                errorMessage: errorResponse
            }
        }
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, name, surname, country }) => {

    return async( dispatch ) => {
        dispatch( chekingCredentials() );

        const { ok, data, errorMessage } = await registerUserWithEmailPassword({ email, password, name, surname, country });
        
        if( !ok ) return dispatch( logout( { errorMessage } ) );

        dispatch(startLoginWithEmailPassword({ email, password }));

        return {
            ok: ok
        }

    }

}

export const registerUserWithEmailPassword = async({ email, password, name, surname, country }) => {

    const url = `${urlEndpoint}/usuario/usuario`;

    const year = new Date().getFullYear();
    const month = new Date().getMonth()+1;
    const day = new Date().getDate();

    name = name.toLowerCase().replace(/\b[a-z]/g, function(letra) {
        return letra.toUpperCase();
    });

    surname = surname.toLowerCase().replace(/\b[a-z]/g, function(letra) {
        return letra.toUpperCase();
    });

    const form = {
        email_user: email,
        password_user: password,
        name_user: name,
        surname_user: surname,
        id_country_user: country,
        date_created_user: `${year}-${month}-${day}`
    }

    try{
        const { data } = await axios.post(url, form, { 
            headers: { Authorization: import.meta.env.VITE_API_KEY_ENDPOINT }
        });
        
        let errorMessage = '';
        let ok = true;
        if( data?.status === 404 || data?.results?.error ){

            let mensajeError = '';
            if( data?.results?.error ){

                mensajeError = 'Ya existe el usuario';
            }else{

                mensajeError = data?.results;
            }

            errorMessage = mensajeError;
            ok = false;
        }

        return {
            ok: ok,
            data: data,
            errorMessage: errorMessage
        }
    }catch(error){
        const errorResponse = error.message;

        if( errorResponse ){
            return {
                ok: false,
                data: [],
                errorMessage: errorResponse
            }
        }
    }
}

export const startLoginWithToken = ({ tokenUser }) => {
    
    return async (dispatch) => {

        dispatch(chekingCredentials());

        const { ok, data, errorMessage } = await loginWithToken({ tokenUser });

        if( !ok ) return dispatch( logout( { errorMessage } ) );

        const [ resultData ] = data?.results;
        const { id_user:uid, name_user:displayName, surname_user:displaySurname, token_user:token, email_user:email } = resultData

        localStorage.setItem('token', JSON.stringify( token ) );
        dispatch( login( { uid, displayName, email, displaySurname, token } ) );
    }
}

export const loginWithToken = async ({ tokenUser }) => {
    
    const url = `${urlEndpoint}/auth/auth?validar=1`;
    
    const form = {
        token_user: tokenUser
    }

    
    try{
        const { data } = await axios.get(url, { 
                headers: {
                    Authorization: import.meta.env.VITE_API_KEY_ENDPOINT ,
                    "token": tokenUser
                }
        });

        let errorMessage = '';
        let ok = true;
        if( data?.status === 404 ){
            errorMessage = data?.results;
            ok = false;
        }

        return {
            ok: ok,
            data: data,
            errorMessage: errorMessage
        }
    }catch(error){
        const errorResponse = error.message;

        if( errorResponse ){
            return {
                ok: false,
                data: [],
                errorMessage: errorResponse
            }
        }
    }
}

