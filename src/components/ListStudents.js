import React from 'react'
import Student from './Student'
import { useSelector } from 'react-redux'
import { remainStudents } from './redux/selector'

export default function ListStudents() {
    const students = useSelector(remainStudents)
    const elementStudent = students.map((student, index) => {
        return <Student key={student.id} student={student} stt={index + 1} />
    })
    return (
        <div className="card-body">
            <h3 className="card-title">Danh sách sinh viên</h3>
            <div className="table-responsive pt-3">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Mã sinh viên</th>
                            <th>Tên sinh viên</th>
                            <th>Tuổi</th>
                            <th>Giới tính</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elementStudent}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
