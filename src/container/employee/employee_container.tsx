import { useDispatch } from "react-redux"

import { InputField } from "../../shared/interface/employee.interface"

const EmployeeContainer = () => { 

  const dispatch = useDispatch() 

  const getAllEmployee = () => { 
    dispatch({ type: 'GET' }) 
  }

  const getSingleEmployee = (employeeId: number) => {
    dispatch({ type: 'GET_SINGLE', payload: employeeId })
  } 

  const addEmployee = (employee: any): any => {
    dispatch({ type: 'POST_EMP', payload: employee })
  }

  const updateEmployee = (employee: InputField) => {
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

export default EmployeeContainer
