import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/css/index.scss';
import App from './components/App';
// todo habilitar redux, crear store y aplicar el middleware  de redux saga

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
