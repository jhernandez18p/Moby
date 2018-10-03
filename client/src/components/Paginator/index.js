import React, { Component } from "react";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPrev1: false,
            hasPrev2: false,
            hasNext1: true,
            hasNext2: true,
            hasNext3: true,
        }
    }

    render() {
        let hasPrev = this.props.hasPrev || false;
        let hasNext = this.props.hasNext || false;
        let totalPages = this.props.pages || 1;
        let currentPage = this.props.currentPage || 1;

        let next = currentPage + 1; let next2 = currentPage + 2; let next3 = currentPage + 3;
        let prev = currentPage - 1; let prev2 = currentPage - 2; let prev3 = currentPage - 3;

        let numbers = <ul className="pagination-list"><li><a className="pagination-link">1</a></li></ul>;
        if (currentPage === 1 && totalPages === 1) {
            numbers = (
                <ul className="pagination-list">
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link is-current">{currentPage}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                </ul>
            )
        } else if (currentPage === 1 && totalPages > 1) {
            numbers = (
                <ul className="pagination-list">
                    <li><a className="pagination-link is-current">{currentPage}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next2)} >{next2}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next3)} >{next3}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, totalPages)}>{totalPages}</a></li>
                </ul>
            )
        } else if (currentPage === 2 && totalPages > 1) {
            numbers = (
                <ul className="pagination-list">
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link is-current">{currentPage}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next2)} >{next2}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, totalPages)}>{totalPages}</a></li>
                </ul>
            )
        } else if (currentPage === 3 && totalPages > 1) {
            numbers = (
                <ul className="pagination-list">
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev2)}>{prev2}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</a></li>
                    <li><a className="pagination-link is-current">{currentPage}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, totalPages)}>{totalPages}</a></li>
                </ul>
            )
        } else if (currentPage >= 4 && currentPage < (totalPages - 2)) {
            numbers = (
                <ul className="pagination-list">
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, 1)}>1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</a></li>
                    <li><a className="pagination-link is-current">{currentPage}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, totalPages)}>{totalPages}</a></li>
                </ul>
            )
        } else if (currentPage === totalPages) {
            numbers = (
                <ul className="pagination-list">
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, 1)}>1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev3)}>{prev3}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev2)}>{prev2}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link is-current">{currentPage}</a></li>
                </ul>
            )
        } else if (currentPage === (totalPages - 1)) {
            numbers = (
                <ul className="pagination-list">
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, 1)}>1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev2)}>{prev2}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</a></li>
                    <li><a className="pagination-link is-current">{currentPage}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</a></li>
                </ul>
            )
        } else if (currentPage === (totalPages - 2)) {
            numbers = (
                <ul className="pagination-list">
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, 1)}>1</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</a></li>
                    <li><a className="pagination-link is-current">{currentPage}</a></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</a></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.nextPage(e, next2)} >{next2}</a></li>
                </ul>
            )
        }


        return (
            <div className="container" id="">
                <nav className="pagination is-centered">
                    {hasPrev ? <a className="pagination-previous" onClick={(e) => this.props.previousPage(e, prev)}>Anterior</a> : <a className="pagination-previous" disabled >Anterior</a>}
                    {hasNext ? <a className="pagination-next" onClick={(e) => this.props.nextPage(e, next)}>Siguiente</a> : <a className="pagination-next" disabled>Siguiente</a>}
                    {numbers}
                </nav>
            </div>
        );
    }
}

export default Pagination;