import { Route, Routes } from "react-router-dom"

import SignUp from "../components/user/sign-up"
import Admin from "../components/admin/admin"
import ValidateSession from "../shared/validation/validate-session"
import ProtectedRoutes from "./protectedroutes"
import PrivateRoutes from "./privateroutes"
import AdminOutlet from "../components/admin/admin-outlet"
import Home from "../components/employee/home"
import UpdateEmployee from "../components/employee/update-employee"
import Login from "../components/user/login"
import AddEmployeeClass from "../container/employee/add-employee-container"
import ClickCounter from "../tasks/hoc/click"
import HoverCounter from "../tasks/hoc/hover"
import MainComponent from "../tasks/context-api/main"
import Employees from "../tasks/custom-hooks/employees"
import { ClassContext } from "../tasks/context-api/class-context/main"
import { UncontrolledComponent } from "../tasks/forms/uncontrolled-component"
import ControlledClassComponent from "../tasks/forms/control-class"

const Router = () => {

    // ValidateSession()

    return(
       <>
            <Routes>

                <Route path='/tasks' element={
                    <>
                        <ClickCounter />
                        <HoverCounter />
                    </>
                } />
                <Route path='/context' element={<MainComponent />} />
                <Route path='/hooks' element={<Employees />} /> 
                <Route path='/class-context' element={<ClassContext />} />
                <Route path='/control-class' element={<ControlledClassComponent />} />
                <Route path='/uncontrol' element={<UncontrolledComponent />} />

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
                            <AddEmployeeClass />
                        </PrivateRoutes>
                    }  />

                </Route>
            </Routes>
       </>
    )
}

export default Router