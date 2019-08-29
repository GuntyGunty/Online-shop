import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import cartStore from './store/CartStore';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={cartStore}>
      <App />
    </Provider>
  </BrowserRouter>, 
  document.getElementById('root'),
);
