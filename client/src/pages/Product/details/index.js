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

import {
  fetchNextProducts,
  fetchPrevProducts,
  fetchProducts
} from '../../../redux/actions/product';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limitPage: 20,
      offsetPage: 0,
      totalPages: 0,
      urlPage: 'products/',
      nextPage: '',
      previousPage: null,
      hasNext: true,
      hasPrev: false
    }
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  componentDidMount(){
    this.props.onFetchProducts();
  }
  
  componentDidUpdate(prevProps){
    if (this.props.products !== prevProps.products){
      let totalPages = Math.ceil(this.props.products.count / this.state.limitPage);
      this.setState({
        totalPages: totalPages
      })
    }
  }
  
  handleNextClick(e) {
    e.preventDefault();
    
    let currentPage = this.state.currentPage + 1; //Aumenta el numero de la pagina
    let limitPage = this.state.limitPage || 20;
    let pages = this.state.totalPages;
    let offsetPage = Math.ceil(limitPage * (currentPage - 1));
    
    this.setState({
      currentPage: currentPage,
      offsetPage: offsetPage
    })
    
    if (currentPage === pages) { // Validate if next is able
      this.setState({
        hasNext: false
      })
    }
    
    if (currentPage > 1) { // Validate if prev is able
      this.setState({
        hasPrev: true
      })
    }
    
    if (currentPage > 1 && currentPage <= pages){
      this.props.onFetchNextProducts(limitPage, offsetPage);
    }
    
    // console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }
  
  handlePrevClick(e) {
    e.preventDefault();
    
    let currentPage = this.state.currentPage - 1; //Decrementa el numero de la pagina
    let limitPage = this.state.limitPage || 20;
    let offsetPage = this.state.offsetPage - limitPage;
    let pages = this.state.totalPages;
    
    this.setState({
      currentPage: currentPage,
      offsetPage: offsetPage
    })
    if (currentPage === 1) {
      this.setState({
        hasPrev: false,
        hasNext: true
      })
    }
    if (currentPage >= 1 && currentPage <= pages){
      this.props.onFetchPrevProducts(limitPage, offsetPage);
    }
    console.log('currentPage ->', currentPage, 'pages ->', pages, 'offset ->', offsetPage)
  }
  
  render() {
    // console.log(this.state.totalPages);
    function* chunkArray(original, n) {
      const ary = [...original];
      while (ary.length > 0)
        yield ary.splice(ary, n);
    }

    
    let products = this.props.products;

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
        />
      )
    }

    return (
      <div>
        <ProductsHeader />
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
                      {
                        one
                        ?<TopProducts product={one}></TopProducts>
                        :<div className="column"></div>
                      }
                      {
                        two
                        ?<TopProducts product={two}></TopProducts>
                        :<div className="column"></div>
                      }
                      {
                        three
                        ?<TopProducts product={three}></TopProducts>
                        :<div className="column"></div>
                      }
                      {
                        four
                        ?<TopProducts product={four}></TopProducts>
                        :<div className="column"></div>
                      }
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

// products
const productsSelector = createSelector(
  state => state.products,
  products => products
);

// categories
const categoriesSelector = createSelector(
  state => state.categories,
  categories => categories
);

const mapStateToProps = createSelector(
  brandsSelector,
  categoriesSelector,
  productsSelector,
  (brands, categories, products) => (
    {
      brands,
      categories,
      products,
    }
  )
);

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      onFetchNextProducts: fetchNextProducts,
      onFetchPrevProducts: fetchPrevProducts,
      onFetchProducts: fetchProducts,
    }, dispatch
  );
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);