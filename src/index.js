import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import b2cauth from 'react-azure-adb2c';

b2cauth.initialize({
    instance: 'https://login.microsoftonline.com/tfp/', 
    tenant: 'harshpatel8085.onmicrosoft.com',
    signInPolicy: 'B2C_1_React_SignUp', 
    applicationId: '16f2340b-833f-4ebb-a9bd-9f63eafc104d',
    cacheLocation: 'sessionStorage',
    scopes: ['https://harshpatel8085.onmicrosoft.com/api/user_impersonation' ],
    redirectUri: 'http://localhost:3000',
    postLogoutRedirectUri: window.location.origin,
  });

  b2cauth.run(() => {
      ReactDOM.render(<App/>, document.getElementById('root'));
      serviceWorker.unregister();
  });
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
