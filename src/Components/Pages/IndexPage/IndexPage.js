import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import Photo from "./Photo";
import Pagination from "./Pagination";
import Title from "./Title";
import { withRouter } from 'react-router-dom'

// import Img from "Imgs/IndexPage/img-03.jpg"
// import Img_background from "Imgs/IndexPage/hero.jpg"

class IndexPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        }
    }

    componentDidMount() {
        this.upadateImg();
    }

    componentDidUpdate() {
        console.log("update");
        ReactDOM.findDOMNode(this).scrollIntoView(); //scroll back to top.
    }

    upadateImg = () => {
        const tempImg = [];
        for (let i = 0; i < 40; i++) {
            tempImg.push(
                {
                    id: i,
                    src: "Imgs/img-03.jpg",
                },
            )
        }
        this.setState({ images: tempImg });
    }

    sliceImages = (images, page) => {
        return images.slice(((page - 1) * 20), page * 20);
    }

    render() {
        let { images } = this.state;
        let page = parseInt(this.props.match.params.page);
        let NewImageArr = this.sliceImages(images, page);
        return (
            <div className="container-fluid tm-container-content tm-mt-60">
                <Title />
                <div className="row tm-mb-90 tm-gallery">
                    {NewImageArr.map((image) => {
                        return <Photo key={image.id} image={image} />
                    })}
                </div>
                <Pagination page={page} />
            </div>
        );
    }
}
IndexPages = withRouter(IndexPages);
export default IndexPages;
