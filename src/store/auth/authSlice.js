import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        uid: null,
        email: null,
        displayName: null,
        displaySurname: null,
        photoURL: null,
        errorMessage: null,
        token: null
    },
    reducers: {
        login: ( state, { payload } ) => {
            state.status= 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.displaySurname = payload.displaySurname;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
            state.token = payload.token;
        },
        logout: ( state, { payload } ) => {
            state.status= 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.displaySurname = null;
            state.photoURL = null;
            state.errorMessage = payload?.errorMessage;
            state.token = null;
            localStorage.setItem('token', JSON.stringify( null ) );
        },
        chekingCredentials: ( state ) => {
            state.status = 'checking';
        },

    }
});


// Action creators are generated for each case reducer function
export const { login, logout, chekingCredentials } = authSlice.actions;