import React, { Component } from "react";
import Helmet from "react-helmet";

class BlogDetail extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Titulo del post"
        />
        <div className="container">
          <p className="">
            Detalles de blog
        </p>
        </div>
      </div>
    );
  }
}

export default BlogDetail;