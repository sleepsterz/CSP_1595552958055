import CustomerGroupApiGenerated from "./generated/CustomerGroupApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CustomerGroupApi extends CustomerGroupApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get CustomerGroup List
  static getCustomerGroupList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/customergroups")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CustomerGroupApi;