import React from "react";
import { connect } from "react-redux";

import { login } from "../actions";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };
  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(res => {
      if (res) {
        this.props.history.push("/protected");
      }
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input type="text" name="username" onChange={this.handleChange} />
          <input type="password" name="password" onChange={this.handleChange} />
          <button onClick={this.login}>Log In</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginPage);
