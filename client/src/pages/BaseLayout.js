import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';

// Assets
import LogoImg from '../assets/images/logo/ms-icon-70x70.png';

// Pages
import Auth from './Auth';
import Blog from './Blog';
import BlogDetail from './Blog/details';
import Brand from './Brand';
import BrandDetail from './Brand/details';
import Category from './Category';
import CategoryDetail from './Category/details';
import Contact from './Contact';
import Department from './Department';
import DepartmentDetail from './Department/details';
import FAQ from './Contact/details/FAQ';
import Home from './Home';
import Product from './Product';
import Service from './Service';

// Components
import Footer from '../components/Footer';
import RedesLine from '../components/Footer/Redes';
import Header from '../components/Header';
import UnderConstruction from '../components/UnderCostruction';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
import { fetchBrands } from '../redux/actions/brand';
import { fetchBlogPost } from '../redux/actions/blog';
import { fetchBlogTags } from '../redux/actions/blog/tags';
import { fetchCarrousels } from '../redux/actions/carrousel';
import { fetchDepartments } from '../redux/actions/department';
import { fetchImageCarrousels } from '../redux/actions/carrousel/images';
import { fetchPages } from '../redux/actions/pages';
import { fetchProducts } from '../redux/actions/product';
import { fetchServices } from '../redux/actions/service';
import { fetchSite } from '../redux/actions/site';
import { fetchSocialMedia } from '../redux/actions/site/socialMedia';
import { fetchTestimonial } from '../redux/actions/testimonial';

class Layout extends Component {

  getData() {
    this.props.onFetchBrands();
    this.props.onFetchBlogPost();
    this.props.onFetchBlogTags();
    this.props.onFetchCarrousels();
    this.props.onFetchImageCarrousels();
    this.props.onFetchDepartments();
    this.props.onFetchPages();
    this.props.onFetchProducts();
    this.props.onFetchServices();
    this.props.onFetchSite();
    this.props.onFetchSocialMedia();
    this.props.onFetchTestimonial();
  }

  componentDidMount() {
    setTimeout(() => {
      this.getData();
    }, 2000);
  }

  render() {

    let blog_post = this.props.blog_post || 'Cargando ...';
    let blog_tags = this.props.blog_tags || 'Cargando ...';
    let brands = this.props.brands || 'Cargando ...';
    let carrousel = this.props.carrousel || 'Cargando ...';
    let departments = this.props.departments || 'Cargando ...';
    let img_carrousel = this.props.img_carrousel || 'Cargando ...';
    let pages = this.props.pages || 'Cargando ...';
    let products = this.props.products || 'Cargando ...';
    let services = this.props.services || 'Cargando ...';
    let site = this.props.site || 'Cargando ...';
    let social_media = this.props.social_media || 'Cargando ...';
    let testimonials = this.props.testimonials || 'Cargando ...';
    let user = this.props.user || 'Cargando ...';

    let isUnderConstruction = site.results[0].is_undercostruction;

    if (blog_post.count === 0 || blog_tags.count === 0 || brands.count === 0 || carrousel.count === 0 || departments.count === 0 || img_carrousel.count === 0 || pages.count === 0 || products.count === 0 || services.count === 0 || site.count === 0 || social_media.count === 0 || testimonials.count === 0){
      return <div><img src={LogoImg} alt="Moby Supply" id="preloadImg" className="ping"/></div>;
    } else {
      return (
        <div className="site pageloader has-navbar-fixed-top">
          <Helmet
            title="Moby Supply - Inicio"
            meta={[
              { name: 'description', content: 'Moby Panamá, S.A. fue fundada en Panamá en el año 2011 estructurada en forma sociedad anónima. Actualmente, con más de 30 colaboradores, hacemos presencia en Panamá.' },
              { name: 'keywords', content: 'ebanisteria, ebanista, madera, marmol, cortes en madera, Panamá' },
            ]}
          />
          <div>
            <UnderConstruction isUnderCostruction={isUnderConstruction} />
          </div>
          <div className="site-wr">
            <Header site={site} user={user}/>
            <div className="content">
              <Switch>
                <Route exact path="/" render={
                  (props) => <Home
                    site={site}
                    services={services}
                    blog_post={blog_post}
                    departments={departments}
                    carrousel={carrousel}
                    pages={pages}
                    imgs={img_carrousel} />
                } />

                <Route exact path="/blog/:slug" component={BlogDetail} />

                <Route exact path="/blog" render={
                  (props) => <Blog
                    posts={blog_post}
                    user={user}/>
                } />

                <Route exact path="/contacto/f-a-q" render={
                  (props) => <FAQ />
                } />

                <Route exact path="/contacto" render={
                  (props) => <Contact />
                } />

                <Route exact path="/productos/categoria/:slug" render={
                  (props) => <CategoryDetail />
                } />

                <Route exact path="/productos/categorias" render={
                  (props) => <Category />
                } />

                <Route exact path="/productos/departamento/:slug" render={
                  (props) => <DepartmentDetail />
                } />

                <Route exact path="/productos/departamentos" render={
                  (props) => <Department />
                } />

                <Route exact path="/productos/marca/:slug" render={
                  (props) => <BrandDetail />
                } />

                <Route exact path="/productos/marcas" render={
                  (props) => <Brand />
                } />


                <Route exact path="/productos" render={
                  (props) => <Product
                    brands={brands}
                    site={site}
                    products={products}
                    departments={departments}
                    testimonials={testimonials}
                    carrousel={carrousel}
                    pages={pages}
                    imgs={img_carrousel} />
                } />

                <Route exact path="/servicios/:slug" render={
                  (props) => <Service
                    services={services}
                    carrousel={carrousel}
                    pages={pages}
                    imgs={img_carrousel} />
                } />

                <Route exact path="/servicios" render={
                  (props) => <Service
                    services={services}
                    carrousel={carrousel}
                    pages={pages}
                    imgs={img_carrousel} />
                } />

                <Route path="/auth" component={Auth} />
              </Switch>
            </div>
          </div>
          <div>
            <RedesLine redes={social_media} />
          </div>
          <Footer site={site} blog_post={blog_post} />
        </div>
      );
    }
  }
}

