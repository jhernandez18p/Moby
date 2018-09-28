import React, { Component } from 'react';
import Slider from "react-slick";
// import axios from 'axios';

// import BaseImg from '../../assets/images/base.jpg';


class BrandsCarrousel extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next() {this.slider.slickNext();}
    previous() {this.slider.slickPrev();}
    
    render() {
        let imgs = this.props.brands;    

        let slidesToShow;
        if (imgs.length >= 3) { slidesToShow = imgs.length; } else { slidesToShow = 1; }
        const listItems = imgs.slice(0, 10).map(
            (img) => {
                var html = (
                    <div key={img.id.toString()}>
                        {/* <Link to={ `/productos/marcas/${ img.slug }` }> */}
                            <img id="brandCarrouselImg" src={img.img} alt={img.alt} />
                        {/* </Link> */}
                    </div>
                );
                return html;
            }
        );
        const _listItems = imgs.slice(0, 10).map(
            (img) => {
                const html = (
                    <div className="column" key={img.id.toString()}>
                        <div>
                            {/* <Link to={ `/productos/marcas/${ img.slug }` }> */}
                                <img id="brandCarrouselImg" src={img.img} alt={img.alt} />
                            {/* </Link> */}
                        </div>
                    </div>
                )
                return html;
            }
        );
        const settings = { dots: false, arrows: false, accessibility: true, autoplay: true, autoplaySpeed: 4000, infinite: true, lazyLoad: true, speed: 500, slidesToShow: slidesToShow, slidesToScroll: 1, centerPadding: '50px', };
        return (
            <div>
                <div className="is-hidden-touch">
                    <Slider {...settings}>
                        {listItems}
                    </Slider>
                </div>
                <div className="is-hidden-desktop">
                    <div className="columns">
                        {_listItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default BrandsCarrousel;