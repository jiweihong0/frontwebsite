import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        const { page } = this.props;
        const lists = [1, 2, 3, 4];
        return (
            <div className="row tm-mb-90">
                <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
                    <a href="#" className="btn btn-primary tm-btn-prev mb-2 disabled">Previous</a>
                    <div className="tm-paging d-flex">
                        {lists.map((value) => {
                            if (value == page) {
                                return <Link key={value} className="active tm-paging-link" to={"/Indexpages" + value}>{value}</Link>
                            }
                            else {
                                return <Link key={value} className="tm-paging-link" to={"/Indexpages" + value}>{value}</Link>
                            }
                        })}
                        {/* <Link className="active tm-paging-link" to="/Indexpages1">1</Link>
                    <Link className="tm-paging-link" to="/Indexpages2">2</Link>
                    <Link className="tm-paging-link" to="/Indexpages3">3</Link>
                    <Link className="tm-paging-link" to="/Indexpages4">4</Link> */}
                    </div>
                    <a href="#" className="btn btn-primary tm-btn-next">Next Page</a>
                </div>
            </div>
        );
    }
}

export default Pagination;