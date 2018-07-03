import React, { Component } from 'react';

class MultiCarrousel extends Component {

    render() {
        return (
            <div className="BrandsCarousel">
                <div className='carousel carousel-animated carousel-animate-slide' data-size="3" data-autoplay="true">
                    <div className='carousel-container'>
                        <div className='carousel-item is-active'>
                            <figure className="image is-3by1">
                                <img src="https://placeimg.com/640/480/any" alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item'>
                            <figure className="image is-3by1">
                                <img src="https://placeimg.com/640/480/nature" alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item'>
                            <figure className="image is-3by1">
                                <img src="https://placeimg.com/640/480/people" alt="Img"></img>
                            </figure>
                        </div>
                        <div className='carousel-item'>
                            <figure className="image is-3by1">
                                <img src="https://placeimg.com/640/480/tech" alt="Img"></img>
                            </figure>
                        </div>
                    </div>
                    <div className="carousel-navigation is-overlay">
                        <div className="carousel-nav-left">
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </div>
                        <div className="carousel-nav-right">
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MultiCarrousel;