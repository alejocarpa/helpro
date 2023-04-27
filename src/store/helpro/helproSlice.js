import { createSlice } from '@reduxjs/toolkit';

const nuevaCalificacion = JSON.parse( localStorage.getItem('nuevaCalificacion') );

export const helproSlice = createSlice({
    name: 'helpro',
    initialState: {
        guardandoNuevoProducto: false,
        elementClicked: '',
        urlArray: [],
        fotosNuevas: [ { fotoURL: '' }, { fotoURL: '' }, { fotoURL: '' }, { fotoURL: '' } ],
        nuevoProducto: {
            nombre: '',
            categoria: '', 
            tipo: '', 
            marca: '', 
            comentario: ''
        },
        nuevoComentario: [
            {
                idUser: '',
                nombreUsuario: '',
                comentario: '',
                fecha: ''
            }
        ],
        nuevaCalificacion
    },
    reducers: {
        validarGuardandoProducto: ( state ) => {
            state.guardandoNuevoProducto = true;
        },
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
            state.nuevoProducto = { ...state.nuevoProducto, ...action.payload, ImagenURL: state.fotosNuevas[0].fotoURL }
            localStorage.setItem('nuevoProducto', JSON.stringify( state.nuevoProducto ) );
        },
        agregandoNuevoComentario: ( state, action ) => {
            state.nuevoComentario[0] = { 
                ...state.nuevoComentario[0], 
                comentario: action.payload?.comentario,
                idUser: action.payload?.uid,
                nombreUsuario: action.payload?.displayName
            }
        },
        agregandoNuevaCalificacion: ( state, action ) => {
            state.nuevaCalificacion = { calificacion: action.payload?.calificacion }
            localStorage.setItem('nuevaCalificacion', JSON.stringify( state.nuevaCalificacion ) );
        },
        limpiarNuevoProducto: ( state, action ) => {
            state.guardandoNuevoProducto = false;
            state.elementClicked = '';
            state.urlArray = [];
            state.fotosNuevas = [ { fotoURL: '' }, { fotoURL: '' }, { fotoURL: '' }, { fotoURL: '' } ];
            state.nuevoProducto = {
                nombre: '',
                categoria: '', 
                tipo: '', 
                marca: '', 
                comentario: ''
            }
            state.nuevoComentario = [
                {
                    idUser: '',
                    nombreUsuario: '',
                    comentario: '',
                    calificacion: 1,
                    fecha: ''
                }
            ],
            state.nuevaCalificacion = { calificacion: null };
            localStorage.removeItem('nuevoProducto');
            localStorage.removeItem('nuevaCalificacion');
        },
    }
});


// Action creators are generated for each case reducer function
export const 
    { 
        clickingElement, 
        almacenarUrl, 
        agregandoFotosNuevas, 
        eliminandoFotosNuevas, 
        agregandoNuevoProducto, 
        agregandoNuevoComentario,
        agregandoNuevaCalificacion,
        limpiarNuevoProducto
    } = helproSlice.actions;