import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Admin from './Admin';
import Home from './pages/route_demo/route1/Home'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home/>, document.getElementById('root'));
registerServiceWorker();
