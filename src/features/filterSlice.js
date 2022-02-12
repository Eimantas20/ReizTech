import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alphabet: '',
    oceaniaRegion: false,
    smallerThanLT: false,
}

export const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers: {
        setAlphabet: (state, action) => {
            state.alphabet = action.payload;
        },
        setOceaniaRegion: (state) => {
            state.oceaniaRegion = !state.oceaniaRegion
        },
        setSmallerThanLT: (state) => {
            state.smallerThanLT = !state.smallerThanLT
        }
    }
})

export const { setAlphabet, setOceaniaRegion, setSmallerThanLT } = filterSlice.actions;

export default filterSlice.reducer;