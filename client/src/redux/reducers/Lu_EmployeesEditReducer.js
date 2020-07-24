// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  lu_employees: {}
};

// Reducer
export default function lu_EmployeesEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_LU_EMPLOYEES_SUCCESS:
      return { ...state, lu_employees: action.payload };
    case types.UPDATE_LU_EMPLOYEES_SUCCESS:
      return { ...state, lu_employees: action.payload };
    case types.GET_LU_EMPLOYEES_SUCCESS:
      return { ...state, lu_employees: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}