import React, { Component } from "react";
import Helmet from 'react-helmet';

import Services from '../../components/Services';
import ServicesList from '../../components/Services/List';
 
class Service extends Component {
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
    let carrouselImg = this.props.imgs;
    let carrousels = this.props.carrousel;
    let pages = this.props.pages;

    var _notFeaturedServices = <div></div>;
    var _featuredServices = <div></div>;

    if (services.count >= 1){
      let featuredServiceArray = filter(services.results, 'featured', true);
      let notFeaturedServiceArray = filter(services.results, 'featured', false);

      if(featuredServiceArray.length <= 0){
        _featuredServices = <div></div>;
      }else{
        _featuredServices = <Services services={ featuredServiceArray } pages={ pages } carrousel={ carrousels } imgs={ carrouselImg }/>
      }
      
      if(notFeaturedServiceArray.length <= 0){
        _notFeaturedServices = <div></div>;
      }else{
        _notFeaturedServices = <ServicesList services={ notFeaturedServiceArray} />
      }
    }
    
    return (
      <div className="">
        <Helmet
          title="Moby Supply - Servicios"
        />
        <div>{ _featuredServices }</div>
        <div>{ _notFeaturedServices }</div>
      </div>
    );
  }
}

export default Service;