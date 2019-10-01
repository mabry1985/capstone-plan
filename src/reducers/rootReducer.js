import authReducer from './authReducer';
import menuReducer from './menuReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
  auth: authReducer,
  menu: menuReducer,
  firestore: firestoreReducer,
})

export default rootReducer