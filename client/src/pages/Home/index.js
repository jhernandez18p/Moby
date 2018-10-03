import React, { Component } from "react";
import Helmet from "react-helmet";

// Components
import Banner from './details/Banner';
import Categories from '../../components/Products/Categories';
import Post from '../../components/Blog';
import Services from '../../components/Services';
import Carrousel from "../../components/Carrousel";

class Home extends Component {

  constructor(props) {
		super(props);
		this.state = {
			posts: this.props.blog_posts.results || 'Cargando ...'
		}
	}

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

    let blogPosts = this.state.posts || 'Cargando ...';
    let carrouselImg = this.props.imgs || 'Cargando ...';
    let carrousels = this.props.carrousel || 'Cargando ...';
    let departments = this.props.departments || 'Cargando ...';
    let pages = this.props.pages || 'Cargando ...';
    let services = this.props.services || 'Cargando ...';
    let site = this.props.site.results[0] || 'Cargando ...';
    
    let siteName = site['name'] || 'Cargando ...';
    let siteShortDesc = site['short_description'] || 'Cargando ...';
    let siteServiceImg = site["services_img"] || 'Cargando ...';
    let siteProductImg = site["products_img"] || 'Cargando ...';

    let blogItems = <div> Cargando ... </div>;

    if (blogPosts !== 'Cargando ...'){
      blogItems = blogPosts.slice(0, 4).map( (post) => { return <div className="column is-3" key={post.id.toString()}><Post post={post} /></div>; } );
    }

    var homeCarrousel = <div> Cargando ... </div>
    if (pages.count > 0 && carrousels.count > 0 && carrouselImg.count > 0) {
      let homePage = filter(pages.results, 'name', 'inicio');
      if (homePage[0].id){
        let carrousel = filter(carrousels.results, 'page', homePage[0].id);
        if (carrousel[0].id){
          let imgs = filter(carrouselImg.results, 'Carousel', carrousel[0].id)
          if (imgs){
            homeCarrousel = <Carrousel imgs={imgs} />
          }
        }
      }
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