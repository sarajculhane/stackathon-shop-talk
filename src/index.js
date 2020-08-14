import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import {Provider} from 'react-redux'
import App from './App';
import {Router} from 'react-router-dom'
import history from './history'

import '/Users/sculs/FSA-Senior-Phase/shop-talk/public/app.scss'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store} >
    <Router history={history}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Router>
  </Provider>,
  document.getElementById('root')
  
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
