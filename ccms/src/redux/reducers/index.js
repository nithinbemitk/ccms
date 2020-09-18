import loggedReducer from './isLoggedin'
import navigationReducer from './navigation'
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    isLogged: loggedReducer,
    navigation: navigationReducer
});

export default allReducer;