import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';
import {BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap-rtl/dist/css/bootstrap-rtl.css';
import 'basscss/css/basscss.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'muicss/dist/css/mui.css'
import 'muicss/dist/js/mui'
import bootstrapper from './bootstrapper';


const injectables = bootstrapper();


ReactDOM.render(
    <Router>
        <Provider {...injectables}>
            <App />
        </Provider>
    </Router>
    , document.getElementById('root'));


registerServiceWorker();


