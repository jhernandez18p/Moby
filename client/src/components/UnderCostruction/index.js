import React, { Component } from 'react';

import Form from '../../pages/Contact/details/Form';

class UnderConstruction extends Component {
    constructor(props){
        super(props);
        this.state ={
            footerHiden: false,
            bodyHidden: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
        this.setState({
            footerHiden: false,
            bodyHidden: true
        })
    }
    
    componentDidUpdate(){
    }
    
    handleClick(event){
        event.preventDefault();
        this.setState({
            footerHiden: true,
            bodyHidden: false
        })
    }
    render(){
        return (
            <div className="underconstruction is-y-scroll">
                <div id="header">
                    <h1 className="is-size-3">¡Hola!</h1>
                    <h2 className="is-size-5">Estamos realizando cambios en nuestra plataforma, por favor vuelva pronto.</h2>
                </div>
                <div id="body" className={this.state.bodyHidden ? 'is-hidden-touch is-hidden-tablet is-hidden-desktop' : ''}>
                    <Form/>
                </div>
                <div id="footer" className={this.state.footerHiden ? 'is-hidden-touch is-hidden-tablet is-hidden-desktop' : ''}>
                    <p>¿Desea dejarnos un mensaje?</p>
                    <button className="button is-text" onClick={this.handleClick}>
                        Dejar mensaje
                    </button>
                </div>
            </div>
        )
    }
}

export default UnderConstruction;