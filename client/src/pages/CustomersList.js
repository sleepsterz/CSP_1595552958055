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
import CustomersActions from "../redux/actions/CustomersActions";

// END IMPORT ACTIONS

/** APIs

* actionsCustomers.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsCustomers.list
*	@description CRUD ACTION list
*

**/


class CustomersList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsCustomers.loadCustomersList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsCustomers.deleteCustomers(this.state.idDelete).then(data => {
      this.props.actionsCustomers.loadCustomersList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "active",
        type: "boolean",
        label: "Active"
      }, 
      {
        id: "cellPhone",
        type: "string",
        label: "CellPhone"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "fax",
        type: "string",
        label: "Fax"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "phone",
        type: "string",
        label: "Phone"
      }, 
      {
        id: "taxable",
        type: "boolean",
        label: "Taxable"
      },
    ];
    const link = "/customerses/";

    return (
      <div>
        <h1>Customers List</h1>

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
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">CellPhone</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Fax</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Taxable</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/customerses/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.active }</TableCell>
                <TableCell align="right">{ row.cellPhone }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.fax }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.phone }</TableCell>
                <TableCell align="right">{ row.taxable }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/customerses/new">
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
    actionsCustomers: bindActionCreators(CustomersActions, dispatch),
  };
};

// Validate types
CustomersList.propTypes = { 
  actionsCustomers: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.CustomersListReducer.listCustomers
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomersList);
