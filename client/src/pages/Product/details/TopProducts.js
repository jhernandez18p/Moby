import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';


class TopProducts extends Component {
    render() {
        return (
            <div>
                <div className="container" id="feeds">
                    <div className="columns">
                        <div className="column">
                            <div className="recent-feed">
                                <div className="feed-img">
                                    <Link to="/productos/:slug">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/productos/:slug" className="has-text-black">Publicación 4</Link>
                                    </h3>
                                </div>
                                <div className="feed-leyend is-clearfix">
                                    <p className="is-size-7 is-pulled-left">
                                        <span className="icon"><i className="fab fas-folder-open"></i></span>
                                        <Link to="/productos/todos?cat=Evanista" className="has-text-black">Evanista</Link>
                                    </p>
                                    <p className="is-size-7 is-pulled-right">
                                        <span className="icon"><i className="fab fas-clock"></i></span>
                                        15-ene-2018
                                    </p>
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
                                    <Link to="/productos/:slug">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/productos/:slug" className="has-text-black">Publicación 3</Link>
                                    </h3>
                                </div>
                                <div className="feed-leyend is-clearfix">
                                    <p className="is-size-7 is-pulled-left">
                                        <span className="icon"><i className="fas fas-folder-open"></i></span>
                                        <Link to="/productos/todos?cat=Evanista" className="has-text-black">Evanista</Link>
                                    </p>
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
                                    <Link to="/productos/:slug">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/productos/:slug" className="has-text-black">Publicación 2</Link>
                                    </h3>
                                </div>
                                <div className="feed-leyend is-clearfix">
                                    <p className="is-size-7 is-pulled-left">
                                        <span className="icon"><i className="fas fas-folder-open"></i></span>
                                        <Link to="/productos/todos?cat=Evanista" className="has-text-black">Evanista</Link>
                                    </p>
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
                                    <Link to="/productos/:slug">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/productos/:slug" className="has-text-black">Publicación 1</Link>
                                    </h3>
                                </div>
                                <div className="feed-leyend is-clearfix">
                                    <p className="is-size-7 is-pulled-left">
                                        <span className="icon"><i className="fas fas-folder-open"></i></span>
                                        <Link to="/productos/todos?cat=Evanista" className="has-text-black">Evanista</Link>
                                    </p>
                                </div>
                                <div className="feed-content">
                                    <p className="">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <div className="recent-feed">
                                <div className="feed-img">
                                    <Link to="/productos/:slug">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/productos/:slug" className="has-text-black">Publicación 4</Link>
                                    </h3>
                                </div>
                                <div className="feed-leyend is-clearfix">
                                    <p className="is-size-7 is-pulled-left">
                                        <span className="icon"><i className="fab fas-folder-open"></i></span>
                                        <Link to="/productos/todos?cat=Evanista" className="has-text-black">Evanista</Link>
                                    </p>
                                    <p className="is-size-7 is-pulled-right">
                                        <span className="icon"><i className="fab fas-clock"></i></span>
                                        15-ene-2018
                                    </p>
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
                                    <Link to="/productos/:slug">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/productos/:slug" className="has-text-black">Publicación 3</Link>
                                    </h3>
                                </div>
                                <div className="feed-leyend is-clearfix">
                                    <p className="is-size-7 is-pulled-left">
                                        <span className="icon"><i className="fas fas-folder-open"></i></span>
                                        <Link to="/productos/todos?cat=Evanista" className="has-text-black">Evanista</Link>
                                    </p>
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
                                    <Link to="/productos/:slug">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/productos/:slug" className="has-text-black">Publicación 2</Link>
                                    </h3>
                                </div>
                                <div className="feed-leyend is-clearfix">
                                    <p className="is-size-7 is-pulled-left">
                                        <span className="icon"><i className="fas fas-folder-open"></i></span>
                                        <Link to="/productos/todos?cat=Evanista" className="has-text-black">Evanista</Link>
                                    </p>
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
                                    <Link to="/productos/:slug">
                                        <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt=""></img>
                                    </Link>
                                </div>
                                <div className="feed-title">
                                    <h3 className="is-size-4">
                                        <Link to="/productos/:slug" className="has-text-black">Publicación 1</Link>
                                    </h3>
                                </div>
                                <div className="feed-leyend is-clearfix">
                                    <p className="is-size-7 is-pulled-left">
                                        <span className="icon"><i className="fas fas-folder-open"></i></span>
                                        <Link to="/productos/todos?cat=Evanista" className="has-text-black">Evanista</Link>
                                    </p>
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
        
export default TopProducts;