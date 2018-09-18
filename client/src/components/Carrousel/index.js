import React, { Component } from 'react';

// Apps
import Slider from "react-slick";


class Carrousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: ''
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    
    componentDidMount(){
        setTimeout(() => {
                const _imgs = this.props.imgs;
                // console.log(_imgs)
                const imgs = _imgs;
                // console.log(listItems);
                const listItems = imgs.map(
                    (img) => {
                        return (
                            // console.log(img)
                            <div key={img.id.toString()}>
                                <img  src={ img.image } alt={ img.alt } />
                            </div>
                        )
                    }
                );
                return this.setState({listItems: listItems})
            }, 750
        )
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
        return (
            <div className="slider">
                <Slider ref={c => (this.slider = c)} {...settings}>
                    { this.state.listItems }
                </Slider>
            </div>
        );
    }
}

export default Carrousel;

/* 
IF ARROWS 
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
*/