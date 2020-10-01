import React, { Component } from "react";
import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Routes from "./Routes";
import Spinner from './components/Spinner';

import { logout } from './actions';

class ServiceApp extends Component {


  HandleLogout = () => this.props.dispatch(logout())

  renderApplication = (auth) => {
    return (
      <React.Fragment>
        <Navbar logout={this.HandleLogout} auth={auth} />
        <Navbar logout={this.HandleLogout} auth={auth} id="navbar-clone" />
        <Sidebar />
        <Routes />
      </React.Fragment>
    );
  };

  render() {
    const { auth } = this.props;
    return auth.isAuthResolved ? this.renderApplication(auth) : <Spinner />;
  }
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(ServiceApp);
