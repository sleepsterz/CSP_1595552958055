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
import Lu_AddressTypeActions from "../redux/actions/Lu_AddressTypeActions";
import CustomerAddressActions from "../redux/actions/CustomerAddressActions";

// END IMPORT ACTIONS

/** APIs

* actionsLu_AddressType.create
*	@description CRUD ACTION create
*
* actionsLu_AddressType.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsLu_AddressType.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsCustomerAddress.findByaddresstypeID
*	@description CRUD ACTION findByaddresstypeID
*	@param Objectid key - Id of model to search for
*

**/

class Lu_AddressTypeEdit extends Component {
  // Init lu_addresstype
  constructor(props) {
    super(props);
    this.state = {
      lu_addresstype: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsLu_AddressType.loadLu_AddressType(this.props.match.params.id);
      this.props.actionsCustomerAddress.findByaddresstypeID(this.props.match.params.id);
    }
    
  }

  // Insert props lu_addresstype in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      lu_addresstype: props.lu_addresstype
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.lu_addresstype._id) {
      this.props.actionsLu_AddressType.saveLu_AddressType(this.state.lu_addresstype).then(data => {
        this.props.history.push("/lu_addresstypes/");
      });
    } else {
      this.props.actionsLu_AddressType.createLu_AddressType(this.state.lu_addresstype).then(data => {
        this.props.history.push("/lu_addresstypes/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Lu_AddressType Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="type"
            label="Type"
            value={this.state.lu_addresstype.type || ""}
            onChange={Utils.handleChange.bind(this, "lu_addresstype")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.lu_addresstype.type && this.state.lu_addresstype.type === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with CustomerAddress */}
          
          <h3>CustomerAddress</h3>
          {(!this.props.listCustomerAddress || this.props.listCustomerAddress.length === 0) && 
            <div>No CustomerAddress associated</div>
          }
          {this.props.listCustomerAddress &&
            this.props.listCustomerAddress.map((item, i) => {
              return (
                <Link to={"/customeraddresss/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/lu_addresstypes/">Back to list</Link>

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
    actionsLu_AddressType: bindActionCreators(Lu_AddressTypeActions, dispatch),
    actionsCustomerAddress: bindActionCreators(CustomerAddressActions, dispatch),
  };
};

// Validate types
Lu_AddressTypeEdit.propTypes = { 
  actionsLu_AddressType: PropTypes.object.isRequired,
  actionsCustomerAddress: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    lu_addresstype: state.Lu_AddressTypeEditReducer.lu_addresstype,
    listCustomerAddress: state.Lu_AddressTypeEditReducer.listCustomerAddress
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lu_AddressTypeEdit);
