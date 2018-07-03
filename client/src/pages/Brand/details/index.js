import React, { Component } from "react";
import Helmet from "react-helmet"; 

class BrandDetail extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Nombre de la marca"
        />
        <div className="container">
          <p>
            Detalles de Marca
        </p>
        </div>
      </div>
    );
  }
}

export default BrandDetail;