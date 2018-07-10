import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Helmet from 'react-helmet';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

require('dotenv').config()

class Auth extends Component {
    constructor(props) {
      super(props);
      this.state = {
        view:'login',
        prev:true,
        next:false,
      };
    }

    componentDidMount(){
      console.log(process.env.TEST);
    };

    goHome = (e) =>{
      // const location = window.history.forward();
      if (window.history.forward){
        window.history.go('/');
      }
    };

    goBack = (e) =>{
      // const location = window.history.forward();
      if (window.history.back){
        window.history.back();
      }
    };

    render() {
      
      return (
        <div className="auth pageloader">
          <Helmet
            title="Moby Supply - Seguridad"
          />
          <div className="content is-marginless is-paddingless">
            <div className="columns is-marginless is-paddingless is-descktop">
              <div className="column is-two-fifths is-marginless is-paddingless">
                <div className="hero has-background-white-ter is-fullheight is-marginless is-paddingless">
                  <div className="is-auth-pg">
                    <div>
                      <div className="back is-pulled-left">
                        <p className="is-size-5" onClick={this.goBack}>
                          <span className="icon">
                            <i className="fas fa-arrow-circle-left"></i>
                          </span>
                          Regresar
                        </p>
                      </div>
                      <div className="back is-pulled-right">
                        <Link to="/" className="is-size-5" onClick={this.goHome}>
                          <span className="icon">
                            <i className="fas fa-home"></i>
                          </span>
                          Inicio
                        </Link>
                      </div>
                    </div>
                    
                    <Switch>
                      <Route exact path="/auth/registro" component={Register} />
                      <Route exact path="/auth/iniciar-sesion" component={Login} />
                      <Route exact path="/auth/salir" component={Logout} />
                    </Switch>
                  
                  </div>
                </div>
              </div>
              <div className="column is-marginless is-paddingless is-hidden-touch">
              <figure className="image is-cover">
                <img src="https://images.pexels.com/photos/227577/pexels-photo-227577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="auth img"></img>
              </figure>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default Auth;