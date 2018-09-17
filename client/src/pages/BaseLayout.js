import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';

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

  getData(){
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
    }, 200);    
  }
  
  render() {
    
    console.log(this.props);
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
    
    let isUnderConstruction = site.results[0].is_undercostruction || true;

    
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
          <Header site={site}/>
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
                  tags={blog_tags}/>
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

              <Route exact path="/auth/:slug" render={
                (props) => <Auth />
              } />
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

// site
const siteSelector = createSelector(
  state => state.site,
  site => site
);

// Social media
const socialMediaSelector = createSelector(
  state => state.social_media,
  social_media => social_media
);

// brands
const brandsSelector = createSelector(
  state => state.brands,
  brands => brands
);

// blog_post
const blogSelector = createSelector(
  state => state.blog_post,
  blog_post => blog_post
);

// blog_tags
const blogTagSelector = createSelector(
  state => state.blog_tags,
  blog_tags => blog_tags
);

// user
// const userSelector = createSelector(
//   state => state.user,
//   user => user
// );

// services
const servicesSelector = createSelector(
  state => state.services,
  services => services
);

// products
const productsSelector = createSelector(
  state => state.products,
  products => products
);

// categories
// const categoriesSelector = createSelector(
//   state => state.categories,
//   categories => categories
// );

// Department
const departmentSelector = createSelector(
  state => state.departments,
  departments => departments
);

// carrousel 
const carrouselSelector = createSelector(
  state => state.carrousel,
  carrousel => carrousel
);

// img_carrousel 
const imageCarrouselSelector = createSelector(
  state => state.img_carrousel,
  img_carrousel => img_carrousel
);

// Pages 
const pagesSelector = createSelector(
  state => state.pages,
  pages => pages
);

// Testimonials
const testimonialsSelector = createSelector(
  state => state.testimonials,
  testimonials => testimonials
);

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
  (brands, blog_post, blog_tags, carrousel, img_carrousel, departments, pages, products, services, site, social_media, testimonials) => (
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