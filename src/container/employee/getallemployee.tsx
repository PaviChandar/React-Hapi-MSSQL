import { Dispatch, Action } from "redux"

import GetAllEmployee from "../../components/employee/getallemployee"
import { deleteEmployee } from "../../redux/action/action"
import  {getAllEmployeeApi}   from "../../redux/action/logic/getall"

const GetAllEmployeeContainer = () => {

  const handleEmployee = (dispatch: Dispatch<Action>, setdata: (arg0: any) => void, userdata: any) => {
    console.log("inside handle emp :", userdata)    
    dispatch(getAllEmployeeApi)
    setdata(userdata)
  }

  const handleDelete = (dispatch: Dispatch<Action>, id: number, setSuccess: (arg0: boolean) => void) => {
    console.log("inside delete", id)
    dispatch(deleteEmployee(id))
    if(window.confirm("Are you sure that you want to delete the Employee?")) {
      setSuccess(true)
    }
  }

  return <GetAllEmployee handleEmployee={handleEmployee} handleDelete={handleDelete} />

}

export default GetAllEmployeeContainer