import React, { Component } from "react";
import { Link } from 'react-router-dom';


class ServicesList extends Component {
    render() {
        return (
            <div>
                <div className="container" id="feeds">
                    <div className="columns">
                        <div className="column">
                            <div className="recent-feed">
                                <div className="feed-img">
                                    <Link to="/servicios/canteo">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/servicios/canteo" className="has-text-black">Canteo</Link>
                                    </h3>
                                </div>
                                <div className="feed-content">
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="recent-feed">
                                <div className="feed-img">
                                    <Link to="/servicios/cortes">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/servicios/cortes" className="has-text-black">Cortes</Link>
                                    </h3>
                                </div>
                                <div className="feed-content">
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="recent-feed">
                                <div className="feed-img">
                                    <Link to="/servicios/perforacion">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/servicios/perforacion" className="has-text-black">Perforación</Link>
                                    </h3>
                                </div>
                                <div className="feed-content">
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesList;