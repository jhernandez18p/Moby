import React, { Component } from 'react';

class Carrousel extends Component {

    render() {
        return (
            <div className='carousel carousel-animated carousel-animate-slide' data-autoplay="true">
                <div className='carousel-container'>
                    <div className='carousel-item has-background is-active'>
                        <img className="is-background" src="https://wikiki.github.io/images/merry-christmas.jpg" alt="" width="640" height="310" />
                        <div className="title">Merry Christmas</div>
                    </div>
                    <div className='carousel-item has-background'>
                        <img className="is-background" src="https://wikiki.github.io/images/singer.jpg" alt="" width="640" height="310" />
                        <div className="title">Original Gift: Offer a song with <a href="https://lasongbox.com" target="_blank" rel="noopener noreferrer">La Song Box</a></div>
                    </div>
                    <div className='carousel-item has-background'>
                        <img className="is-background" src="https://wikiki.github.io/images/sushi.jpg" alt="" width="640" height="310" />
                        <div className="title">Sushi time</div>
                    </div>
                    <div className='carousel-item has-background'>
                        <img className="is-background" src="https://wikiki.github.io/images/life.jpg" alt="" width="640" height="310" />
                        <div className="title">Life</div>
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
        );
    }
}

export default Carrousel;

