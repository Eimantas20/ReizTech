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
            console.log(state)
            state.value.countriesList = action.payload;
            state.value.isPending = true;

        },
        setError: (state, action) => {
            state.value.errorMsg = action.payload;
            state.value.error = true;
            state.value.isPending = false;
        },
        isPending: (state) => {
            state.isPending = true;
        }
    }
})


export const { setCountries, setError, isPending } = countriesSlice.actions;

export default countriesSlice.reducer