import React, { Component } from "react";
import { Link } from "react-router-dom";
import Helmet from 'react-helmet';

import ProductPage from "../../components/Carrousel/ProductPage";
import Testimonial from "../../components/Carrousel/Testimonial";
import BrandsCarrousel from "../../components/Carrousel/BrandsCarrousel";

import TopDepartments from './details/TopDepartments';
import TopProducts from './details/TopProducts';

class Product extends Component {
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Productos"
        />
        <div className="container" id="productPage">
          <div className="is-padding-top-30">
            <ProductPage />
          </div>


          <div className="is-padding-top-30">
            <TopDepartments/>
          </div>

          <div id="feeds">

            <div className="is-padding-top-60 has-text-centered">
              <h2 className="is-size-2">Nuestros productos</h2>
            </div>
            <TopProducts/>
            <div className="has-text-centered is-padding-top-60">
              <Link to="/productos/todos" className="button is-fullwidth is-light  is-size-4 has-text-black">
                Ver todos los productos
              </Link>
            </div>
          </div>

          <div className="is-padding-top-60">
            <Testimonial />
          </div>
          
          <div className="is-padding-top-60">
            <BrandsCarrousel/>
          </div>

        </div>
      </div>
    );
  }
}

export default Product;