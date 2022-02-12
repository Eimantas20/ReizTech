import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countriesSlice';
import filterReducer from '../features/filterSlice';

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
        filters: filterReducer,
    },
})