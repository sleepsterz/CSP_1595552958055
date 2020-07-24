// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function lu_AddressTypeListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_LU_ADDRESSTYPE_SUCCESS:
      return { ...state, lu_addresstype: action.payload };
    case types.LIST_LU_ADDRESSTYPE_SUCCESS:
      return { ...state, listLu_AddressType: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}