import React, { Component } from "react";
import Helmet from 'react-helmet';

import BaseBackground from '../../assets/images/background.jpg';
import Carrousel from '../../components/Carrousel';

class About extends Component {
  render() {
    return (

      <div>
        <Helmet
          title="Moby Supply - ¿Quienes somos?"
        />
        <div className="container">
          <section className="hero">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h2 className="title has-text-white is-uppercase">Nuestra historia</h2>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="columns">
              <div className="column">
                <div className="">
                  <figure className="image is-5by4">
                    <img src={ BaseBackground } alt="Contactenos"></img>
                  </figure>
                </div>
              </div>
              <div className="column">
                <figure className="image is-5by4">
                  <img src={ BaseBackground } alt="Formulario de contacto"></img>
                </figure>
              </div>
            </div>
          </section>
          <section className="hero">
            <div className="hero-body">
              <div className="container has-text-centered">
                <h2 className="title has-text-white is-uppercase">Galeria</h2>
              </div>
            </div>
          </section>
          <section>
            <Carrousel/>
          </section>
        </div>
      </div>
    );
  }
}

export default About;