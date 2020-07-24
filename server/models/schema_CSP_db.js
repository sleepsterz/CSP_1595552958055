// Import Sequelize
import Sequelize from "sequelize";
import Database from "../classes/Database_CSP_db";

export default init => {
  let sequelize = Database.getConnection();


    /**
      * ------------------------------------
      * Start define generated schema
      *
      * The content of this section will be overwritten on each documentation, 
      * please insert your customization at the top or at the end of the file.
      * ------------------------------------
      */



    /**
      * ------------------------------------
      * CustomerAddress
      * ------------------------------------
      */
    class CustomerAddress extends Sequelize.Model{}
    CustomerAddress.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      city: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      state: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      street1: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      street2: {
        type: Sequelize.STRING
      },
      
      zip: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      addresstypeID:  {
        type: Sequelize.INTEGER,
        references: {
          model: "lu_AddressType",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "customeraddress", timestamps: false }
    );



    /**
      * ------------------------------------
      * CustomerGroup
      * ------------------------------------
      */
    class CustomerGroup extends Sequelize.Model{}
    CustomerGroup.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      GroupName: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      customerGroupID: {
        type: Sequelize.INTEGER,
        references: {
          model: Customers,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "customergroup", timestamps: false }
    );



    /**
      * ------------------------------------
      * Customers
      * ------------------------------------
      */
    class Customers extends Sequelize.Model{}
    Customers.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      active: {
        type: Sequelize.BOOLEAN
      },
      
      cellPhone: {
        type: Sequelize.STRING
      },
      
      email: {
        type: Sequelize.STRING
      },
      
      fax: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      phone: {
        type: Sequelize.STRING
      },
      
      taxable: {
        type: Sequelize.BOOLEAN
      },
      
      //RELATIONS
        
      customerGroupID:  {
        type: Sequelize.INTEGER,
        references: {
          model: "CustomerGroup",
          key: '_id',
        },
      },
        
      employeeID:  {
        type: Sequelize.INTEGER,
        references: {
          model: "lu_Employees",
          key: '_id',
        },
      },
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "customers", timestamps: false }
    );



    /**
      * ------------------------------------
      * User
      * ------------------------------------
      */
    class User extends Sequelize.Model{}
    User.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      mail: {
        type: Sequelize.STRING
      },
      
      name: {
        type: Sequelize.STRING
      },
      
      password: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      surname: {
        type: Sequelize.STRING
      },
      
      username: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "user", timestamps: false }
    );



    /**
      * ------------------------------------
      * lu_AddressType
      * ------------------------------------
      */
    class lu_AddressType extends Sequelize.Model{}
    lu_AddressType.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      type: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      addresstypeID: {
        type: Sequelize.INTEGER,
        references: {
          model: CustomerAddress,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "lu_addresstype", timestamps: false }
    );



    /**
      * ------------------------------------
      * lu_Employees
      * ------------------------------------
      */
    class lu_Employees extends Sequelize.Model{}
    lu_Employees.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      name: {
        type: Sequelize.STRING, 
        allowNull: false
      },
      
      //RELATIONS
        
      
      
      //EXTERNAL RELATIONS
      /*
      employeeID: {
        type: Sequelize.INTEGER,
        references: {
          model: Customers,
          key: '_id',
        }
      },
      */
    },
      { sequelize, tableName: "lu_employees", timestamps: false }
    );


    /**
      * ------------------------------------
      * Relations many to many
      * ------------------------------------
      */

    
    
    
    
    
    
  /**
   * ------------------------------------
   * End define generated schema
      * ------------------------------------
      */

    /**
      * ------------------------------------
      * Roles
      * ------------------------------------
      */
    class Roles extends Sequelize.Model{}
    Roles.init({
      _id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      role: {
        type: Sequelize.STRING
      },
      
      //RELATIONS
        
      _user:  {
        type: Sequelize.INTEGER,
        references: {
          model: "User",
          key: '_id',
        },
      }
      
      
      //EXTERNAL RELATIONS
      /*
      */
    },
      { sequelize, tableName: "roles", timestamps: false }
    );

    User.hasMany(Roles, {
      foreignKey: "_user"
    });

    /**
      * ------------------------------------
      * Insert here your custom models
      * ------------------------------------
      */

};
