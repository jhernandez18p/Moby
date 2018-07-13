import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Helmet from 'react-helmet';


class TopProducts extends Component {
    render() {
        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <div className="recent-feed">
                            <div className="feed-img">
                                <Link to="/producto/producto-1">
                                    <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt="producto 1"></img>
                                </Link>
                            </div>
                            <div className="feed-title">
                                <h3 className="is-size-4">
                                    <Link to="/producto/producto-1" className="has-text-black">Producto 1</Link>
                                </h3>
                            </div>
                            <div className="feed-leyend is-clearfix">
                                <p className="is-size-7 is-pulled-left">
                                    <span className="icon"><i className="fab fas-folder-open"></i></span>
                                    <Link to="/productos/todos?cat=Sobre" className="has-text-black">Sobre</Link>
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
                                <Link to="/producto/producto-2">
                                    <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt="producto 2"></img>
                                </Link>
                            </div>
                            <div className="feed-title">
                                <h3 className="is-size-4">
                                    <Link to="/producto/producto-2" className="has-text-black">Producto 2</Link>
                                </h3>
                            </div>
                            <div className="feed-leyend is-clearfix">
                                <p className="is-size-7 is-pulled-left">
                                    <span className="icon"><i className="fas fas-folder-open"></i></span>
                                    <Link to="/productos/todos?cat=Cantos" className="has-text-black">Cantos</Link>
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
                                <Link to="/producto/producto-3">
                                    <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt="producto 3"></img>
                                </Link>
                            </div>
                            <div className="feed-title">
                                <h3 className="is-size-4">
                                    <Link to="/producto/producto-3" className="has-text-black">Producto 3</Link>
                                </h3>
                            </div>
                            <div className="feed-leyend is-clearfix">
                                <p className="is-size-7 is-pulled-left">
                                    <span className="icon"><i className="fas fas-folder-open"></i></span>
                                    <Link to="/productos/todos?cat=Herrajes" className="has-text-black">Herrajes</Link>
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
                                <Link to="/producto/producto-4">
                                    <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt="producto 4"></img>
                                </Link>
                            </div>
                            <div className="feed-title">
                                <h3 className="is-size-4">
                                    <Link to="/producto/producto-4" className="has-text-black">Producto 4</Link>
                                </h3>
                            </div>
                            <div className="feed-leyend is-clearfix">
                                <p className="is-size-7 is-pulled-left">
                                    <span className="icon"><i className="fas fas-folder-open"></i></span>
                                    <Link to="/productos/todos?cat=Laminas" className="has-text-black">Laminas</Link>
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
                                <Link to="/producto/producto-5">
                                    <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt="producto 5"></img>
                                </Link>
                            </div>
                            <div className="feed-title">
                                <h3 className="is-size-4">
                                    <Link to="/producto/producto-5" className="has-text-black">Producto 5</Link>
                                </h3>
                            </div>
                            <div className="feed-leyend is-clearfix">
                                <p className="is-size-7 is-pulled-left">
                                    <span className="icon"><i className="fab fas-folder-open"></i></span>
                                    <Link to="/productos/todos?cat=Sobre" className="has-text-black">Sobre</Link>
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
                                <Link to="/producto/producto-6">
                                    <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt="producto 6"></img>
                                </Link>
                            </div>
                            <div className="feed-title">
                                <h3 className="is-size-4">
                                    <Link to="/producto/producto-6" className="has-text-black">Producto 6</Link>
                                </h3>
                            </div>
                            <div className="feed-leyend is-clearfix">
                                <p className="is-size-7 is-pulled-left">
                                    <span className="icon"><i className="fas fas-folder-open"></i></span>
                                    <Link to="/productos/todos?cat=Cantos" className="has-text-black">Cantos</Link>
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
                                <Link to="/producto/producto-7">
                                    <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt="producto 7"></img>
                                </Link>
                            </div>
                            <div className="feed-title">
                                <h3 className="is-size-4">
                                    <Link to="/producto/producto-7" className="has-text-black">Producto 7</Link>
                                </h3>
                            </div>
                            <div className="feed-leyend is-clearfix">
                                <p className="is-size-7 is-pulled-left">
                                    <span className="icon"><i className="fas fas-folder-open"></i></span>
                                    <Link to="/productos/todos?cat=Herrajes" className="has-text-black">Herrajes</Link>
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
                                <Link to="/producto/producto-8">
                                    <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt="producto 8"></img>
                                </Link>
                            </div>
                            <div className="feed-title">
                                <h3 className="is-size-4">
                                    <Link to="/producto/producto-8" className="has-text-black">Producto 8</Link>
                                </h3>
                            </div>
                            <div className="feed-leyend is-clearfix">
                                <p className="is-size-7 is-pulled-left">
                                    <span className="icon"><i className="fas fas-folder-open"></i></span>
                                    <Link to="/productos/todos?cat=Laminas" className="has-text-black">Laminas</Link>
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
        );
    }
}
        
export default TopProducts;