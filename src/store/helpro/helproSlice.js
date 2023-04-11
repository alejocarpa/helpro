import { createSlice } from '@reduxjs/toolkit';

const nuevoProducto = JSON.parse( localStorage.getItem('nuevoProducto') );

export const helproSlice = createSlice({
    name: 'helpro',
    initialState: {
        guardandoNuevoProducto: false,
        elementClicked: '',
        urlArray: [],
        fotosNuevas: [ { fotoURL: '' }, { fotoURL: '' }, { fotoURL: '' }, { fotoURL: '' } ],
        nuevoProducto
    },
    reducers: {
        clickingElement: ( state, action ) => {
            state.elementClicked = action.payload;
        },
        almacenarUrl: ( state, action ) => {
            if( state.urlArray.length >= 0 && state.urlArray.length < 10){
                state.urlArray.push(action.payload);
            }else{
                state.urlArray.shift();
                state.urlArray.push(action.payload);
            }
        },
        agregandoFotosNuevas: ( state, action ) => {
            state.fotosNuevas[action.payload.posicion] = { fotoURL:  action.payload.fotoURL }
        },
        eliminandoFotosNuevas: ( state, action ) => {
            const nuevoArreglo = state.fotosNuevas.filter( (foto, index) => index !== action.payload.posicion);

            state.fotosNuevas = nuevoArreglo;
            state.fotosNuevas.push( {fotoURL: ''} );
        },
        agregandoNuevoProducto: ( state, action ) => {
            state.nuevoProducto = { ...action.payload, ImagenURL: state.fotosNuevas[0].fotoURL, calificacion: action.payload?.calificacion }
            localStorage.setItem('nuevoProducto', JSON.stringify( state.nuevoProducto ) );
        },
    }
});


// Action creators are generated for each case reducer function
export const { clickingElement, almacenarUrl, agregandoFotosNuevas, eliminandoFotosNuevas, agregandoNuevoProducto } = helproSlice.actions;