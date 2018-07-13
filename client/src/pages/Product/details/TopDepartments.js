
import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';


class TopDepartments extends Component {
    render() {
        return (
            <div>

                <div className="columns is-variable bd-klmn-columns is-1">
                    <div className="column is-3">

                        <div className="has-background-grey-lighter">
                            <div className="card is-centered overlayer">
                                <div className="content-overlay"></div>
                                <img className="content-image" alt="Productos de moby" src="http://estag.fimagenes.com/img/3/l/z/p/lzp_900.jpg"></img>
                                <div className="content-details fadeIn-top">
                                    <Link to="/productos/todos?cat=Cantos">
                                        <h3>Cantos</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column is-3">
                        <div className="has-background-grey-lighter">
                            <div className="card is-centered overlayer">
                                <div className="content-overlay"></div>
                                <img className="content-image" alt="Servicios de moby" src="http://www.marmolestarlich.com/es/assets/materiales/granitos-exposicion.jpg"></img>
                                <div className="content-details fadeIn-top">
                                    <Link to="/productos/todos?cat=Sobres">
                                        <h3>Sobres</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column is-3">
                        <div className="has-background-grey-lighter">
                            <div className="card is-centered overlayer">
                                <div className="content-overlay"></div>
                                <img className="content-image" alt="Productos de moby" src="http://www.masisa.com/arg/wp-content/uploads/2016/02/Portada-MDF-Melamina.jpg"></img>
                                <div className="content-details fadeIn-top">
                                    <Link to="/productos/todos?cat=Laminas">
                                        <h3>Laminas</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column is-3">
                        <div className="has-background-grey-lighter">
                            <div className="card is-centered overlayer">
                                <div className="content-overlay"></div>
                                <img className="content-image" alt="Servicios de moby" src="http://www.handyhome.com.mx/handlers/mostrarimagenproducto.ashx?id=94&idi=0"></img>
                                <div className="content-details fadeIn-top">
                                    <Link to="/productos/todos?cat=Herrajes">
                                        <h3>Herrajes</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
        
export default TopDepartments;