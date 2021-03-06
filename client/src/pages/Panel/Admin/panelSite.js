import React, { Component } from 'react';
import CKEditor from "react-ckeditor-component";

// Assets
import LogoImg from '../../../assets/images/logo/ms-icon-70x70.png';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions
import { fetchSite } from '../../../redux/actions/site';

class PanelSite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canEdit: false,
            canSubmit: false,
            description: null,
            short_description: null,
            content: 'content',
            method: '',
            loading: true,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleSHDescChange = this.handleSHDescChange.bind(this);
        // this.newFun = this.newFun.bind(this);
        this.updateContent = this.updateContent.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.onFetchSite();
            this.setState({ loading: false });
        }, 20);
    }

    updateContent(newContent, atr) {
        if (atr === 'description') {
            this.setState({ description: newContent });
        } else {
            this.setState({ short_description: newContent });
        }
    }

    handleDescChange(evt) {
        let newContent = evt.editor.getData();
        this.updateContent(newContent, 'description');
    }

    handleSHDescChange(evt) {
        let newContent = evt.editor.getData();
        this.updateContent(newContent, 'short_description');
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ canEdit: true, canSubmit: true, });
    }

    handleSubmit(e) {
        e.preventDefault();

        // eslint-disable-next-line
        let name = e.target.name.value;
        console.log(name);
        // eslint-disable-next-line
        let title = e.target.title.value;
        console.log(title);
        // eslint-disable-next-line
        let description = this.state.description || this.props.site.results[0].description;
        console.log(description);
        // eslint-disable-next-line
        let short_description = this.state.short_description || this.props.site.results[0].short_description;
        console.log(short_description);
        // eslint-disable-next-line
        let url = e.target.url.value;
        console.log(url);
        // eslint-disable-next-line
        let phone = e.target.phone.value;
        console.log(phone);
        // eslint-disable-next-line
        let phone2 = e.target.phone2.value;
        console.log(phone2);
        // eslint-disable-next-line
        let email = e.target.email.value;
        console.log(email);
        // eslint-disable-next-line
        let email2 = e.target.email2.value;
        console.log(email2);
        // eslint-disable-next-line
        let schedule = e.target.schedule.value;
        console.log(schedule);
        // eslint-disable-next-line
        let schedule2 = e.target.schedule2.value;
        console.log(schedule2);
        // eslint-disable-next-line
        let workday = e.target.workday.value;
        console.log(workday);
        // eslint-disable-next-line
        let address = e.target.address.value;
        console.log(address);
        // eslint-disable-next-line
        let address1 = e.target.address1.value;
        console.log(address1);
        // eslint-disable-next-line
        let logo = e.target.logo.value;
        console.log(logo);
        // eslint-disable-next-line
        let img = e.target.img.value;
        console.log(img);
        // eslint-disable-next-line
        let servicios = e.target.servicios.value;
        console.log(servicios);
        // eslint-disable-next-line
        let products = e.target.products.value;
        console.log(products);
        // eslint-disable-next-line
        let underconstruction = e.target.underconstruction.value;
        console.log(underconstruction);

        this.setState({ canEdit: false, canSubmit: false, });
    }

    render() {
        // eslint-disable-next-line
        let user = this.props.user || 'Cargando';
        let _site = this.props.site || 'Cargando';
        let site = _site.results[0];
        let siteName = site.name;
        let siteTitle = site.title;
        let description = this.state.description || site.description;
        let short_description = this.state.short_description || site.short_description;
        // console.log(this.state.loading);
        // console.log(site);

        let formName = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Nombre:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {   this.state.canEdit
                            ?<input className="input" type="text" placeholder={siteName} defaultValue={siteName} name="name" />
                            :<input className="input" type="text" placeholder={siteName} defaultValue={siteName} name="name" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formTitle = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Título:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={siteTitle} defaultValue={siteTitle} name="title" />
                            :<input className="input" type="text" placeholder={siteTitle} defaultValue={siteTitle} name="title" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formDescription = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Descripcion:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<CKEditor activeClass="p10" content={description} events={{ "change": this.handleDescChange }} />
                            :<CKEditor activeClass="p10" content={description} events={{ "change": this.handleDescChange }} />
                        }
                    </div>
                </div>
            </div>
        );
        let formShortDescription = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Descripcion corta:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<CKEditor activeClass="p10" content={short_description} events={{ "change": this.handleSHDescChange }} />
                            :<CKEditor activeClass="p10" content={short_description} events={{ "change": this.handleSHDescChange }} />
                        }
                    </div>
                </div>
            </div>
        );
        let formUrl = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Dirección url:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.url} defaultValue={site.url} name="url" />
                            :<input className="input" type="text" placeholder={site.url} defaultValue={site.url} name="url" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formPhone = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Número de teléfono principal:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.phone} defaultValue={site.phone} name="phone" />
                            :<input className="input" type="text" placeholder={site.phone} defaultValue={site.phone} name="phone" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formPhone2 = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Número de teléfono secundario:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.phone2} defaultValue={site.phone2} name="phone2" />
                            :<input className="input" type="text" placeholder={site.phone2} defaultValue={site.phone2} name="phone2" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formEmail = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Correo electronico principal:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.email} defaultValue={site.email} name="email" />
                            :<input className="input" type="text" placeholder={site.email} defaultValue={site.email} name="email" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formEmail2 = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Correo electronico alternativo:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.email2} defaultValue={site.email2} name="email2" />
                            :<input className="input" type="text" placeholder={site.email2} defaultValue={site.email2} name="email2" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formSchedule = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Horario de atención:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.schedule} defaultValue={site.schedule} name="schedule" />
                            :<input className="input" type="text" placeholder={site.schedule} defaultValue={site.schedule} name="schedule" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formSchedule2 = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Horario de atención 2:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.schedule2} defaultValue={site.schedule2} name="schedule2" />
                            :<input className="input" type="text" placeholder={site.schedule2} defaultValue={site.schedule2} name="schedule2" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formWorkday = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Días laborales:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.workday} defaultValue={site.workday} name="workday" />
                            :<input className="input" type="text" placeholder={site.workday} defaultValue={site.workday} name="workday" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formAddress = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Dirección principal:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.address} defaultValue={site.address} name="address" />
                            :<input className="input" type="text" placeholder={site.address} defaultValue={site.address} name="address" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formAddress2 = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Dirección secundaria:</div>
                </div>
                <div className="column is-4">
                    <div className="control">
                        {
                            this.state.canEdit
                            ?<input className="input" type="text" placeholder={site.address1} defaultValue={site.address1} name="address1" />
                            :<input className="input" type="text" placeholder={site.address1} defaultValue={site.address1} name="address1" disabled/>
                        }
                    </div>
                </div>
            </div>
        );
        let formLogo = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Logo del sitio:</div>
                </div>
                <div className="column is-4">
                    <div className="file has-name">
                        {
                            this.state.canEdit
                            ?(<label className="file-label">
                                <input className="file-input" type="file" name="logo" />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Seleccionar un archivo…
                                    </span>
                                </span>
                            </label>)
                            :(<label className="file-label">
                                <input className="file-input" type="file" name="logo" disabled/>
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Seleccionar un archivo…
                                    </span>
                                </span>
                            </label>)
                        }
                    </div>
                </div>
            </div>
        );
        let formFeaturedImg = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Imágen destacada:</div>
                </div>
                <div className="column is-4">
                    <div className="file has-name">
                        {
                            this.state.canEdit
                            ?(<label className="file-label">
                                <input className="file-input" type="file" name="img" />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Seleccionar un archivo…
                                    </span>
                                </span>
                            </label>)
                            :(<label className="file-label">
                                <input className="file-input" type="file" name="img" disabled/>
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Seleccionar un archivo…
                                    </span>
                                </span>
                            </label>)
                        }
                    </div>
                </div>
            </div>
        );
        let formServicesImg = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Imágen para servicios:</div>
                </div>
                <div className="column is-4">
                    <div className="file has-name">
                        {
                            this.state.canEdit
                            ?(<label className="file-label">
                                <input className="file-input" type="file" name="servicios" />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                            Seleccionar un archivo…
                                    </span>
                                </span>
                            </label>)
                            :(<label className="file-label">
                                <input className="file-input" type="file" name="servicios" disabled/>
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                            Seleccionar un archivo…
                                    </span>
                                </span>
                            </label>)
                        }
                    </div>
                </div>
            </div>
        );
        let formProductsImg = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">Imágen para productos:</div>
                </div>
                <div className="column is-4">
                    <div className="file has-name">
                        {
                            this.state.canEdit
                            ?(<label className="file-label">
                                <input className="file-input" type="file" name="products" />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Seleccionar un archivo…
                                    </span>
                                </span>
                            </label>)
                            :(<label className="file-label">
                                <input className="file-input" type="file" name="products" disabled/>
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Seleccionar un archivo…
                                    </span>
                                </span>
                            </label>)
                        }
                    </div>
                </div>
            </div>
        );
        let formIsUnderconstruction = (
            <div className="columns is-variable is-0 is-marginless">
                <div className="column is-4 is-offset-2">
                    <div className="control">
                        En construcción:
                    </div>
                </div>
                <div className="column is-4">
                    {
                        this.state.canEdit
                        ?(<label className="checkbox">
                            <input type="checkbox" name="underconstruction" value={site.is_undercostruction} />
                            Sitio en construcción 
                        </label>)
                        :(<label className="checkbox">
                            <input type="checkbox" name="underconstruction" value={site.is_undercostruction} disabled/>
                            Sitio en construcción 
                        </label>)
                    }
                </div>
            </div>
        );
        let formSubmitButton = (
            <div className="columns is-variable is-0 is-marginless has-text-centered">
                <div className="column is-8 is-offset-2">
                    <button className="button is-success is-outlined is-fullwidth" type="submit">Enviar</button>
                </div>
            </div>
        );


        var htmlBody = (
            <div>
                <div className="columns is-padding-top-30">
                    <div className="column is-10 is-offset-1 box-animation card intra-panel">
                        <div className="columns is-variable is-0 is-marginless">
                            <div className="column has-text-centered">
                                <h3 className="is-size-4">Información de la página web</h3>
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            {formName}
                            {formTitle}
                            {formDescription}
                            {formShortDescription}
                            {formUrl}
                            {formPhone}
                            {formPhone2}
                            {formEmail}
                            {formEmail2}
                            {formSchedule}
                            {formSchedule2}
                            {formWorkday}
                            {formAddress}
                            {formAddress2}
                            {formLogo}
                            {formFeaturedImg}
                            {formServicesImg}
                            {formProductsImg}
                            {formIsUnderconstruction}
                            {formSubmitButton}
                        </form>
                    </div>
                </div>
            </div>
        );
        // if (this.state.canEdit) {
        //     htmlBody = (
        //         <div className="columns is-padding-top-30">
        //             <div className="column is-10 is-offset-1 box-animation card intra-panel">
        //                 <div className="columns is-variable is-0 is-marginless">
        //                     <div className="column has-text-centered">
        //                         <h3 className="is-size-4">Información de la página web</h3>
        //                     </div>
        //                 </div>
        //                 <form onSubmit={this.handleSubmit}>
        //                     {/* Nombre del sitio */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Nombre:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={siteName} defaultValue={siteName} name="name" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Titulo del sitio */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Título:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={siteTitle} defaultValue={siteTitle} name="title" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Descripcion del sitio */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Descripcion:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <CKEditor
        //                                     activeClass="p10"
        //                                     content={description}
        //                                     events={{ "change": this.handleDescChange }}
        //                                 />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Descripcion corta del sitio */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Descripcion corta:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <CKEditor
        //                                     activeClass="p10"
        //                                     content={short_description}
        //                                     events={
        //                                         {
        //                                             "change": this.handleSHDescChange
        //                                         }
        //                                     }
        //                                 />
        //                                 {/* <textarea value={site.short_description}></textarea> */}
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Direccion url */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Dirección url:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.url} defaultValue={site.url} name="url" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Numero de telefono */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Número de teléfono principal:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.phone} defaultValue={site.phone} name="phone" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Numero de telefono 2 */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Número de teléfono secundario:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.phone2} defaultValue={site.phone2} name="phone2" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* email */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Correo electronico principal:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.email} defaultValue={site.email} name="email" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* email 2 */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Correo electronico alternativo:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.email2} defaultValue={site.email2} name="email2" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Horario de atención */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Horario de atención:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.schedule} defaultValue={site.schedule} name="schedule" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Horario de atención */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Horario de atención 2: </div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.schedule2} defaultValue={site.schedule2} name="schedule2" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/* Dias laborales */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control"> Días laborales: </div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.workday} defaultValue={site.workday} name="workday" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/*  */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Dirección principal:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.address} defaultValue={site.address} name="address" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/*  */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">
        //                                 Dirección secundaria:
        //                                 </div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="control">
        //                                 <input className="input" type="text" placeholder={site.address1} defaultValue={site.address1} name="address1" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/*  */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Logo del sitio:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="file has-name">
        //                                 <label className="file-label"><input className="file-input" type="file" name="logo" /><span className="file-cta"><span className="file-icon"><i className="fas fa-upload"></i></span><span className="file-label">Seleccionar un archivo…</span></span></label>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/*  */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Imágen destacada:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="file has-name">
        //                                 <label className="file-label"><input className="file-input" type="file" name="img" /><span className="file-cta"><span className="file-icon"><i className="fas fa-upload"></i></span><span className="file-label">Seleccionar un archivo…</span></span></label>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/*  */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Imágen para servicios:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="file has-name">
        //                                 <label className="file-label"><input className="file-input" type="file" name="servicios" /><span className="file-cta"><span className="file-icon"><i className="fas fa-upload"></i></span><span className="file-label">Seleccionar un archivo…</span></span></label>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/*  */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">Imágen para productos:</div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <div className="file has-name">
        //                                 <label className="file-label"><input className="file-input" type="file" name="products" /><span className="file-cta"><span className="file-icon"><i className="fas fa-upload"></i></span><span className="file-label">Seleccionar un archivo…</span></span></label>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/*  */}
        //                     <div className="columns is-variable is-0 is-marginless">
        //                         <div className="column is-4 is-offset-2">
        //                             <div className="control">
        //                                 En construcción:
        //                             </div>
        //                         </div>
        //                         <div className="column is-4">
        //                             <label className="checkbox"><input type="checkbox" name="underconstruction" value={site.is_undercostruction} />Sitio en construcción </label>
        //                         </div>
        //                     </div>
        //                     {/*  */}
        //                     <div className="columns is-variable is-0 is-marginless has-text-centered">
        //                         <div className="column is-8 is-offset-2">
        //                             <button className="button is-success is-outlined is-fullwidth" type="submit">Enviar</button>
        //                         </div>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     );
        // } else {
        //     htmlBody = (<div className="columns is-padding-top-30">
        //         <div className="column is-10 is-offset-1 box-animation card intra-panel">
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column has-text-centered">
        //                     <h3 className="is-size-4">Información de la página web</h3>
        //                 </div>
        //             </div>
        //             {/* Nombre del sitio */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">Nombre:</div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={siteName} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Titulo del sitio */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">Título:</div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={siteTitle} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Descripcion del sitio */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">Descripcion:</div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control control-disable">
        //                         <CKEditor
        //                             activeClass="p10"
        //                             content={description}
        //                             events={{ "change": this.handleDescChange }}
        //                         />
        //                         {/* <textarea value={site.short_description}></textarea> */}
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Descripcion corta del sitio */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">Descripcion corta:</div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control control-disable">
        //                         <CKEditor
        //                             activeClass="p10"
        //                             content={short_description}
        //                             events={{ "change": this.handleSHDescChange }}
        //                         />
        //                         {/* <textarea value={site.short_description}></textarea> */}
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Direccion url */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">Dirección url:</div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.url} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Numero de telefono */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">Número de teléfono principal:</div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.phone} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Numero de telefono 2 */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">Número de teléfono secundario:</div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.phone2} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* email */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">Correo electronico principal:</div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.email} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* email 2 */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Correo electronico alternativo:
        //                         </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.email2} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Horario de atención */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Horario de atención:
        //                         </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.schedule} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Horario de atención */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Horario de atención 2:
        //                         </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.schedule2} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/* Dias laborales */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Días laborales:
        //                         </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.workday} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             {/*  */}
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Dirección principal:
        //                     </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.address} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Dirección secundaria:
        //                     </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="control">
        //                         <input className="input" type="text" placeholder={site.address1} disabled />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Logo del sitio:
        //                         </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="file has-name control-disable">
        //                         <label className="file-label"><input className="file-input" type="file" disabled /><span className="file-cta"><span className="file-icon"><i className="fas fa-upload"></i></span><span className="file-label">Seleccionar un archivo…</span></span></label>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Imágen destacada:
        //                         </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="file has-name control-disable">
        //                         <label className="file-label"><input className="file-input" type="file" disabled /><span className="file-cta"><span className="file-icon"><i className="fas fa-upload"></i></span><span className="file-label">Seleccionar un archivo…</span></span></label>                            </div>
        //                 </div>
        //             </div>
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Imágen para servicios:
        //                         </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="file has-name control-disable">
        //                         <label className="file-label"><input className="file-input" type="file" disabled /><span className="file-cta"><span className="file-icon"><i className="fas fa-upload"></i></span><span className="file-label">Seleccionar un archivo…</span></span></label>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         Imágen para productos:
        //                         </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <div className="file has-name control-disable">
        //                         <label className="file-label"><input className="file-input" type="file" disabled /><span className="file-cta"><span className="file-icon"><i className="fas fa-upload"></i></span><span className="file-label">Seleccionar un archivo…</span></span></label>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="columns is-variable is-0 is-marginless">
        //                 <div className="column is-4 is-offset-2">
        //                     <div className="control">
        //                         En construcción:
        //                     </div>
        //                 </div>
        //                 <div className="column is-4">
        //                     <label className="checkbox"><input type="checkbox" disabled />Sitio en construcción </label>
        //                 </div>
        //             </div>
        //             <div className="columns is-variable is-0 is-marginless has-text-centered">
        //                 <div className="column is-8 is-offset-2">
        //                     <a onClick={this.handleClick} className="button is-outlined is-fullwidth">Editar</a>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>);
        // }

        if (this.state.loading) {
            return <div><img src={LogoImg} alt="Moby Supply" id="preloadImg" className="ping" /></div>;
        } else {
            return (
                <div>
                    <div className="columns is-padding-top-60" id="">
                        <div className="column is-10 is-offset-1 box-animation card">
                            <div className="columns is-variable is-2 ">

                                <div className="column has-background-info">
                                    <h3 className="is-uppercase  is-size-5 has-text-left has-text-white is-marginless">Panel de Administración</h3>
                                </div>

                                <div className="column has-background-info">
                                    <h3 className="is-uppercase  is-size-5 has-text-centered has-text-white is-marginless">Configuración del sitio</h3>
                                </div>

                            </div>
                        </div>
                    </div>

                    {htmlBody}

                </div>
            );
        }
    }
}

