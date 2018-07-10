import React, { Component } from 'react';

// Apps
import Slider from "react-slick";

class Testimonial extends Component {
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
        <div className="slider" id="testimonials">
            <Slider ref={c => (this.slider = c)} {...settings}>
                <div className="box-animation">
                    <div className="columns has-background-grey-lighter">
                        <div className="column">
                            <div className="is-testimonial-img">
                                <div>
                                </div>
                                <figure className="image is-128x128">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt=""></img>
                                </figure>
                                <div>
                                </div>
                            </div>
                            <div className="title has-text-centered is-padding-top-30">
                                <h3 className="is-size-5">
                                    <span className="icon quote-left">
                                        <i className="fas fa-quote-left"></i>
                                    </span>
                                    &nbsp; Testimonio &nbsp;
                                    <span className="icon quote-left">
                                        <i className="fas fa-quote-right"></i>
                                    </span>
                                </h3>
                            </div>

                            <div className="columns" id="testimonialText">
                                <div className="column is-8 is-offset-2 is-paddingles">
                                    <div className="is-testimonial-coment has-text-centered">
                                        <p className="is-size-6">
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-animation">
                    <div className="columns has-background-grey-lighter">
                        <div className="column">
                            <div className="is-testimonial-img">
                                <div>
                                </div>
                                <figure className="image is-128x128">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt=""></img>
                                </figure>
                                <div>
                                </div>
                            </div>
                            <div className="title has-text-centered is-padding-top-30">
                                <h3 className="is-size-5">
                                    <span className="icon quote-left">
                                        <i className="fas fa-quote-left"></i>
                                    </span>
                                    &nbsp; Testimonio &nbsp;
                                    <span className="icon quote-left">
                                        <i className="fas fa-quote-right"></i>
                                    </span>
                                </h3>
                            </div>

                            <div className="columns" id="testimonialText">
                                <div className="column is-8 is-offset-2 is-paddingles">
                                    <div className="is-testimonial-coment has-text-centered">
                                        <p className="is-size-6">
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-animation">
                    <div className="columns has-background-grey-lighter">
                        <div className="column">
                            <div className="is-testimonial-img">
                                <div>
                                </div>
                                <figure className="image is-128x128">
                                    <img src="https://bulma.io/images/placeholders/128x128.png" alt=""></img>
                                </figure>
                                <div>
                                </div>
                            </div>
                            <div className="title has-text-centered is-padding-top-30">
                                <h3 className="is-size-5">
                                    <span className="icon quote-left">
                                        <i className="fas fa-quote-left"></i>
                                    </span>
                                    &nbsp; Testimonio &nbsp;
                                    <span className="icon quote-left">
                                        <i className="fas fa-quote-right"></i>
                                    </span>
                                </h3>
                            </div>

                            <div className="columns" id="testimonialText">
                                <div className="column is-8 is-offset-2 is-paddingles">
                                    <div className="is-testimonial-coment has-text-centered">
                                        <p className="is-size-6">
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                            Bienvenidos al blog de Moby Group aqui encontraras contenido informativo. esperamos sea de tu agrado.
                                        </p>
                                    </div>
                                </div>
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

export default Testimonial;