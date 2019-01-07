import { combineReducers } from 'redux';
import loadingUserData from './loadingUserData'

export default combineReducers({
    data: loadingUserData
})
