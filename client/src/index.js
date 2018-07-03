import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Apps
import ReactGA from 'react-ga';

ReactGA.initialize('UA-83370429-7');

ReactDOM.render((
    <Router>
        <App />
    </Router>
), document.getElementById('wrapper'));
registerServiceWorker();
