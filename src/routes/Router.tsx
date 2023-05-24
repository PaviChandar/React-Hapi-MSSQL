import { Route, Routes } from "react-router-dom"

import SignUp from "../components/user/sign-up"
import Admin from "../components/admin/admin"
import ValidateSession from "../shared/validation/validate-session"
import ProtectedRoutes from "./protectedroutes"
import PrivateRoutes from "./privateroutes"
import AdminOutlet from "../components/admin/admin-outlet"
import Home from "../components/employee/home"
import AddEmployee from "../components/employee/add-employee"
import UpdateEmployee from "../components/employee/update-employee"
import Login from "../components/user/login"
import AddEmployeeClass from "../components/employee/class-add"
import { ReactNode } from "react"

const Router = () => {

    ValidateSession()

    return(
       <>
            <Routes>

                <Route path='/login' element={<Login />} />
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
                            <UpdateEmployee />
                         </PrivateRoutes>
                    } />

                    <Route path='create' element={
                        <PrivateRoutes>
                            <AddEmployee />
                            {/* <AddEmployeeClass /> */}
                        </PrivateRoutes>
                    }  />

                </Route>
            </Routes>
       </>
    )
}

export default Router