import React, { Component } from "react";

// Components
import LogoImg from '../../../assets/images/logo/ms-icon-70x70.png';
import ProductsSearch from './Searcher';
import Pagination from '../../../components/Paginator';
import ProductsHeader from '../../../components/Header';
import RedesLine from '../../../components/Footer/Redes';
import Footer from '../../../components/Footer';
import TopProducts from './TopProducts';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions
import { fetchBlogPost } from '../../../redux/actions/blog';
import { fetchBrands } from "../../../redux/actions/brand";
import { fetchCategories } from "../../../redux/actions/category";
import { fetchColors } from '../../../redux/actions/product/color';
import { fetchDepartments } from '../../../redux/actions/department';
import { fetchLines } from '../../../redux/actions/product/line';
import { fetchProducts } from '../../../redux/actions/product';
import { fetchSite } from '../../../redux/actions/site/';
import { fetchSocialMedia } from '../../../redux/actions/site/socialMedia';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this); this.handlePrevClick = this.handlePrevClick.bind(this);
    this.getFilter = this.getFilter.bind(this); this.getSearch = this.getSearch.bind(this);
    this.getURL = this.getURL.bind(this);
    this.getData = this.getData.bind(this);
    this.state = {
      limitPage: 20,
      currentPage: 1,
      nextPage: 2,
      offsetPage: 0,
      totalPages: 0,
      urlPage: '/productos/todos',
      params: '',
      paramsURL: '',
      searchURL: '',
      urlPageNumber: '',
      color: '',
      brand: '',
      category: '',
      line: '',
      department: '',
      loading: true,
      previousPage: null,
      hasUrlParams: false,
      hasNext: true,
      hasPrev: false
    }
  }

  getData(){
    this.props.onFetchProducts(this.state.params, this.state.currentPage);
    this.props.onFetchCategories();
    this.props.onFetchDepartment();
    this.props.onFetchBrands();
    this.props.onFetchColor();
    this.props.onFetchLines();
    this.props.onFetchSocialMedia();
    this.props.onFetchBlogPost();
    this.props.onFetchSite();
  }

  componentDidMount() {
    this.getData();
    this.getURL(this.props.location.search);
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state === prevState){
    //   console.log(this.state);
    //   console.log(prevState);
    // }
    let totalPages;
    // Calculamos el numero de paginas que obtenemos del query
    if (this.props.products !== prevProps.products) {
      totalPages = Math.ceil(this.props.products.count / this.state.limitPage);
      if (this.state.currentPage >= 2) {
        this.setState({ totalPages: totalPages, hasPrev: true });
      } else {
        this.setState({ totalPages: totalPages, hasPrev: false });
      }
    }
    
    if (this.state.currentPage !== prevState.currentPage) {
      // console.log('------',this.state.currentPage , prevState.currentPage);
      this.props.onFetchProducts(this.state.params, this.state.currentPage);
      totalPages = Math.ceil(this.props.products.count / this.state.limitPage);
      if (this.state.currentPage >= 2) {
        this.setState({ totalPages: totalPages, hasPrev: true });
      } else {
        this.setState({ totalPages: totalPages, hasPrev: false });
      }
      if (this.state.nextPage <= this.state.currentPage && this.state.currentPage < totalPages) {
        this.setState({ nextPage: this.state.currentPage + 1 });
      }
    }

    if (this.state.params === prevState.params && this.state.currentPage !== prevState.currentPage) {
      console.log('------',this.state.params , prevState.params);
      this.props.onFetchProducts(this.state.params, this.state.currentPage);
      totalPages = Math.ceil(this.props.products.count / this.state.limitPage);
      if (this.state.currentPage >= 2) {
        this.setState({ totalPages: totalPages, hasPrev: true });
      } else {
        this.setState({ totalPages: totalPages, hasPrev: false });
      }
    }
    
    if (this.state.params !== prevState.params && this.state.currentPage === prevState.currentPage) {
      // console.log('------',this.state.params , prevState.params);
      this.props.onFetchProducts(this.state.params, this.state.currentPage);
      totalPages = Math.ceil(this.props.products.count / this.state.limitPage);
      if (this.state.currentPage >= 2) {
        this.setState({ totalPages: totalPages, hasPrev: true });
      } else {
        this.setState({ totalPages: totalPages, hasPrev: false });
      }
    }

    setTimeout(() => {
      this.setState({ loading: false })
    }, 400);
  }

  getURL(url) {
    // console.log(this.props);
    
    // let _url = '';
    let _urlParams = '';
    let argUrl = '';
    let _currentPage;
    let totalPages = Math.ceil(this.props.products.count / this.state.limitPage);

    if (url.split('?')[1] !== undefined) {
      argUrl = url.split('?')[1]; // URL => page=&line=&category=&department=&brand=&color=

      if (argUrl.split('&') !== undefined) {
        argUrl = argUrl.split('&'); // Lista => ["page=", "line=", "category=", "department=", "brand=", "color="]

        for (let x in argUrl) {

          if (argUrl[x].split('=')[0] === 'page') {
            // eslint-disable-next-line
            _currentPage = parseInt(argUrl[x].split('=')[1]);
            this.setState({ currentPage: _currentPage });
          }
          if (argUrl[x].split('=')[0] === 'line') {
            _urlParams = `${_urlParams}&${argUrl[x].split('=')[0]}=${argUrl[x].split('=')[1]}`;
          }
          if (argUrl[x].split('=')[0] === 'category') {
            _urlParams = `${_urlParams}&${argUrl[x].split('=')[0]}=${argUrl[x].split('=')[1]}`;
          }
          if (argUrl[x].split('=')[0] === 'department') {
            _urlParams = `${_urlParams}&${argUrl[x].split('=')[0]}=${argUrl[x].split('=')[1]}`;
          }
          if (argUrl[x].split('=')[0] === 'brand') {
            _urlParams = `${_urlParams}&${argUrl[x].split('=')[0]}=${argUrl[x].split('=')[1]}`;
          }
          if (argUrl[x].split('=')[0] === 'color') {
            _urlParams = `${_urlParams}&${argUrl[x].split('=')[0]}=${argUrl[x].split('=')[1]}`;
          }
          if (argUrl[x].split('=')[0] === 'search') {
            _urlParams = `${_urlParams}&${argUrl[x].split('=')[0]}=${argUrl[x].split('=')[1]}`;
            this.setState({
              searchURL: `${argUrl[x].split('=')[1]}`
            });
          }
        }
      }
    } else {
      _urlParams = url;
    }
    // console.log(_urlParams);

    this.props.history.push(`/productos/todos?page=${this.state.currentPage||1}&${_urlParams}`);
    this.setState({
      params: _urlParams,
      hasUrlParams: true,
      totalPages: totalPages
    });
  }

  getFilter(e, arg, id, filter) {
    if (filter === 'color' && id !== 'Colores'){
      this.setState({color:arg});
      this.getURL(`color=${id}`);
    }
    if (filter === 'line' && id !== 'Lineas') {
      this.setState({line:arg});
      this.getURL(`line=${id}`);
    }
    if (filter === 'category' && id !== 'Categorías') {
      this.setState({category:arg});
      this.getURL(`category=${id}`);
    }
    if (filter === 'department' && id !== 'Departamentos') {
      this.setState({department:arg});
      this.getURL(`department=${id}`);
    }
    if (filter === 'brand' && id !== 'Marcas') {
      this.setState({brand:arg});
      this.getURL(`brand=${id}`);
    }
  }

  getSearch(e) {
    e.preventDefault();
    let valu = e.target.value;
    console.log(valu);
    this.getURL(`search=${valu}&${this.state.params}`);
  }

  handleNextClick(e, page = this.state.currentPage) {
    window.scrollTo(0, 0);
    // e.preventDefault();
    // console.log(page);

    let currentPage = page; //Aumenta el numero de la pagina
    if (page < this.state.currentPage) {
      currentPage = page - 1; //Aumenta el numero de la pagina
    }
    let limitPage = this.state.limitPage || 20;
    let pages = this.state.totalPages;
    let offsetPage = Math.ceil(limitPage * (currentPage - 1));
    this.setState({ currentPage: currentPage, offsetPage: offsetPage, nextPage: currentPage + 1 })
    if (currentPage === pages) { this.setState({ hasNext: false }) }
    if (currentPage > 1) { this.setState({ hasPrev: true, currentPage: currentPage }) }
    if (currentPage > 1 && currentPage <= pages) {
      let urlPage = `page=${currentPage}&${this.state.params}`;
      this.getURL(urlPage);
    }
    // console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }

  handlePrevClick(e, page = this.state.currentPage) {
    // e.preventDefault();
    window.scrollTo(0, 0)
    //Decrementa el numero de la pagina
    let currentPage = page; //Aumenta el numero de la pagina
    let limitPage = this.state.limitPage || 20;
    let offsetPage = this.state.offsetPage - limitPage;
    let pages = this.state.totalPages;
    this.setState({ currentPage: currentPage, offsetPage: offsetPage });
    if (currentPage === 1) { this.setState({ hasPrev: false, hasNext: true }); }
    if (currentPage >= 1 && currentPage <= pages) {
      let urlPage = `page=${currentPage}`;
      this.getURL(urlPage);
    }
    // console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }

  removeUrlParams(e){
    if (e === 'color'){
      this.setState({color:''});
    }
    if (e === 'line'){
      this.setState({line:''});
    }
    if (e === 'category'){
      this.setState({category:''});
    }
    if (e === 'department'){
      this.setState({department:''});
    }
    if (e === 'brand'){
      this.setState({brand:''});
    }
    this.props.history.push(`/productos/todos`);
    this.props.onFetchProducts(this.state.params, this.state.currentPage);

  }

  render() {
    // console.log(this.state.totalPages);
    // console.log(this.state);
    function* chunkArray(original, n) {
      const ary = [...original];
      while (ary.length > 0)
        yield ary.splice(ary, n);
    }

    let brands = this.props.brands || 'Cargando ...';
    let categories = this.props.categories || 'Cargando ...';
    let colors = this.props.colors || 'Cargando ...';
    let department = this.props.department || 'Cargando ...';
    let lines = this.props.lines || 'Cargando ...';
    let products = this.props.products || 'Cargando ...';
    let social_media = this.props.social_media || 'Cargando ...';
    let site = this.props.site || 'Cargando ...';

    // console.log(products);
    // console.log(this.state.params);
    // console.log(this.state.searchURL);

    let paginator, urlParamsHTML, colorUrlHTML, brandUrlHTML, categoryUrlHTML, lineUrlHTML, departmentUrlHTML = <div></div>;
    let postsCount = products.count || undefined;
    let postsCountLimit = 20;

    if (postsCount >= 21) {
      let currentPage = this.state.currentPage;
      let limitPage = this.state.limitPage;
      let offsetPage = this.state.offsetPage;
      let urlPage = this.state.urlPage;
      // let nextPage = this.state.nextPage;
      // let previousPage = this.state.previousPage;
      paginator = (
        <Pagination
          postsCountLimit={postsCountLimit}
          postsCount={postsCount}
          currentPage={currentPage}
          limitPage={limitPage}
          offsetPage={offsetPage}
          urlPage={urlPage}
          urlParams={this.state.params}
          nextPage={this.handleNextClick}
          previousPage={this.handlePrevClick}
          hasNext={this.state.hasNext}
          hasPrev={this.state.hasPrev}
          pages={this.state.totalPages}
        >
        </Pagination>
      );
    }

    if (this.state.hasUrlParams) {
      if (this.state.color !== '') {
        colorUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Color: {this.state.color}</span>
            <span className="icon is-small" onClick={(e)=>{this.removeUrlParams('color')}}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.brand !== '') {
        brandUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Marca: {this.state.brand}</span>
            <span className="icon is-small" onClick={(e)=>{this.removeUrlParams('brand')}}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.category !== '') {
        categoryUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Categoría: {this.state.category}</span>
            <span className="icon is-small" onClick={(e)=>{this.removeUrlParams('category')}}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.line !== '') {
        lineUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Linea: {this.state.line}</span>
            <span className="icon is-small" onClick={(e)=>{this.removeUrlParams('line')}}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.department !== '') {
        departmentUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Departamento: {this.state.department}</span>
            <span className="icon is-small" onClick={(e)=>{this.removeUrlParams('department')}}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      urlParamsHTML = (
        <div className="container is-padding-top-30">
          <div className="columns is-centered">
            <div className="column">
              <div className="buttons">
                {lineUrlHTML} {categoryUrlHTML} {departmentUrlHTML} {brandUrlHTML} {colorUrlHTML}
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (this.state.loading) {
      return <div><img src={LogoImg} alt="Moby Supply" id="preloadImg" className="ping" /></div>;
    } else {
      return (
        <div className="product-list">
          <ProductsHeader
            site={site}
            user={this.props.user}
          />
          <div className="is-padding-top-60" >
            {urlParamsHTML}
            <div className="container is-padding-top-20" id="productsSite">
              <div className="columns is-variable is-2">
                <div className="column is-3">
                  <ProductsSearch 
                    brands={brands}
                    categories={categories}
                    colors={colors}
                    department={department}
                    lines={lines}
                    getFilter={this.getFilter}
                    getSearch={this.getSearch}
                    hasSearch={true}
                    haveFilters={true}
                  />
                </div>
                <div className="column is-padding-top-30" id="feeds">
                  {Array.from(chunkArray(products.results, 4)).map(
                    ([one, two, three, four], y) => {
                      return (
                        <div className="columns" key={y.toString()}>
                          {one ? <TopProducts product={one}></TopProducts> : <div className="column"></div>}
                          {two ? <TopProducts product={two}></TopProducts> : <div className="column"></div>}
                          {three ? <TopProducts product={three}></TopProducts> : <div className="column"></div>}
                          {four ? <TopProducts product={four}></TopProducts> : <div className="column"></div>}
                        </div>
                      )
                    })
                  }
                  <div className="">
                    {paginator}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div><RedesLine redes={social_media} /></div>
          <Footer site={site} blog_posts={this.props.blog_posts} />
        </div>
      );
    }
  }
}

const blogSelector = createSelector(state => state.blog_posts, blog_posts => blog_posts);                         // Blog Post
const brandsSelector = createSelector(state => state.brands, brands => brands);                                   // brands
const categoriesSelector = createSelector(state => state.categories, categories => categories);                   // categories
const colorSelector = createSelector(state => state.colors, colors => colors);                                    // Color
const departmentSelector = createSelector(state => state.department, department => department);                   // Departments
const linesSelector = createSelector(state => state.lines, lines => lines);                                       // lines
const productsSelector = createSelector(state => state.products, products => products);                           // products
const siteSelector = createSelector(state => state.site, site => site);                                           // Site
const socialMediaSelector = createSelector(state => state.social_media, social_media => social_media);            // Social media
const userSelector = createSelector(state => state.user, user => user);                                           // User

const mapStateToProps = createSelector(
  blogSelector,
  brandsSelector,
  categoriesSelector,
  colorSelector,
  departmentSelector,
  linesSelector,
  productsSelector,
  siteSelector,
  socialMediaSelector,
  userSelector,
  (blog_posts, brands, categories, colors, department, lines, products, site, social_media, user) => (
    {
      blog_posts,
      brands,
      categories,
      colors,
      department,
      lines,
      products,
      site,
      social_media,
      user
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchBlogPost: fetchBlogPost,
      onFetchBrands: fetchBrands,
      onFetchCategories: fetchCategories,
      onFetchColor: fetchColors,
      onFetchDepartment: fetchDepartments,
      onFetchLines: fetchLines,
      onFetchProducts: fetchProducts,
      onFetchSite: fetchSite,
      onFetchSocialMedia: fetchSocialMedia,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);