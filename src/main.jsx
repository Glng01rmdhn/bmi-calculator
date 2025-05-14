import React from 'react'; // ⬅️ Tambahkan ini!
import ReactDOM from 'react-dom/client';
import App from './BMIcalculator';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
