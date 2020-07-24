// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function CustomerAddressListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CUSTOMERADDRESS_SUCCESS:
      return { ...state, customeraddress: action.payload };
    case types.LIST_CUSTOMERADDRESS_SUCCESS:
      return { ...state, listCustomerAddress: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}