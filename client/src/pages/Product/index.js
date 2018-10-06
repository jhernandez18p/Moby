import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

import ProductPage from "../../components/Carrousel/ProductPage";
import Testimonial from "../../components/Carrousel/Testimonial";
import BrandsCarrousel from "../../components/Carrousel/BrandsCarrousel";

import TopDepartments from './details/TopDepartments';
import TopProducts from './details/TopProducts';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
// import { fetchBrands } from '../redux/actions/brand';
// import { fetchBlogPost } from '../redux/actions/blog';
// import { fetchBlogTags } from '../redux/actions/blog/tags';
// import { fetchCarrousels } from '../redux/actions/carrousel';
// import { fetchDepartments } from '../redux/actions/department';
// import { fetchImageCarrousels } from '../redux/actions/carrousel/images';
// import { fetchPages } from '../redux/actions/pages';
import { fetchProducts } from '../../redux/actions/product';
// import { fetchServices } from '../redux/actions/service';
// import { fetchSite } from '../redux/actions/site';
// import { fetchSocialMedia } from '../redux/actions/site/socialMedia';
// import { fetchTestimonial } from '../redux/actions/testimonial';

class Product extends Component {

  componentDidMount() {
    this.props.onFetchProducts();
  }

  render() {
    function* chunkArray(original, n) {
      const ary = [...original];
      while (ary.length > 0)
        yield ary.splice(ary, n);
    }

    const filter = (array, key, arg) => {
      let filtered_array = [];
      array.forEach(function (element) {
        if (element[key] === arg) {
          filtered_array.push(element);
        }
      });
      return filtered_array;
    };

    let brands = this.props.brands.results;
    let carrouselImgs = this.props.imgs;
    let carrousels = this.props.carrousel;
    let departments = this.props.departments.results;
    let pages = this.props.pages;
    let products = this.props.products;
    let testimonials = this.props.testimonials.results;
    let user = this.props.user;

    let productPage;
    let productCarrousel;
    let productCarrouselImgs;
    let siteHeaderCarrousel = <div></div>;

    if (pages.count >= 1 && carrousels.count >= 1 && carrouselImgs.count >= 1) {
      productPage = filter(pages.results, 'name', 'productos')
      productCarrousel = filter(carrousels.results, 'page', productPage[0].id)
      productCarrouselImgs = filter(carrouselImgs.results, 'Carousel', productCarrousel[0].id);
      siteHeaderCarrousel = <ProductPage imgs={productCarrouselImgs} user={user} />;
    }

    var topProducts = products.results;
    if (products.count >= 1) {
      let _featuredProductArray = filter(products.results, 'featured', true);
      if (_featuredProductArray.length >= 1) {
        topProducts = _featuredProductArray.splice(0, 8);
      } else {
        topProducts = products.results.splice(0, 8);
      }
    }

    let topDepartments = departments;
    if (topDepartments.length >= 5) {
      topDepartments = topDepartments.splice(0, 4);
    }

    return (
      <div>
        <Helmet
          title="Moby Supply - Productos"
        />
        <div className="container" id="productPage">
          <div className="is-padding-top-30">
            {siteHeaderCarrousel}
          </div>
          <div className="is-padding-top-30">
            {
              Array.from(chunkArray(topDepartments, 4)).map(([one, two, three, four], y) => {
                return (
                  <div className="columns bd-klmn-columns" key={y.toString()}>
                    {one ? <div className="column is-3"><TopDepartments department={one}></TopDepartments></div> : <div></div>}
                    {two ? <div className="column is-3"><TopDepartments department={two}></TopDepartments></div> : <div></div>}
                    {three ? <div className="column is-3"><TopDepartments department={three}></TopDepartments></div> : <div></div>}
                    {four ? <div className="column is-3"><TopDepartments department={four}></TopDepartments></div> : <div></div>}
                  </div>
                )
              })
            }
          </div>
          <div id="feeds">
            <div className="is-padding-top-60 has-text-centered">
              <h2 className="is-size-2">Nuestros productos</h2>
            </div>
            {
              Array.from(chunkArray(topProducts, 4)).map(([one, two, three, four], y) => {
                return (
                  <div className="columns" key={y.toString()}>
                    {one ? <div><TopProducts product={one}></TopProducts></div> : <div></div>}
                    {two ? <div><TopProducts product={two}></TopProducts></div> : <div></div>}
                    {three ? <div><TopProducts product={three}></TopProducts></div> : <div></div>}
                    {four ? <div><TopProducts product={four}></TopProducts></div> : <div></div>}
                  </div>
                )
              })
            }
            <div className="has-text-centered is-padding-top-60">
              <Link to="/productos/todos" className="button is-fullwidth is-light  is-size-4 has-text-black">
                Ver todos los productos
              </Link>
            </div>
          </div>
          <div className="is-padding-top-30">
            <Testimonial testimonials={testimonials} />
          </div>
          <div className="is-padding-top-60 is-margin-botton-50">
            <BrandsCarrousel brands={brands} />
          </div>
        </div>
      </div>
    );
  }
}


