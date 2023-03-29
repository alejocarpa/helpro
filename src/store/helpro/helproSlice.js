import { createSlice } from '@reduxjs/toolkit';

export const helproSlice = createSlice({
    name: 'helpro',
    initialState: {
        elementClicked: '',
        urlArray: [],
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
    }
});


// Action creators are generated for each case reducer function
export const { clickingElement, almacenarUrl } = helproSlice.actions;