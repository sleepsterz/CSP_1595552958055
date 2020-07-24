// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import CustomersActions from "../redux/actions/CustomersActions";
import Lu_EmployeesActions from "../redux/actions/Lu_EmployeesActions";
import CustomerGroupActions from "../redux/actions/CustomerGroupActions";

// END IMPORT ACTIONS

/** APIs

* actionsCustomers.create
*	@description CRUD ACTION create
*
* actionsCustomers.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCustomers.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsLu_Employees.list
*	@description CRUD ACTION list
*
* actionsCustomerGroup.list
*	@description CRUD ACTION list
*

**/

class CustomersEdit extends Component {
  // Init customers
  constructor(props) {
    super(props);
    this.state = {
      customers: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCustomers.loadCustomers(this.props.match.params.id);
    }
    
    this.props.actionsCustomerGroup.loadCustomerGroupList();
    this.props.actionsLu_Employees.loadLu_EmployeesList();
  }

  // Insert props customers in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      customers: props.customers
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.customers._id) {
      this.props.actionsCustomers.saveCustomers(this.state.customers).then(data => {
        this.props.history.push("/customerses/");
      });
    } else {
      this.props.actionsCustomers.createCustomers(this.state.customers).then(data => {
        this.props.history.push("/customerses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Customers Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <FormControlLabel
            control={
              <Switch
                id="active"
                checked={this.state.customers.active || false}
                onChange={Utils.handleChangeCheck.bind(this, "customers", "active")}
                color="primary"
              />
            }
            label="active"
            className="mt-20"
          />
          
          
          <TextField
            id="cellPhone"
            label="CellPhone"
            value={this.state.customers.cellPhone || ""}
            onChange={Utils.handleChange.bind(this, "customers")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.customers.email || ""}
            onChange={Utils.handleChange.bind(this, "customers")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="fax"
            label="Fax"
            value={this.state.customers.fax || ""}
            onChange={Utils.handleChange.bind(this, "customers")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="name"
            label="Name"
            value={this.state.customers.name || ""}
            onChange={Utils.handleChange.bind(this, "customers")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.customers.name && this.state.customers.name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="phone"
            label="Phone"
            value={this.state.customers.phone || ""}
            onChange={Utils.handleChange.bind(this, "customers")}
            margin="normal"
            fullWidth
          />
          
          <FormControlLabel
            control={
              <Switch
                id="taxable"
                checked={this.state.customers.taxable || false}
                onChange={Utils.handleChangeCheck.bind(this, "customers", "taxable")}
                color="primary"
              />
            }
            label="taxable"
            className="mt-20"
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m customerGroupID with CustomerGroup */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="customerGroupID">
              CustomerGroupID
            </InputLabel>
            <Select
              value={this.state.customers.customerGroupID || ""}
              onChange={Utils.handleChangeSelect.bind(this, "customers")}
              inputProps={{
                id: "customerGroupID",
                name: "customerGroupID"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listCustomerGroup && this.props.listCustomerGroup.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m employeeID with lu_Employees */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="employeeID">
              EmployeeID
            </InputLabel>
            <Select
              value={this.state.customers.employeeID || ""}
              onChange={Utils.handleChangeSelect.bind(this, "customers")}
              inputProps={{
                id: "employeeID",
                name: "employeeID"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listLu_Employees && this.props.listLu_Employees.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/customerses/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsCustomers: bindActionCreators(CustomersActions, dispatch),
    actionsLu_Employees: bindActionCreators(Lu_EmployeesActions, dispatch),
    actionsCustomerGroup: bindActionCreators(CustomerGroupActions, dispatch),
  };
};

// Validate types
CustomersEdit.propTypes = { 
  actionsCustomers: PropTypes.object.isRequired,
  actionsLu_Employees: PropTypes.object.isRequired,
  actionsCustomerGroup: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    customers: state.CustomersEditReducer.customers,
    listCustomerGroup: state.CustomersEditReducer.listCustomerGroup,
    listLu_Employees: state.CustomersEditReducer.listLu_Employees
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomersEdit);
