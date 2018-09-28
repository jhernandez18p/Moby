import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import ProductsHeader from '../../../components/Header/ProductsHeader';

// Assets
import LogoImg from '../../../assets/images/logo/ms-icon-70x70.png';

// Redux
// eslint-disable-next-line
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions
import { fetchSingleProduct } from '../../../redux/actions/product/';


class SingleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    let product = this.props.location.pathname.split('/');
    let productLen = product.length;
    product = product[productLen - 1];

    this.props.onFetchProduct(product);
    this.setState({isLoading: false })
  }

  render() {
    let product = this.props.product || 'Cargando';

    let authenticated = <div></div>;
    if (!this.props.user.isAuthenticated) {
      authenticated = (
        <div className="columns is-variable is-2">
          <div className="column">
            <div className="section has-background-grey-light box-animation">
              <div className="columns">
                <div className="column">
                  <div className="has-text-left ">
                    <h3 className="is-size-2 has-text-white">Unete a nuestro sistema</h3>
                    <p className="is-size-6 is-padding-y-30">Para conocer nuestros precios o solicitar cotizaciones desde el sitio web es necesario registrarse o iniciar sesión.</p>
                  </div>
                  <div className="btns">
                    <Link to="/auth/iniciar-sesion" className="button is-black">Iniciar sesión</Link>
                    <Link to="/auth/registro" className="button is-link">Registrarse</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (this.state.isLoading) {
      return <div><img src={LogoImg} alt="Moby Supply" id="preloadImg" className="ping" /></div>;
    } else {
      return (
        <div className="product-list">
          <ProductsHeader />
          <div className="container is-padding-top-100" id="productsSite">
            <div>
              <div className="columns is-variable is-1">
                <div className="column">
                  <div className="card box-animation">
                    <div className="columns is-marginless">
                      <div className="column is-marginless">
                        <figure className="image">
                          <img src={product.img} alt={product.code}></img>
                        </figure>
                      </div>
                      <div className="column">
                        <p>{product.code}</p>
                        <div className="is-padding-y-30">
                          <h1 className="is-size-3">
                            {product.description}
                          </h1>
                        </div>
                        <div className="is-padding-y-20">
                          {/* <p className="is-size-5">
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
                          </p> */}
                        </div>
                        {/* <hr></hr> */}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              {authenticated}
            </div>
          </div>
        </div>
      );
    }
  }
}

// const blogSelector = createSelector(state => state.blog_post, blog_post => blog_post);                          // blog_post
// const blogTagSelector = createSelector(state => state.blog_tags, blog_tags => blog_tags);                       // blog_tags
// const brandsSelector = createSelector(state => state.brands, brands => brands);                                 // brands
// const carrouselSelector = createSelector(state => state.carrousel, carrousel => carrousel);                     // carrousel 
// const categoriesSelector = createSelector(   state => state.categories,   categories => categories );           // categories
// const departmentSelector = createSelector(state => state.departments, departments => departments);              // Department
// const imageCarrouselSelector = createSelector(state => state.img_carrousel, img_carrousel => img_carrousel);    // img_carrousel 
// const pagesSelector = createSelector(state => state.pages, pages => pages);                                     // Pages 
const productSelector = createSelector(state => state.product, product => product);                               // products
// const servicesSelector = createSelector(state => state.services, services => services);                         // services
// const siteSelector = createSelector(state => state.site, site => site);                                         // site
// const socialMediaSelector = createSelector(state => state.social_media, social_media => social_media);          // Social media
// const testimonialsSelector = createSelector(state => state.testimonials, testimonials => testimonials);         // Testimonials
const userSelector = createSelector(state => state.user, user => user);                                         // user

const mapStateToProps = createSelector(
  // brandsSelector,
  // blogSelector,
  // blogTagSelector,
  // carrouselSelector,
  // imageCarrouselSelector,
  // departmentSelector,
  // pagesSelector,
  productSelector,
  // servicesSelector,
  // siteSelector,
  // socialMediaSelector,
  // testimonialsSelector,
  userSelector,
  // (brands, blog_post, blog_tags, carrousel, img_carrousel, departments, pages, products, services, site, social_media, testimonials, user) => (
  (product, user) => (
    {
      //     brands,
      //     blog_post,
      //     blog_tags,
      //     carrousel,
      //     img_carrousel,
      //     departments,
      //     pages,
      product,
      //     services,
      //     site,
      //     social_media,
      //     testimonials,
      user,
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
      onFetchProduct: fetchSingleProduct,
      // onFetchServices: fetchServices,
      // onFetchSite: fetchSite,
      // onFetchSocialMedia: fetchSocialMedia,
      // onFetchTestimonial: fetchTestimonial,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDetail);