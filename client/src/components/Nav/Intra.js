import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets
import Logo from '../../assets/images/logo.png';

class IntraNav extends Component {

    toggeable(){
    }
    render() {
        return (
            <div className="">
                <nav className="navbar is-fixed-top" id="intraNav">

                    <div className="container">
                        <div id="navMenu" className={ this.props.showMenu ? "navbar-menu" : "navbar-menu is-active" }>
                            <div className="navbar-start is-hidden-touch ">
                                <Link data-target="navMenu" to="/intra" className="is-uppercase navbar-item is-nav-link">
                                    <span className="icon has-text-black">
                                        <i className="fas fa-home"></i>
                                    </span>
                                </Link>
                            </div>
                            <div className="navbar-start is-hidden-desktop">
                                <Link onClick={this.props.toggleMenu} to="/intra" className="navbar-item">
                                    <img src={ Logo } alt="Moby Group:" id="is-logo"></img>
                                </Link>
                                <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/intra" className="is-uppercase navbar-item">Inicio</Link>
                            </div>
                            <div className="is-hidden-desktop is-fullnav-auth">
                                <Link to="/auth/iniciar-sesion" className="is-uppercase is-size-7 has-text-black">
                                    <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Iniciar sesión">
                                        <i className="fas fa-sign-in-alt"></i>
                                    </span>
                                    Iniciar sesión
                                </Link>
                                
                                <span className="icon has-text-black">
                                    <i className="fas fa-exchange-alt"></i>
                                </span>

                                <Link to="/auth/registro" className="is-uppercase is-size-7 has-text-black">
                                    <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Registrarse">
                                        <i className="fas fa-user-plus"></i>
                                    </span>
                                    Registrarse
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item">
                                <img src={ Logo } alt="Moby Group:" id="is-logo"></img>
                            </Link>
                            <span className={ this.props.showMenu ? "navbar-burger" : "navbar-burger is-active" }
                            onClick={this.props.toggleMenu} ref="isBurger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default IntraNav;