import   {addEmployeeApi}    from "./getall"
import  {getAllEmployeeApi}   from "./getall"
import   updateEmployeeApi   from "./updateemployee"

export default [
    getAllEmployeeApi,
    addEmployeeApi,
    updateEmployeeApi
]

// export default [
//     ...getAllEmployeeApi,
//     ...addEmployeeApi,
//      ...updateEmployeeApi
// ]

// module.exports = {
//     ...getAllEmployeeApi,
//     ...addEmployeeApi,
//     ...updateEmployeeApi
// }