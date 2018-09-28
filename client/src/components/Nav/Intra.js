import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets
import Logo from '../../assets/images/logo.png';

class IntraNav extends Component {

    toggeable() {
    }

    goBack = (e) => {
        if (window.history.back) { window.history.back(); }
    };
    render() {

        let breadcrumb = this.props.breadcrumb;

        let breadcrumbItems = breadcrumb.slice(1, breadcrumb.length).map((link, key) => {
            let url = link;
            if (key === 0) { url = `/${link}`; }
            else if (key === 1) { url = `/intra/${link}`; }
            else if (key === 2) { url = `/intra/administracion/${link}`; }

            let html = <li key={key.toString()} className="navbar-item is-nav-link"><Link className="has-text-black is-uppercase" to={url}>{link}</Link></li>;
            if (breadcrumb.length - 1 === key + 1) {
                html = <li key={key.toString()} className="navbar-item is-nav-link is-active"><Link className="has-text-black is-uppercase" to={url}>{link}</Link></li>;
            }
            return html;
        });

        return (
            <div>
                <nav className="navbar is-fixed-top" id="intraNav">

                    <div className="container">
                        <div id="navMenu" className={this.props.showMenu ? "navbar-menu" : "navbar-menu is-active"}>
                            <div className="navbar-start is-hidden-touch ">
                                <a className="is-uppercase navbar-item is-nav-button" onClick={this.goBack}>
                                    <span className="icon has-text-black">
                                        <i className="fas fa-long-arrow-alt-left"></i>
                                    </span>
                                </a>
                                <Link data-target="navMenu" to="/intra" className="is-uppercase navbar-item is-nav-link">
                                    <span className="icon has-text-black">
                                        <i className="fas fa-home"></i>
                                    </span>
                                </Link>
                                <div className="breadcrumb has-succeeds-separator">
                                    <ul className="is-marginless is-paddingless">
                                        {breadcrumbItems}
                                    </ul>
                                </div>
                            </div>
                            <div className="navbar-start is-hidden-desktop">
                                <Link onClick={this.props.toggleMenu} to="/intra" className="navbar-item">
                                    <img src={Logo} alt="Moby Group:" id="is-logo"></img>
                                </Link>
                                <Link onClick={this.props.toggleMenu} data-target="navMenu" to="/intra" className="is-uppercase navbar-item">Inicio</Link>
                            </div>
                            <div className="is-hidden-desktop is-fullnav-auth">
                                <Link to="/" className="is-uppercase is-size-7 has-text-black">
                                    <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Volver al home">
                                        <i className="fas fa-sign-in-alt"></i>
                                    </span>
                                    Salir de intra
                                </Link>

                                <span className="icon has-text-black">
                                    <i className="fas fa-exchange-alt"></i>
                                </span>

                                <Link to="/auth/salir" className="is-uppercase is-size-7 has-text-black">
                                    <span className="icon has-text-black tooltip is-tooltip-bottom" data-tooltip="Cerrar Sesión">
                                        <i className="fas fa-user-plus"></i>
                                    </span>
                                    Cerrar Sesión
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-brand">
                            <Link to="/" className="navbar-item is-uppercase ">
                                Salir de intra
                            </Link>
                            <Link to="/auth/salir" className=" navbar-item is-uppercase has-text-black">
                                Cerrar Sesión
                            </Link>
                            <span className={this.props.showMenu ? "navbar-burger" : "navbar-burger is-active"}
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