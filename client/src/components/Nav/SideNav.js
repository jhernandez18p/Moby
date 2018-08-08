import React, { Component } from 'react';
import { Link } from "react-router-dom";


class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    componentDidMount(){};

    componentDidUpdate(){};

    componentWillReceiveProps(){};

    render() {
        return (
            <div className="">
                <aside className="menu">
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li>
                            <Link to={{
                                pathname:"/intra",
                                state:{url:'home'}
                            }} className={this.current === '/intra' ? "is-active" : ''}>Inicio</Link>
                        </li>
                        <li>
                            <Link to="/intra/perfil" className={this.current === '/intra/perfil' ? "is-active" : ''}>Mi Perfil</Link>
                        </li>
                        <li>
                            <Link to="/intra/servicios" className={this.current === '/intra/servicios' ? "is-active" : ''}>Servicios</Link>
                        </li>
                        <li>
                            <Link to="/intra/productos" className={this.current === '/intra/productos' ? "is-active" : ''}>Productos</Link>
                        </li>
                        <li>
                            <Link to="/intra/blog" className={this.current === '/intra/blog' ? "is-active" : ''}>Blog</Link>
                        </li>
                    </ul>
                    <p className="menu-label">
                        Administración
                    </p>
                    <ul className="menu-list">
                        <li>
                            <Link to="/intra/administracion/usuarios">Usuarios</Link>
                        </li>
                        <li>
                            <Link to="/intra/administracion/productos">Productos</Link>
                        </li>
                        <li>
                            <ul>
                                <li>
                                    <Link to="/intra/administracion/productos/top-10">Top 10 productos</Link>
                                </li>
                                <li>
                                    <Link to="/intra/administracion/productos/cargar-fotos">Cargar fotos de productos</Link>
                                </li>
                                <li>
                                    <Link to="/intra/administracion/productos/cargar-productos">Cargar productos</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/intra/administracion/sitio">Sitio web</Link>
                        </li>
                        <li>
                            <Link to="/intra/administracion/suscripciones">Suscripciones</Link>
                        </li>
                    </ul>
                    {/* <p className="menu-label">
                        Tickets
                    </p>
                    <ul className="menu-list">
                        <li>
                            <Link to="/intra/tickets">Mis tickets</Link>
                        </li>
                        <li>
                            <Link to="/intra/tickets/abiertos">Abiertos</Link>
                        </li>
                        <li>
                            <Link to="/intra/tickets/cerrados">Cerrados</Link>
                        </li>
                    </ul> */}
                </aside>
            </div>
        );
    }
}

export default SideNav;