//SLICE: FICHERO CON EL OBJETIVO DE INDICAR DE NUESTRO ESTADO

import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'valores',
    initialState: {
        companies: []
    },
    reducers:{
        getCompanies:(state, action) => {
            state.companies = [...state.companies, action.payload]
        }
    }
})

export const {getCompanies} = Slice.actions;