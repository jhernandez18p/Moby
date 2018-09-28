import React, { Component } from "react";

// Components
// import ProductsSearch from './Searcher';
import Pagination from '../../../components/Paginator';
import ProductsHeader from '../../../components/Header/ProductsHeader';
import TopProducts from './TopProducts';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions
import { fetchBrands } from "../../../redux/actions/brand";
import { fetchCategories } from "../../../redux/actions/category";
import { fetchColors } from '../../../redux/actions/product/color';
import { fetchDepartments } from '../../../redux/actions/department';
import { fetchLines } from '../../../redux/actions/product/line';
import { fetchProducts } from '../../../redux/actions/product';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limitPage: 20,
      offsetPage: 0,
      totalPages: 0,
      urlPage: 'products/',
      params: '',
      nextPage: '',
      previousPage: null,
      hasNext: true,
      hasPrev: false
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.getFilter = this.getFilter.bind(this);
    this.getURL = this.getURL.bind(this);
    this.getSearch = this.getSearch.bind(this);
  }

  componentDidMount() {
    this.getURL(this.props.location.search);
    this.props.onFetchCategories();
    this.props.onFetchDepartment();
    this.props.onFetchProducts();
    this.props.onFetchBrands();
    this.props.onFetchColor();
    this.props.onFetchLines();
  }

  componentDidUpdate(prevProps) {
    if (this.props.products !== prevProps.products) {
      let totalPages = Math.ceil(this.props.products.count / this.state.limitPage);
      this.setState({ totalPages: totalPages })
    }
  }

  getURL(url){
    // if(url !== ''){
    //   let _url = url.split('?');
    //   // eslint-disable-next-line
    //   let newCurrentPage = '';
    //   _url = _url[1].split('&');
    //   for (var x=0; x < _url.length; x++){
    //     if (_url[x].split('=')[0] === 'page'){
    //       console.log(_url[x].split('=')[1]);
    //       this.setState({ currentPage: _url[x].split('=')[1] })
    //     }
    //   }
    // }
    let _url = `?${url}&`;
    console.log(_url);
    
    this.props.onFetchProducts(_url);
    this.setState({params:_url})
  }

  getFilter(e, arg, id, filter){
    if (filter === 'color') {
      this.getURL(`color=${id}`)
    }
    if (filter === 'line') {
      this.getURL(`line=${id}`)
    }
    if (filter === 'category') {
      this.getURL(`category=${id}`)
    }
    if (filter === 'department') {
      this.getURL(`department=${id}`)
    }
    if (filter === 'brand') {
      this.getURL(`brand=${id}`)
    }
  }

  getSearch(e){
    e.preventDefault();
    let valu = e.target.value;
    console.log(valu);
    this.getURL(`search=${valu}`);
  }

  handleNextClick(e, page = this.state.currentPage) {
    e.preventDefault();
    window.scrollTo(0, 0)
    let currentPage = page; //Aumenta el numero de la pagina
    if (page < this.state.currentPage){
      currentPage = page - 1; //Aumenta el numero de la pagina
    }
    let limitPage = this.state.limitPage || 20;
    let pages = this.state.totalPages;
    let offsetPage = Math.ceil(limitPage * (currentPage - 1));
    this.setState({ currentPage: currentPage, offsetPage: offsetPage })
    if (currentPage === pages) { this.setState({ hasNext: false }) }
    if (currentPage > 1) { this.setState({ hasPrev: true, currentPage: currentPage }) }
    if (currentPage > 1 && currentPage <= pages) { this.props.onFetchProducts(this.state.params,currentPage - 1); }
    // console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }

  handlePrevClick(e, page = this.state.currentPage) {
    e.preventDefault();
    window.scrollTo(0, 0)
    //Decrementa el numero de la pagina
    let currentPage = page; //Aumenta el numero de la pagina

    let limitPage = this.state.limitPage || 20;
    let offsetPage = this.state.offsetPage - limitPage;
    let pages = this.state.totalPages;
    this.setState({ currentPage: currentPage, offsetPage: offsetPage });
    if (currentPage === 1) { this.setState({ hasPrev: false, hasNext: true }); }
    if (currentPage >= 1 && currentPage <= pages) { this.props.onFetchProducts(this.state.params, currentPage-1); }
    // console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }

  render() {
    // console.log(this.state.totalPages);
    function* chunkArray(original, n) {
      const ary = [...original];
      while (ary.length > 0)
        yield ary.splice(ary, n);
    }

    // brands
    let brands = this.props.brands
    // categories
    let categories = this.props.categories;
    // colors
    let colors = this.props.colors
    // department
    let department = this.props.department;
    // lines
    let lines = this.props.lines;
    // products
    let products = this.props.products;
    // console.log(brands,categories,colors,department,lines);

    let paginator = <div></div>;
    let postsCount = products.count || undefined;
    let postsCountLimit = 20;

    if (postsCount > 20) {

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
          nextPage={this.handleNextClick}
          previousPage={this.handlePrevClick}
          hasNext={this.state.hasNext}
          hasPrev={this.state.hasPrev}
          pages={this.state.totalPages}
        />
      )
    }

    return (
      <div className="product-list">
        <ProductsHeader 
          haveFilters={true} 
          getFilter={this.getFilter} 
          brands={brands}
          categories={categories}
          colors={colors}
          department={department}
          lines={lines}
          hasSearch={true}
          getSearch={this.getSearch}/>
        <div className="container is-padding-top-60" id="productsSite">
          <div>
            <div className="columns is-variable is-1">
              {/* <div className="column is-3">
                <ProductsSearch />
              </div> */}
              <div className="column is-padding-top-30" id="feeds">
                {Array.from(chunkArray(products.results, 4)).map(([one, two, three, four], y) => {
                  const html = (
                    <div className="columns" key={y.toString()}>
                      {one ? <TopProducts product={one}></TopProducts> : <div className="column"></div>}
                      {two ? <TopProducts product={two}></TopProducts> : <div className="column"></div>}
                      {three ? <TopProducts product={three}></TopProducts> : <div className="column"></div>}
                      {four ? <TopProducts product={four}></TopProducts> : <div className="column"></div>}
                    </div>
                  );
                  return html
                })
                }
              </div>
            </div>
            <div className="is-padding-bottom-60">
              {paginator}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


// brands
const brandsSelector = createSelector(
  state => state.brands,
  brands => brands
);

// categories
const categoriesSelector = createSelector(
  state => state.categories,
  categories => categories
);

// Color
const colorSelector = createSelector(
  state => state.colors,
  colors => colors
);

// Departments
const departmentSelector = createSelector(
  state => state.department,
  department => department
);

// lines
const linesSelector = createSelector(
  state => state.lines,
  lines => lines
);


// products
const productsSelector = createSelector(
  state => state.products,
  products => products
);



const mapStateToProps = createSelector(
  brandsSelector,
  categoriesSelector,
  colorSelector,
  departmentSelector,
  linesSelector,
  productsSelector,
  (brands, categories, colors, department, lines, products,) => (
    {
      brands,
      categories,
      colors,
      department,
      lines,
      products,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchBrands: fetchBrands,
      onFetchCategories: fetchCategories,
      onFetchColor: fetchColors,
      onFetchDepartment: fetchDepartments,
      onFetchLines: fetchLines,
      onFetchProducts: fetchProducts,
    }, dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);