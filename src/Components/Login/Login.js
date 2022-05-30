import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.changState = this.changState.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changState(e) {
    this.setState({ email: e.target.value });
    console.log("OK");
  }

  submitForm(e) {
    console.log("email");
    e.preventDefault();
  }

  render() {
    const { email } = this.state;
    const { changState, submitForm } = this;
    return (
      <form onSubmit={submitForm}>
        <div class="form-group">
          <label for="Email">Email address</label>
          <input
            type="email"
            class="form-control"
            id="Email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={changState}
          />
          <br />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
