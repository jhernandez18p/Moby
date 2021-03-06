import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';

// logos
import appleicon114x114 from './assets/images/logo/apple-icon-114x114.png';
import appleicon120x120 from './assets/images/logo/apple-icon-120x120.png';
import appleicon144x144 from './assets/images/logo/apple-icon-144x144.png';
import appleicon152x152 from './assets/images/logo/apple-icon-152x152.png';
import appleicon180x180 from './assets/images/logo/apple-icon-180x180.png';
import appleicon57x57 from './assets/images/logo/apple-icon-57x57.png';
import appleicon60x60 from './assets/images/logo/apple-icon-60x60.png';
import appleicon72x72 from './assets/images/logo/apple-icon-72x72.png';
import appleicon76x76 from './assets/images/logo/apple-icon-76x76.png';
import favicon16x16 from './assets/images/logo/favicon-16x16.png';
import androidicon192x192 from './assets/images/logo/android-icon-192x192.png';
import favicon32x32 from './assets/images/logo/favicon-32x32.png';
import favicon96x96 from './assets/images/logo/favicon-96x96.png';

// Components
import SiteAllCookie from './components/Cookies';
import ScrollToTop from './routes/scrollTop';

// Pages
import BaseLayout from './pages/BaseLayout';
import PanelLayout from './pages/Panel';
import ProductDetail from './pages/Product/details';
import SingleDetail from './pages/Product/details/SingleDetails';

class App extends Component {

  render() {
    console.log('Wow! you like the console. If you find something have to be fixed, please contact us at info@moby-group.com. \n\nIf you would like an beautiful site like this, please contact us at info@dev2tech.xyz. \n\nWebsite designed and developed by Dev2tech.');
    return (
      <div>
        <Helmet
          title="Moby Supply - Panamá"
          meta={[
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'description', content: 'Moby Panamá, S.A. fue fundada en Panamá en el año 2011 estructurada en forma sociedad anónima. Actualmente, con más de 30 colaboradores, hacemos presencia en Panamá.' },
            { name: 'keywords', content: 'ebanisteria, ebanista, madera, marmol, cortes en madera, Panamá' },
          ]}
          script={[
            {
              'src': 'https://use.fontawesome.com/releases/v5.3.1/js/all.js',
              'integrity': 'sha384-kW+oWsYx3YpxvjtZjFXqazFpA7UP/MbiY4jvs+RWZo2+N94PFZ36T6TFkc9O3qoB',
              'crossorigin': 'anonymous'
            },
          ]}
          link={
            [
              { 'rel': "apple-touch-icon", 'sizes': "114x114", 'href': appleicon114x114 },
              { 'rel': "apple-touch-icon", 'sizes': "114x114", 'href': appleicon114x114 },
              { 'rel': "apple-touch-icon", 'sizes': "120x120", 'href': appleicon120x120 },
              { 'rel': "apple-touch-icon", 'sizes': "144x144", 'href': appleicon144x144 },
              { 'rel': "apple-touch-icon", 'sizes': "152x152", 'href': appleicon152x152 },
              { 'rel': "apple-touch-icon", 'sizes': "180x180", 'href': appleicon180x180 },
              { 'rel': "apple-touch-icon", 'sizes': "57x57", 'href': appleicon57x57 },
              { 'rel': "apple-touch-icon", 'sizes': "60x60", 'href': appleicon60x60 },
              { 'rel': "apple-touch-icon", 'sizes': "72x72", 'href': appleicon72x72 },
              { 'rel': "apple-touch-icon", 'sizes': "76x76", 'href': appleicon76x76 },
              { 'rel': "icon", 'type': "image/png", 'sizes': "16x16", 'href': favicon16x16 },
              { 'rel': "icon", 'type': "image/png", 'sizes': "192x192", 'href': androidicon192x192 },
              { 'rel': "icon", 'type': "image/png", 'sizes': "32x32", 'href': favicon32x32 },
              { 'rel': "icon", 'type': "image/png", 'sizes': "96x96", 'href': favicon96x96 },
              { 'rel': 'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=Raleway:400,400i' },
            ]
          }
          />
        <ScrollToTop>
          <Switch>
            <Route path="/productos/todos?:slug" component={ProductDetail}/>
            <Route path="/productos/todos" component={ProductDetail}/>
            <Route path="/producto/:slug" component={SingleDetail}/>
            <Route path="/intra" component={PanelLayout} />
            <Route path="/" component={BaseLayout} />
          </Switch>
        </ScrollToTop>
        <SiteAllCookie />
      </div>
    );
  }
}

export default App;