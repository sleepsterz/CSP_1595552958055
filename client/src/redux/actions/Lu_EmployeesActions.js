import actionsFunction from "./generated/Lu_EmployeesActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import lu_EmployeesApi from "../../api/lu_EmployeesApi";
 
 actionsFunction.loadlu_EmployeesList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return lu_EmployeesApi
     .getlu_EmployeesList()
     .then(list => {
       dispatch(actionsFunction.loadlu_EmployeesSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
