import CustomersModelGenerated from "./generated/CustomersModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await CustomersModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CustomersModelGenerated,
  ...customModel
};
