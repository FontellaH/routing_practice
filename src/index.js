import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  //added this from the package.json that I installed to run


// The BrowserRouter exists to wrap around all of the components we want to be aware of our current route Line 13 & 15
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>     
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

