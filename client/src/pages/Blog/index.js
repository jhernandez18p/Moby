import React, { Component } from "react";
import Helmet from "react-helmet";
import { Link } from 'react-router-dom';

// Components
import Post from '../../components/Blog';
import Paginator from '../../components/Paginator';

class Blog extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Blog"
        />
        <div className="container" id="blog">
          <div className="has-text-centered is-padding-y-60">
            <h3 className="is-size-2">
              Bienvenidos al Blog de Moby Supply
            </h3>
          </div>
          <hr></hr>
          <div className="blog-cat has-text-centered">
            <ul>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
              <li><Link to="/blog?cat=lorem" className="has-text-black">lorem</Link></li>
            </ul>
          </div>
          <div className="section has-background-light-green">
            <div className="columns">
              <div className="column">
                <div className="has-text-left ">
                  <h3 className="is-size-2">
                    Unete a nuestro sistema
                  </h3>
                  <p className="is-size-6">
                    Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                  </p>
                </div>
                <div className="btns">
                  <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
                  <Link to="/auth/registro" className="button is-link">Registrarse</Link>
                </div>
              </div>
            </div>
          </div>

          
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <div className="is-padding-y-60">
            <Paginator/>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;