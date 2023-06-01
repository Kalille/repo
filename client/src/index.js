import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import emailjs from "@emailjs/browser";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
></script>
<script type="text/javascript">
  ( function(){emailjs.init("YDI0u74rcgGXbO-JB")})();
</script>
    Hello
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

