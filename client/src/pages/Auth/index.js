import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Helmet from 'react-helmet';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Login from './Login';
import Logout from './Logout';
import Register from './Register';

import { login } from '../../redux/actions/user/userActions';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      prev: true,
      next: false,
    };
    this.onLogin = this.onLogin.bind(this);
  }

  componentDidMount() {
    // console.log(process.env.TEST);
  };

  goHome = (e) => {
    // const location = window.history.forward();
    if (window.history.forward) {
      window.history.go('/');
    }
  };

  goBack = (e) => {
    // const location = window.history.forward();
    if (window.history.back) {
      window.history.back();
    }
  };

  onLogin = e => {
    e.preventDefault();
    console.log('Login Submit');

    // this.props.login(this.state.username, this.state.password);
  }

  render() {
    const user = this.props.user;
    // console.log(user)
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
                    <Route exact path="/auth/registro"
                      render={(props) => <Register user={user} onLogin={this.onLogin()} />} />
                    <Route exact path="/auth/iniciar-sesion"
                      render={(props) => <Login user={user} />} />
                    <Route exact path="/auth/salir"
                      render={(props) => <Logout user={user} />} />
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

const userSelector = createSelector(
  state => state.user,
  user => user
)

const mapStateToProps = createSelector(
  userSelector,
  (user) => (
    {
      user
    }
  )
);

const mapActionsToProps = {
  // onUpdateUser: updateUser,
  // onApiRequest: apiRequest
  onUserLogin: login,
  // onUserRegister: register
};

export default connect(mapStateToProps, mapActionsToProps)(Auth);