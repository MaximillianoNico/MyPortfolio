import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore, ApplyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

// const store = createStore();

ReactDOM.render(
    <Provider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
