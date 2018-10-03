import React, { Component } from 'react';
import { NavLink } from "react-router-dom";


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
        let user = this.props.user;
        
        let admItems = <div></div>;
        if (user.user.is_staff) {
            admItems = (
                <div>
                    <p className="menu-label">Administración </p>
                    <ul className="menu-list">
                        <li><NavLink activeClassName="selected" exact to="/intra/administracion/usuarios">Usuarios</NavLink></li>
                        <li><NavLink activeClassName="selected" exact to="/intra/administracion/productos">Productos</NavLink></li>
                        <li>
                            <ul>
                                <li><NavLink activeClassName="selected" exact to="/intra/administracion/productos/top-10">Top 10 productos</NavLink></li>
                                {/* <li><NavLink activeClassName="selected" exact to="/intra/administracion/productos/cargar-fotos">Cargar fotos de productos</NavLink></li> */}
                            </ul>
                        </li>
                        <li><NavLink activeClassName="selected" exact to="/intra/administracion/sitio">Sitio web</NavLink></li>
                        <li>
                            <ul>
                                <li><NavLink activeClassName="selected" exact to="/intra/administracion/sitio/carrouseles">Carrouseles</NavLink></li>
                                <li><NavLink activeClassName="selected" exact to="/intra/administracion/sitio/suscriptores">Suscriptores</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        }

        return (
            <div>
                <aside className="menu">
                    <p className="menu-label">
                        General
                    </p>
                    <ul className="menu-list">
                        <li><NavLink activeClassName="selected" exact to="/intra">Inicio</NavLink></li>
                        <li><NavLink activeClassName="selected" exact to="/intra/perfil">Mi Perfil</NavLink></li>
                        <li><NavLink activeClassName="selected" exact to="/intra/servicios" className="">Servicios</NavLink></li>
                        <li><NavLink activeClassName="selected" exact to="/intra/productos" className="">Productos</NavLink></li>
                        <li><NavLink activeClassName="selected" exact to="/intra/blog" className=''>Blog</NavLink></li>
                    </ul>
                    {admItems}
                    {/* <p className="menu-label">
                        Tickets
                    </p>
                    <ul className="menu-list">
                        <li>
                            <NavLink activeClassName="selected" exact to="/intra/tickets">Mis tickets</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" exact to="/intra/tickets/abiertos">Abiertos</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="selected" exact to="/intra/tickets/cerrados">Cerrados</NavLink>
                        </li>
                    </ul> */}
                </aside>
            </div>
        );
    }
}

export default SideNav;