import { Dispatch, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputField } from "../../interface/type";
import { deleteEmployee, getAllEmployee } from "../../redux/action/action";
import { store } from "../../redux/store/store";
import Navbar from "../user/Navbar";

const GetAllEmployee = () => {

  const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
  const [data, setdata] = useState<InputField>()
  const [success, setSuccess] = useState(false)
  const userdata  = useSelector((state: any) => state.employeeData.employees)
  console.log("userdata : ", userdata)
  const navigate = useNavigate()

  const handleEmployee = () => {
    dispatchStore(getAllEmployee())
    setdata(userdata)
  }

  const handleUpdate = (id: any) => {
    console.log("inside single emp", id)
    navigate(`/update/${id}`)
  }

  const handleDelete = (id: any) => {
    console.log("inside delete : ", id)
    dispatchStore(deleteEmployee(id))
    if(window.confirm("Are you sure that you want to delete the Employee?")) {
      setSuccess(true)
    }
  }

  useEffect(() => {
    if(success) {
      alert("Employee deleted successfully!")
    }
  }, [success])

  return(
      <div>
          <Navbar />
          <button onClick={handleEmployee}> Get all employees </button>
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
                        <button onClick={() => handleDelete(user.id)} >Delete employee</button>
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