import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Helmet from "react-helmet";

// assets
import LogoImg from '../../assets/images/logo/ms-icon-70x70.png';

// Pages
import PanelHome from './Home';
import PanelProfile from './Profile';
// import PanelAdmin from './Admin';
import PanelServices from './Services';
import PanelBlog from './Blog';
import PanelTickets from './Tickets';
import AdminProducts from './Products';
import PanelUser from './Admin/panelUser';
import PanelTop10 from './Admin/panelTop10';
import PanelSubscriptions from './Admin/panelSubscriptions';
import PanelSite from './Admin/panelSite';
// import PanelPhotos from './Admin/panelPhotos';
import PanelProducts from './Admin/panelProducts';

// Cmponents
import IntraHeader from '../../components/Header/Intra';
import SideNav from '../../components/Nav/SideNav';
import NotFound from '../../components/Errors/index';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
import { fetchBrands } from '../../redux/actions/brand';
import { fetchBlogPost } from '../../redux/actions/blog';
import { fetchBlogTags } from '../../redux/actions/blog/tags';
import { fetchCarrousels } from '../../redux/actions/carrousel';
import { fetchDepartments } from '../../redux/actions/department';
import { fetchImageCarrousels } from '../../redux/actions/carrousel/images';
import { fetchPages } from '../../redux/actions/pages';
import { fetchProducts } from '../../redux/actions/product';
import { fetchServices } from '../../redux/actions/service';
import { fetchSite } from '../../redux/actions/site';
import { fetchSocialMedia } from '../../redux/actions/site/socialMedia';
import { fetchTestimonial } from '../../redux/actions/testimonial';

class PanelLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

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
      this.setState({ loading: false });
    }, 2000);
  }

  render() {
    let user = this.props.user || 'Cargando ...';
    let breadcrumb = this.props.location.pathname.split("/");
    // console.log(user);

    if (this.state.loading) {
      return <div><img src={LogoImg} alt="Moby Supply" id="preloadImg" className="ping" /></div>;
    }
    else {
      if (user.isAuthenticated === false || user.user.username === "Guest") {
        
        return <Redirect to="/auth/salir" />
        // return <Redirect to="/" />
        // return <div></div>;
      }
      else {
        return (
          <div className="intra">
            <Helmet title="Moby Supply - Panel de administración" link={[{'rel': "stylesheet", 'href': "//cdn.quilljs.com/1.2.6/quill.snow.css"}]}/>
            <div className="content">
              <IntraHeader breadcrumb={breadcrumb} />
              <div className="container-fluid" id="intra">
                <div className="columns is-variable is-2" id="">
                  <div className="column has-text-white has-background-grey-lighter is-2 is-y-scroll" id="verticalNav">
                    <SideNav user={user} />
                  </div>
                  <div className="column is-10 is-y-scroll">
                    <div>

                      <Switch>
                        <Route exact path="/intra" render={
                        (props) => <PanelHome user={user} img={LogoImg}/>} />
                        <Route exact path="/intra/perfil" component={PanelProfile} />
                        <Route exact path="/intra/servicios" component={PanelServices} />
                        <Route exact path="/intra/productos" component={AdminProducts} />
                        <Route exact path="/intra/blog" component={PanelBlog} />
                        {/* Admin */}
                        <Route exact path="/intra/administracion" render={() => <Redirect to='/intra'/>} />
                        <Route exact path="/intra/administracion/usuarios" component={PanelUser} />
                        <Route exact path="/intra/administracion/productos" component={PanelProducts} />
                        <Route exact path="/intra/administracion/productos/top-10" component={PanelTop10} />
                        {/* <Route exact path="/intra/administracion/productos/cargar-fotos" component={PanelPhotos} /> */}
                        <Route exact path="/intra/administracion/sitio" component={PanelSite} />
                        <Route exact path="/intra/administracion/sitio/carrouseles" component={PanelSite} />
                        <Route exact path="/intra/administracion/sitio/suscriptores" component={PanelSubscriptions} />
                        {/* Tickets */}
                        <Route exact path="/intra/tickets" component={PanelTickets} />
                        <Route exact path="/intra/tickets/abiertos" component={PanelTickets} />
                        <Route exact path="/intra/tickets/cerrados" component={PanelTickets} />
                        {/* Error catch all */}
                        <Route component={NotFound}/>
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}


const blogSelector = createSelector(state => state.blog_post, blog_post => blog_post);                          // blog_post
const blogTagSelector = createSelector(state => state.blog_tags, blog_tags => blog_tags);                       // blog_tags
const brandsSelector = createSelector(state => state.brands, brands => brands);                                 // brands
const carrouselSelector = createSelector(state => state.carrousel, carrousel => carrousel);                     // carrousel 
const categoriesSelector = createSelector(   state => state.categories,   categories => categories );           // categories
const departmentSelector = createSelector(state => state.departments, departments => departments);              // Department
const imageCarrouselSelector = createSelector(state => state.img_carrousel, img_carrousel => img_carrousel);    // img_carrousel 
const pagesSelector = createSelector(state => state.pages, pages => pages);                                     // Pages 
const productsSelector = createSelector(state => state.products, products => products);                         // products
const servicesSelector = createSelector(state => state.services, services => services);                         // services
const siteSelector = createSelector(state => state.site, site => site);                                         // site
const socialMediaSelector = createSelector(state => state.social_media, social_media => social_media);          // Social media
const testimonialsSelector = createSelector(state => state.testimonials, testimonials => testimonials);         // Testimonials
const userSelector = createSelector(state => state.user, user => user);                                         // user

const mapStateToProps = createSelector(
  brandsSelector,
  blogSelector,
  blogTagSelector,
  carrouselSelector,
  categoriesSelector,
  imageCarrouselSelector,
  departmentSelector,
  pagesSelector,
  productsSelector,
  servicesSelector,
  siteSelector,
  socialMediaSelector,
  testimonialsSelector,
  userSelector,
  (brands, blog_post, blog_tags, carrousel, categories, img_carrousel, departments, pages, products, services, site, social_media, testimonials, user) => (
    {
      brands,
      blog_post,
      blog_tags,
      carrousel,
      categories,
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

export default connect(mapStateToProps, mapDispatchToProps)(PanelLayout);