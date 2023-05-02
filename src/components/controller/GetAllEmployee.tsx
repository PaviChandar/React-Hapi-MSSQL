import { Dispatch, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllEmployee } from "../../store/action/action";
import { store } from "../../store/store";
import { InputField } from "../shared/types/type";

const GetAllEmployee = () => {

  const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
  const [data, setdata] = useState<InputField>()
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

return(
    <div>
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
                    </div>
                  )
                })
              }
            </tr>
          </tbody>
        </table>
    </div>
)
}

export default GetAllEmployee