import React, { Component } from "react";
import Helmet from 'react-helmet';

class Login extends Component {
    render() {
        return (
            <div>
                <Helmet
                    title="Moby Supply - Iniciar Sesión"
                />
                <p>
                    Login
                </p>
            </div>
        )
    };
}

export default Login;