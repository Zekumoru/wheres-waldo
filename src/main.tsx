import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import App from './App';
import GlobalStyles from './GlobalStyles';
import firebaseConfig from './firebase.config';

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
);
