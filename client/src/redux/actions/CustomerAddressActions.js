import actionsFunction from "./generated/CustomerAddressActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import CustomerAddressApi from "../../api/CustomerAddressApi";
 
 actionsFunction.loadCustomerAddressList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return CustomerAddressApi
     .getCustomerAddressList()
     .then(list => {
       dispatch(actionsFunction.loadCustomerAddressSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
