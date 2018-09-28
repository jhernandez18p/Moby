import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

// Assets
import Logo from '../../assets/images/logo.png';

class Nav extends Component {

    render() {
        if (this.props.isAuthenticated) {
            return (
                <div>
                    <div className="has-background-white">
                        <nav className="navbar is-fixed-top  has-background-transparent is-hidden-touch" id="authNavbar">
                            <div className="container">
                                <div className="navbar-menu">
                                    <div className="navbar-end">
                                        <Link to="/contacto" className="is-uppercase is-size-7 has-text-black">
                                            <span className="icon has-text-black tooltip is-tooltip-left" data-tooltip="Contáctenos">
                                                <i className="fas fa-phone"></i>
                                            </span>
                                            {
                                                this.props.sitePhone
                                                ? this.props.sitePhone
                                                : '+(507) 800 MOBY'
                                            }
                                        </Link>
                                        <Link to="/intra" className="is-uppercase is-size-7 has-text-black">
                                            <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Intranet">
                                                <i className="fas fa-user-plus"></i>
                                            </span>
                                            Intra
                                    </Link>
                                        <Link to="/auth/salir" className="is-uppercase is-size-7 has-text-black">
                                            <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Salir">
                                                <i className="fas fa-sign-in-alt"></i>
                                            </span>
                                            Salir
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <nav className="navbar is-fixed-top has-navbar-gradient" id="fullNavbar">

                            <div className="container">
                                <div className="navbar-brand">
                                    <Link to="/" className="navbar-item">
                                        <img src={Logo} alt="Moby Group:" id="is-logo"></img>
                                    </Link>
                                    <span className={this.props.showMenu ? "navbar-burger" : "navbar-burger is-active"}
                                        onClick={this.props.toggleMenu} ref="isBurger" data-target="navMenu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </span>
                                </div>
                                <div id="navMenu" className={this.props.showMenu ? "navbar-menu" : "navbar-menu is-active"}>
                                    <div className="navbar-end is-hidden-touch ">
                                        <NavLink activeClassName="selected" exact data-target="navMenu" to="/" className="is-uppercase navbar-item is-nav-link">Inicio</NavLink>
                                        <NavLink activeClassName="selected"  data-target="navMenu" to="/servicios" className="is-uppercase navbar-item is-nav-link">Servicios</NavLink>
                                        <NavLink activeClassName="selected"  data-target="navMenu" to="/productos" className="is-uppercase navbar-item is-nav-link">Productos</NavLink>
                                        <NavLink activeClassName="selected"  data-target="navMenu" to="/blog" className="is-uppercase navbar-item is-nav-link">Blog</NavLink>
                                        <NavLink activeClassName="selected"  data-target="navMenu" to="/contacto" className="is-uppercase navbar-item is-nav-link">Contacto</NavLink>
                                    </div>
                                    <div className="navbar-end is-hidden-desktop">
                                        <Link onClick={this.props.toggleMenu} to="/" className="navbar-item">
                                            <img src={Logo} alt="Moby Group:" id="is-logo"></img>
                                        </Link>
                                        <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/" className="is-uppercase navbar-item">Inicio</Link>
                                        <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/servicios" className="is-uppercase navbar-item">Servicios</Link>
                                        <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/productos" className="is-uppercase navbar-item">Productos</Link>
                                        <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/blog" className="is-uppercase navbar-item">Blog</Link>
                                        <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/contacto" className="is-uppercase navbar-item">Contacto</Link>
                                    </div>
                                    <div className="is-hidden-desktop is-fullnav-auth">
                                        <Link to="/intra" className="is-uppercase is-size-7 has-text-black">
                                            <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Intranet">
                                                <i className="fas fa-sign-in-alt"></i>
                                            </span>
                                            Intra
                                    </Link>

                                        <span className="icon has-text-black">
                                            <i className="fas fa-exchange-alt"></i>
                                        </span>

                                        <Link to="/auth/salir" className="is-uppercase is-size-7 has-text-black">
                                            <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Cerrar sesión">
                                                <i className="fas fa-user-plus"></i>
                                            </span>
                                            Salir
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="has-background-white">
                    <nav className="navbar is-fixed-top  has-background-transparent is-hidden-touch" id="authNavbar">
                        <div className="container">
                            <div className="navbar-menu">
                                <div className="navbar-end">
                                    <Link to="/contacto" className="is-uppercase is-size-7 has-text-black">
                                        <span className="icon has-text-black tooltip is-tooltip-left" data-tooltip="Contáctenos">
                                            <i className="fas fa-phone"></i>
                                        </span>
                                        {
                                            this.props.sitePhone
                                                ? this.props.sitePhone
                                                : '+(507) 800 MOBY'
                                        }
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
                    <nav className="navbar is-fixed-top has-navbar-gradient" id="fullNavbar">

                        <div className="container">
                            <div className="navbar-brand">
                                <Link to="/" className="navbar-item">
                                    <img src={Logo} alt="Moby Group:" id="is-logo"></img>
                                </Link>
                                <span className={this.props.showMenu ? "navbar-burger" : "navbar-burger is-active"}
                                    onClick={this.props.toggleMenu} ref="isBurger" data-target="navMenu">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                            </div>
                            <div id="navMenu" className={this.props.showMenu ? "navbar-menu" : "navbar-menu is-active"}>
                                <div className="navbar-end is-hidden-touch ">
                                    <NavLink activeClassName="selected" exact data-target="navMenu" to="/" className="is-uppercase navbar-item is-nav-link">Inicio</NavLink>
                                    <NavLink activeClassName="selected"  data-target="navMenu" to="/servicios" className="is-uppercase navbar-item is-nav-link">Servicios</NavLink>
                                    <NavLink activeClassName="selected"  data-target="navMenu" to="/productos" className="is-uppercase navbar-item is-nav-link">Productos</NavLink>
                                    <NavLink activeClassName="selected"  data-target="navMenu" to="/blog" className="is-uppercase navbar-item is-nav-link">Blog</NavLink>
                                    <NavLink activeClassName="selected"  data-target="navMenu" to="/contacto" className="is-uppercase navbar-item is-nav-link">Contacto</NavLink>
                                </div>
                                <div className="navbar-end is-hidden-desktop">
                                    <Link onClick={this.props.toggleMenu} to="/" className="navbar-item">
                                        <img src={Logo} alt="Moby Group:" id="is-logo"></img>
                                    </Link>
                                    <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/" className="is-uppercase navbar-item">Inicio</Link>
                                    <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/servicios" className="is-uppercase navbar-item">Servicios</Link>
                                    <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/productos" className="is-uppercase navbar-item">Productos</Link>
                                    <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/blog" className="is-uppercase navbar-item">Blog</Link>
                                    <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/contacto" className="is-uppercase navbar-item">Contacto</Link>
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
                        </div>
                    </nav>
                </div>
            );
        }
    }
}

export default Nav;