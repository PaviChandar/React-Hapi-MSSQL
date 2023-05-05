import { Route, Routes } from "react-router-dom"

import GetAllEmployee from "../components/employee/getallemployee"
import Login from "../components/user/login"
import SignUp from "../components/user/signup"
import UpdateEmployee from "../components/employee/updateemployee"
import AddEmployee from "../components/employee/addemployee"

const Router = () =>{
    return(
       <>
            <Routes>
                <Route path='/' element={<GetAllEmployee />} />
                <Route path='/update/:id' element={<UpdateEmployee />} />
                <Route path='/create' element={<AddEmployee />}  />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
       </>
    )
}

export default Router