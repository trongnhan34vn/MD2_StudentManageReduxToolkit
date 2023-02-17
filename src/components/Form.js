import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remainStudents, selectedStudentSelector, toggleSelector } from './redux/selector'
import { listStudentsSlice } from './reducer/listStudentsSlice'

export default function Form() {
    const selectedStudent = useSelector(selectedStudentSelector)
    useEffect(() => {
        (selectedStudent) && setInputValue(selectedStudent)
    }, [selectedStudent])
    const students = useSelector(remainStudents)
    const toggle = useSelector(toggleSelector)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(
        {
            id: "",
            name: "",
            age: "",
            gender: true,
            birthDate: "",
            birthPlace: "",
            address: "",
        }
    )
    const handleChange = (e) => {
        let key = e.target.name
        let value = e.target.value
        setInputValue({ ...inputValue, [key]: value })
    }
    const validate = () => {
        let checkValidate = false
        if (inputValue.id.trim() === "") {
            checkValidate = false;
            alert("Please enter the id student!")
            return false
        } else {
            let checkExist = false
            for (let i = 0; i < students.length; i++) {
                if (inputValue.id.trim() === students[i].id) {
                    checkExist = true;
                    break;
                }
            }
            if (checkExist) {
                checkValidate = false;
                alert("This id is already exists! Please try another!")
                return false
            } else {
                checkValidate = true
            }
            if (inputValue.name.trim() === "") {
                checkValidate = false;
                alert("Please enter the name student!")
                return false
            } else {
                checkValidate = true
            }
            if (inputValue.age.toString().trim() === "") {
                checkValidate = false;
                alert("Please enter the age student!")
                return false
            } else {
                checkValidate = true
            }
            if (checkValidate) {
                return true
            } else {
                return false
            }
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (toggle.action === "ADD") {
            if (validate()) {
                dispatch(listStudentsSlice.actions.addStudents(inputValue))
            }
        } else {
            dispatch(listStudentsSlice.actions.updateStudent(inputValue))
        }
    }
    return (
        <div className="col-5 grid-margin">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">Thông tin sinh viên</h3>
                    <form className="form-sample">
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                            <div className="col-sm-9">
                                <input disabled={(toggle.action === "SEEN" || toggle.action === "UPDATE" ? true : false)} onChange={handleChange} name='id' value={inputValue.id} type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                            <div className="col-sm-9">
                                <input disabled={(toggle.action === "SEEN" ? true : false)} onChange={handleChange} name='name' value={inputValue.name} type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Tuổi</label>
                            <div className="col-sm-9">
                                <input disabled={(toggle.action === "SEEN" ? true : false)} onChange={handleChange} name='age' value={inputValue.age} type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Giới tính</label>
                            <div className="col-sm-9">
                                <select disabled={(toggle.action === "SEEN" ? true : false)} onChange={handleChange} name='gender' value={inputValue.gender} className="form-control">
                                    <option value={true}>Nam</option>
                                    <option value={false}>Nữ</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Ngày sinh</label>
                            <div className="col-sm-9">
                                <input disabled={(toggle.action === "SEEN" ? true : false)} onChange={handleChange} name='birthDate' value={inputValue.birthDate} className="form-control" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Nơi sinh</label>
                            <div className="col-sm-9">
                                <select disabled={(toggle.action === "SEEN" ? true : false)} onChange={handleChange} name='birthPlace' value={inputValue.birthPlace} className="form-control">
                                    <option value={"HN"}>Hà Nội</option>
                                    <option value={"HCM"}>TP. Hồ Chí Minh</option>
                                    <option value={"ĐN"}>Đà Nẵng</option>
                                    <option value={"QN"}>Quảng Ninh</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label">Địa chỉ</label>
                            <div className="col-sm-9">
                                <textarea disabled={(toggle.action === "SEEN" ? true : false)} onChange={handleChange} name='address' value={inputValue.address} className="form-control" />
                            </div>
                        </div>
                        <button disabled={(toggle.action === "SEEN" ? true : false)} onClick={handleSubmit} type="submit" className="btn btn-primary me-2">
                            {toggle.action}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
