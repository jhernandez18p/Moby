import React, { Component } from "react";
import Helmet from "react-helmet";


class Category extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Nombre de la categoría"
        />
        <div className="container">
          <p className="">
            Categorias
        </p>
        </div>
      </div>
    );
  }
}

export default Category;