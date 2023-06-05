import { InputField } from "../../shared/interface/employee.interface"
import useFetch from "./hook"

const Employees = () => {
    const { response, loading, error } = useFetch("http://localhost:4000/api/employees")

    if(loading) {
        <h2>Loading employees...</h2>
    }

    if(error) {
        console.log("Error : ", error)
    }

    return (
        <div>
            <h3><b>Name : Age</b></h3>
            <div>
                {
                    response && response.length && response.map((res: InputField) => {
                       return (
                        <div key={res.id} >
                            <h4>{res.name} : {res.age}</h4>
                        </div>
                       )
                    })
                }
            </div>
        </div>
    )
}

export default Employees