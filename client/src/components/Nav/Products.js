import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Assets


class ProductsNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: false,
            colorName: 'Color',
            line: false,
            lineName: 'Linea',
            category: false,
            categoryName: 'Categoría',
            department: false,
            departmentName: 'Departamento',
            brand: false,
            brandName: 'Marca',
            keyToSearch: ''
        }
        this.toggeable = this.toggeable.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.getSearch = this.getSearch.bind(this);
    }

    toggeable(e, arg) {
        e.preventDefault();
        if (arg === 'color') {
            if (this.state.color) {
                this.setState({
                    color: false,
                    line: false,
                    category: false,
                    department: false,
                    brand: false
                })
            } else {
                this.setState({
                    color: true,
                    line: false,
                    category: false,
                    department: false,
                    brand: false
                })
            }
        }
        if (arg === 'line') {
            if (this.state.line) {
                this.setState({
                    line: false,
                    color: false,
                    category: false,
                    department: false,
                    brand: false
                })
            } else {
                this.setState({
                    line: true,
                    color: false,
                    category: false,
                    department: false,
                    brand: false
                })
            }
        }
        if (arg === 'category') {
            if (this.state.category) {
                this.setState({
                    category: false,
                    color: false,
                    line: false,
                    department: false,
                    brand: false
                })
            } else {
                this.setState({
                    category: true,
                    color: false,
                    line: false,
                    department: false,
                    brand: false
                })
            }
        }
        if (arg === 'department') {
            if (this.state.department) {
                this.setState({
                    department: false,
                    color: false,
                    line: false,
                    category: false,
                    brand: false
                })
            } else {
                this.setState({
                    department: true,
                    color: false,
                    line: false,
                    category: false,
                    brand: false
                })
            }
        }
        if (arg === 'brand') {
            if (this.state.brand) {
                this.setState({
                    brand: false,
                    color: false,
                    line: false,
                    category: false,
                    department: false,
                })
            } else {
                this.setState({
                    brand: true,
                    color: false,
                    line: false,
                    category: false,
                    department: false,
                })
            }
        }
    };

    getSearch(e){
        e.preventDefault();
        this.setState({keyToSearch: e.target.value});
    }

    changeFilter(e, arg, filter) {
        e.preventDefault();
        if (filter === 'color') {
            this.setState({ colorName: arg, color: false })
        }
        if (filter === 'line') {
            this.setState({ lineName: arg, line: false })
        }
        if (filter === 'category') {
            this.setState({ categoryName: arg, category: false })
        }
        if (filter === 'department') {
            this.setState({ departmentName: arg, department: false })
        }
        if (filter === 'brand') {
            this.setState({ brandName: arg, brand: false })
        }
    };

    goBack = (e) => {
        // const location = window.history.forward();
        if (window.history.back) {
            window.history.back();
        }
    };

    render() {

        let brands = this.props.brands || 'Cargando ...';
        let brandsHTML = <div></div>;
        if (brands.count > 0) {
            brandsHTML = brands.results.map(
                (brand) => {
                    let html = <a key={brand.id.toString()} onClick={
                        (e) => { 
                            this.props.getFilter(e, brand.name, brand.id, 'brand'); 
                            this.changeFilter(e, brand.name, 'brand');
                        }
                    } className="navbar-item">{brand.name}</a>
                    return html;
                }
            )
        }

        let categories = this.props.categories || 'Cargando ...';
        let categoriesHTML = <div></div>;
        if (categories.count > 0) {
            categoriesHTML = categories.results.map(
                (category) => {
                    let html = <a key={category.id.toString()} onClick={
                        (e) => { 
                            this.props.getFilter(e, category.name, category.id, 'category'); 
                            this.changeFilter(e, category.name, 'category');
                        }
                    } className="navbar-item">{category.name}</a>
                    return html;
                }
            )
        }

        let colors = this.props.colors || 'Cargando ...';
        let colorsHTML = <div></div>;
        if (colors.count > 0) {
            colorsHTML = colors.results.map(
                (color) => {
                    let html = <a key={color.id.toString()} onClick={
                        (e) => { 
                            this.props.getFilter(e, color.name, color.id, 'color'); 
                            this.changeFilter(e, color.name, 'color');
                        }
                    } className="navbar-item">{color.name}</a>
                    return html;
                }
            )
        }

        let department = this.props.department || 'Cargando ...';
        let departmentHTML = <div></div>;
        if (department.count > 0) {
            departmentHTML = department.results.map(
                (department) => {
                    let html = <a key={department.id.toString()} onClick={
                        (e) => { 
                            this.props.getFilter(e, department.name, department.id, 'department'); 
                            this.changeFilter(e, department.name, 'department');
                        }
                    } className="navbar-item">{department.name}</a>
                    return html;
                }
            )
        }

        let lines = this.props.lines || 'Cargando ...';
        let linesHTML = <div></div>;
        if (lines.count > 0) {
            linesHTML = lines.results.map(
                (line) => {
                    let html = <a key={line.id.toString()} onClick={
                        (e) => { 
                            this.props.getFilter(e, line.name, line.id, 'line'); 
                            this.changeFilter(e, line.name, 'line');
                        }
                    } className="navbar-item">{line.name}</a>
                    return html;
                }
            )
        }

        let colorItems = (
            <div className={this.state.color ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"}>
                <a className="navbar-link" onClick={(e) => this.toggeable(e, 'color')} >{this.state.colorName || 'Color'}</a>
                <div className="navbar-dropdown">
                    <a onClick={(e) => { this.props.getFilter(e, '------', '0'); this.changeFilter(e, '------', 'color') }} className="navbar-item">--------</a>
                    {colorsHTML}
                </div>
            </div>
        );

        let lineItems = (
            <div className={this.state.line ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"}>
                <a className="navbar-link" onClick={(e) => this.toggeable(e, 'line')} >{this.state.lineName || 'Linea'}</a>
                <div className="navbar-dropdown">
                    <a onClick={(e) => { this.props.getFilter(e, '------', '0'); this.changeFilter(e, '------', 'line') }} className="navbar-item">--------</a>
                    {linesHTML}
                </div>
            </div>
        );

        let categoryItems = (
            <div className={this.state.category ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"}>
                <a className="navbar-link" onClick={(e) => this.toggeable(e, 'category')} >{this.state.categoryName || 'Categoría'}</a>
                <div className="navbar-dropdown">
                    <a onClick={(e) => { this.props.getFilter(e, '------', '0'); this.changeFilter(e, '------', 'category') }} className="navbar-item">--------</a>
                    {categoriesHTML}
                </div>
            </div>
        );

        let departmentItems = (
            <div className={this.state.department ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"}>
                <a className="navbar-link" onClick={(e) => this.toggeable(e, 'department')} >{this.state.departmentName || 'Departamento'}</a>
                <div className="navbar-dropdown">
                    <a onClick={(e) => { this.props.getFilter(e, '------', '0'); this.changeFilter(e, '------', 'department') }} className="navbar-item">--------</a>
                    {departmentHTML}
                </div>
            </div>
        );

        let brandItems = (
            <div className={this.state.brand ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"}>
                <a className="navbar-link" onClick={(e) => this.toggeable(e, 'brand')} >{this.state.brandName || 'Marca'}</a>
                <div className="navbar-dropdown">
                    <a onClick={(e) => { this.props.getFilter(e, '------', '0'); this.changeFilter(e, '------', 'brand') }} className="navbar-item">--------</a>
                    {brandsHTML}
                </div>
            </div>
        );

        let filters = <div></div>;
        if (this.props.haveFilters) {
            filters = (
                <div className="navbar-end is-hidden-touch" style={{ marginRight: '25px' }}>
                    {lineItems}
                    {categoryItems}
                    {departmentItems}
                    {brandItems}
                    {colorItems}
                </div>
            );
        }

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
                            <div id="isSearched" className="navbar-end is-hidden-touch">
                                <div className="navbar-item selected">
                                    Buscardor
                                </div>
                                {filters}
                                <div className="field has-addons">
                                    <div className="control has-background-white">
                                        {
                                            this.props.hasSearch
                                                ?<input className="input" type="text" placeholder="Buscar un producto" onChange={this.props.getSearch}></input>
                                                :<input className="input" type="text" placeholder="Buscar un producto" onChange={this.getSearch}></input>
                                        }
                                    </div>
                                    <div className="control">
                                        <Link to={this.state.keyToSearch !== '' ? `/productos/todos?search=${this.state.keyToSearch}` : '/productos/todos'} className="button is-info">
                                            Buscar
                                        </Link>
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