import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Footer extends Component {

  render() {
    const year = new Date().getFullYear();
    return (
      <footer className="is-fullhd has-footer-background has-text-white">
        <div className="container" id="overFooter">
          <div className="columns">
            <div className="column ">
              <h2 className="is-size-4 has-text-white">Moby Supply</h2>
              <p className="has-text-white">Moby Panamá, S.A. fue fundada en Panamá en el año 2011.
Actualmente, con más de 30 colaboradores, una Fábrica y una Tienda ubicada en calle 1ra de Rio Abajo, nuestra base de productos y servicios se ve respaldada con marcas reconocidas internacionalmente en el ramo ferretero-maderero como FGV, Grupo Losan, entre otras, cada año hemos ido incrementando productos y presentando ofertas y soluciones para el sector.</p>
            </div>
            <div className="column">
              <h2 className="is-size-4 has-text-white">Artículos recientes</h2>
              <ul>
                <li className="navbar-item">
                  <Link to="/blog/publicacion-4" className="is-uppercase has-text-white">
                    Publicación 4
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/blog/publicacion-3" className="is-uppercase has-text-white">
                    Publicación 3
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/blog/publicacion-2" className="is-uppercase has-text-white">
                    Publicación 2
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/blog/publicacion-1" className="is-uppercase has-text-white">
                    Publicación 1
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/blog/bienvenidos" className="is-uppercase has-text-white">
                    Bienvenidos al blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h2 className="is-size-4 has-text-white">Enlaces</h2>
              <ul>
                <li className="navbar-item">
                  <Link to="/quienes-somos" className="is-uppercase has-text-white">
                    ¿Quienes somos?
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contacto/f-a-q" className="is-uppercase has-text-white">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contacto/terminos" className="is-uppercase has-text-white">
                    Terminos y condiciones
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contacto/politicas" className="is-uppercase has-text-white">
                    Política de provacidad
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/contacto/site.xml" className="is-uppercase has-text-white">
                    Mapa de sitio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="column">
              <h2 className="is-size-4 has-text-white">Contacto</h2>
              <p className="has-text-white">Ernesto T. Lefevre, diagonal a Waikiki, Panama Panamá</p>
              <p className="has-text-white">Ciudad de Panamá</p>
              <p className="has-text-white">
                +(507)-800-MOBY
              </p>
              <p className="has-text-white">
                +(507)-800-6629 
              </p>
              <p className="has-text-white">
                Lunes a Viernes , 8:00 am - 5:00 pm 
              </p>
              <p className="has-text-white">
                Sabados de 8:00 a 1:00 pm
              </p>
              <p className="has-text-white">
                info@moby-group.com 
              </p>
              <p className="has-text-white">
                sale@moby-group.com
              </p>
            </div>
          </div>
        </div>
        <div id="is-copyright">
          <nav className="navbar has-footer-background-dark">
            <div className="container is-centered">
              <div className="navbar-brand">
                <p className="navbar-item is-size-7 has-text-white">
                  Moby Group all rights reserved {year} <span className="is-hidden-touch">&nbsp;|&nbsp;</span><br className="is-hidden-desktop"></br> Website Designed & Developed by &nbsp;
                  <br className="is-hidden-desktop"></br>
                  <a href="https://dev2tech.xyz"> Dev2tech</a>.
                </p>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}

export default Footer;