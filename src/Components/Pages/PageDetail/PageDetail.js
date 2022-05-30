import React, { Component } from 'react';
import { Alert } from "react-bootstrap";
import '../../../index.css'
class PageDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {console.log(this.props.data[0].imgur[1])}
                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{backgroundColor:'lightblue'}}>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <section className="overflow-hidden text-gray-700">
                                <div className="container px-5 py-2 mx-auto lg:pt-10 lg:px-20">
                                    <div className="flex flex-wrap ">
                                        <div className="flex flex-wrap w-1/2">
                                            <div className="w-full p-1 out-container relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src={this.props.data[0].imgur[1]}/>
                                                <div className="text-white opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl  font-semibold">{this.props.data[0].title}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <section className="overflow-hidden text-gray-700">
                                <div className="container px-5 py-2 mx-auto lg:pt-10 lg:px-20">
                                    <div className="flex flex-wrap col-xl-12 h-120 ">
                                        <div className="flex flex-wrap w-1/2">
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="carousel-item">
                            <section className="overflow-hidden text-gray-700">
                                <div className="container px-5 py-2 mx-auto lg:pt-5 lg:px-10">
                                    <div className="flex flex-wrap col-xl-12 h-120 ">
                                        <div className="flex flex-wrap w-2/4">
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                            <div className="w-full p-1 hover:py-2 hover:opacity-30 relative group">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-0 flex justify-center items-center text-3xl text-white font-semibold">陽台</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="z-30">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="z-20">Next</span>
                    </button>
                </div>
                    ##################################################################
                    <div className="m-right">
                        <div className="tm-bg-gray tm-video-details ">
                            <font size="10">
                                {this.props.data[0].title}
                            </font><br/>
                            <div className="row">
                                <span className="col-auto bg-dark text-white mx-2 px-4 rounded">123</span>
                                <span className="col-auto bg-dark text-white mx-2 px-4 rounded">123</span>
                                <span className="col-auto bg-dark text-white mx-2 px-4 rounded">123</span>
                            </div>
                            <div className="row">
                                <div className="col col-4">1</div>
                                <div className="col col-8">2</div>
                            </div>
                            <span>123456</span><br/>
                            <span>000000</span><br/>
                            <span>456789</span>
                            <div className="mb-4 d-flex flex-wrap">
                                <div className="mr-4 mb-2">
                                    <span className="tm-text-gray-dark">Dimension: </span><span className="tm-text-primary">1920x1080</span>
                                </div>
                                <div className="mr-4 mb-2">
                                    <span className="tm-text-gray-dark">Format: </span><span className="tm-text-primary">JPG</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 className="tm-text-gray-dark mb-3">License</h3>
                                <p>Free for both personal and commercial use. No need to pay anything. No need to make any attribution.</p>
                            </div>
                            <div>
                                <h3 className="tm-text-gray-dark mb-3">Tags</h3>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Cloud</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Bluesky</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Nature</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Background</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Timelapse</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Night</a>
                                <a href="#" className="tm-text-primary mr-4 mb-2 d-inline-block">Real Estate</a>
                            </div>
                        </div>
                    </div>
             
           
            </div> 
        );
    }
}

export default PageDetail;