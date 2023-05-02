import { Route, Routes } from "react-router-dom"
import GetAllEmployee from "../components/controller/GetAllEmployee"
import UpdateEmployee from "../components/controller/UpdateEmployee"

const Router = () =>{
    return(
       <>
            <Routes>
                <Route path='/' element={<GetAllEmployee />} />
                <Route path='/update/:id' element={<UpdateEmployee />} />
            </Routes>
       </>
    )
}

export default Router