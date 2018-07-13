import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets


class ProductsNav extends Component {

    toggeable() {
    }
    goBack = (e) =>{
        // const location = window.history.forward();
        if (window.history.back){
          window.history.back();
        }
      };
    render() {
        return (
            <div>
                <nav className="navbar is-fixed-top has-navbar-gradient" id="productsNavBar">

                    <div className="container">
                        <div className="navbar-brand">
                            <p onClick={this.goBack} className="navbar-item">
                                <span className="icon has-text-black">
                                    <i className="fas fa-arrow-left"></i>
                                </span> Volver
                            </p>
                            <span className={this.props.showMenu ? "navbar-burger" : "navbar-burger is-active"}
                                onClick={this.props.toggleMenu} ref="isBurger" data-target="navMenu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div id="navMenu" className={this.props.showMenu ? "navbar-menu" : "navbar-menu is-active"}>
                            <div className="navbar-end is-hidden-touch ">
                                <div className="field has-addons">
                                    <div className="control has-background-white">
                                        <input className="input" type="text" placeholder="Buscar un producto"></input>
                                    </div>
                                    <div className="control">
                                        <a className="button is-info">
                                            Buscar
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="navbar-end is-hidden-desktop">
                                <Link onClick={this.props.toggleMenu} to="/" className="navbar-item">
                                <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Regresar a inicio">
                                    <i className="fas fa-home"></i>
                                </span>
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

export default ProductsNav;