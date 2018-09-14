import React, { Component } from "react";

class Pagination extends Component {

    render() {
        // console.log(this.props)
        // let postsCountLimit = this.props.postsCountLimit;
        // let postsCount = this.props.postsCount;
        // let currentPage = this.props.currentPage;
        // let limitPage = this.props.limitPage;
        // let offsetPage = this.props.offsetPage;
        // let urlPage = this.props.urlPage;
        // let nextPage = this.props.nextPage;
        // let previousPage = this.props.previousPage;


        // console.log(
        //     'postsCountLimit ->', postsCountLimit, '\n',
        //     'postsCount ->', postsCount, '\n',
        //     'currentPage ->', currentPage, '\n',
        //     'limitPage ->', limitPage, '\n',
        //     'offsetPage ->', offsetPage, '\n',
        //     'urlPage ->', urlPage, '\n',
        //     'nextPage ->', nextPage, '\n',
        //     'previousPage ->', previousPage, '\n',
        // );

        return (
            <div className="container" id="">
                <nav className="pagination is-centered">
                    <a className="pagination-previous" onClick={this.props.previousPage} disabled={ this.props.hasPrev } >Anterior</a>
                    <a className="pagination-next" onClick={this.props.nextPage} disabled={ this.props.hasNext }>Siguiente</a>
                    {/* <ul className="pagination-list">
                        <li onClick={() => this.props.click()}><a className="pagination-link">1</a></li>
                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                        <li><a className="pagination-link">45</a></li>
                        <li><a className="pagination-link is-current"aria-current="page">46</a></li>
                        <li><a className="pagination-link">47</a></li>
                        <li><span className="pagination-ellipsis">&hellip;</span></li>
                        <li><a className="pagination-link">86</a></li>
                    </ul> */}
                </nav>
            </div>
        );
    }
}

export default Pagination;