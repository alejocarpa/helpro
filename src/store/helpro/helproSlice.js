import { createSlice } from '@reduxjs/toolkit';

export const helproSlice = createSlice({
    name: 'helpro',
    initialState: {
        elementClicked: ''
    },
    reducers: {
        clickingElement: ( state, action ) => {
            state.elementClicked = action.payload;
        },
    }
});


// Action creators are generated for each case reducer function
export const { clickingElement } = helproSlice.actions;