import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';


class Auth extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <div className="auth pageloader">
          <Helmet
            title="Moby Supply - Seguridad"
          />
          <div className="content">
            <Switch>
                <Route exact path="/auth/registro" component={ Register } />
                <Route exact path="/auth/iniciar-sesion" component={ Login } />
                <Route exact path="/auth/salir" component={ Logout } />
            </Switch>
          </div>
          
        </div>
      );
    }
  }
  
  export default Auth;