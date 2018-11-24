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
import { fetchSubLines } from '../../../redux/actions/product/subLine';
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
      colorID: '',
      brand: '',
      brandID: '',
      category: '',
      categoryID: '',
      line: '',
      lineID: '',
      sublines: '',
      sublinesID: '',
      department: '',
      departmentID: '',
      loading: true,
      previousPage: null,
      hasUrlParams: false,
      hasNext: true,
      hasPrev: false
    }
  }

  getData() {
    this.props.onFetchProducts(this.state.params, this.state.currentPage);
    this.props.onFetchCategories();
    this.props.onFetchDepartment();
    this.props.onFetchBrands();
    this.props.onFetchColor();
    this.props.onFetchLines();
    this.props.onFetchSubLines();
    this.props.onFetchSocialMedia();
    this.props.onFetchBlogPost();
    this.props.onFetchSite();
  }

  componentDidMount() {
    this.getURL(this.props.location.search);
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
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
      // console.log('------', this.state.params, prevState.params);
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

    let x = 1; let _urlParams = ''; let argUrl = ''; let _urlSearch = ''; let urlSplit1 = ''; let urlSplit2 = '';
    let lineUrl = ''; let sublineUrl = ''; let categoryUrl = ''; let departmentUrl = ''; let brandUrl = ''; let colorUrl = '';
    let _currentPage = this.state.currentPage;
    let totalPages = Math.ceil(this.props.products.count / this.state.limitPage);
    
    argUrl = url.split('?')[1];
    if (argUrl !== undefined) {
      
      urlSplit1 = argUrl.split('&');
      if (urlSplit1 !== undefined) {

        for (x in urlSplit1) {
          urlSplit2 = urlSplit1[x].split('=');

          // URL for Page
          if (urlSplit2[0] === 'page') {
            // eslint-disable-next-line
            _currentPage = parseInt(urlSplit2[1]);
            this.setState({ currentPage: _currentPage });
          }

          // URL for Search
          if (urlSplit2[0] === 'search') {
            _urlSearch = `&${urlSplit2[0]}=${urlSplit2[1]}`;
            this.setState({ searchURL: _urlSearch });
          }

          // URL for Lines
          if (urlSplit2[0] === 'line') {
            lineUrl = `&${urlSplit2[0]}=${urlSplit2[1]}`;
          }

          // URL for Sublines
          if (urlSplit2[0] === 'sub_line') {
            sublineUrl = `&${urlSplit2[0]}=${urlSplit2[1]}`;
          }

          // URL for Categories
          if (urlSplit2[0] === 'category') {
            categoryUrl = `&${urlSplit2[0]}=${urlSplit2[1]}`;
          }

          // URL for Department
          if (urlSplit2[0] === 'department') {
            departmentUrl = `&${urlSplit2[0]}=${urlSplit2[1]}`;
          }

          // URL for Brands
          if (urlSplit2[0] === 'brand') {
            brandUrl = `&${urlSplit2[0]}=${urlSplit2[1]}`;
          }

          // URL for Color
          if (urlSplit2[0] === 'color') {
            colorUrl = `&${urlSplit2[0]}=${urlSplit2[1]}`;
          }

        }
      }
    }

    _urlParams = `${lineUrl}${sublineUrl}${categoryUrl}${departmentUrl}${brandUrl}${colorUrl}${_urlSearch}`;

    this.props.history.push(`/productos/todos?page=${_currentPage}${_urlParams}`);

    this.setState({
      params: _urlParams,
      hasUrlParams: true,
      totalPages: totalPages
    });
  }

  getFilter(e, arg, id, filter) {
    let url = ''; let lineUrl = ''; let sublineUrl = ''; let categoryUrl = ''; let departmentUrl = ''; let brandUrl = ''; let colorUrl = '';
    
    if (this.state.params === ''){
      this.setState({currentPage:1})
    }

    if (filter === 'color' && id !== 'Colores') {
      this.setState(
        { 
          color: arg,
          colorID: id
        }
      );
      colorUrl = `&color=${id}`;
    }
    
    if (filter === 'line' && id !== 'Lineas') {
      this.setState(
        { 
          line: arg,
          lineID: id
        }
      );
      lineUrl = `&line=${id}`;
    }
    
    if (filter === 'sublines' && id !== 'Sublineas') {
      this.setState(
        { 
          sublines: arg,
          sublinesID: id
        }
      );
      sublineUrl = `&sub_line=${id}`;
    }
    
    if (filter === 'category' && id !== 'Categorías') {
      this.setState(
        { 
          category: arg,
          categoryID: id
        }
      );
      categoryUrl = `&category=${id}`;
    }
    
    if (filter === 'department' && id !== 'Departamentos') {
      this.setState(
        { 
          department: arg,
          departmentID: id
        }
      );
      departmentUrl = `&department=${id}`;
    }
    
    if (filter === 'brand' && id !== 'Marcas') {
      this.setState(
        { 
          brand: arg,
          brandID: id
        }
      );
      brandUrl = `&brand=${id}`;
    }

    url = `?page=${this.state.currentPage}${lineUrl}${sublineUrl}${categoryUrl}${departmentUrl}${brandUrl}${colorUrl}${this.state.searchURL}`;
    this.getURL(url);
  }

  getSearch(e) {
    e.preventDefault();
    let valu = e.target.value;
    this.getURL(`?page=${this.state.currentPage}${this.state.params}&search=${valu}`);
  }

  handleNextClick(e, page = this.state.currentPage) {
    window.scrollTo(0, 0);

    let currentPage = page; //Aumenta el numero de la pagina
    let limitPage = this.state.limitPage || 20;
    let pages = this.state.totalPages;
    if (page < this.state.currentPage) { currentPage = page - 1; }
    let offsetPage = Math.ceil(limitPage * (currentPage - 1));
    this.setState({ currentPage: currentPage, offsetPage: offsetPage, nextPage: currentPage + 1 })
    if (currentPage === pages) { this.setState({ hasNext: false }) }
    if (currentPage > 1) { this.setState({ hasPrev: true, currentPage: currentPage }) }
    if (currentPage > 1 && currentPage <= pages) {
      let urlPage = `page=${currentPage}${this.state.params}`;
      console.log(urlPage);
      // this.getURL(urlPage);
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
      let urlPage = `page=${currentPage}${this.state.params}`;
      console.log(urlPage);
      // this.getURL(urlPage);
    }
    // console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }

  removeUrlParams(e) {
    if (e === 'color') {
      this.setState({ color: '' });
    }
    if (e === 'line') {
      this.setState({ line: '' });
    }
    if (e === 'sublines') {
      this.setState({ sublines: '' });
    }
    if (e === 'category') {
      this.setState({ category: '' });
    }
    if (e === 'department') {
      this.setState({ department: '' });
    }
    if (e === 'brand') {
      this.setState({ brand: '' });
    }
    this.getURL(this.state.params);

  }

  render() {
    function* chunkArray(original, n) { const ary = [...original]; while (ary.length > 0) yield ary.splice(ary, n); }

    let brands = this.props.brands || 'Cargando ...';
    let categories = this.props.categories || 'Cargando ...';
    let colors = this.props.colors || 'Cargando ...';
    let department = this.props.department || 'Cargando ...';
    let lines = this.props.lines || 'Cargando ...';
    let sublines = this.props.sub_lines || 'Cargando ...';
    let products = this.props.products || 'Cargando ...';
    let social_media = this.props.social_media || 'Cargando ...';
    let site = this.props.site || 'Cargando ...';

    let paginator, urlParamsHTML, colorUrlHTML, brandUrlHTML, categoryUrlHTML, lineUrlHTML, departmentUrlHTML, sublinesUrlHTML = <div></div>;
    let postsCount = products.count || undefined;
    let postsCountLimit = 20;

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
      />
    );

    if (this.state.hasUrlParams) {
      if (this.state.color !== '') {
        colorUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Color: {this.state.color}</span>
            <span className="icon is-small" onClick={(e) => { this.removeUrlParams('color') }}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.brand !== '') {
        brandUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Marca: {this.state.brand}</span>
            <span className="icon is-small" onClick={(e) => { this.removeUrlParams('brand') }}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.category !== '') {
        categoryUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Categoría: {this.state.category}</span>
            <span className="icon is-small" onClick={(e) => { this.removeUrlParams('category') }}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.line !== '') {
        lineUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Linea: {this.state.line}</span>
            <span className="icon is-small" onClick={(e) => { this.removeUrlParams('line') }}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.sublines !== '') {
        sublinesUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Sublinea: {this.state.sublines}</span>
            <span className="icon is-small" onClick={(e) => { this.removeUrlParams('sublines') }}>
              <i className="fas fa-times"></i>
            </span>
          </a>
        );
      };
      if (this.state.department !== '') {
        departmentUrlHTML = (
          <a className="button is-outlined is-dark is-rounded">
            <span>Departamento: {this.state.department}</span>
            <span className="icon is-small" onClick={(e) => { this.removeUrlParams('department') }}>
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
                {lineUrlHTML} {sublinesUrlHTML} {categoryUrlHTML} {departmentUrlHTML} {brandUrlHTML} {colorUrlHTML}
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
                    sublines={sublines}
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
const sublinesSelector = createSelector(state => state.sub_lines, sub_lines => sub_lines);                        // sub_lines
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
  sublinesSelector,
  productsSelector,
  siteSelector,
  socialMediaSelector,
  userSelector,
  (blog_posts, brands, categories, colors, department, lines, sub_lines, products, site, social_media, user) => (
    {
      blog_posts,
      brands,
      categories,
      colors,
      department,
      lines,
      sub_lines,
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
      onFetchSubLines: fetchSubLines,
      onFetchProducts: fetchProducts,
      onFetchSite: fetchSite,
      onFetchSocialMedia: fetchSocialMedia,
    }, dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);