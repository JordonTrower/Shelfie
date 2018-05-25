import React from 'react';
import ReactDOM from 'react-dom';
import './Client/CSS/index.css';
import App from './Client/App';
import registerServiceWorker from './Client/registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();