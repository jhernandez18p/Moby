import React, { Component } from "react";
import Helmet from "react-helmet";

class CategoryDetail extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Categorías"
        />
        <div className="container">
          <p>
            Detalles de Categoria
          </p>
        </div>
      </div>
    );
  }
}

export default CategoryDetail;