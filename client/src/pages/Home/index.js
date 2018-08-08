import React, { Component } from "react";
import Helmet from "react-helmet";
// Assets
import './styles.css';

// Components
import Banner from './details/Banner';
import Categories from '../../components/Products/Categories';
import Post from '../../components/Blog';
import Services from '../../components/Services';
import Carrousel from "../../components/Carrousel";




class Home extends Component {
  
  render() {
    return (
      <div>
        <Helmet
          title="Moby Supply - Inicio"
        />
        <div className="container-fluid has-background-moby">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1" id="carousel">
                <div className="has-text-centered" id="typetxt">
                </div>
                <div className="" id="homeCarousel">
                  <Carrousel />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Banner />
        <Services />
        <Categories />
        <div className="container">
          <div className="is-centered">
            <h3 className="is-size-2">Artículos recientes</h3>
          </div>
        </div>
        <Post />
      </div>
    );
  }
}

export default Home;