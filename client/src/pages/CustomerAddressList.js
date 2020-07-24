// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import CustomerAddressActions from "../redux/actions/CustomerAddressActions";

// END IMPORT ACTIONS

/** APIs

* actionsCustomerAddress.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsCustomerAddress.list
*	@description CRUD ACTION list
*

**/


class CustomerAddressList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsCustomerAddress.loadCustomerAddressList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsCustomerAddress.deleteCustomerAddress(this.state.idDelete).then(data => {
      this.props.actionsCustomerAddress.loadCustomerAddressList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "city",
        type: "string",
        label: "City"
      }, 
      {
        id: "state",
        type: "string",
        label: "State"
      }, 
      {
        id: "street1",
        type: "string",
        label: "Street1"
      }, 
      {
        id: "street2",
        type: "string",
        label: "Street2"
      }, 
      {
        id: "zip",
        type: "string",
        label: "Zip"
      },
    ];
    const link = "/customeraddresses/";

    return (
      <div>
        <h1>CustomerAddress List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Street1</TableCell>
              <TableCell align="right">Street2</TableCell>
              <TableCell align="right">Zip</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/customeraddresses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.city }</TableCell>
                <TableCell align="right">{ row.state }</TableCell>
                <TableCell align="right">{ row.street1 }</TableCell>
                <TableCell align="right">{ row.street2 }</TableCell>
                <TableCell align="right">{ row.zip }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/customeraddresses/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsCustomerAddress: bindActionCreators(CustomerAddressActions, dispatch),
  };
};

// Validate types
CustomerAddressList.propTypes = { 
  actionsCustomerAddress: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.CustomerAddressListReducer.listCustomerAddress
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerAddressList);