// const blogSelector = createSelector(state => state.blog_posts, blog_posts => blog_posts);                           // blog_post
// const blogTagSelector = createSelector(state => state.blog_tags, blog_tags => blog_tags);                           // blog_tags
// const brandsSelector = createSelector(state => state.brands, brands => brands);                                     // brands
// const carrouselSelector = createSelector(state => state.carrousel, carrousel => carrousel);                         // carrousel 
// const categoriesSelector = createSelector(   state => state.categories,   categories => categories );            // categories
// const departmentSelector = createSelector(state => state.departments, departments => departments);                  // Department
// const imageCarrouselSelector = createSelector(state => state.img_carrousel, img_carrousel => img_carrousel);        // img_carrousel 
// const pagesSelector = createSelector(state => state.pages, pages => pages);                                         // Pages 
const productsSelector = createSelector(state => state.products, products => products);                             // products
// const servicesSelector = createSelector(state => state.services, services => services);                             // services
// const siteSelector = createSelector(state => state.site, site => site);                                             // site
// const socialMediaSelector = createSelector(state => state.social_media, social_media => social_media);              // Social media
// const testimonialsSelector = createSelector(state => state.testimonials, testimonials => testimonials);             // Testimonials
// const userSelector = createSelector(state => state.user, user => user);                                             // user

const mapStateToProps = createSelector(
  // brandsSelector,
  // blogSelector,
  // blogTagSelector,
  // carrouselSelector,
  // imageCarrouselSelector,
  // departmentSelector,
  // pagesSelector,
  productsSelector,
  // servicesSelector,
  // siteSelector,
  // socialMediaSelector,
  // testimonialsSelector,
  // userSelector,
  //(brands, blog_posts, blog_tags, carrousel, img_carrousel, departments, pages, products, services, site, social_media, testimonials, user) => (
  (products) => (
    {
      // brands,
      // blog_posts,
      // blog_tags,
      // carrousel,
      // img_carrousel,
      // departments,
      // pages,
      products,
      // services,
      // site,
      // social_media,
      // testimonials,
      // user,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      // onFetchBrands: fetchBrands,
      // onFetchBlogPost: fetchBlogPost,
      // onFetchBlogTags: fetchBlogTags,
      // onFetchCarrousels: fetchCarrousels,
      // onFetchImageCarrousels: fetchImageCarrousels,
      // onFetchDepartments: fetchDepartments,
      // onFetchPages: fetchPages,
      onFetchProducts: fetchProducts,
      // onFetchServices: fetchServices,
      // onFetchSite: fetchSite,
      // onFetchSocialMedia: fetchSocialMedia,
      // onFetchTestimonial: fetchTestimonial,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);