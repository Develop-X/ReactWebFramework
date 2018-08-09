import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Global from './Global';
import Login from './app/loginpage/login'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Global/>, document.getElementById('root')
);
registerServiceWorker();
