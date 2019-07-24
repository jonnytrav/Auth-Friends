import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";
import { login, getFriends } from "./actions";
import LoginPage from "./Components/LoginPage";

class App extends React.Component {
  componentDidMount() {
    // this.props.getFriends();
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={LoginPage} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn
  };
};

export default connect(
  mapStateToProps,
  { login, getFriends }
)(App);
