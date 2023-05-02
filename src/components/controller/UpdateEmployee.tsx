import { Dispatch, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleEmployee } from "../../store/action/action"
import { store } from "../../store/store"

const UpdateEmployee = () => {

    const dispatchStore = store.dispatch as typeof store.dispatch | Dispatch<any>;
    let { id } = useParams()
    console.log("id in update : ", id)
    const data = useSelector((state: any) => state.employeeData.employee)
    console.log("Data in update : ", data)
    const [credentials, setCredentials] = useState({
        id:'',
        name:'',
        age:'',
        city:'',
        salary:''
    })

    const handleChange = (e: any) => {
        console.log("inside handlechange")
        e.preventDefault()
        setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        console.log("inside useeffect update")
        dispatchStore(getSingleEmployee(id))
    },[])

    const updateHandler = () => {
        console.log("inside handle update")
    }

    return(
        <div>
           <h2>Update employee</h2>
           <div>
            <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={credentials.id} />
            <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={credentials.name} />
            <input type="number" placeholder="age" name="age" min={0} onChange={(e) => handleChange(e)} value={credentials.age} />
            <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={credentials.city} />
            <input type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} min={0} value={credentials.salary} />
            <button onClick={updateHandler}>Update details</button>
           </div>
        </div>
    )
}

export default UpdateEmployee