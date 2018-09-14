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
        let user = this.props.user || {name:'Guest',authenticated:false}
        const settings = {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 9000,
            infinite: true,
            lazyLoad: true,
            centerPadding: '50px',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let imgs = this.props.imgs;

        let listItems = imgs.map(
            (img) => {
                let html = (
                    <div key={img.id.toString()}>
                        <img  src={ img.image } alt={ img.alt } />
                    </div>
                );
                return html;
            }
        );
        let listItemsAuth = <div></div>;
        if (!user.authenticated){
            listItemsAuth = (
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
            );
        }

        return (
            <div className="slider">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {listItemsAuth}
                    {listItems}
                </Slider>
            </div>
        );
    }
}

export default ProductPage;