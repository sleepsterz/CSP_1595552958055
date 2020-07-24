// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function lu_EmployeesListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_LU_EMPLOYEES_SUCCESS:
      return { ...state, lu_employees: action.payload };
    case types.LIST_LU_EMPLOYEES_SUCCESS:
      return { ...state, listLu_Employees: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}