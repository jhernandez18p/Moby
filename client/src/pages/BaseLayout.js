import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';

// Pages
import Auth from './Auth';
import Blog from './Blog';
import BlogDetail from './Blog/details';
import Brand from './Brand';
import BrandDetail from './Brand/details';
import Category from './Category';
import CategoryDetail from './Category/details';
import Contact from './Contact';
import FAQ from './Contact/details/FAQ';
import Department from './Department';
import DepartmentDetail from './Department/details';
import Home from './Home';
import Product from './Product';
import Service from './Service';

// Components
import Footer from '../components/Footer';
import RedesLine from '../components/Footer/Redes';
import Header from '../components/Header';
import UnderConstruction from '../components/UnderCostruction';

class Layout extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <div className="site pageloader has-navbar-fixed-top">
          <div className="all-overlay">
            <UnderConstruction/>
          </div>
          <div className="site-wr">
            <Helmet
              title="Moby Supply - Inicio"
              meta={[
                { name: 'description', content: 'Moby Panamá, S.A. fue fundada en Panamá en el año 2011 estructurada en forma sociedad anónima. Actualmente, con más de 30 colaboradores, hacemos presencia en Panamá.' },
                { name: 'keywords', content: 'ebanisteria, ebanista, madera, marmol, cortes en madera, Panamá' },
              ]}
            />
            <Header />
            <div className="content">
              <Switch>
                <Route path="/auth" component={ Auth } />
                <Route exact path="/" component={ Home } />
                <Route exact path="/blog/:slug" component={ BlogDetail } />
                <Route exact path="/blog" component={  Blog } />
                <Route exact path="/contacto/f-a-q" component={ FAQ } />
                <Route exact path="/contacto" component={ Contact } />
                <Route exact path="/productos/categoria/:slug" component={ CategoryDetail } />
                <Route exact path="/productos/categorias" component={ Category } />
                <Route exact path="/productos/departamento/:slug" component={ DepartmentDetail } />
                <Route exact path="/productos/departamentos" component={ Department } />
                <Route exact path="/productos/marca/:slug" component={ BrandDetail } />
                <Route exact path="/productos/marcas" component={ Brand } />
                <Route exact path="/productos" component={ Product } />
                <Route exact path="/servicios/:slug" component={ Service } />
                <Route exact path="/servicios" component={ Service } />
              </Switch>
            </div>
            <RedesLine />
          </div>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Layout;
