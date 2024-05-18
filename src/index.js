import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importe seus estilos globais aqui
import App from './App'; // Importe o componente principal do seu aplicativo
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals(); // Isso pode ser útil para medir o desempenho do seu aplicativo
