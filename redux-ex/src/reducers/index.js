import counterReducer from './counters';
import isLoggedReducer from './isLogged';

import {combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer:counterReducer,
    isLoggedReducer: isLoggedReducer
});
export default allReducers;
