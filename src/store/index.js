import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers'
import logger from '../middlewares/logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = applyMiddleware(logger);

const store = createStore(
    reducers,
    {},
    composeWithDevTools(
        enhancer
    ));
window.storew = store;
store.subscribe(() => {
    console.log('subscribe', store.getState());
});

export default store;
