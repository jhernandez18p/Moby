import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import './assets/styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Apps
import ReactGA from 'react-ga';

// Redux
// import configureStore from './redux/store'

ReactGA.initialize('UA-83370429-7');

ReactDOM.render((
    <CookiesProvider>
        <Router>
            <App/>
        </Router>
    </CookiesProvider>
), document.getElementById('wrapper'));
registerServiceWorker();
