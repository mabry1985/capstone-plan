import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAqMnZ-XSOdFp5vz_IFXqpnYbGRJDvQd48",
  authDomain: "hole-in-the-wall-57859.firebaseapp.com",
  databaseURL: "https://hole-in-the-wall-57859.firebaseio.com",
  projectId: "hole-in-the-wall-57859",
  storageBucket: "hole-in-the-wall-57859.appspot.com",
  messagingSenderId: "444610123075",
  appId: "1:444610123075:web:89bca22c4dd688d6744bf6"
};

firebase.initializeApp(config);

export default firebase;