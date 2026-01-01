import { ReactReduxContext } from "react-redux"
import {CreateSlice} from ReactReduxContext

const UserReducer=(state=['dep','emp','user'],action ) =>{
    switch(action.type){
    case AddDepartmentAction:
        return {...state,dep}

}
}

export default UserReducer
