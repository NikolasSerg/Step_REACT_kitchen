import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
        <App />
    , document.getElementById('root'));
serviceWorker.register();


//
// import store from './store/index';
// import {Provider} from 'react-redux';

//
//
// ReactDOM.render(
//     <Provider store = {store}>
//         <App/>
//     </Provider>
//     , document.getElementById('root'));
// serviceWorker.register();
