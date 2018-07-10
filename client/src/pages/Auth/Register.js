import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view:'register',
            username:'',
            password:''
        };
    }
    
    handleInputChange = (event) => {
        const target = event.target,
            value = target.type ===
                'checkbox' ? target.checked : target.value,
            name = target.name
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault()
        // this.props.onSubmit(this.state.username, this.state.password)
        console.log('click');
        
    }
    
    render() {
        return (
            <div>
                <Helmet
                    title="Moby Supply - Iniciar Sesión"
                />

                <div className="title">
                    <p className="is-size-4" >
                        Moby Supply - {this.state.view === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
                    </p>
                </div>
                <div className="title">
                    <form method="POST" className="auth-form">
                        <div className="">
                            <div className="field">
                                <label className="label">Nombre</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="John" name="first-name"  autoComplete="John"></input>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    {/* <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                    </span> */}
                                </div>
                            </div>
                            
                            <div className="field">
                                <label className="label">Apellido</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Doe" name="last-name" autoComplete="Doe"></input>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user"></i>
                                    </span>
                                    {/* <span className="icon is-small is-right">
                                        <i className="fas fa-check"></i>
                                    </span> */}
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Correo eléctronico</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" placeholder="johndoe@mail.com" name="email"  autoComplete="johndoe@mail.com"></input>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope"></i>
                                    </span>
                                    {/* <span className="icon is-small is-right">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </span> */}
                                </div>
                            </div>
                            
                            <div className="field">
                                <label className="label">Contraseña</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="password" name="password"  autoComplete="password"></input>
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-key"></i>
                                    </span>
                                    {/* <span className="icon is-small is-right">
                                        <i className="fas fa-exclamation-triangle"></i>
                                    </span> */}
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link" onClick={ this.onSubmit }>Enviar</button>
                                </div>
                                <div className="control">
                                    <button className="button is-text">Cancelar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="links">
                    <div className="">
                        <Link to="/auth/iniciar-sesion" className="button">Iniciar Sesión</Link>
                    </div>
                </div>
            </div>
        )
    };
}

export default Register;