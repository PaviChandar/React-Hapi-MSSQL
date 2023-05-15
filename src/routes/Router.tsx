import { Route, Routes, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

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
import LoginContainer from "../container/user/login"

const Router = () => {

    ValidateSession()

    return(
       <>
            <Routes>

                <Route path='/login' element={<LoginContainer />} />
                <Route path='/sign-up' element={<SignUp />} />

                <Route path='/' element={
                    <ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>} />

                <Route path='/admin' element={
                    <PrivateRoutes>
                        <AdminOutlet />
                     </PrivateRoutes>
                }>
                        
                    <Route path='' element={ 
                        <PrivateRoutes>
                            <Admin />
                         </PrivateRoutes>
                    } />
                    <Route path='update/:id' element={
                        <PrivateRoutes>
                            <UpdateEmployeeContainer />
                         </PrivateRoutes>
                    } />
                    <Route path='create' element={
                        <PrivateRoutes>
                            <AddEmployeeContainer />
                        </PrivateRoutes>
                    }  />

                </Route>
            </Routes>
       </>
    )
}

export default Router