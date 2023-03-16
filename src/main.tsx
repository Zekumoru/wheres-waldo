import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './initializeFirebase';
import GlobalStyles from './GlobalStyles';
import store from './app/store';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>
);
