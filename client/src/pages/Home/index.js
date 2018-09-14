import React, { Component } from "react";
import Helmet from "react-helmet";

// Components
import Banner from './details/Banner';
import Categories from '../../components/Products/Categories';
import Post from '../../components/Blog';
import Services from '../../components/Services';
import Carrousel from "../../components/Carrousel";

class Home extends Component {

  render() {

    const filter = (array, key, val) => {
      let filtered_array = [];
      array.forEach(function (element) {
        if (element[key] === val) {
          filtered_array.push(element);
        }
      });
      return filtered_array;
    };

    let blogPost = this.props.blog_post.results;
    let carrouselImg = this.props.imgs;
    let carrousels = this.props.carrousel;
    let departments = this.props.departments;
    let pages = this.props.pages;
    let services = this.props.services;
    let site = this.props.site.results[0];
    
    let siteName = site['name'];
    let siteShortDesc = site['short_description'];
    let siteServiceImg = site["services_img"];
    let siteProductImg = site["products_img"];

    let blogItems = blogPost.slice(0, 4).map(
      (post) => {
        const html = <div key={post.id.toString()}><Post post={post} /></div>;
        return html;
      }
    );

    var homeCarrousel = <div></div>
    if (pages.count <= 1) {
      homeCarrousel = <div></div>
    } else {
      let homePage = filter(pages.results, 'name', 'inicio');
      let carrousel = filter(carrousels.results, 'page', homePage[0].id);
      let imgs = filter(carrouselImg.results, 'Carousel', carrousel[0].id)
      homeCarrousel = <Carrousel imgs={imgs} />
    }

    return (
      <div>
        <Helmet
          title="Moby Supply - Inicio"
        />
        <div className="container-fluid has-background-moby">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1" id="carousel">
                <div className="" id="homeCarousel">
                  {homeCarrousel}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
          <Banner 
            siteName={siteName} 
            siteShortDesc={siteShortDesc} 
            siteServiceImg={siteServiceImg} 
            siteProductImg={siteProductImg} 
          />
        <div>
        </div>
          <Services 
            services={ services.results } 
            pages={ pages } 
            carrousel={ carrousels } 
            imgs={ carrouselImg }
          />
        <div>
          <Categories 
            departments={departments} 
          />
        </div>
        <div className="container">
          <div className="is-centered">
            <h3 className="is-size-2">Artículos recientes</h3>
          </div>
        </div>
        <div className="container" id="feeds">
          <div className="columns">
            {blogItems}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;