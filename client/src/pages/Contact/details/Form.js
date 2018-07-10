import React, { Component } from 'react';


class Form extends Component {

    submitHandler = (e) => {
        e.preventDefault();
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
                    <form method="POST" className="contact-form box-animation">
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
                                <label className="label">Asunto</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Contacto" autoComplete="Contacto" name="subject"></input>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Mensaje</label>
                                <div className="control">
                                    <textarea className="textarea" placeholder="Saludos cordiales"></textarea>
                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-text" onClick={this.submitHandler}>Enviar</button>
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