import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={ process.env.PUBLIC_URL}>
    <Provider store={store}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
      </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
);
