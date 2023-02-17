import { createSlice } from "@reduxjs/toolkit";

export const listStudentsSlice = createSlice({
    name: 'listStudents',
    initialState: {
        listStudents: [
            {
                id: 'SV001',
                name: 'Nguyễn Văn A',
                age: 20,
                gender: true,
                birthDate: '09/03/1998',
                birthPlace: 'HN',
                address: 'Số 1 Trần Duy Hưng'
            },
            {
                id: 'SV002',
                name: 'Nguyễn Thị B',
                age: 17,
                gender: false,
                birthDate: '09/03/1998',
                birthPlace: 'ĐN',
                address: 'Số 1 Trần Duy Hưng'
            },
            {
                id: 'SV003',
                name: 'Nguyễn Văn C',
                age: 25,
                gender: true,
                birthDate: '09/03/1998',
                birthPlace: 'HCM',
                address: 'Số 1 Trần Duy Hưng'
            },
        ],
        selectedStudent: {}
    },
    reducers: {
        toggle: (state, action) => {
            if (action.payload.action === "ADD") {
                state.selectedStudent = null
            }
        },
        addStudents: (state, action) => {
            state.listStudents = [...state.listStudents, action.payload]
        },
        getSelectedStudent: (state, action) => {
            state.selectedStudent = action.payload
        },
        updateStudent: (state, action) => {
            for (let i = 0; i < state.listStudents.length; i++) {
                if (state.listStudents[i].id === action.payload.id) {
                    state.listStudents[i] = action.payload
                }
            }
        },
        deleteStudent: (state, action) => {
            state.listStudents = state.listStudents.filter(student => student.id !== action.payload.id)
        }
    }
})