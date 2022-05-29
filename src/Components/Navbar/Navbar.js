import React, { Component } from "react";
import {
  Router,
  Route,
  Link,
  Switch,
  HashRouter,
  BrowserRouter,
} from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <HashRouter>
        <div id="loader-wrapper">
          <div id="loader"></div>
          <div className="loader-section section-left"></div>
          <div className="loader-section section-right"></div>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <i className="fas fa-film mr-2"></i>
              Catalog-Z
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link nav-link-1 active"
                    aria-current="page"
                    href="index.html"
                  >
                    Photos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-2" href="videos.html">
                    Videos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-3" href="about.html">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-4" href="contact.html">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-link-2" href="Login.html">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </HashRouter>
    );
  }
}

export default Navbar;
