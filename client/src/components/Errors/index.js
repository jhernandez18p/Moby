import React, { Component } from 'react';

class NotFound extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    goBack = (e) =>{
        // const location = window.history.forward();
        if (window.history.back){
          window.history.back();
        }
    };
    render() {
        return (
            <div>
                <section className="hero has-background-grey-light is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="card box-animation is-padding-y-100">
                                <h1 className="title">
                                    Error <span className="is-size-1">404</span>
                                </h1>
                                <h2 className="subtitle">
                                    Página no encontrada <code>{this.props.location.pathname}</code>
                                </h2>
                                <p className="is-size-5" onClick={this.goBack}>
                                    <span className="icon has-text-black">
                                        <i className="fas fa-arrow-left"></i>
                                    </span> Volver
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default NotFound;