import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Apps
import Slider from "react-slick";


class BrandsCarrousel extends Component {
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
            autoplaySpeed: 5000,
            infinite: true,
            lazyLoad: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1
        };
        return (
            <div>
                <div className="slider is-hidden-touch" id="ourBrands">
                    <Slider ref={c => (this.slider = c)} {...settings}>
                        <div className="box-animation">
                            <Link to="/productos/marcas/:slug">
                                <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                            </Link>
                        </div>

                        <div className="box-animation">
                            <Link to="/productos/marcas/:slug">
                                <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                            </Link>
                        </div>

                        <div className="box-animation">
                            <Link to="/productos/marcas/:slug">
                                <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                            </Link>
                        </div>

                        <div className="box-animation">
                            <Link to="/productos/marcas/:slug">
                                <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                            </Link>
                        </div>

                        <div className="box-animation">
                            <Link to="/productos/marcas/:slug">
                                <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                            </Link>
                        </div>

                        <div className="box-animation">
                            <Link to="/productos/marcas/:slug">
                                <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                            </Link>
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
                <div className="is-hidden-desktop">
                    <div className="columns">
                        <div className="column">
                            <div>
                                <Link to="/productos/marcas/:slug">
                                    <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                                </Link>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <Link to="/productos/marcas/:slug">
                                    <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                                </Link>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <Link to="/productos/marcas/:slug">
                                    <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                                </Link>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <Link to="/productos/marcas/:slug">
                                    <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                                </Link>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <Link to="/productos/marcas/:slug">
                                    <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandsCarrousel;