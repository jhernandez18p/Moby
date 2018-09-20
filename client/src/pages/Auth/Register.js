import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Helmet from 'react-helmet';
import axios from 'axios';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
import { userRegister } from '../../redux/actions/user/userActions';


class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameValid: 0,
            usernameInvalid: 1,
            emailValid: 0,
            emailInvalid: 1,
            passwordValid: 0,
            passwordInvalid: 1,
            canSubmit: 0
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChange(e) {
        e.preventDefault();

        const instance = axios.create({ baseURL: '/api/v2/', headers: { "Content-Type": "application/json" } });

        if (e.target.name === 'email') {
            let value = e.target.value;
            let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.match(mailformat)) {
                instance.post(`auth/check-email/?email=${ value }`)
                    .then(res => {
                        if (res.status === 200) {
                            // console.log(res.data);
                            if (res.data.result === false) {
                                this.setState({ emailValid: 1 });
                            } else {
                                this.setState({ emailInvalid: 0 });
                            };
                        }
                    });
            };
        }
        if (e.target.name === 'username') {
            let value = e.target.value;
            let validationRule = (/^\S{3,}$/);
            if ( value.length >= 8 && value.match(validationRule) ) {
                instance.post(`auth/check-username/?username=${ value }`,)
                    .then(res => {
                        if (res.status === 200) {
                            // console.log(res.data);
                            if (res.data.result === false) {
                                this.setState({ usernameValid: 1 });
                            } else {
                                this.setState({ usernameInvalid: 0 });
                            };
                        }
                    });
            }
        }

        if (e.target.name === 'password') {
            let value = e.target.value;
            // console.log(value);
            if (value.length >= 8) {

                if (this.state.usernameValid && this.state.emailValid) {
                    this.setState({ passwordValid: 1, canSubmit: 1 })
                }

            }
        }
    }

    onSubmit(e) {
        e.preventDefault();
        let username = e.target.username.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        this.props.onSubmitUser(username, email, password);
        // console.log(username, email, password);
    }

    render() {
        let user = this.props.user;

        let isAuthenticated = user.isAuthenticated || false;

        let emailValid = this.state.emailValid || 0;
        let emailInvalid = this.state.emailInvalid || 1;
        let usernameValid = this.state.usernameValid || 0;
        let usernameInvalid = this.state.usernameInvalid || 1;
        let passwordValid = this.state.passwordValid || 0;
        let passwordInvalid = this.state.passwordInvalid || 1;

        let toast = <div></div>;
        if (user.errors.type){
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
                    <Helmet title="Moby Supply - Iniciar Sesión" />
                    <div className="title">
                        <p className="is-size-4" > Moby Supply - Registrarse </p>
                    </div>
                    <div className="title">
                        <form className="auth-form" onSubmit={this.onSubmit}>
                            <div className="">
                                <div className="field">
                                    <label className="label">Nombre de usuario </label>
                                    <div className="control has-icons-left has-icons-right tooltip is-tooltip-bottom" data-tooltip="Nombre de usuario, no puede contener espacios en blanco.">
                                        <input className="input" type="text" placeholder="John" name="username" autoComplete="John" onChange={this.onChange}></input>
                                        <span className="icon is-small is-left"> <i className="fas fa-user"></i> </span>
                                        {
                                            usernameValid === 1 && usernameInvalid === 1
                                            ? <span className="icon is-small is-right has-text-success"><i className="fas fa-check"></i></span>
                                            : <span className="icon is-small is-right"></span>
                                        }
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Correo eléctronico </label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="email" placeholder="johndoe@mail.com" name="email" autoComplete="johndoe@mail.com" onChange={this.onChange}></input>
                                        <span className="icon is-small is-left"> <i className="fas fa-envelope"></i> </span>
                                        {
                                            emailValid === 1 && emailInvalid === 1
                                            ? <span className="icon is-small is-right has-text-success"><i className="fas fa-check"></i></span>
                                            : <span className="icon is-small is-right"></span>
                                        }
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Contraseña</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="password" name="password" autoComplete="password" onChange={this.onChange}></input>
                                        <span className="icon is-small is-left"> <i className="fas fa-key"></i> </span>
                                        {
                                            passwordValid === 1 && passwordInvalid === 1
                                            ? <span className="icon is-small is-right has-text-success"><i className="fas fa-check"></i></span>
                                            : <span className="icon is-small is-right"></span>
                                        }
                                    </div>
                                </div>
                                <div className="field is-grouped">
                                    <div className="control">
                                        <button className="button is-link" disabled={
                                            this.state.canSubmit === 1
                                                ? false
                                                : true
                                        }>Enviar</button>
                                    </div>
                                    <div className="control">
                                        <div className="">
                                            <Link to="/auth/iniciar-sesion" className="button is-link">Iniciar Sesión</Link>
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
    };
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
            onSubmitUser: userRegister,
        }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
// export default Register;