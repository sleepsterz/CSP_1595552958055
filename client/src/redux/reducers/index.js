import { combineReducers } from "redux";

// START IMPORT REDUCERS
import CustomerAddressEditReducer from "./CustomerAddressEditReducer";
import CustomerAddressListReducer from "./CustomerAddressListReducer";
import CustomersEditReducer from "./CustomersEditReducer";
import CustomersListReducer from "./CustomersListReducer";
import HomeReducer from "./HomeReducer";
import Lu_AddressTypeEditReducer from "./Lu_AddressTypeEditReducer";
import Lu_AddressTypeListReducer from "./Lu_AddressTypeListReducer";
import Lu_EmployeesEditReducer from "./Lu_EmployeesEditReducer";
import Lu_EmployeesListReducer from "./Lu_EmployeesListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	CustomerAddressEditReducer,
	CustomerAddressListReducer,
	CustomersEditReducer,
	CustomersListReducer,
	HomeReducer,
	Lu_AddressTypeEditReducer,
	Lu_AddressTypeListReducer,
	Lu_EmployeesEditReducer,
	Lu_EmployeesListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
