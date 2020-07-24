import CustomerAddressApiGenerated from "./generated/CustomerAddressApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class CustomerAddressApi extends CustomerAddressApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get CustomerAddress List
  static getCustomerAddressList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/customeraddresss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default CustomerAddressApi;