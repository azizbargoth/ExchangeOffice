import { AddDepartmentType,CloseDepFrmType,ToggleAddBTNType,UPDATE_DEPARTMENT_TYPE } from "../Acitions/departmentActions.js";
const initialState = {
    name: '',
    isAddDepartmentVisible: false,
  };
  
  const departmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case UPDATE_DEPARTMENT_TYPE:
        return {
          ...state,
          isAddDepartmentVisible: !state.isAddDepartmentVisible,
        };
      case AddDepartmentType:
        return {
          ...state,
          name: action.payload,
          isAddDepartmentVisible: false, // إخفاء النافذة بعد الحفظ
        };
        case CloseDepFrmType:
        return {
          ...state,
          name: action.payload,
          isAddDepartmentVisible: false, // إخفاء النافذة بعد الحفظ
        };
      default:
        return state;
    }
  };
  
  export default departmentReducer;
  