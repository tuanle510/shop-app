import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const config = {
  apiKey: 'AIzaSyCxseRm3BP0PqXnYuG4ylgKlLvqQSivcUE',
  authDomain: 'shop-app-89861.firebaseapp.com',
  projectId: 'shop-app-89861',
  storageBucket: 'shop-app-89861.appspot.com',
  messagingSenderId: '167784904296',
  appId: '1:167784904296:web:8df51962d3e10ebe43addd',
};

const app = initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
