import React, { Component } from "react";

// Components
import ProductsHeader from '../../../components/Header/ProductsHeader';
import Paginator from '../../../components/Paginator';
import ProductsSearch from './Searcher';
import TopProducts from './TopProducts';


class ProductDetail extends Component {
  render() {
    return (
      <div>
        <ProductsHeader/>
        <div className="container is-padding-top-60" id="productsSite">
          <div>
            <div className="columns is-variable is-1">
              <div className="column is-3">
                <ProductsSearch/>
              </div>
              <div className="column" id="feeds">
                <TopProducts/>
              </div>
            </div>
            <div className="is-padding-bottom-60">
              <Paginator/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;