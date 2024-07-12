
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import MyNavbar from './MyNavbar.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>    
  <MyNavbar/>
    <App />
  </Provider>,
);
