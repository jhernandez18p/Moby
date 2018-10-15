import React, { Component } from 'react';

// Apps
import Slider from "react-slick";

function NextArrow(props) {
    const { className, onClick } = props;
    return (
        <button className={`${className}`} onClick={onClick}>
            <span className="icon">
                <i className="fas fa-chevron-left"></i>
            </span>
        </button>
    );
}

function PrevArrow(props) {
    const { className, onClick } = props;
    return (
        <button className={`${className}`} onClick={onClick}>
            <span className="icon">
                <i className="fas fa-chevron-left"></i>
            </span>
        </button>
    );
}


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
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 5000,
            infinite: true,
            lazyLoad: true,
            centerPadding: '50px',
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
             prevArrow: <PrevArrow />
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
            </div>
        );
    }
}

export default ServicesCarousel;