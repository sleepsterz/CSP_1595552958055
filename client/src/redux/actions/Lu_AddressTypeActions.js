import actionsFunction from "./generated/Lu_AddressTypeActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import lu_AddressTypeApi from "../../api/lu_AddressTypeApi";
 
 actionsFunction.loadlu_AddressTypeList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return lu_AddressTypeApi
     .getlu_AddressTypeList()
     .then(list => {
       dispatch(actionsFunction.loadlu_AddressTypeSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
