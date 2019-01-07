import {LOAD_ARTICLES} from '../constants';
import database from 'firebase';

export default store => next => action => {
    const postRef = database.ref('/posts/top10');
    if(action.type !== LOAD_ARTICLES) return next(action);
    next({
        console.log('---', 'state before: ', store.getState());
    })
}