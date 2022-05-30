import React, { Component } from 'react';
import './PageDetail.css';


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
                                            <div className="w-full p-1 out_container relative group imgg" >
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300" 
                                                    src={this.props.data[0].imgur[1]}/>
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">{this.props.data[0].title}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                        <section className="overflow-hidden text-gray-700">
                                <div className="container px-5 py-2 mx-auto lg:pt-10 lg:px-20">
                                    <div className="flex flex-wrap ">
                                        <div className="flex flex-wrap w-1/2">
                                            <div className="w-full p-1 out_container relative group imgg" >
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300" 
                                                    src={this.props.data[0].imgur[1]}/>
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">{this.props.data[0].title}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="carousel-item">
                        <section className="overflow-hidden text-gray-700">
                                <div className="container px-5 py-2 mx-auto lg:pt-10 lg:px-20">
                                    <div className="flex flex-wrap ">
                                        <div className="flex flex-wrap w-1/2">
                                            <div className="w-full p-1 out_container relative group imgg" >
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300" 
                                                    src={this.props.data[0].imgur[1]}/>
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">{this.props.data[0].title}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap w-1/4">
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
                                            </div>
                                            <div className="w-full p-1 relative group imgg">
                                                <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg opacity-100 duration-300"
                                                    src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
                                                <div className="text-white opacity-0 duration-300 absolute inset-0 flex justify-center items-center text-3xl  font-semibold z-index-1">陽台</div>
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
                    {/* ################################################################## */}
                    <div className="m-right" style={{backgroundColor:'lightblue'}}>
                        <div className="tm-bg-gray tm-video-details mx-28">
                            <div className="row d-flex justify-content-between">
                                <div className="col col-6">
                                    <font size="10">
                                        {this.props.data[0].title}
                                    </font><br/>
                                    <div className="row py-1">
                                        <span className='col col-auto bg-info rounded px-1 ml-3 mr-1'>屋主直租</span>
                                        <span className="col col-auto bg-info rounded px-1 mx-1">拎包入住</span>
                                        <span className="col col-auto bg-info rounded px-1 mx-1">位於中心</span>
                                    </div>
                                    <div>
                                        <span className='col col-auto ml-2'>3-5坪</span>
                                        <span className='col col-auto bg-secondary line'/>
                                        <span className='col col-auto mx-1'>套房</span>
                                        <span className='col col-auto bg-secondary line'/>
                                        <span className='col col-auto mx-1'>陽台</span>
                                        <span className='col col-auto bg-secondary line'/>
                                    </div>
                                    <div className='price'>
                                        <b >
                                            <span className="money">6500</span>
                                        </b>
                                        <span>元/月</span>
                                    </div>
                                    <span>456789</span>
                                </div>
                                <div className="col col-3">
                                <div className="card" style={{width: '18rem'}}>
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" className="card-img-top" alt="aaa"/>
                                            <div className="card-body">
                                                <p className="card-text">
                                                    稱呼:<font size="5">王小明</font>房東
                                                </p>
                                                <p className="card-text">
                                                    聯絡電話 :<span className="h3">09xx-xxx-xxx</span>
                                                </p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0215687295736!2d120.35072181491356!3d22.727439685103217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e102e67d04e07%3A0x2d73f4c49d93a123!2z5aSn56S-5aSc5biC!5e0!3m2!1szh-TW!2stw!4v1653841878913!5m2!1szh-TW!2stw" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
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