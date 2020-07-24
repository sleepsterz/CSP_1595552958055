import CustomerGroupModelGenerated from "./generated/CustomerGroupModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CustomerGroupModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CustomerGroupModelGenerated,
  ...customModel
};
