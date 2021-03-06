/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE CustomerAddressModelGenerated.js PLEASE EDIT ../CustomerAddressModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_CSP_db";
import Sequelize from "sequelize";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {

  // Start queries
    

  // CRUD METHODS


  /**
  * CustomerAddressModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    let result = await Database.getConnection().models.CustomerAddress.create(item);    return result;
  },
  
  /**
  * CustomerAddressModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await Database.getConnection().models.CustomerAddress.destroy({ where: { _id: id } });
  },
  
  /**
  * CustomerAddressModel.findByaddresstypeID
  *   @description CRUD ACTION findByaddresstypeID
  *   @param Objectid key Id of model to search for
  *
  */
  async findByaddresstypeID(key) {
    return await Database.getConnection().models.CustomerAddress.findAll({ where: { "addresstypeID": key } });
  },
  
  /**
  * CustomerAddressModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    let result = await Database.getConnection().models.CustomerAddress.findByPk(id);
    return result;
  },
  
  /**
  * CustomerAddressModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() { 
    return await Database.getConnection().models.CustomerAddress.findAll();
      },
  
  /**
  * CustomerAddressModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    let result = await Database.getConnection().models.CustomerAddress.update(item, {
      where: { _id: item._id }
    });
    return result;
  },
  


};

export default generatedModel;
