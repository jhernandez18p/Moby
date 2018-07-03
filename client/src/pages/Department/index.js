import React, { Component } from "react";
import Helmet from "react-helmet";


class Department extends Component {
  render() {
    return (
      <div>
          <Helmet
          title="Moby Supply - Departamentos"
        />
      <div className="container">
        <p className="">
          Departamentos
        </p>
      </div>
      </div>
    );
  }
}

export default Department;