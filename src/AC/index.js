import {LOAD_ARTICLES} from '../constants';

export function load_articles() {
    return {
        type: LOAD_ARTICLES,
        reference: '/posts/top10'
    }
}