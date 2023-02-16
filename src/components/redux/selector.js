import { createSelector } from "@reduxjs/toolkit"

export const listStudentsSelector = (state => state.listStudents.listStudents)

export const toggleSelector = (state => state.filters.toggle)

export const filtersSearchSelector = (state => state.filters.search)

export const filtersSortSelector = (state => state.filters.sort)

export const remainStudents = createSelector(listStudentsSelector, filtersSearchSelector, filtersSortSelector, (listStudents, searchText, sortValue) => {
    if (sortValue.sortBy === '') {
        listStudents.sort((a, b) => (a.id.slice(-1) - b.id.slice(-1)))
    }
    if (sortValue.sortBy === 'name')
        if (sortValue.sortDir === 'ASC') {
            listStudents.sort((a, b) => (a.name > b.name) ? 1 : -1)
        } else {
            listStudents.sort((a, b) => (a.name > b.name) ? -1 : 1)
        }
    if(sortValue.sortBy === 'age') {
        if (sortValue.sortDir === 'ASC') {
            listStudents.sort((a, b) => (a.age - b.age))
        } else {
            listStudents.sort((a, b) => (b.age - a.age))
        }
    }
    return listStudents.filter(student => student.name.toLowerCase().includes(searchText.toLowerCase()))
})

