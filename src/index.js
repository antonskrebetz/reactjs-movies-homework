import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

ReactDOM.render(
    <App />, document.getElementById('root')
);

reportWebVitals();
