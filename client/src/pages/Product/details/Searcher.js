import React, { Component } from "react";

class ProductsSearch extends Component {
    render() {
        let lines = this.props.lines || 'Cargando ...';
        let sublines = this.props.sublines || 'Cargando ...';
        let department = this.props.department || 'Cargando ...';
        let colors = this.props.colors || 'Cargando ...';
        let categories = this.props.categories || 'Cargando ...';
        let brands = this.props.brands || 'Cargando ...';

        let linesHTML = <option></option>;
        if (lines.count > 0) { linesHTML = lines.results.map(
            (line) => {
                return <option key={line.id.toString()} value={line.id} label={line.name}>{line.name}</option>;
            }
        )};
        let lineItems = (
            <div className="has-background-grey-lighter">
                <h3 className="is-size-6">Lineas</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => { this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'line'); }}>
                            <option>Lineas</option>
                            {linesHTML}
                        </select>
                    </div>
                </div>
            </div>
        );

        let sublinesHTML = <option></option>;
        if (sublines.count > 0) {
            sublinesHTML = sublines.results.map(
                (line) => {
                    return <option key={line.id.toString()} value={line.id} label={line.name}>{line.name}</option>;
                }
            )
        }
        let sublineItems = (
            <div className="has-background-grey-lighter">
                <h3 className="is-size-6">Sublineas</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => { this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'sublines'); }}>
                            <option>Sublineas</option>
                            {sublinesHTML}
                        </select>
                    </div>
                </div>
            </div>
        );


        let colorsHTML = <option></option>;
        if (colors.count > 0) {
            colorsHTML = colors.results.map(
                (color) => {
                    return <option key={color.id.toString()} value={color.id} label={color.name}>{color.name}</option>;
                }
            )
        }
        let colorItems = (
            <div className="has-background-grey-lighter">
                <h3 className="is-size-6">Colores</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => { this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'color'); }}>
                            <option>Colores</option>
                            {colorsHTML}
                        </select>
                    </div>
                </div>
            </div>
        );

        let categoriesHTML = <option></option>;
        if (categories.count > 0) {
            categoriesHTML = categories.results.map(
                (category) => {
                    return <option key={category.id.toString()} value={category.id} label={category.name} >{category.name}</option>;
                }
            )
        }
        let categoryItems = (
            <div className="has-background-grey-lighter">
                <h3 className="is-size-6">Categorías</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => { this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'category'); }}>
                            <option>Categorías</option>
                            {categoriesHTML}
                        </select>
                    </div>
                </div>
            </div>
        );

        let departmentHTML = <option></option>;
        if (department.count > 0) {
            departmentHTML = department.results.map(
                (department) => {
                    return <option key={department.id.toString()} value={department.id} label={department.name} >{department.name}</option>;
                }
            )
        }
        let departmentItems = (
            <div className="has-background-grey-lighter">
                <h3 className="is-size-6">Departamentos</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => { this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'department'); }}>
                            <option>Departamentos</option>
                            {departmentHTML}
                        </select>
                    </div>
                </div>
            </div>
        );

        let brandsHTML = <option></option>;
        if (brands.count > 0) {
            brandsHTML = brands.results.map(
                (brand) => {
                    return <option key={brand.id.toString()} value={brand.id} label={brand.name}>{brand.name}</option>;
                }
            )
        }
        let brandItems = (
            <div className="has-background-grey-lighter">
                <h3 className="is-size-6">Marcas</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => { this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'brand'); }}>
                            <option>Marcas</option>
                            {brandsHTML}
                        </select>
                    </div>
                </div>
            </div>
        );

        return (
            <div>
                <div className="is-padding-top-20" id="productsSearcher">
                    <div className="card box-animation">
                        <div className="has-background-grey has-text-centered has-text-white">
                            <h3 className="is-size-5">Busqueda avanzada</h3>
                        </div>
                        <div className="has-background-grey-lighter is-padding-top-10">
                            <h3 className="is-size-6">Artículo por nombre</h3>
                            <div className="field has-addons">
                                <div className="control has-background-white">
                                    <input className="input" type="text" placeholder="Buscar un producto" onChange={this.props.getSearch}></input>
                                </div>
                                <div className="control">
                                    <a className="button is-info">
                                        <span className="icon has-text-white tooltip is-tooltip-right" data-tooltip="Buscar">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div>
                            {lineItems}
                            {sublineItems}
                            {categoryItems}
                            {departmentItems}
                            {brandItems}
                            {colorItems}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductsSearch;