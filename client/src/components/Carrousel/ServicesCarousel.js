import React, { Component } from 'react';

// Apps
import Slider from "react-slick";


class ServicesCarousel extends Component {
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
            dots: true,
            arrows: false,
            accessibility: true,
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
                <div>
                    <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel002.png" alt="Audi" ></img>
                </div>
                <div>
                    <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel001.png" alt="Audi" ></img>
                </div>
                <div>
                    <img src="https://www.moby-group.com/media/frontend/carouselimage/2018/04/06/carrousel001.png" alt="Audi" ></img>
                </div>
            </Slider>
            <div className="slider-btn" style={{ textAlign: "center" }}>
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
            </div>
        </div>
    );
  }
}

export default ServicesCarousel;
