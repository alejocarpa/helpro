import { configureStore } from '@reduxjs/toolkit'
import { helproSlice } from './helpro';

export const store = configureStore({
    reducer: {
        helpro: helproSlice.reducer
    },
});