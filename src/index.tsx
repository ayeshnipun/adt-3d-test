import './fluent-icons-override';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
// import { initializeIcons } from '@fluentui/react/lib/Icons';
// import { initializeIcons } from '@fluentui/font-icons-mdl2';

// initializeIcons('/fabric-font/', { disableWarnings: true });

// const selfOpen = window.open;
// (window.open as any) = function(url: any, windowName: any, parms: any) {
//   selfOpen(url,"_self",parms || "")
// };
// initializeIcons("https://spoppe-b.azureedge.net/files/fabric-cdn-prod_20210407.001/assets/icons/");

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
