export const AddEmployee='AddEmp';
export const UpdateEmployee='updateEmp';
//------action types
export const AddEmployeeType=()=>{
    return  {type:AddEmployee}
  }
export const UpdateEmployeeType=(emp)=>{
    return {
        type:UpdateEmployee,
        payload:emp
    }  
}