import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Admin from './Admin';
// import Home from './pages/route_demo/route1/Home'
// import Router from './pages/route_demo/router2/router'
// import Router from './pages/route_demo/router3/router'
import Router from './router'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router/>, document.getElementById('root'));
registerServiceWorker();
