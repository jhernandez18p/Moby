import React, { Component } from "react";

// Components
import ProductsHeader from '../../../components/Header/ProductsHeader';
import Pagination from '../../../components/Paginator';
import ProductsSearch from './Searcher';
import TopProducts from './TopProducts';

// Redux
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class ProductDetail extends Component {
  render() {
    function* chunkArray(original, n) {
      const ary = [...original];
      while (ary.length > 0)
        yield ary.splice(ary, n);
    }

    const products = this.props.products.results;

    return (
      <div>
        <ProductsHeader />
        <div className="container is-padding-top-60" id="productsSite">
          <div>
            <div className="columns is-variable is-1">

              <div className="column is-3">
                <ProductsSearch />
              </div>

              <div className="column is-padding-top-30" id="feeds">
                {Array.from(chunkArray(products, 3)).map(([one, two, three], y) => {
                  const html = (
                    <div className="columns" key={y.toString()}>
                      <TopProducts product={one}></TopProducts>
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
                    </div>
                  );
                  return html
                })
                }
              </div>

            </div>
            <div className="is-padding-bottom-60">
              <Pagination />
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

export default connect(mapStateToProps)(ProductDetail);