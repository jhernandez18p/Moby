import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProductsHeader from '../../../components/Header/ProductsHeader';


class SingleDetail extends Component {
  render() {
    return (
      <div>
        <ProductsHeader/>
        <div className="container is-padding-top-100"  id="productsSite">
          <div>
            <div className="columns is-variable is-1">
              <div className="column">
                <div className="card box-animation">
                  
                  <div className="columns is-marginless">
                    
                    <div className="column is-marginless">
                      <figure className="image is-4by5">
                        <img src="https://www.moby-group.com/media/sales/arts/base.jpg" alt={this.props.location.pathname}></img>
                      </figure>
                    </div>
                    
                    <div className="column">
                      <p>{this.props.location.pathname}</p>
                      <div className="is-padding-y-30">
                        <h1 className="is-size-3">
                          {this.props.location.pathname}
                        </h1>
                      </div>
                      <div className="is-padding-y-20">
                        <p className="is-size-5">
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                        </p>
                      </div>
                      <hr></hr>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="columns is-variable is-2">
              <div className="column">

                <div className="section has-background-grey-light box-animation">
                  <div className="columns">
                    <div className="column">
                      <div className="has-text-left ">
                        <h3 className="is-size-2 has-text-white">
                          Unete a nuestro sistema
                        </h3>
                        <p className="is-size-6 is-padding-y-30">
                          Para conocer nuestros precios o solicitar cotizaciones desde el sitio web es necesario registrarse o iniciar sesión.
                        </p>
                      </div>
                      <div className="btns">
                        <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
                        <Link to="/auth/registro" className="button is-link">Registrarse</Link>
                      </div>
                    </div>
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

export default SingleDetail;