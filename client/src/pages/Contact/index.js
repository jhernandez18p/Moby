import React, { Component } from "react";
import Helmet from "react-helmet";

import Form from './details/Form';

import Maps from '../../components/Map'

class Contact extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Contacto"
        />
        <div className="container-fluid">
          <div className="columns">
            <div className="column has-background-white-ter is-fullheight">
              <Form/>
            </div>
            <div className="column is-three-fifths is-hidden-touch">
              <div className="is-marginless is-paddingless">
                <Maps/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;