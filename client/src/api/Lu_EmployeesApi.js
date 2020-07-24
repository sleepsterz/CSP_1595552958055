import Lu_EmployeesApiGenerated from "./generated/Lu_EmployeesApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Lu_EmployeesApi extends Lu_EmployeesApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Lu_Employees List
  static getLu_EmployeesList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/lu_employeess")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Lu_EmployeesApi;