import { useDispatch } from "react-redux"
import { Dispatch, Action } from "redux"

import GetAllEmployee from "../../components/employee/get-all-employee"
import { deleteEmployeeApi, getAllEmployeeApi } from "../../store/api/api-calls"
import getAllEmployeeLogic from "../../store/logic/get-all"
import * as types from "../../store/action/action-type"

// const GetAllEmployeeContainer = () => {
//   const dispatch = useDispatch()

//   // dispatch(getAllEmployeeApi())
//   // getAllEmployeeLogic()
//   // dispatch({ type: types.GET_ALL_EMPLOYEE})
//   dispatch(getAllEmployeeLogic)

//   const handleDelete = (dispatch: Dispatch<Action>, id: number, setSuccess: (arg0: boolean) => void) => {
//     console.log("inside delete", id)
//     dispatch(deleteEmployeeApi(id))
//     if(window.confirm("Are you sure that you want to delete the Employee?")) {
//       setSuccess(true)
//     }
//   }

//  return <GetAllEmployee handleDelete={handleDelete} />

// }

// export default GetAllEmployeeContainer


const employeeContainer = () => { 

  const dispatch = useDispatch() 

  const getAllEmployee = () => { 
    console.log("get employee"); 
    dispatch(getAllEmployeeLogic) 
  }

   const getSingleEmployee = (employeeId: number) => {
   dispatch({type: types.GET_EMPLOYEE, payload: employeeId}) } 

     return { getAllEmployee, getSingleEmployee } 
} 

export default employeeContainer
