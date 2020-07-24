// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  customeraddress: {}
};

// Reducer
export default function CustomerAddressEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CUSTOMERADDRESS_SUCCESS:
      return { ...state, customeraddress: action.payload };
    case types.UPDATE_CUSTOMERADDRESS_SUCCESS:
      return { ...state, customeraddress: action.payload };
    case types.GET_CUSTOMERADDRESS_SUCCESS:
      return { ...state, customeraddress: action.payload };
    case types.LIST_LU_ADDRESSTYPE_SUCCESS:
      return { ...state, listLu_AddressType: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}