import React, { Component } from "react";
import Helmet from "react-helmet";

class Blog extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Blog"
        />
        <div className="container">
          <p className="">
            Blog
        </p>
        </div>
      </div>
    );
  }
}

export default Blog;