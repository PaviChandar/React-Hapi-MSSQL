import { Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"

import Login from "../components/user/login"
import SignUp from "../components/user/signup"
import GetAllEmployeeContainer from "../container/employee/getallemployee"
import AddEmployeeContainer from "../container/employee/addemployee"
import UpdateEmployeeContainer from "../container/employee/updateemployee"

const Router = () =>{

    const employee  = useSelector((state: any) => state.employeeData.employee)
    console.log("User data in route : ", employee)

    return(
       <>
            <Routes>
                <Route path='/' element={<GetAllEmployeeContainer />} />
                <Route path='/update/:id' element={<UpdateEmployeeContainer />} />
                <Route path='/create' element={<AddEmployeeContainer />}  />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
       </>
    )
}

export default Router