import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
const defaultState = { 
    appName: 'conduit',
    articles: null
 };

const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'TOGGLE':
        return {...state,checked: !state.checked };
    }
  return state;
};
const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
