import React, { Component } from "react";
import Helmet from 'react-helmet';

class Product extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Productos"
        />
        <div className="container">
          <div className="has-text-centered">
            <h2>
              Artículos recientes
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;