import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { HelproApp } from './HelproApp';
import './index.css';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={ store }>
    <Router>
      <HelproApp />
    </Router>
  </Provider>
  // </React.StrictMode>,
)
