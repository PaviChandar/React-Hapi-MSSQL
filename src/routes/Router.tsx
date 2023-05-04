import { Route, Routes } from "react-router-dom"
import AddEmployee from "../components/employee/AddEmployee"
import GetAllEmployee from "../components/employee/GetAllEmployee"
import Login from "../components/user/Login"
import SignUp from "../components/user/SignUp"
import UpdateEmployee from "../components/employee/UpdateEmployee"

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