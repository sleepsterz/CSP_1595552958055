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

// Custom Actions


// START IMPORT ACTIONS
import CustomerAddressActions from "../redux/actions/CustomerAddressActions";
import Lu_AddressTypeActions from "../redux/actions/Lu_AddressTypeActions";

// END IMPORT ACTIONS

/** APIs

* actionsCustomerAddress.create
*	@description CRUD ACTION create
*
* actionsCustomerAddress.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCustomerAddress.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsLu_AddressType.list
*	@description CRUD ACTION list
*

**/

class CustomerAddressEdit extends Component {
  // Init customeraddress
  constructor(props) {
    super(props);
    this.state = {
      customeraddress: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCustomerAddress.loadCustomerAddress(this.props.match.params.id);
    }
    
    this.props.actionsLu_AddressType.loadLu_AddressTypeList();
  }

  // Insert props customeraddress in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      customeraddress: props.customeraddress
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.customeraddress._id) {
      this.props.actionsCustomerAddress.saveCustomerAddress(this.state.customeraddress).then(data => {
        this.props.history.push("/customeraddresses/");
      });
    } else {
      this.props.actionsCustomerAddress.createCustomerAddress(this.state.customeraddress).then(data => {
        this.props.history.push("/customeraddresses/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>CustomerAddress Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="city"
            label="City"
            value={this.state.customeraddress.city || ""}
            onChange={Utils.handleChange.bind(this, "customeraddress")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.customeraddress.city && this.state.customeraddress.city === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="state"
            label="State"
            value={this.state.customeraddress.state || ""}
            onChange={Utils.handleChange.bind(this, "customeraddress")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.customeraddress.state && this.state.customeraddress.state === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="street1"
            label="Street1"
            value={this.state.customeraddress.street1 || ""}
            onChange={Utils.handleChange.bind(this, "customeraddress")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.customeraddress.street1 && this.state.customeraddress.street1 === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="street2"
            label="Street2"
            value={this.state.customeraddress.street2 || ""}
            onChange={Utils.handleChange.bind(this, "customeraddress")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="zip"
            label="Zip"
            value={this.state.customeraddress.zip || ""}
            onChange={Utils.handleChange.bind(this, "customeraddress")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.customeraddress.zip && this.state.customeraddress.zip === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m addresstypeID with lu_AddressType */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="addresstypeID">
              AddresstypeID
            </InputLabel>
            <Select
              value={this.state.customeraddress.addresstypeID || ""}
              onChange={Utils.handleChangeSelect.bind(this, "customeraddress")}
              inputProps={{
                id: "addresstypeID",
                name: "addresstypeID"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listLu_AddressType && this.props.listLu_AddressType.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/customeraddresses/">Back to list</Link>

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
    actionsCustomerAddress: bindActionCreators(CustomerAddressActions, dispatch),
    actionsLu_AddressType: bindActionCreators(Lu_AddressTypeActions, dispatch),
  };
};

// Validate types
CustomerAddressEdit.propTypes = { 
  actionsCustomerAddress: PropTypes.object.isRequired,
  actionsLu_AddressType: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    customeraddress: state.CustomerAddressEditReducer.customeraddress,
    listLu_AddressType: state.CustomerAddressEditReducer.listLu_AddressType
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerAddressEdit);
