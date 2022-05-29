import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class IndexPages extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <div
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <div>
          <div class="form-group form-check">
            <div type="checkbox" class="form-check-input" id="exampleCheck1" />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
}
