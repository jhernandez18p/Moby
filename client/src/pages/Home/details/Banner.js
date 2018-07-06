import React, { Component } from "react";
import {Link} from 'react-router-dom';


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
                                        Moby Supply
                                    </p>
                                    <p className="subtitle">
                                        Moby Panamá, S.A. fue fundada en Panamá en el año 2011 estructurada en forma sociedad anónima. Actualmente, con más de 30 colaboradores, hacemos presencia en Panamá.
                                    </p>
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
                                    <img className="content-image" alt="Productos de moby" src="https://www.globalwoodmarketsinfo.com/wp-content/uploads/2016/08/hardwood7-635x300.jpg"></img>
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
                                    <img className="content-image" alt="Servicios de moby" src="http://img.cdn2.vietnamnet.vn/Images/english/2013/04/08/09/20130408093208-wood.jpg"></img>
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