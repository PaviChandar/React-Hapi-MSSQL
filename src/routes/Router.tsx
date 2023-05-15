import { Route, Routes, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

import Login from "../components/user/login"
import SignUp from "../components/user/signup"
import GetAllEmployeeContainer from "../container/employee/getallemployee"
import AddEmployeeContainer from "../container/employee/addemployee"
import UpdateEmployeeContainer from "../container/employee/updateemployee"
import Admin from "../components/admin/admin"
import ValidateSession from "../components/shared/validatesession"
import ProtectedRoutes from "./protectedroutes"
import PrivateRoutes from "./privateroutes"
import AdminOutlet from "../components/admin/adminoutlet"
import Home from "../components/employee/home"

const Router = () => {

    // ValidateSession()

    const user  = useSelector((state: any) => state.userData.user)
    console.log("User data in route : ", user.login)

    return(
       <>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>} />

                <Route path='/admin' element={
                    <PrivateRoutes>
                        <AdminOutlet />
                    </PrivateRoutes>}>
                        
                    <Route path='' element={ 
                        <PrivateRoutes>
                            <Admin />
                        </PrivateRoutes>} />
                    <Route path='update/:id' element={
                        <PrivateRoutes>
                            <UpdateEmployeeContainer />
                        </PrivateRoutes>} />
                    <Route path='create' element={
                        <PrivateRoutes>
                            <AddEmployeeContainer />
                        </PrivateRoutes>}  />
                </Route>

                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
       </>
    )
}

export default Router