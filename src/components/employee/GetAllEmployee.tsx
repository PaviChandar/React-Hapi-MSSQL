import { FormEvent, useEffect, useState, MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { InputField } from "../../interface/employee.interface";
import Header from "../header/header";
import Navbar from "../shared/navbar";

interface Props extends MouseEvent<FormEvent> {
  handleEmployee: Function,
  handleDelete: Function
}

const GetAllEmployee = (props : any) => {

  const { t, i18n } = useTranslation()
  i18n.changeLanguage()

  const [data, setdata] = useState<InputField>()
  const [success, setSuccess] = useState(false)
  const userdata  = useSelector((state: any) => state.employeeData.employees)
  console.log("state data : ", userdata)
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
          <Header />
          <button onClick={() => props.handleEmployee(dispatch, setdata, userdata) }>{t("employee.getall")}</button>
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
                    // console.log("user datda : ", userdata)
                    return(
                     <div>
                       <div>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.age}</td>
                          <td>{user.city}</td>
                          <td>{user.salary}</td>
                          <button onClick={() => handleUpdate(user.id)}>{t("employee.update")}</button>
                          <button onClick={() => props.handleDelete(dispatch, user.id, setSuccess)} >{t("employee.delete")}</button>
                        </div> 
                     </div>
                    )
                  })
                }
              </tr>
            </tbody>
          </table>
          <button onClick={() => navigate('/create')} >{t("employee.add")}</button>
      </div>
  )
}

export default GetAllEmployee