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
          <div className="columns is-fullheight">
            <div className="column has-background-grey-lighter">
              <Form/>
            </div>
            <div className="column is-three-fifths">
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