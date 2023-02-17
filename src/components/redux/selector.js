import { createSelector } from "@reduxjs/toolkit"

export const listStudentsSelector = (state => state.listStudents.listStudents)

export const toggleSelector = (state => state.filters.toggle)

export const filtersSearchSelector = (state => state.filters.search)

export const filtersSortSelector = (state => state.filters.sort)

export const selectedStudentSelector = (state => state.listStudents.selectedStudent)

export const remainStudents = createSelector(listStudentsSelector, filtersSearchSelector, filtersSortSelector, (listStudents, searchText, sortValue) => {
    // if (sortValue.sortBy === '') {
    //     return [...listStudents].sort((a, b) => (a.id.slice(-1) - b.id.slice(-1)))
    //        listStudents.sort((a, b) => (a.id.slice(-1) - b.id.slice(-1)))
    // }
    if (sortValue.sortBy === 'name')
        if (sortValue.sortDir === 'ASC') {
            return [...listStudents].sort((a, b) => (a.name > b.name) ? 1 : -1)
            // listStudents.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else {
            return [...listStudents].sort((a, b) => (a.name > b.name) ? -1 : 1)
            // listStudents.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }
    if (sortValue.sortBy === 'age') {
        if (sortValue.sortDir === 'ASC') {
            return [...listStudents].sort((a, b) => (a.age - b.age))
            // listStudents.sort((a, b) => (a.age - b.age))
        } else {
            return [...listStudents].sort((a, b) => (b.age - a.age))
            //    listStudents.sort((a, b) => (b.age - a.age))
        }
    }
    return listStudents.filter(student => student.name.toLowerCase().includes(searchText.toLowerCase()))
})

