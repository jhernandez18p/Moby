import React, { Component } from "react";

class ProductsSearch extends Component {
    render() {
        return (
            <div>
                <div className="is-padding-top-100" id="productsSearcher">
                    <div className="card box-animation">

                        <div className="has-background-grey has-text-centered has-text-white">
                            <h3 className="is-size-4">Busqueda avanzada</h3>
                        </div>

                        <div className="has-background-grey-lighter is-padding-top-10">
                            <h3 className="is-size-4">Marca</h3>
                            <div className="field has-addons is-padding-y-10 has-text-centered">
                                <div className="select">
                                    <select>
                                        <option>Seleccione una Marca</option>
                                        <option>Moby Supply</option>
                                        <option>Marca 1</option>
                                        <option>Marca 2</option>
                                        <option>Marca 3</option>
                                        <option>Marca 4</option>
                                        <option>Marca 5</option>
                                        <option>Marca 6</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="has-background-grey-lighter is-padding-top-10">
                            <h3 className="is-size-4">Departamento</h3>
                            <div className="field has-addons is-padding-y-10 has-text-centered">
                                <div className="select">
                                    <select>
                                        <option>Seleccione un Departamento</option>
                                        <option>Cantos</option>
                                        <option>Herrajes</option>
                                        <option>Laminas</option>
                                        <option>Sobre</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="has-background-grey-lighter is-padding-top-10">
                            <h3 className="is-size-4">Artículo por nombre</h3>
                            <div className="field has-addons">
                                <div className="control has-background-white">
                                    <input className="input" type="text" placeholder="Buscar un producto"></input>
                                </div>
                                <div className="control">
                                    <a className="button is-info">
                                        Buscar
                                        </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            // <div className="has-background-light" id="is-searcher">
            //     <div className="field">
            //         <label className="label">Name</label>
            //         <div className="control">
            //             <input className="input" type="text" placeholder="Text input"></input>
            //         </div>
            //     </div>

            //     <div className="field">
            //         <label className="label">Username</label>
            //         <div className="control has-icons-left has-icons-right">
            //             <input className="input is-success" type="text" placeholder="Text input">
            //             </input>
            //         </div>
            //         <p className="help is-success">This username is available</p>
            //     </div>

            //     <div className="field">
            //         <label className="label">Email</label>
            //         <div className="control has-icons-left has-icons-right">
            //             <input className="input is-danger" type="email" placeholder="Email input">
            //             </input>
            //         </div>
            //         <p className="help is-danger">This email is invalid</p>
            //     </div>

            //     <div className="field">
            //         <label className="label">Subject</label>
            //         <div className="control">
            //             <div className="select">
            //                 <select>
            //                     <option>Select dropdown</option>
            //                     <option>With options</option>
            //                 </select>
            //             </div>
            //         </div>
            //     </div>

            //     <div className="field">
            //         <label className="label">Message</label>
            //         <div className="control">
            //             <textarea className="textarea" placeholder="Textarea"></textarea>
            //         </div>
            //     </div>

            //     <div className="field">
            //         <div className="control">
            //             <label className="checkbox">
            //                 <input type="checkbox" placeholder="I agree to the ">
            //                 </input>
            //             </label>
            //         </div>
            //     </div>

            //     <div className="field">
            //         <div className="control">
            //             <label className="radio">
            //                 <input type="radio" name="question" placeholder="Yes">
            //                 </input>
            //             </label>
            //             <label className="radio">
            //                 <input type="radio" name="question" placeholder="No">
            //                 </input>
            //             </label>
            //         </div>
            //     </div>

            //     <div className="field is-grouped">
            //         <div className="control">
            //             <button className="button is-link">Submit</button>
            //         </div>
            //         <div className="control">
            //             <button className="button is-text">Cancel</button>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default ProductsSearch;