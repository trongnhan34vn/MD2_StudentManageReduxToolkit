import { configureStore } from "@reduxjs/toolkit";
import { listStudentsSlice } from "../reducer/listStudentsSlice";
import { filtersSlice } from "../reducer/filtersSlice";

const store = configureStore({
    reducer: {
        listStudents: listStudentsSlice.reducer,
        filters: filtersSlice.reducer
    }
})

export default store