import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Clock from './components/Clock';
import GoToTop from './components/GoToTop';

    ReactDOM.render(
        <>
          <Clock />
          <App />
          <GoToTop />
        </>,
      document.getElementById('root')
    )