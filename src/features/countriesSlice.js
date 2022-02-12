import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countriesList: [],
    isPending: false,
    error: false,
    errorMsg: ''
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countriesList = action.payload;
            state.isPending = false;
        },
        setError: (state, action) => {
            state.errorMsg = action.payload;
            state.error = true;
            state.isPending = false;
        },
        isPending: (state) => {
            state.isPending = true;
        }
    }
})

export const { setCountries, setError, isPending } = countriesSlice.actions;

export default countriesSlice.reducer