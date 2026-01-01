// store.js
import { createStore, combineReducers } from 'redux';
import departmentReducer from './Reducer/DepartmentReducer.js';
import  classificationReducer  from "./Reducer/classificationReducer.js";
import themeReducer from './Reducer/themeReducer.js'

const rootReducer = combineReducers({
  department: departmentReducer,
  receiptTypes: classificationReducer,
  theme: themeReducer,
});

const store = createStore(rootReducer);

export default store;