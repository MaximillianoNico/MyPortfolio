import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import config from './vendor/firebaseConfig';
import actions from './component/AdminPage/Login/src/action';
const store = createStore(reducer, applyMiddleware(thunk));
firebase.initializeApp(config);

window.firebase = firebase;

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(actions.setUser(user));
    }
    else{
        store.dispatch(actions.setUser(null));
    }
})
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
