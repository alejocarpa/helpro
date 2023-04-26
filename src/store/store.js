import { configureStore } from '@reduxjs/toolkit'
import { helproSlice } from './helpro';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        helpro: helproSlice.reducer
    },
});