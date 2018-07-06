import React, { Component } from "react";
import Helmet from 'react-helmet';

class Login extends Component {
    
    update = (e) => {
        console.log(e.target.value);
        this.props.onUpdate(e.target.value);
        this.setState({ fieldVal: e.target.value });
    };
    
    render() {
        return (
            <div>
                <Helmet
                    title="Moby Supply - Iniciar Sesión"
                />
                <div className="">
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="text" placeholder="Text input" ></input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </div>
                        <p className="help">This username is available</p>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email input" ></input>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <p className="help">This email is invalid</p>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Enviar</button>
                        </div>
                        <div className="control">
                            <button className="button is-text">Cancelar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Login;