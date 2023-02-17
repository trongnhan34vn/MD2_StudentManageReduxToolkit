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
            if (aciton.payload.action === 'ADD') {
                state.toggle.status = !state.toggle.status
                state.toggle.action = aciton.payload.action
            } else {
                state.toggle.status = true
                state.toggle.action = aciton.payload.action
            }
            if (aciton.payload.action === 'DELETE') {

                state.toggle.status = false
            }
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