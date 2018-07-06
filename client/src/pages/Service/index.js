import React, { Component } from "react";
import Helmet from 'react-helmet';

import Services from '../../components/Services';
import ServicesList from '../../components/Services/List';
 
class Service extends Component {
  render() {
    return (
      <div className="">
        <Helmet
          title="Moby Supply - Servicios"
        />
        <div className="">
          <Services />
        </div>
        <div className="">
        </div>
        <ServicesList/>
      </div>
    );
  }
}

export default Service;