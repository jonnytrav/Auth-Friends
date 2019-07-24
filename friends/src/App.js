import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import { login, getFriends } from "./actions";
import LoginPage from "./Components/LoginPage";
import ProtectedComponent from "./Components/ProtectedComponent";
import ProtectedRoute from "./Components/ProtectedRoute";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/" component={ProtectedComponent} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    friends: state.friends
  };
};

export default connect(
  mapStateToProps,
  { login, getFriends }
)(App);
