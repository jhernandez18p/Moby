import React, { Component } from 'react';

import axios from 'axios';


class Form extends Component {

    submitHandler = (event) => {
        event.preventDefault();
        const apiBaseUrl = "http://localhost:9000/api/v2/contact/email";        
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
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div id="contactForm">
                <div className="">
                    <div className="title">
                        <p className="is-size-4" >
                            Contáctanos
                        </p>
                    </div>
                    <form onSubmit={ this.submitHandler } className="contact-form box-animation">
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
                                    <input className="input" type="text" placeholder="johndoe@mail.com" autoComplete="email" name="phone"></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Asunto</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Contacto" autoComplete="Contacto" name="subject"></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Mensaje</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Saludos cordiales" name="message"></textarea>
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-text">Enviar</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;