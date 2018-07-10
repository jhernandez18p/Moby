import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Apps
import Slider from "react-slick";


class ProductPage extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed:5000,
            infinite: true,
            lazyLoad: true,
            centerPadding: '50px',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
    return (
        <div className="slider">
            <Slider ref={c => (this.slider = c)} {...settings}>
                <div className="box-animation">
                    <div className="columns has-background-grey-lighter">
                        <div className="column">
                            <div className="has-text-left ">
                                <h3 className="is-size-2">
                                    Unete a nuestro sistema</h3>
                                <p className="is-size-6">
                                    Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                </p>
                            </div>
                            <div className="btns">
                                <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
                                <Link to="/auth/registro" className="button is-link">Registrarse</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="box-animation">
                    <div className="columns has-background-grey-lighter">
                        <div className="column">
                            <div className="has-text-left ">
                                <h3 className="is-size-2">
                                    Unete a nuestro sistema</h3>
                                <p className="is-size-6">
                                    Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                </p>
                            </div>
                            <div className="btns">
                                <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
                                <Link to="/auth/registro" className="button is-link">Registrarse</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="box-animation">
                    <div className="columns has-background-grey-lighter">
                        <div className="column">
                            <div className="has-text-left ">
                                <h3 className="is-size-2">
                                    Unete a nuestro sistema</h3>
                                <p className="is-size-6">
                                    Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                </p>
                            </div>
                            <div className="btns">
                                <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
                                <Link to="/auth/registro" className="button is-link">Registrarse</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
            {/* <div className="slider-btn" style={{ textAlign: "center" }}>
                <button className="slide-button-prev button has-background-transparent" onClick={this.previous}>
                    <span className="icon">
                        <i className="fas fa-chevron-left"></i>
                    </span>
                </button>
                <button className="slide-button-next button has-background-transparent" onClick={this.next}>
                    <span className="icon">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                </button>
            </div> */}
        </div>
    );
  }
}

export default ProductPage;