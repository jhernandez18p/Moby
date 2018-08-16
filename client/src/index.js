import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import ScrollToTop from './routes/scrollTop';

import './assets/styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Apps
import ReactGA from 'react-ga';

// Redux
import configureStore from './redux/store';
import { Provider } from 'react-redux';

ReactGA.initialize('UA-83370429-7');

ReactDOM.render((
    <Provider store={ configureStore }>
        <CookiesProvider>
            <Router>
                <ScrollToTop>
                    <App/>
                </ScrollToTop>
            </Router>
        </CookiesProvider>
    </Provider>
), document.getElementById('wrapper'));
registerServiceWorker();
