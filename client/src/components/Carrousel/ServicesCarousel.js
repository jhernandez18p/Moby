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
            autoplaySpeed: 5000,
            infinite: true,
            lazyLoad: true,
            centerPadding: '50px',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        const _imgs = this.props.imgs;

        const listItems = _imgs.map(
            (img) => {
                return (
                    // console.log(img)
                    <div key={img.id.toString()}>
                        <img src={img.image} alt={img.alt} />
                    </div>
                )
            }
        );
        // console.log(listItems);
        return (
            <div className="slider">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    {listItems}
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