import {LOAD_ARTICLES} from '../constants/constants';
import database from 'firebase';

export default store => next => action => {
    const {reference} = action;
    if(!reference) return action;
    if(action.type !== LOAD_ARTICLES) return next(action);
    next({
        console.log('---', 'state before: ', store.getState());
    })
}