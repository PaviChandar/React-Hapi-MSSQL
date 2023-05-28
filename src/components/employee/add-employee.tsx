import { Button } from "antd";
import { InputField } from "../../shared/interface/employee.interface";

type ClassProps = {
    addHandler: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    someState: InputField
}

const AddEmployee: React.FC<ClassProps> = ({ addHandler, handleChange, someState }) => {

    return(
        <div>
            <h2>Create New Employee</h2>
            <div>
                <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={someState.id} />
                <span></span>
            </div>
            <div>
                <input type="text" placeholder="name" name="name" onChange={(e) => handleChange(e)} value={someState.name} />
            </div>
            <div>
                <input type="number" placeholder="age" name="age" min={1} onChange={(e) => handleChange(e)} value={someState.age} />
            </div>
            <div>
                <input type="text" placeholder="city" name="city" onChange={(e) => handleChange(e)} value={someState.city} />
            </div>
            <div>
                <input type="number" placeholder="salary" name="salary" onChange={(e) => handleChange(e)} min={0} value={someState.salary} />
            </div>
            <Button onClick={ addHandler } >Add Employee</Button>
        </div>
    )
}

export default AddEmployee