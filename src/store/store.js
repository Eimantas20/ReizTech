import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from '../features/countriesSlice';

export const store = configureStore({
    reducer: {
        countries: countriesReducer,
    },
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
})