import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCxseRm3BP0PqXnYuG4ylgKlLvqQSivcUE',
  authDomain: 'shop-app-89861.firebaseapp.com',
  projectId: 'shop-app-89861',
  storageBucket: 'shop-app-89861.appspot.com',
  messagingSenderId: '167784904296',
  appId: '1:167784904296:web:8df51962d3e10ebe43addd',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
