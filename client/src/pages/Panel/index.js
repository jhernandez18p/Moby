import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Helmet from "react-helmet";

import PanelHome from './Home';
import PanelProfile from './Profile';
import PanelAdmin from './Admin';
import PanelServices from './Services';
import PanelBlog from './Blog';
import PanelTickets from './Tickets';
import PanelProducts from './Products';
import IntraHeader from '../../components/Header/Intra';
import SideNav from '../../components/Nav/SideNav';


class PanelLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return <Redirect to="/" />
    return (
      <div className="intra">
        <Helmet
          title="Moby Supply - Panel de administración"
        />
        <div className="content">
          <IntraHeader />
          <div className="container-fluid" id="intra">
            <div className="columns is-variable is-2" id="">
              <div className="column has-text-white has-background-grey-lighter is-2 is-y-scroll" id="verticalNav">
                <SideNav url={this.props.current} />
              </div>
              <div className="column is-10" id="">
                <div className="" id="">
                  <Switch>
                    <Route exact path="/intra" component={PanelHome} />
                    <Route exact path="/intra/perfil" component={PanelProfile} />
                    <Route exact path="/intra/servicios" component={PanelServices} />
                    <Route exact path="/intra/productos" component={PanelProducts} />
                    <Route exact path="/intra/blog" component={PanelBlog} />
                    {/* Admin */}
                    <Route exact path="/intra/administracion" component={PanelAdmin} />
                    <Route exact path="/intra/administracion/usuarios" component={PanelAdmin} />
                    <Route exact path="/intra/administracion/productos" component={PanelAdmin} />
                    <Route exact path="/intra/administracion/productos/top-10" component={PanelAdmin} />
                    <Route exact path="/intra/administracion/productos/cargar-fotos" component={PanelAdmin} />
                    <Route exact path="/intra/administracion/productos/cargar-productos" component={PanelAdmin} />
                    <Route exact path="/intra/administracion/sitio" component={PanelAdmin} />
                    <Route exact path="/intra/administracion/suscripciones" component={PanelAdmin} />
                    {/* Tickets */}
                    <Route exact path="/intra/tickets" component={PanelTickets} />
                    <Route exact path="/intra/tickets/abiertos" component={PanelTickets} />
                    <Route exact path="/intra/tickets/cerrados" component={PanelTickets} />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelLayout;