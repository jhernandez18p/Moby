import React, { Component } from "react";
import Helmet from 'react-helmet';

// Components
import Services from '../../../components/Services';
import ServicesList from '../../../components/Services/List';
import FormServices from '../../../components/Services/form';
import ServicesCarousel from "../../../components/Carrousel/ServicesCarousel";

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
import { requestService, fetchServices, requestImgService } from '../../../redux/actions/service';

class ServiceDetail extends Component {

  constructor(props){
    super(props);
    this.state = {
      slug : ''
    }
  }

  getImgCarrousel(serviceId){
    this.props.onFetchImgService(serviceId);
  }

  componentDidMount() {
    const { slug } = this.props.match.params;
    let _slug = slug.charAt(0).toUpperCase() + slug.slice(1);
    if(slug !== this.state.slug){
      this.setState({slug:_slug});
      this.props.onFetchServices();
      this.props.onFetchService(slug);
    }
  }

  componentDidUpdate(prevProps, prevState){
    const { slug } = this.props.match.params;
    let _slug = slug.charAt(0).toUpperCase() + slug.slice(1);
    if(_slug !== prevState.slug){
      this.setState({slug:_slug});
      this.props.onFetchServices();
      this.props.onFetchService(slug);
    }
    if(this.props.service.id !== prevProps.service.id){
      this.getImgCarrousel(this.props.service.id);
    } 
  }

  render() {
    const filterRelatedServices = (array, key, val) => {
      let filtered_array = [];
      array.forEach(function (element) {
        if (element[key] !== val) {
          filtered_array.push(element);
        }
      });
      return filtered_array;
    };

    let service = this.props.service || "Cargando ...";
    let service_imgs = this.props.service_image || "Cargando ...";
    let services = this.props.services || "Cargando ...";

    let serviceDesc = '';
    var _formServices = <div/>;
    var servicesCarrousel = <div/>;
    var _notFeaturedServices = <div></div>;
    var _featuredServices = <div></div>;
    
    if (service !== 'Cargando ...' && services !== 'Cargando ...'){
      if (service.id > 0 && services.count > 0){
        serviceDesc = service.description;
        
        let notFeaturedServiceArray = filterRelatedServices(services.results, 'id', service.id);

        if (service_imgs.count !== undefined && service_imgs.count > 0){
          servicesCarrousel = <div className="column is-half is-hidden-touch" id="serviceSlide"><ServicesCarousel imgs={ service_imgs.results } /></div>
        }
        
        _formServices = <FormServices service={service.title}/>;
        _featuredServices = <Services services={ service }/>
        _notFeaturedServices = <ServicesList services={ notFeaturedServiceArray} />
      }
    }

    return (
      <div>
        <Helmet title={`Moby Supply - ${this.state.slug}`} meta={[ { name: 'description', content: serviceDesc }, ]} />
        <div>{ _featuredServices }</div>
        <div className="container-fluid has-background-white-ter">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-half">
                <div>{ _formServices }</div>
              </div>
              <div className="column is-half">
                {servicesCarrousel}
              </div>
            </div>
          </div>
        </div>
        <div>{ _notFeaturedServices }</div>
      </div>
    );
  }
}

// const blogSelector = createSelector(state => state.blog_posts, blog_posts => blog_posts);                           // blog_post
// const blogTagSelector = createSelector(state => state.blog_tags, blog_tags => blog_tags);                           // blog_tags
// const brandsSelector = createSelector(state => state.brands, brands => brands);                                     // brands
// const carrouselSelector = createSelector(state => state.carrousel, carrousel => carrousel);                         // carrousel 
// const categoriesSelector = createSelector(   state => state.categories,   categories => categories );               // categories
// const departmentSelector = createSelector(state => state.departments, departments => departments);                  // Department
// const imageCarrouselSelector = createSelector(state => state.img_carrousel, img_carrousel => img_carrousel);        // img_carrousel 
// const pagesSelector = createSelector(state => state.pages, pages => pages);                                         // Pages 
// const productsSelector = createSelector(state => state.products, products => products);                             // products
const serviceSelector = createSelector(state => state.service, service => service);                                 // service
const imgServiceSelector = createSelector(state => state.service_image, service_image => service_image);           // service images
const servicesSelector = createSelector(state => state.services, services => services);                             // services
// const siteSelector = createSelector(state => state.site, site => site);                                             // site
// const socialMediaSelector = createSelector(state => state.social_media, social_media => social_media);              // Social media
// const testimonialsSelector = createSelector(state => state.testimonials, testimonials => testimonials);             // Testimonials
// const userSelector = createSelector(state => state.user, user => user);                                             // user

const mapStateToProps = createSelector(
  serviceSelector,
  imgServiceSelector,
  servicesSelector,
  (service, service_image, services) => (
    {
      service,
      service_image,
      services
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchService: requestService,
      onFetchImgService: requestImgService,
      onFetchServices: fetchServices,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetail);