import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/reset.scss';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import RootRouter from './router';
import customMiddleware from './middleware/index.js';
// import { syncHistoryWithStore } from 'react-router-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk,customMiddleware)));
// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);


ReactDOM.render(
    <RootRouter store={store} />
    ,
    document.getElementById('app')
);

module.hot.accept();
