import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';

// Pages
import Blog from './Blog';
import BlogDetail from './Blog/details';
import Brand from './Brand';
import BrandDetail from './Brand/details';
import Category from './Category';
import CategoryDetail from './Category/details';
import Contact from './Contact';
import Department from './Department';
import DepartmentDetail from './Department/details';
import Home from './Home';
import Product from './Product';
import ProductDetail from './Product/details';
import Service from './Service';
import ServiceDetail from './Service/details';

// Components
import Footer from '../components/Footer';
import RedesLine from '../components/Footer/Redes';
import Header from '../components/Header';

class Layout extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
      return (
        <div className="site pageloader has-navbar-fixed-top">
          <Helmet
            title="Moby Supply - Inicio"
            meta={[
              { name: 'description', content: 'Moby Panamá, S.A. fue fundada en Panamá en el año 2011 estructurada en forma sociedad anónima. Actualmente, con más de 30 colaboradores, hacemos presencia en Panamá.' },
              { name: 'keywords', content: 'ebanisteria, ebanista, madera, marmol, cortes en madera, Panamá' },
            ]}
          />
          <Header/>
          <div className="content">
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/blog" component={ Blog } />
                <Route exact path="/blog/:slug" component={ BlogDetail } />
                <Route exact path="/contacto" component={ Contact } />
                <Route exact path="/productos" component={ Product } />
                <Route exact path="/productos/:slug" component={ ProductDetail } />
                <Route exact path="/productos/categoria/:slug" component={ CategoryDetail } />
                <Route exact path="/productos/categorias" component={ Category } />
                <Route exact path="/productos/departamento/:slug" component={ DepartmentDetail } />
                <Route exact path="/productos/departamentos" component={ Department } />
                <Route exact path="/productos/marca/:slug" component={ BrandDetail } />
                <Route exact path="/productos/marcas" component={ Brand } />
                <Route exact path="/servicios" component={ Service } />
                <Route exact path="/servicios/:slug" component={ ServiceDetail } />
            </Switch>
          </div>
          <RedesLine/>
          <Footer/>
        </div>
      );
    }
  }
  
  export default Layout;
