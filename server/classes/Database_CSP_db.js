// Import Sequelize
import Sequelize from "sequelize";
import InitSchema from "../models/schema_CSP_db";
import UserModel from "../models/CSP_db/UserModel";

// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info(
      "Database connected at: " +
        properties.CSP_db.host +
        ":" +
        properties.CSP_db.port +
        "//" +
        properties.CSP_db.user +
        "@" +
        properties.CSP_db.name
    );

    // Import schema
    InitSchema();

    await UserModel.createAdminUser();

  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");

    const sequelize = new Sequelize(
      properties.CSP_db.name,
      properties.CSP_db.user,
      properties.CSP_db.password,
      {
        host: properties.CSP_db.host,
        dialect: properties.CSP_db.dialect,
        port: properties.CSP_db.port,
        logging: false
      }
    );
    this.dbConnection_CSP_db = sequelize;

    try {
      await sequelize.sync();
    } catch (err) {
      // Catch error here
      Logger.error(`Failed connection to the DB`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_CSP_db;
  }
}

export default new Database();
