// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import CustomerAddressEdit from "./pages/CustomerAddressEdit";
import CustomerAddressList from "./pages/CustomerAddressList";
import CustomersEdit from "./pages/CustomersEdit";
import CustomersList from "./pages/CustomersList";
import Lu_AddressTypeEdit from "./pages/Lu_AddressTypeEdit";
import Lu_AddressTypeList from "./pages/Lu_AddressTypeList";
import Lu_EmployeesEdit from "./pages/Lu_EmployeesEdit";
import Lu_EmployeesList from "./pages/Lu_EmployeesList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/customeraddresses/:id" component={ CustomerAddressEdit }  />
              <PrivateRoute exact path="/customeraddresses" component={ CustomerAddressList }  />
              <PrivateRoute exact path="/customerses/:id" component={ CustomersEdit }  />
              <PrivateRoute exact path="/customerses" component={ CustomersList }  />
              <PrivateRoute exact path="/lu_addresstypes/:id" component={ Lu_AddressTypeEdit }  />
              <PrivateRoute exact path="/lu_addresstypes" component={ Lu_AddressTypeList }  />
              <PrivateRoute exact path="/lu_employeeses/:id" component={ Lu_EmployeesEdit }  />
              <PrivateRoute exact path="/lu_employeeses" component={ Lu_EmployeesList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;