import { createSlice } from "@reduxjs/toolkit"

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        sort: {
            sortBy: '',
            sortDir: ''
        },
        toggle: {
            status: false,
            action: ''
        }
    },
    reducers: {
        toggle: (state, aciton) => {
            state.toggle.status = !state.toggle.status
            state.toggle.action = aciton.payload.action
        },
        filtersSearch: (state, aciton) => {
            state.search = aciton.payload
        },
        filtersSort: (state, aciton) => {
            state.sort.sortBy = aciton.payload.sortBy
            state.sort.sortDir = aciton.payload.sortDir
        }
    }
})