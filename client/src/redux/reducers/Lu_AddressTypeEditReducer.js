// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  lu_addresstype: {}
};

// Reducer
export default function lu_AddressTypeEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_LU_ADDRESSTYPE_SUCCESS:
      return { ...state, lu_addresstype: action.payload };
    case types.UPDATE_LU_ADDRESSTYPE_SUCCESS:
      return { ...state, lu_addresstype: action.payload };
    case types.GET_LU_ADDRESSTYPE_SUCCESS:
      return { ...state, lu_addresstype: action.payload };
    case types.FINDBYADDRESSTYPEID_CUSTOMERADDRESS_SUCCESS:
      return { ...state, listCustomerAddress: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}