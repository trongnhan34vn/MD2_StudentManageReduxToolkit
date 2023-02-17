import React from 'react'
import { useDispatch } from 'react-redux'
import { listStudentsSlice } from './reducer/listStudentsSlice'
import { filtersSlice } from './reducer/filtersSlice'

export default function Student(props) {
    const { student, stt } = props
    const dispatch = useDispatch()
    const handleSubmit = (student, action) => {
        if (action === 'Seen') {
            dispatch(listStudentsSlice.actions.getSelectedStudent(student))
            dispatch(filtersSlice.actions.toggle({ status: true, action: 'SEEN' }))
        }
        if (action === 'Update') {
            dispatch(listStudentsSlice.actions.getSelectedStudent(student))
            dispatch(filtersSlice.actions.toggle({ status: true, action: 'UPDATE' }))
        }
        if (action === 'Delete') {
            dispatch(filtersSlice.actions.toggle({ status: true, action: 'DELETE' }))
            dispatch(listStudentsSlice.actions.deleteStudent(student))
        }
    }
    return (
        <tr>
            <td>{stt}</td>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.gender ? "Nam" : "Nữ"}</td>
            <td>
                <div className="template-demo">
                    <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                        onClick={() => handleSubmit(student, "Seen")}
                    >
                        Xem
                    </button>
                    <button
                        onClick={() => handleSubmit(student, "Update")}
                        type="button"
                        className="btn btn-warning btn-icon-text"
                    >
                        Sửa
                    </button>
                    <button
                        onClick={() => handleSubmit(student, "Delete")}
                        type="button"
                        className="btn btn-success btn-icon-text"
                    >
                        Xóa
                    </button>
                </div>
            </td>
        </tr>
    )
}
