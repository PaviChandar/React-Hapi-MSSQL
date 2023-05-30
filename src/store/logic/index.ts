import addEmployeeApiLogic  from "./add-employee";
import deleteEmployeeApiLogic from "./delete-employee";
import getAllEmployeeApi from "./get-all";
import getAllEmployeeApiLogic  from "./get-all";
import getSingleEmployeeApiLogic  from "./get-single";
import loginUserApiLogic from "./login-user";
import registerUserApiLogic from "./register-user";
import updateEmployeeApiLogic from "./update-employee";

export default [
    getAllEmployeeApiLogic,
    // getAllEmployeeApi,
    addEmployeeApiLogic,
    updateEmployeeApiLogic,
    getSingleEmployeeApiLogic,
    deleteEmployeeApiLogic,
    loginUserApiLogic,
    registerUserApiLogic
]