// const blogSelector = createSelector(state => state.blog_post, blog_post => blog_post);                          // blog_post
// const blogTagSelector = createSelector(state => state.blog_tags, blog_tags => blog_tags);                       // blog_tags
// const brandsSelector = createSelector(state => state.brands, brands => brands);                                 // brands
// const carrouselSelector = createSelector(state => state.carrousel, carrousel => carrousel);                     // carrousel 
// const categoriesSelector = createSelector(   state => state.categories,   categories => categories );           // categories
// const departmentSelector = createSelector(state => state.departments, departments => departments);              // Department
// const imageCarrouselSelector = createSelector(state => state.img_carrousel, img_carrousel => img_carrousel);    // img_carrousel 
// const pagesSelector = createSelector(state => state.pages, pages => pages);                                     // Pages 
// const productsSelector = createSelector(state => state.products, products => products);                         // products
// const servicesSelector = createSelector(state => state.services, services => services);                         // services
const siteSelector = createSelector(state => state.site, site => site);                                         // site
// const socialMediaSelector = createSelector(state => state.social_media, social_media => social_media);          // Social media
// const testimonialsSelector = createSelector(state => state.testimonials, testimonials => testimonials);         // Testimonials
const userSelector = createSelector(state => state.user, user => user);                                         // user

