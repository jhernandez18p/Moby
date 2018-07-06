import React, { Component } from "react";
import {Link} from 'react-router-dom';


class Categories extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="container" id="categories">

            <div className="is-centered">
              <h3 className="is-size-2">Nuestras Principales categorías de productos</h3>
            </div>
            <div className="columns">
              <div className="column is-5 is-offset-1">
                <div className="card is-centered overlayer">
                  <div className="content-overlay"></div>
                  <img className="content-image" alt="Productos de moby" src="http://estag.fimagenes.com/img/3/l/z/p/lzp_900.jpg"></img>
                  <div className="content-details fadeIn-top">
                    <Link to="/productos/todos?cat=Cantos">
                      <h3>Cantos</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column is-5">
                <div className="card is-centered overlayer">
                  <div className="content-overlay"></div>
                  <img className="content-image" alt="Servicios de moby" src="http://www.marmolestarlich.com/es/assets/materiales/granitos-exposicion.jpg"></img>
                  <div className="content-details fadeIn-top">
                    <Link to="/productos/todos?cat=Sobres">
                      <h3>Sobres</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="columns">
              <div className="column is-5 is-offset-1">
                <div className="card is-centered overlayer">
                  <div className="content-overlay"></div>
                  <img className="content-image" alt="Productos de moby" src="http://www.masisa.com/arg/wp-content/uploads/2016/02/Portada-MDF-Melamina.jpg"></img>
                  <div className="content-details fadeIn-top">
                    <Link to="/productos/todos?cat=Laminas">
                      <h3>Laminas</h3>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="column is-5">
                <div className="card is-centered overlayer">
                  <div className="content-overlay"></div>
                  <img className="content-image" alt="Servicios de moby" src="http://www.handyhome.com.mx/handlers/mostrarimagenproducto.ashx?id=94&idi=0"></img>
                  <div className="content-details fadeIn-top">
                    <Link to="/productos/todos?cat=Herrajes">
                      <h3>Herrajes</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Categories;