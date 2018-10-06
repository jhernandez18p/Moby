import React, { Component } from 'react';

import DOMPurify from 'dompurify';

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
        const imgs = this.props.testimonials;
        // console.log(imgs);
        
        const size = 8;
        const listItems = imgs.slice(0, size).map(
            (img) => {
                return (
                    // console.log(img)
                    <div key={ img.id.toString() }>
                        <div className="columns">
                            <div className="column">
                                <div className="box-animation has-background-grey-lighter is-padding-y-30">
                                    <div className="is-testimonial-img">
                                        <div>
                                        </div>
                                        <figure className="image is-128x256">
                                            <img src={ img.img } alt={ img.name } ></img>
                                        </figure>
                                        <div>
                                        </div>
                                    </div>
                                    <div className="title has-text-centered is-padding-top-30">
                                        <h3 className="is-size-5">
                                            <span className="icon quote-left">
                                                <i className="fas fa-quote-left"></i>
                                            </span>
                                            &nbsp; { img.company } &nbsp;
                                            <span className="icon quote-left">
                                                <i className="fas fa-quote-right"></i>
                                            </span>
                                        </h3>
                                    </div>

                                    <div className="columns" id="testimonialText">
                                        <div className="column is-8 is-offset-2 is-paddingles">
                                            <div className="is-testimonial-coment has-text-centered">
                                                <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(img.description) }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        );
        const settings = {
            dots: false,
            arrows: false,
            autoplay: true,
            autoplaySpeed:9000,
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
                { listItems }
            </Slider>
        </div>
    );
  }
}

export default Testimonial;