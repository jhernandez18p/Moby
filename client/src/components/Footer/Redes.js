import React, { Component } from 'react'; 

class RedesLine extends Component {

    render() {
        return (    
            <div className="has-footer-background-dark is-fullhd">
                <div className="container">
                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p className="navbar-item is-size-6 has-text-white">
                                    Síguenos en nuestras redes sociales!
                                </p>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item has-text-white">
                                <span className="icon has-text-white">
                                    <i className="fab fa-facebook-f has-text-white"></i>
                                </span>
                            </div>
                            <div className="level-item has-text-white">
                                <span className="icon has-text-white">
                                    <i className="fab fa-instagram has-text-white"></i>
                                </span>
                            </div>
                            <div className="level-item has-text-white">
                                <span className="icon has-text-white">
                                    <i className="fab fa-twitter has-text-white"></i>
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

export default RedesLine;