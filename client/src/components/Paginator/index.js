import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasPrev1: false,
            hasPrev2: false,
            hasNext1: true,
            hasNext2: true,
            hasNext3: true,
            urlParams: ''
        }
    }

    componentDidUpdate(prevProps, prevState){
        // if (this.state.urlParams !== prevState.urlParams){
        //    console.log(this.state.urlParams !== prevState.urlParams);
        // }
    }

    render() {
        let hasPrev = this.props.hasPrev || false;
        let hasNext = this.props.hasNext || false;
        let totalPages = this.props.pages || 1;
        let currentPage = this.props.currentPage || 1;
        let urlPage = this.props.urlPage || '';
        let urlParams = this.props.urlParams || '';

        // if (urlParams !== ''){
        //     console.log(urlParams)
        // }

        let next = currentPage + 1; let next2 = currentPage + 2; let next3 = currentPage + 3;
        let prev = currentPage - 1; let prev2 = currentPage - 2; let prev3 = currentPage - 3;

        let numbers = <ul className="pagination-list"><li><a className="pagination-link">-1-</a></li></ul>;
        if (currentPage === 1 && totalPages === 1) {
            numbers = (
                <ul className="pagination-list">
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                </ul>
            )
        } else if (currentPage === 1 && totalPages === 1) {
            numbers = (
                <ul className="pagination-list">
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                </ul>
            )
        } else if (currentPage === 1 && totalPages > 1) {
            numbers = (
                <ul className="pagination-list">
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    {   
                        totalPages > next
                        ?<li><Link to={`${urlPage}?page=${next}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</Link></li>
                        :<span></span>
                    }
                    {   
                        totalPages > next2
                        ?<li><Link to={`${urlPage}?page=${next2}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next2)} >{next2}</Link></li>
                        :<span></span>
                    }
                    {
                        totalPages > next3
                        ?<li><Link to={`${urlPage}?page=${next3}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next3)} >{next3}</Link></li>
                        :<span></span>
                    }
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${totalPages}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, totalPages)}>{totalPages}</Link></li>
                </ul>
            )
        } else if (currentPage === 2 && totalPages >= currentPage) {
            numbers = (
                <ul className="pagination-list">
                    <li><Link to={`${urlPage}?page=${prev}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                    {   
                        totalPages > next
                        ?<li><Link to={`${urlPage}?page=${next2}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</Link></li>
                        :<span></span>
                    }
                    {
                        totalPages > next2
                        ?<li><Link to={`${urlPage}?page=${next3}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next2)} >{next2}</Link></li>
                        :<span></span>
                    }
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${totalPages}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, totalPages)}>{totalPages}</Link></li>
                </ul>
            )
        } else if (currentPage === 3 && totalPages >= 1) {
            numbers = (
                <ul className="pagination-list">
                    <li><Link to={`${urlPage}?page=${prev2}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev2)}>{prev2}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${prev}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</Link></li>
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                    <li><Link to={`${urlPage}?page=${next}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${totalPages}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, totalPages)}>{totalPages}</Link></li>
                </ul>
            )
        } else if (currentPage >= 4 && currentPage < (totalPages - 2)) {
            numbers = (
                <ul className="pagination-list">
                    <li><Link to={`${urlParams}?page=1`} className="pagination-link" onClick={(e) => this.props.previousPage(e, 1)}>1</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${prev}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</Link></li>
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                    <li><Link to={`${urlPage}?page=${next}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${totalPages}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, totalPages)}>{totalPages}</Link></li>
                </ul>
            )
        } else if (currentPage === totalPages) {
            numbers = (
                <ul className="pagination-list">
                    <li><Link to={`${urlParams}?page=1`} className="pagination-link" onClick={(e) => this.props.previousPage(e, 1)}>1</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><a className="pagination-link" onClick={(e) => this.props.previousPage(e, prev3)}>{prev3}</a></li>
                    <li><Link to={`${urlPage}?page=${prev2}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev2)}>{prev2}</Link></li>
                    <li><Link to={`${urlPage}?page=${prev}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                </ul>
            )
        } else if (currentPage === (totalPages - 1)) {
            numbers = (
                <ul className="pagination-list">
                    <li><Link to={`${urlParams}?page=1`} className="pagination-link" onClick={(e) => this.props.previousPage(e, 1)}>1</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${prev2}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev2)}>{prev2}</Link></li>
                    <li><Link to={`${urlPage}?page=${prev}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</Link></li>
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${next}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</Link></li>
                </ul>
            )
        } else if (currentPage === (totalPages - 2)) {
            numbers = (
                <ul className="pagination-list">
                    <li><Link to={`${urlParams}?page=1`} className="pagination-link" onClick={(e) => this.props.previousPage(e, 1)}>1</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${prev}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.previousPage(e, prev)}>{prev}</Link></li>
                    <li><Link to={`${urlPage}?page=${currentPage}&${urlParams}`} className="pagination-link is-current">{currentPage}</Link></li>
                    <li><Link to={`${urlPage}?page=${next}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next)} >{next}</Link></li>
                    <li><span className="pagination-ellipsis">&hellip;</span></li>
                    <li><Link to={`${urlPage}?page=${next2}&${urlParams}`} className="pagination-link" onClick={(e) => this.props.nextPage(e, next2)} >{next2}</Link></li>
                </ul>
            )
        }


        return (
            <div >
                <nav className="pagination is-centered">
                    {hasPrev ? <Link to={`${urlPage}?page=${prev}&${urlParams}`} className="pagination-previous" onClick={(e) => this.props.previousPage(e, prev)}>Anterior</Link> : <a className="pagination-previous" disabled >Anterior</a>}
                    {hasNext ? <Link to={`${urlPage}?page=${next}&${urlParams}`} className="pagination-next" onClick={(e) => this.props.nextPage(e, next)}>Siguiente</Link> : <a className="pagination-next" disabled>Siguiente</a>}
                    {numbers}
                </nav>
            </div>
        );
    }
}

export default Pagination;