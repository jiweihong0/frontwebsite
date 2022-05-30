import React, { Component } from 'react';

import IndexPages from "./Components/Pages/IndexPage/IndexPage";
import PageDetail from "./Components/Pages/PageDetail/PageDetail";
import Navbar from "./Components/Navbar/Navbar";
import SelectBar from "./Components/SelectBar/SelectBar";
import Breadcrumb from "./Components/Breadcrumb/Breadcrumb";
import Footer from "./Components/Footer/Footer";
import { Router, Route, Link, Switch, HashRouter, BrowserRouter, Redirect, withRouter } from 'react-router-dom';

const data = [
  { id: 1, imgur: ["Imgs/img-01-big.jpg", "Imgs/hero.jpg"],title:"大社高級套房" }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page:"",
    };
    this.handleLoad = this.handleLoad.bind(this); //Use to add class to body
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.handleLoad)
  }

  handleLoad = () => {
    document.body.classList.add('loaded');
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Navbar />
          <SelectBar />
          <Breadcrumb />
          <Switch>
            <Route exact path="/PageDetail/:id">
              <PageDetail data={data} key={data.id} />
            </Route>
            <Route exact path="/Indexpages:page">
              <IndexPages />
            </Route>
            <Redirect from="/" to="/Indexpages1" />
          </Switch>
          <Footer />
        </HashRouter>
      </div>
    );
  }
}

export default App;
