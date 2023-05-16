import { useDispatch } from "react-redux"
import { Dispatch, Action } from "redux"

import GetAllEmployee from "../../components/employee/get-all-employee"
import { deleteEmployeeApi, getAllEmployeeApi } from "../../store/api/api-calls"
// import { deleteEmployee } from "../../redux/action/action"
// import  { getAllEmployeeApi }   from "../../redux/action/logic/get/getall"

const GetAllEmployeeContainer = () => {
  const dispatch = useDispatch()
  
  // const handleEmployee = (dispatch: any,setdata: (arg0: any) => void, userdata: any) => {
  //   console.log("inside handle emp :", userdata)    
  //   dispatch(getAllEmployeeApi)
  //   dispatch(getAllEmployeeApi())
  //   setdata(userdata)
  // }

  dispatch(getAllEmployeeApi())

  const handleDelete = (dispatch: Dispatch<Action>, id: number, setSuccess: (arg0: boolean) => void) => {
    console.log("inside delete", id)
    dispatch(deleteEmployeeApi(id))
    if(window.confirm("Are you sure that you want to delete the Employee?")) {
      setSuccess(true)
    }
  }

  return <GetAllEmployee 
  // handleEmployee={handleEmployee}
   handleDelete={handleDelete} />

}

export default GetAllEmployeeContainer
