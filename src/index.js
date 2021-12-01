import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import {Provider} from 'react-redux';
import './i18n/i18n';

ReactDOM.render(
  <Suspense fallback={<div>Loading...</div>}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
