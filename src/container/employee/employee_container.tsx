import { useDispatch } from "react-redux"

import { InputField } from "../../shared/interface/employee.interface"
import getAllEmployeeApiLogic from "../../store/logic/get-all"

const employeeContainer = () => { 

  const dispatch = useDispatch() 

  const getAllEmployee = () => { 
    dispatch({ type: 'GET' }) 
  }

  const getSingleEmployee = (employeeId: number) => {
    console.log("inside single emp container")
    console.log("id in get sing cont : ", employeeId)
    dispatch({ type: 'GET_SINGLE', payload: employeeId })
  } 

  const addEmployee = (employee: InputField) => {
    dispatch({ type: 'POST_EMP', payload: employee })
  }

  const updateEmployee = (employee: InputField) => {
    console.log("inside update emp container")
    console.log("update in cont : ", employee)
    dispatch({ type: 'UPDATE_EMP', payload: employee })
  }

  const deleteEmployee = (id: number) => {
    dispatch({ type: 'REMOVE_EMP', payload: id })
  }

  return { 
    getAllEmployee,
    getSingleEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee
  } 
} 

export default employeeContainer
