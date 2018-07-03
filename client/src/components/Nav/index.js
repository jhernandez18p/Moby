import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets
import Logo from '../../assets/images/logo.png';

class Nav extends Component {

    toggeable(){
    }
    render() {
        return (
            <div className="has-navbar-gradient">
                {/* Auth NavBar */}
                <nav className="navbar is-fixed-top  has-background-transparent is-hidden-touch" id="authNavbar">
                    <div className="container">
                        <div className="navbar-menu">
                            <div className="navbar-end">
                                <Link to="/contacto" className="is-uppercase is-size-7 has-text-black">
                                    <span className="icon has-text-black tooltip is-tooltip-left" data-tooltip="Contáctenos">
                                        <i className="fas fa-phone"></i>
                                    </span>
                                    +(507) 800 MOBY
                                </Link>
                                <Link to="/auth/registro" className="is-uppercase is-size-7 has-text-black">
                                    <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Registrarse">
                                        <i className="fas fa-user-plus"></i>
                                    </span>
                                    Registrarse
                                </Link>
                                <Link to="/auth/iniciar-sesion" className="is-uppercase is-size-7 has-text-black">
                                    <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Iniciar sesión">
                                        <i className="fas fa-sign-in-alt"></i>
                                    </span>
                                    Iniciar sesión
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* NavBar */}
                <nav className={ this.props.fixedMenu ? "navbar is-fixed-top" : "navbar is-fixed-top" } id="fullNavbar">

                    <div className="container">
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
                        <div id="navMenu" className={ this.props.showMenu ? "navbar-menu" : "navbar-menu is-active" }>
                            <div className="navbar-end">
                                <Link onClick={ this.toggeable } data-target="navMenu" to="/" className="is-uppercase navbar-item">Inicio</Link>
                                <Link onClick={ this.toggeable } data-target="navMenu" to="/servicios" className="is-uppercase navbar-item">Servicios</Link>
                                <Link onClick={ this.toggeable } data-target="navMenu" to="/productos" className="is-uppercase navbar-item">Productos</Link>
                                <Link onClick={ this.toggeable } data-target="navMenu" to="/blog" className="is-uppercase navbar-item">Blog</Link>
                                <Link onClick={ this.toggeable } data-target="navMenu" to="/contacto" className="is-uppercase navbar-item">Contacto</Link>
                                <Link onClick={ this.toggeable } data-target="navMenu" to="/auth/registrarse" className="is-uppercase navbar-item is-hidden-desktop">Registrarse</Link>
                                <Link onClick={ this.toggeable } data-target="navMenu" to="/auth/iniciar-sesion" className="is-uppercase navbar-item is-hidden-desktop">Iniciar sesión</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;