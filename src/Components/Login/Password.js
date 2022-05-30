import React, { Component } from "react";

export default class Password extends Component {
  constructor(props) {
    super(props);
    this.state = { password: "" };
    this.changState = this.changState.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changState(e) {
    this.setState({ password: e.target.value });
    console.log("change");
  }

  submitForm(e) {
    e.preventDefault();
    console.log("password");
  }

  render() {
    const { password } = this.state;
    const { changState, submitForm } = this;
    return (
      <form onSubmit={submitForm}>
        <div class="form-group">
          <label for="Password">Password</label>
          <input
            type="password"
            class="form-control"
            id="Password"
            placeholder="Password"
            value={password}
            onChange={changState}
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
