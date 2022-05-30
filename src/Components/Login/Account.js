import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class IndexPages extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.changState = this.changState.bind(this);
  }

  changState(e) {
    this.setState({ email: e.target.value });
    console.log("OK");
  }

  render() {
    const { email } = this.state;
    return (
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <div
          type="email"
          class="form-control"
          id="Email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          value={email}
        />
        <p>
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </p>
      </div>
    );
  }
}