const mapStateToProps = createSelector(
    //   brandsSelector,
    //   blogSelector,
    //   blogTagSelector,
    //   carrouselSelector,
    //   categoriesSelector,
    //   imageCarrouselSelector,
    //   departmentSelector,
    //   pagesSelector,
    //   productsSelector,
    //   servicesSelector,
    siteSelector,
    //   socialMediaSelector,
    //   testimonialsSelector,
    userSelector,
    (site, user) => (
        //   (brands, blog_post, blog_tags, carrousel, categories, img_carrousel, departments, pages, products, services, site, social_media, testimonials, user) => (
        {
            //   brands,
            //   blog_post,
            //   blog_tags,
            //   carrousel,
            //   categories,
            //   img_carrousel,
            //   departments,
            //   pages,
            //   products,
            //   services,
            site,
            //   social_media,
            //   testimonials,
            user,
        }
    )
);

const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            //   onFetchBrands: fetchBrands,
            //   onFetchBlogPost: fetchBlogPost,
            //   onFetchBlogTags: fetchBlogTags,
            //   onFetchCarrousels: fetchCarrousels,
            //   onFetchImageCarrousels: fetchImageCarrousels,
            //   onFetchDepartments: fetchDepartments,
            //   onFetchPages: fetchPages,
            //   onFetchProducts: fetchProducts,
            //   onFetchServices: fetchServices,
            onFetchSite: fetchSite,
            //   onFetchSocialMedia: fetchSocialMedia,
            //   onFetchTestimonial: fetchTestimonial,
        }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(PanelSite);