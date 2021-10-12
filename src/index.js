import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app'
import ErrorBoundry from './components/error-boundry';
import ShopService from './services/shop-service';
import { ShopServiceProvider } from './components/shop-service-context'
import store from './store'

const booksService = new ShopService();


ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <ShopServiceProvider value={booksService}>
        <Router>
          <App />
        </Router>
      </ShopServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);

