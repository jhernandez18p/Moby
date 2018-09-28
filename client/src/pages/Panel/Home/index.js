import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import UsersIMG from '../../../assets/images/intra/users.jpg';
import ServicesIMG from '../../../assets/images/intra/services.jpg';
import ProductsIMG from '../../../assets/images/intra/products.jpg';
import BlogIMG from '../../../assets/images/intra/blog.jpg';

class PanelHome extends Component {


    render() {
        let user = this.props.user || 'Cargando...';

        let isAdmin = user.user.is_staff || false;
        let isAdminHtml = <div></div>;

        if (isAdmin) {
            isAdminHtml = (
                <div>
                    <div className="columns is-variable is-0 is-marginless">
                        <div className="column is-10 is-offset-1 box-animation card">
                            <div className="columns is-2">
                                <div className="column is-3 is-paddingless is-marginless">
                                    <div className="has-background-grey-lighter">
                                        <div className="card is-centered overlayer">
                                            <div className="content-overlay"></div>
                                            <img src={UsersIMG} alt="usuarios" className=" content-image"></img>
                                            <div className="content-details fadeIn-top">
                                                <Link to={`/intra/administracion/usuarios`}>
                                                    <h3>23 usuarios</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3 is-paddingless is-marginless">
                                    <div className="has-background-grey-lighter">
                                        <div className="card is-centered overlayer">
                                            <div className="content-overlay"></div>
                                            <img src={ProductsIMG} alt="productos" className=" content-image"></img>
                                            <div className="content-details fadeIn-top">
                                                <Link to={`/intra/administracion/productos`}>
                                                    <h3>1080 productos</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3 is-paddingless is-marginless">
                                    <div className="has-background-grey-lighter">
                                        <div className="card is-centered overlayer">
                                            <div className="content-overlay"></div>
                                            <img src={ServicesIMG} alt="servicios" className=" content-image"></img>
                                            <div className="content-details fadeIn-top">
                                                <Link to={`/intra/administracion/servicios`}>
                                                    <h3>5 servicios</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-3 is-paddingless is-marginless">
                                    <div className="has-background-grey-lighter">
                                        <div className="card is-centered overlayer">
                                            <div className="content-overlay"></div>
                                            <img src={BlogIMG} alt="blog" className=" content-image"></img>
                                            <div className="content-details fadeIn-top">
                                                <Link to={`/intra/administracion/blog`}>
                                                    <h3>8 posts</h3>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="columns is-padding-top-60" id="">
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="columns is-variable is-2 ">
                            <div className="column has-background-info">
                                <h3 className="is-size-5 has-text-left has-text-white is-uppercase is-marginless">Inicio</h3>
                            </div>
                        </div>
                    </div>
                </div>

                        {
                            isAdminHtml
                        }

                {/* <div className="columns is-padding-top-60" id="">
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="columns is-variable is-0 is-marginless">
                            <div className="column is-padding-y-30">
                                Editar mi ferfil
                            </div>
                        </div>
                        <div className="columns is-variable is-0 is-marginless">
                            <div className="column is-padding-y-30">

                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default PanelHome;