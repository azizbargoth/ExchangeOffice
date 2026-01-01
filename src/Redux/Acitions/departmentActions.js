export const AddDepartment='addDept';
export const TOGGLE_ADD_DEPARTMENT = 'TOGGLE_ADD_DEPARTMENT';
export const CLOSE_DEPARTMENT_FRM = 'CLOSE_DEPARTMENT_FRM';
export const UPDATE_DEPARTMENT='UPDATE_DEPARTMENT'
/////action types 
export const ToggleAddBTNType=()=>{
    return {type:TOGGLE_ADD_DEPARTMENT}
}
export const CloseDepFrmType=()=>{
    return {type:CLOSE_DEPARTMENT_FRM}
}
export const AddDepartmentType=(name)=>{
  return  {type:AddDepartment,
            payload:name
  }
}
export const UPDATE_DEPARTMENT_TYPE=(id,name)=>{
return{
    type:UPDATE_DEPARTMENT,
    payload:name
}
}