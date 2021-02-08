import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';

const logAction = store => {
    return next => {
        return action => {
            const result = next(action);
            console.log(`Caught in the middleware ${JSON.stringify(result)}`);
            return result;
        };
    };
};

const store = createStore(reducer, applyMiddleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));



