import { Route, Routes } from "react-router-dom"
import AddEmployee from "../components/controller/AddEmployee"
import GetAllEmployee from "../components/controller/GetAllEmployee"
import UpdateEmployee from "../components/controller/UpdateEmployee"

const Router = () =>{
    return(
       <>
            <Routes>
                <Route path='/' element={<GetAllEmployee />} />
                <Route path='/update/:id' element={<UpdateEmployee />} />
                <Route path='/create' element={<AddEmployee />}  />
            </Routes>
       </>
    )
}

export default Router