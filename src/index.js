import React from 'react'
import { render } from 'react-dom'
import { HashRouter } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'; 
 
const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
);

render((
  <Provider  store={store}>
  <HashRouter>
    <App />
  </HashRouter>
  </Provider>
), document.getElementById('root'));
