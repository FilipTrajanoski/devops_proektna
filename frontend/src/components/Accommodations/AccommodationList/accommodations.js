import React, {Component} from "react";
import {Link} from "react-router-dom";
import AccommodationTerm from "../AccommodationTerm/accommodationTerm";
import ReactPaginate from "react-paginate";


class Accommodations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render() {

        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const notRentedAccommodations = this.props.accommodations.filter(term => !term.isRented);
        const pageCount = Math.ceil(notRentedAccommodations.length / this.state.size);
        const accommodations = this.getAccommodationsPage(offset, nextPageOffset, notRentedAccommodations);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"table-responsive"}>
                        <table className={"table table-striped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Host name</th>
                                <th scope={"col"}>Number of rooms</th>
                            </tr>
                            </thead>
                            <tbody>
                            {accommodations}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <Link className={"btn btn-block btn-dark"} to={"/accommodations/add"}>Add new
                                accommodation</Link>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"Prev"}
                               nextLabel={"Next"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"mx-2"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;

        this.setState({
            page: selected
        })
    }

    getAccommodationsPage = (offset, nextPageOffset, notRentedAccommodations) => {
        return notRentedAccommodations.map((term) => {
                return (
                    <AccommodationTerm term={term} onEdit={this.props.onEdit}
                                       onDelete={this.props.onDelete}
                                       onRent={this.props.onRent}/>
                );
        }).filter((accommodation, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}

export default Accommodations;