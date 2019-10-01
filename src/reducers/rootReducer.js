import authReducer from './authReducer';
import menuReducer from './menuReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authReducer,
  menuReducer,
})

export default rootReducer