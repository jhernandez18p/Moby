import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Helmet from 'react-helmet';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
import { userLogin } from '../../redux/actions/user/userActions';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { emailValid: false, }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        e.preventDefault();
        if (e.target.name === 'email') {
            let value = e.target.value;
            // eslint-disable-next-line
            let mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (value.match(mailformat)) {
                this.setState({ emailValid: true });
            };
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let username = e.target.email.value;
        let password = e.target.password.value;
        this.props.onSubmitUser(username, password);
    }

    render() {
        let user = this.props.user;

        let valid = <span className="icon is-small is-right has-text-success"><i className="fas fa-user-check"></i></span>;
        // let invalid = <span className="icon is-small is-right"><i className="fas fa-user"></i></span>;
        let isAuthenticated = user.isAuthenticated || false;
        
        let toast = <div></div>;
        if (user.errors.type !== undefined){
            toast = (
                <div className="notification is-danger">
                    <button className="delete"></button>
                    {user.errors.message}
                </div>
            )
        }


        if (isAuthenticated) {
            return <Redirect to="/" />
        } else {
            return (
                <div>
                    <Helmet
                        title="Moby Supply - Iniciar Sesión"
                    />
                    <div className="title">
                        <p className="is-size-4" >
                            Moby Supply - Iniciar Sesión
                        </p>
                    </div>
                    <div className="title">
                        <form className="auth-form" onSubmit={this.onSubmit} >
                            <div className="">
                                <div className="field">
                                    <label className="label">Correo eléctronico</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="text" placeholder="johndoe@mail.com" autoComplete="johndoe@mail.com" name="email" onChange={this.onChange}></input>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        {
                                            this.state.emailValid
                                                ? valid
                                                : <span></span>
                                        }
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Contraseña</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="password" name="password" autoComplete="password" onChange={this.onChange}></input>
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-key"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-link" disabled={this.state.emailValid ? false : true }>Enviar</button>
                                    </div>
                                    <div className="control">
                                        <div className="">
                                            <Link to="/auth/registro" className="button is-link">Registrarse</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {toast}
                </div>
            )
        }
    }
}

const userSelector = createSelector(state => state.user, user => user);                                     // user

const mapStateToProps = createSelector(
    userSelector,
    (user) => (
        {
            user
        }
    )
);

const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            onSubmitUser: userLogin,
        }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);