import React, { Component } from "react";
import {Link} from 'react-router-dom';

import DOMPurify from 'dompurify';

class Banner extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="columns" id="about">
                        <div className="column is-6 is-offset-3">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">
                                        {this.props.siteName}
                                    </p>
                                    <div className="subtitle" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.siteShortDesc) }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="container" id="services">
                        <div className="columns">
                            <div className="column is-4 is-offset-2">
                                <div className="card is-centered overlayer">
                                    <div className="content-overlay"></div>
                                    <img className="content-image" alt="Productos de moby" src={ this.props.siteServiceImg }></img>
                                    <div className="content-details fadeIn-top">
                                        <Link to="/productos">
                                            <h3>Conozca nuestros Productos</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-4">
                                <div className="card is-centered overlayer">
                                    <div className="content-overlay"></div>
                                    <img className="content-image" alt="Servicios de moby" src={ this.props.siteProductImg }></img>
                                    <div className="content-details fadeIn-top">
                                        <Link to="/servicios">
                                            <h3>Conozca nuestros servicios</h3>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;