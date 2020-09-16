import loggedReducer from './isLoggedin'
import { combineReducers } from 'redux';
import { navTitleValue } from '../actions';

const allReducer = combineReducers({
    isLogged: loggedReducer,
    navigationTitle: NavigationTitleReducer
});

export default allReducer;