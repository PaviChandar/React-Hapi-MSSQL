import { Route, Routes } from "react-router-dom"

import SignUp from "../components/user/sign-up"
import Admin from "../components/admin/admin"
import ValidateSession from "../shared/validation/validate-session"
import ProtectedRoutes from "./protectedroutes"
import PrivateRoutes from "./privateroutes"
import AdminOutlet from "../components/admin/admin-outlet"
import Home from "../components/employee/home"
import LoginContainer from "../container/user/login"
import AddEmployee from "../components/employee/add-employee"
import UpdateEmployee from "../components/employee/update-employee"

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
                            <UpdateEmployee />
                         </PrivateRoutes>
                    } />
                    <Route path='create' element={
                        <PrivateRoutes>
                            <AddEmployee />
                        </PrivateRoutes>
                    }  />

                </Route>
            </Routes>
       </>
    )
}

export default Router