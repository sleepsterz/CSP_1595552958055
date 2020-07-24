import Lu_AddressTypeModelGenerated from "./generated/Lu_AddressTypeModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Lu_AddressTypeModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Lu_AddressTypeModelGenerated,
  ...customModel
};
