import React, { Component } from "react";
import Helmet from "react-helmet";


class Brand extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Nuestras Marcas"
        />
        <div className="container">
          <p className="">
            Marcas
        </p>
        </div>
      </div>
    );
  }
}

export default Brand;