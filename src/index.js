import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import {createStore, ApplyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(/*reducer ApplyMiddleware(thunk)*/);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
