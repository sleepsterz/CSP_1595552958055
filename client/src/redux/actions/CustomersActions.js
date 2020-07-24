import actionsFunction from "./generated/CustomersActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import CustomersApi from "../../api/CustomersApi";
 
 actionsFunction.loadCustomersList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return CustomersApi
     .getCustomersList()
     .then(list => {
       dispatch(actionsFunction.loadCustomersSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
