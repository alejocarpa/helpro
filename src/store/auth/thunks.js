import axios from "axios";
import { chekingCredentials, login, logout } from "./authSlice";
import { apikeyEndpoint, urlEndpoint } from "../../helpers/entorno";

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {

        dispatch(chekingCredentials());

        const { ok, data, errorMessage } = await loginWithEmailPassword({ email, password });

        if( !ok ) return dispatch( logout( { errorMessage } ) );

        const [ resultData ] = data?.results;
        const { id_user:uid, name_user:displayName, surname_user:displaySurname, token_user:token } = resultData

        localStorage.setItem('token', JSON.stringify( token ) );
        dispatch( login( { uid, displayName, email, displaySurname, token } ) );
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {
    const url = `${urlEndpoint}/users?login=true&suffix=user`;

    const form = {
        email_user: email,
        password_user: password
    }

    try{
        const { data } = await axios.post(url, form, { 
                headers: {"Authorization": `${ apikeyEndpoint }`} 
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

    }

}

export const registerUserWithEmailPassword = async({ email, password, name, surname, country }) => {

    const url = `${urlEndpoint}/users?register=true&suffix=user`;

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
                headers: {"Authorization": `${ apikeyEndpoint }`} 
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
    const url = `${urlEndpoint}/users?loginToken=true&suffix=user`;

    const form = {
        token_user: tokenUser
    }

    
    try{
        const { data } = await axios.post(url, form, { 
                headers: {"Authorization": `${ apikeyEndpoint }`} 
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