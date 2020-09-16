import loggedReducer from './isLoggedin'
import NavigationTitleReducer from './NavigationTitle'
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    isLogged: loggedReducer
});

export default allReducer;