const blogSelector = createSelector( state => state.blog_post, blog_post => blog_post );                          // blog_post
const blogTagSelector = createSelector( state => state.blog_tags, blog_tags => blog_tags );                       // blog_tags
const brandsSelector = createSelector( state => state.brands, brands => brands );                                 // brands
const carrouselSelector = createSelector( state => state.carrousel, carrousel => carrousel );                     // carrousel 
// const categoriesSelector = createSelector(   state => state.categories,   categories => categories );             // categories
const departmentSelector = createSelector( state => state.departments, departments => departments );              // Department
const imageCarrouselSelector = createSelector( state => state.img_carrousel, img_carrousel => img_carrousel );    // img_carrousel 
const pagesSelector = createSelector( state => state.pages, pages => pages );                                     // Pages 
const productsSelector = createSelector( state => state.products, products => products );                         // products
const servicesSelector = createSelector( state => state.services, services => services );                         // services
const siteSelector = createSelector( state => state.site, site => site );                                         // site
const socialMediaSelector = createSelector( state => state.social_media, social_media => social_media );          // Social media
const testimonialsSelector = createSelector( state => state.testimonials, testimonials => testimonials );         // Testimonials
const userSelector = createSelector(   state => state.user,   user => user );                                     // user

const mapStateToProps = createSelector(
  brandsSelector,
  blogSelector,
  blogTagSelector,
  carrouselSelector,
  imageCarrouselSelector,
  departmentSelector,
  pagesSelector,
  productsSelector,
  servicesSelector,
  siteSelector,
  socialMediaSelector,
  testimonialsSelector,
  userSelector,
  (brands, blog_post, blog_tags, carrousel, img_carrousel, departments, pages, products, services, site, social_media, testimonials, user) => (
    {
      brands,
      blog_post,
      blog_tags,
      carrousel,
      img_carrousel,
      departments,
      pages,
      products,
      services,
      site,
      social_media,
      testimonials,
      user,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchBrands: fetchBrands,
      onFetchBlogPost: fetchBlogPost,
      onFetchBlogTags: fetchBlogTags,
      onFetchCarrousels: fetchCarrousels,
      onFetchImageCarrousels: fetchImageCarrousels,
      onFetchDepartments: fetchDepartments,
      onFetchPages: fetchPages,
      onFetchProducts: fetchProducts,
      onFetchServices: fetchServices,
      onFetchSite: fetchSite,
      onFetchSocialMedia: fetchSocialMedia,
      onFetchTestimonial: fetchTestimonial,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);