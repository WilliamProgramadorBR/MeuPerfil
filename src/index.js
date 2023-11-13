import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Rotas/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
