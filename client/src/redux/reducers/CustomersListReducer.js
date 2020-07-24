// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function CustomersListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CUSTOMERS_SUCCESS:
      return { ...state, customers: action.payload };
    case types.LIST_CUSTOMERS_SUCCESS:
      return { ...state, listCustomers: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}