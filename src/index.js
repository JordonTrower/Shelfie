import React from 'react';
import ReactDOM from 'react-dom';
import './Client/CSS/index.css';
import App from './Client/Components/Router';
import registerServiceWorker from './Client/registerServiceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();