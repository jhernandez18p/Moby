import React, { Component } from 'react';
import axios from 'axios';

class FormServices extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: false
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        const apiBaseUrl = "http://localhost:9000/api/contact/email";        
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;

        axios({
            url: apiBaseUrl,
            method: 'post',
            data: {
                name : name,
                email : email,
                phone : phone,
                subject : subject,
                message : message
            }
        })
        .then( () => {
            console.log('enviado');
            this.setState({
                message: true
            })
        })
        .catch(err => console.log(err));
    };

    render() {
        const sended = (
            <div>
                <h3 className="is-size-5 has-text-centered">Gracias por enviarnos su mensaje</h3>
                <h3 className="is-size-5 has-text-centered">Tan pronto como sea posible uno de nuestros ejecutivos de venta le contactara.</h3>
            </div>
        );
        const html = (
            <div>
                <form onSubmit={ this.submitHandler } className="contact-form box-animation is-margin-botton-50">
                    <div className="">
                        <div className="field">
                            <label className="label">Nombre Completo</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="John Doe" autoComplete="name" name="name"></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Correo eléctronico</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="johndoe@mail.com" autoComplete="email" name="email"></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Numero de teléfono</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="+507 0000 0000" autoComplete="phone" name="phone"></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Asunto</label>
                            <div className="control">
                                <input className="input" type="text" value={`Servicio ${this.props.service}`} autoComplete="Contacto" name="subject" disabled></input>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Mensaje</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Escriba su petición de servicio aquí" name="message"></textarea>
                            </div>
                        </div>

                        <div className="field">
                            <button className="button is-info is-outlined is-fullwidth">Enviar</button>
                        </div>
                    </div>
                </form>
            </div>
        )
        return (
            <div id="contactForm">
                <div className="">
                    {
                        this.state.message
                        ? sended
                        : html
                    }
                </div>
            </div>
        );
    }
}

export default FormServices;