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
    function* chunkArray(original, n) {
      const ary = [...original];
      while (ary.length > 0)
        yield ary.splice(ary, n);
    }

    const filter = (array, key, arg) => {
      let filtered_array = [];
      array.forEach(function (element) {
        if (element[key] === arg) {
          filtered_array.push(element);
        }
      });
      return filtered_array;
    };

    let brands = this.props.brands.results;
    let carrouselImgs = this.props.imgs;
    let carrousels = this.props.carrousel;
    let departments = this.props.departments.results;
    let pages = this.props.pages;
    let products = this.props.products;
    let testimonials = this.props.testimonials.results;
    let user = this.props.user;

    let productPage;
    let productCarrousel;
    let productCarrouselImgs;
    let siteHeaderCarrousel = <div></div>;

    if (pages.count >= 1 && carrousels.count >= 1 && carrouselImgs.count >= 1) {
      productPage = filter(pages.results, 'name', 'productos')
      productCarrousel = filter(carrousels.results, 'page', productPage[0].id)
      productCarrouselImgs = filter(carrouselImgs.results, 'Carousel', productCarrousel[0].id);
      siteHeaderCarrousel = <ProductPage imgs={productCarrouselImgs} user={user}/>;
    }

    var topProducts = products.results;
    if (products.count >= 1) {
      let _featuredProductArray = filter(products.results, 'featured', true);
      if (_featuredProductArray.length >= 1) {
        topProducts = _featuredProductArray.splice(0, 8);
      } else {
        topProducts = products.results.splice(0, 8);
      }
    }

    let topDepartments = departments;
    if (topDepartments.length >= 5) {
      topDepartments = topDepartments.splice(0, 4);
    }

    return (
      <div>
        <Helmet
          title="Moby Supply - Productos"
        />
        <div className="container" id="productPage">
          <div className="is-padding-top-30">
            {siteHeaderCarrousel}
          </div>
          <div className="is-padding-top-30">
            {Array.from(chunkArray(topDepartments, 4)).map(([one, two, three, four], y) => {
              const html = (
                <div className="columns is-variable bd-klmn-columns is-1" key={y.toString()}>
                  {
                    one
                      ? <TopDepartments department={one} ></TopDepartments>
                      : <div className="column is-3"></div>
                  }
                  {
                    two
                      ? <TopDepartments department={two} ></TopDepartments>
                      : <div className="column is-3"></div>
                  }
                  {
                    three
                      ? <TopDepartments department={three} ></TopDepartments>
                      : <div className="column is-3"></div>
                  }
                  {
                    four
                      ? <TopDepartments department={four} ></TopDepartments>
                      : <div className="column is-3"></div>
                  }
                </div>
              );
              return html;
            })
            }
          </div>
          <div id="feeds">
            <div className="is-padding-top-60 has-text-centered">
              <h2 className="is-size-2">Nuestros productos</h2>
            </div>
            {Array.from(chunkArray(topProducts, 4)).map(([one, two, three, four], y) => {
              const html = (
                <div className="columns" key={y.toString()}>
                  {
                    one
                      ? <TopProducts product={one}></TopProducts>
                      : <div className="column is-3"></div>
                  }
                  {
                    two
                      ? <TopProducts product={two}></TopProducts>
                      : <div className="column is-3"></div>
                  }
                  {
                    three
                      ? <TopProducts product={three}></TopProducts>
                      : <div className="column is-3"></div>
                  }
                  {
                    four
                      ? <TopProducts product={four}></TopProducts>
                      : <div className="column is-3"></div>
                  }
                </div>
              );
              return html
            })
            }
            <div className="has-text-centered is-padding-top-60">
              <Link to="/productos/todos" className="button is-fullwidth is-light  is-size-4 has-text-black">
                Ver todos los productos
              </Link>
            </div>
          </div>
          <div className="is-padding-top-30">
            <Testimonial testimonials={testimonials} />
          </div>
          <div className="is-padding-top-60 is-margin-botton-50">
            <BrandsCarrousel brands={brands} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;