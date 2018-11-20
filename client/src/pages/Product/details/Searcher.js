import React, { Component } from "react";

class ProductsSearch extends Component {
    render() {
        let lines = this.props.lines || 'Cargando ...';
        let department = this.props.department || 'Cargando ...';
        let colors = this.props.colors || 'Cargando ...';
        let categories = this.props.categories || 'Cargando ...';
        let brands = this.props.brands || 'Cargando ...';

        let linesHTML = <div></div>;
        if (lines.count > 0) {
            linesHTML = lines.results.map(
                (line) => {
                    // onChange={(e) => {this.props.getFilter(e, line.name, line.id, 'line');}}
                    let html = <option key={line.id.toString()} value={line.id} label={line.name}>{line.name}</option>;
                    return html;
                }
            )
        }
        let lineItems = (
            <div className="has-background-grey-lighter is-padding-top-10">
                <h3 className="is-size-5">Lineas</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => {this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'line');}}>
                            <option>Lineas</option>
                            {linesHTML}
                        </select>
                    </div>
                </div>
            </div>
        );


        let colorsHTML = <div></div>;
        if (colors.count > 0) {
            colorsHTML = colors.results.map(
                (color) => {
                    // onClick={(e) => {this.props.getFilter(e, color.name, color.id, 'color');}}
                    let html = <option key={color.id.toString()} value={color.id} label={color.name}>{color.name}</option>;
                    return html;
                }
            )
        }
        let colorItems = (
            <div className="has-background-grey-lighter is-padding-top-10">
                <h3 className="is-size-5">Colores</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => {this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'color');}}>
                            <option>Colores</option>
                            {colorsHTML}
                        </select>
                    </div>
                </div>
            </div>
        );

        let categoriesHTML = <div></div>;
        if (categories.count > 0) {
            categoriesHTML = categories.results.map(
                (category) => {
                    // onClick={ (e) => {this.props.getFilter(e, category.name, category.id, 'category');}}
                    let html = <option key={category.id.toString()} value={category.id} label={category.name} >{category.name}</option>;
                    return html;
                }
            )
        }
        let categoryItems = (
            <div className="has-background-grey-lighter is-padding-top-10">
                <h3 className="is-size-5">Categorías</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={ (e) => {this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'category');}}>
                            <option>Categorías</option>
                            {categoriesHTML}
                        </select>
                    </div>
                </div>
            </div>
        );

        let departmentHTML = <div></div>;
        if (department.count > 0) {
            departmentHTML = department.results.map(
                (department) => {
                    // onClick={(e) => {this.props.getFilter(e, department.name, department.id, 'department');}}
                    let html = <option key={department.id.toString()} value={department.id} label={department.name} >{department.name}</option>;
                    return html;
                }
            )
        }
        let departmentItems = (
            <div className="has-background-grey-lighter is-padding-top-10">
                <h3 className="is-size-5">Departamentos</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => {this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'department');}}>
                            <option>Departamentos</option>
                            {departmentHTML}
                        </select>
                    </div>
                </div>
            </div>
        );

        let brandsHTML = <div></div>;
        if (brands.count > 0) {
            brandsHTML = brands.results.map(
                (brand) => {
                    // onClick={(e) => {this.props.getFilter(e, brand.name, brand.id, 'brand');}}
                    let html = <option key={brand.id.toString()} value={brand.id} label={brand.name}>{brand.name}</option>;
                    return html;
                }
            )
        }
        let brandItems = (
            <div className="has-background-grey-lighter is-padding-top-10">
                <h3 className="is-size-5">Marcas</h3>
                <div className="field has-addons is-padding-y-10 has-text-centered">
                    <div className="select">
                        <select onChange={(e) => {this.props.getFilter(e, e.target[e.target.options.selectedIndex].label, e.target.value, 'brand');}}>
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
                            <h3 className="is-size-5">Artículo por nombre</h3>
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