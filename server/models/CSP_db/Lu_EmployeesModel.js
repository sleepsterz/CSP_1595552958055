import Lu_EmployeesModelGenerated from "./generated/Lu_EmployeesModelGenerated";

const customModel = {

  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Lu_EmployeesModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Lu_EmployeesModelGenerated,
  ...customModel
};
