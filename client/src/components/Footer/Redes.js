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
                                <span className="icon">
                                    <i className="fab fa-facebook-f"></i>
                                </span>
                            </div>
                            <div className="level-item has-text-white">
                                <span className="icon">
                                    <i className="fab fa-instagram"></i>
                                </span>
                            </div>
                            <div className="level-item has-text-white">
                                <span className="icon">
                                    <i className="fab fa-twitter"></i>
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