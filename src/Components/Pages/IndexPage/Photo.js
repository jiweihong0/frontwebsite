import { Router, Route, Link, Switch, HashRouter, BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react'

class Photo extends Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        const { id } = this.props.image;
        const { src } = this.props.image;
        return (

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
                <figure className="effect-ming tm-video-item">
                    <img src={src} alt="Image" className="img-fluid" />
                    <figcaption className="d-flex align-items-center justify-content-center">
                        <h2>Clocks</h2>
                        <Link to={'/PageDetail/' + id}></Link>
                    </figcaption>
                </figure>
                <div className="d-flex justify-content-between tm-text-gray">
                    <span className="tm-text-gray-light">18 Oct 2020</span>
                    <span>9,906 views</span>
                </div>
            </div>
        );
    }
}

export default Photo;