import { useDispatch } from "react-redux"
import { Dispatch, Action } from "redux"

import GetAllEmployee from "../../components/employee/get-all-employee"
import { deleteEmployeeApi, getAllEmployeeApi } from "../../store/api/api-calls"
import { getAllEmployeeApiLogic } from "../../store/logic/get-all"
// import { deleteEmployee } from "../../store/action/action"
// import  { getAllEmployeeApi }   from "../../store/action/logic/get/getall"

const GetAllEmployeeContainer = () => {
  const dispatch = useDispatch()

  // dispatch(getAllEmployeeApi())
  dispatch(getAllEmployeeApiLogic)

  const handleDelete = (dispatch: Dispatch<Action>, id: number, setSuccess: (arg0: boolean) => void) => {
    console.log("inside delete", id)
    dispatch(deleteEmployeeApi(id))
    if(window.confirm("Are you sure that you want to delete the Employee?")) {
      setSuccess(true)
    }
  }

  return <GetAllEmployee handleDelete={handleDelete} />

}

export default GetAllEmployeeContainer
