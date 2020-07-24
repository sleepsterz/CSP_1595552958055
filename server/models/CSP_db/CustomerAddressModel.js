import CustomerAddressModelGenerated from "./generated/CustomerAddressModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CustomerAddressModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CustomerAddressModelGenerated,
  ...customModel
};
