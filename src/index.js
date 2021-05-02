/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './servi';
import reportWebVitals from './reportWebVitals';
// import config from './config/fbConfig';

import {applyMiddleware,createStore,compose} from 'redux';
import {Provider} from 'react-redux';
import MyReducer from './myReducer/index';
import thunk from 'redux-thunk';

import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';
import {createFirestoreInstance} from 'redux-firestore';
import  firebase  from './config/fbConfig';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
  MyReducer,
  composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({getFirebase})),
  )
);
const storeProps={
  firebase,
  config:{},
  dispatch:store.dispatch,
  createFirestoreInstance
}
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...storeProps} >
       <App />
    </ReactReduxFirebaseProvider>   
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
serviceWorker.unregister();