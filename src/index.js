import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import{createStore, compose,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import myReducer from "./store/myReducer";
import Router from './components/Router';
import {getFirebase, reduxReactFirebase} from 'react-redux-firebase'
import {getFirestore, reduxFirestore } from 'redux-firestore'
import firebase from './firebase/configue'
// import { reduxFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';

const store = createStore(myReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebase),
    reduxFirestore(firebase)
) );


ReactDOM.render(
<Provider store={store}>
    <Router />
</Provider> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
