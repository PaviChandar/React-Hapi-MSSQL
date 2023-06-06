import { Button } from "antd";

import { InputField } from "../../shared/interface/employee.interface";
import "../../assets/add.css"

type ClassProps = {
    addHandler: () => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    someState: InputField
    validate: (values: any) => void
}

const AddEmployee: React.FC<ClassProps> = ({ addHandler, handleChange, someState, validate }) => {
    // console.log("valval", validate);
    

    return(
        <div className="addContainer" >
            <h2>Create New Employee</h2>
            <div className="addInputContainer" >
                <div>
                    <input type="number" placeholder="id" name="id" onChange={(e) => handleChange(e)} min={0} value={someState.id} onClick={(id) => validate(id)} />
                    {/* <span>{validate(someState.id)}</span> */}
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
            </div>
            <Button onClick={addHandler} className="addButton" >Add Employee</Button>
        </div>
    )
}

export default AddEmployee