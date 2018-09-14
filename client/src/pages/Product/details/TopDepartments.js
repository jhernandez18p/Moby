
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';


class TopDepartments extends Component {
    
    render() {
        const department = this.props.department;
        // console.log(this.props);
        return (
            <div className="column is-3">
                <div className="has-background-grey-lighter">
                    <div className="card is-centered overlayer">
                        <div className="content-overlay"></div>
                        <img className="content-image" alt={ department.name } src={ department.background }></img>
                        <div className="content-details fadeIn-top">
                            <Link to={`/productos/todos?cat=${ department.slug }`}>
                                <h3>{ department.name }</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
        
export default TopDepartments;