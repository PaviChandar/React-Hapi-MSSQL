import { Dispatch, Action } from "redux"

import { deleteEmployee, getAllEmployee } from "../../redux/action/action"
import { addHandler } from "./addemployee"
// import getAllEmployeeApi from "../../redux/action/logic/"

function GetAllEmployeeContainer ({ handleEmployee, handleDelete}: any) {

  handleEmployee = (dispatch: Dispatch<Action>, setdata: (arg0: any) => void, userdata: any) => {
    dispatch(getAllEmployee())
    setdata(userdata)
  }

  handleDelete = (dispatch: Dispatch<Action>, id: number, setSuccess: (arg0: boolean) => void) => {
    console.log("inside delete", id)
    dispatch(deleteEmployee(id))
    if(window.confirm("Are you sure that you want to delete the Employee?")) {
      setSuccess(true)
    }
  }

  console.log("handle delete : ", handleDelete) 
  return < GetAllEmployeeContainer handleEmployee={handleEmployee} handleDelete={handleDelete} />
}



// export const handleEmployee = (dispatch: Dispatch<Action>, setdata: (arg0: any) => void, userdata: any) => {
//     dispatch(getAllEmployee())
//     setdata(userdata)
// }

// export const handleDelete = (dispatch: Dispatch<Action>, id: number, setSuccess: (arg0: boolean) => void) => {
//     console.log("inside delete", id)
//     dispatch(deleteEmployee(id))
//     if(window.confirm("Are you sure that you want to delete the Employee?")) {
//       setSuccess(true)
//     }
// }

