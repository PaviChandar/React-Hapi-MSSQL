import addEmployeeApiLogic  from "./add-employee";
import deleteEmployeeApiLogic from "./delete-employee";
import getAllEmployeeApiLogic  from "./get-all";
import getSingleEmployeeApiLogic  from "./get-single";
import updateEmployeeApiLogic from "./update-employee";

export default [
    getAllEmployeeApiLogic,
    addEmployeeApiLogic,
    updateEmployeeApiLogic,
    getSingleEmployeeApiLogic,
    deleteEmployeeApiLogic
]