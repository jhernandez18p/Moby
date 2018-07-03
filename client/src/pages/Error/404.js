import React, { Component } from 'react';
import Helmet from "react-helmet";

class E404 extends Component {
    render(){
        return(
            <div>
                <Helmet
                    title="Moby Supply - Página no encontrada"
                />
                <p>E404</p>
            </div>
        );
    }
}

export default E404;