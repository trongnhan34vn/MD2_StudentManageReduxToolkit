import React from 'react'

export default function Student(props) {
    const { student , stt } = props
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
                    >
                        Xem
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                    >
                        Sửa
                    </button>
                    <button
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
