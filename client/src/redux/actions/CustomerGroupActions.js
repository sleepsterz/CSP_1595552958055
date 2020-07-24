import actionsFunction from "./generated/CustomerGroupActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import CustomerGroupApi from "../../api/CustomerGroupApi";
 
 actionsFunction.loadCustomerGroupList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return CustomerGroupApi
     .getCustomerGroupList()
     .then(list => {
       dispatch(actionsFunction.loadCustomerGroupSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
