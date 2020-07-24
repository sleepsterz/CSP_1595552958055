import Lu_AddressTypeApiGenerated from "./generated/Lu_AddressTypeApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Lu_AddressTypeApi extends Lu_AddressTypeApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Lu_AddressType List
  static getLu_AddressTypeList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/lu_addresstypes")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Lu_AddressTypeApi;