import { Dispatch, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleDelete, handleEmployee } from "../../container/employee/getallemployee";

import { InputField } from "../../interface/employee.interface";
import { deleteEmployee, getAllEmployee } from "../../redux/action/action";
import { store } from "../../redux/store/store";
import Navbar from "../shared/navbar";

const GetAllEmployee = () => {

  const [data, setdata] = useState<InputField>()
  const [success, setSuccess] = useState(false)
  const userdata  = useSelector((state: any) => state.employeeData.employees)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleUpdate = (id: number) => {
    navigate(`/update/${id}`)
  }
  
  useEffect(() => {
    if(success) {
      alert("Employee deleted successfully!")
    }
  }, [success])

  return(
      <div>
          <Navbar />
          <button onClick={() => handleEmployee(dispatch, setdata, userdata)}> Get all employees </button>
          <table>
            <tbody>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Salary</th>
              </tr>
              <tr>
                {
                  userdata && userdata.map((user: any) => {
                    return(
                      <div>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.city}</td>
                        <td>{user.salary}</td>
                        <button onClick={() => handleUpdate(user.id)}>Update employee</button>
                        <button onClick={() => handleDelete(dispatch, user.id, setSuccess)} >Delete employee</button>
                      </div> 
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
          <button onClick={() => navigate('/create')} >Add Employee</button>
      </div>
  )
}

export default GetAllEmployee