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

// Custom Actions


// START IMPORT ACTIONS
import Lu_EmployeesActions from "../redux/actions/Lu_EmployeesActions";

// END IMPORT ACTIONS

/** APIs

* actionsLu_Employees.create
*	@description CRUD ACTION create
*
* actionsLu_Employees.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsLu_Employees.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class Lu_EmployeesEdit extends Component {
  // Init lu_employees
  constructor(props) {
    super(props);
    this.state = {
      lu_employees: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsLu_Employees.loadLu_Employees(this.props.match.params.id);
      this.props.actionsCustomers.findByemployeeID(this.props.match.params.id);
    }
    
  }

  // Insert props lu_employees in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      lu_employees: props.lu_employees
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.lu_employees._id) {
      this.props.actionsLu_Employees.saveLu_Employees(this.state.lu_employees).then(data => {
        this.props.history.push("/lu_employeeses/");
      });
    } else {
      this.props.actionsLu_Employees.createLu_Employees(this.state.lu_employees).then(data => {
        this.props.history.push("/lu_employeeses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Lu_Employees Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="name"
            label="Name"
            value={this.state.lu_employees.name || ""}
            onChange={Utils.handleChange.bind(this, "lu_employees")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.lu_employees.name && this.state.lu_employees.name === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Customers */}
          
          <h3>Customers</h3>
          {(!this.props.listCustomers || this.props.listCustomers.length === 0) && 
            <div>No Customers associated</div>
          }
          {this.props.listCustomers &&
            this.props.listCustomers.map((item, i) => {
              return (
                <Link to={"/customerss/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/lu_employeeses/">Back to list</Link>

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
    actionsLu_Employees: bindActionCreators(Lu_EmployeesActions, dispatch),
  };
};

// Validate types
Lu_EmployeesEdit.propTypes = { 
  actionsLu_Employees: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    lu_employees: state.Lu_EmployeesEditReducer.lu_employees,
    listCustomers: state.Lu_EmployeesEditReducer.listCustomers
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lu_EmployeesEdit);
