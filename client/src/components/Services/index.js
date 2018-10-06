import React, { Component } from "react";
import { Link } from 'react-router-dom';

import DOMPurify from 'dompurify';

import ServicesCarousel from "../../components/Carrousel/ServicesCarousel";

class Services extends Component {

  render() {

    const filter = (array, key, val) => {
      let filtered_array = [];
      array.forEach(function (element) {
        if (element[key] === val) {
          filtered_array.push(element);
        }
      });
      return filtered_array;
    };

    let services = this.props.services;
    let pages = this.props.pages;
    let carrousels = this.props.carrousel;
    let carrouselImg = this.props.imgs;


    var servicesCarrousel;
    if (pages.count <= 1) {
      servicesCarrousel = <div className="is-hidden-touch"></div>
    } else {
      let servicePage = filter(pages.results, 'name', 'servicios');
      let carrousel = filter(carrousels.results, 'page', servicePage[0].id);
      let imgs = filter(carrouselImg.results, 'Carousel', carrousel[0].id)
      // console.log(imgs);
      servicesCarrousel = <div className="column is-half is-hidden-touch" id="serviceSlide"><ServicesCarousel imgs={ imgs } /></div>
    }

    let _featuredServiceArray = filter(services, 'featured', true);
    let _serviceArray;
    if (_featuredServiceArray.length >= 1) { _serviceArray = _featuredServiceArray; } else { _serviceArray = services; }
    const serviceItems = _serviceArray.slice(0, 3).map(
      (service) => {
        return (
          <div key={service.id.toString()} className="">
            <h3 className="is-size-4">
              <Link to={`/servicios/${service.slug}`} className="has-text-black">
                {service.title}
              </Link>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(service.content) }}></div>
          </div>
        )
      }
    );

    return (
      <div>
        <div className="container-fluid has-background-moby">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half">
                <div id="whatWeDo">
                  <div className="">
                    <h2 className="is-size-1"><Link to="/servicios" className="has-text-black">Nuestros servicios</Link></h2>
                  </div>
                  <div className="">
                    <h3 className="is-size-3">Queremos ofrecer soluciones a sus necesidades.</h3>
                  </div>
                  {serviceItems}
                </div>
              </div>
              {servicesCarrousel}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;