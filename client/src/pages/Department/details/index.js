import React, { Component } from "react";
import Helmet from "react-helmet";

class DepartmentDetail extends Component {
  render() {
    return (
      <div>
          <Helmet
          title="Moby Supply - Departamentos"
        />
      <div className="container">
        <p>
          Detalles de Departamento
        </p>
      </div>
      </div>
    );
  }
}

export default DepartmentDetail;