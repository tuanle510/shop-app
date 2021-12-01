// import { initializeApp } from 'firebase/app';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import {
//   getFirestore,
//   collection,
//   getDoc,
//   doc,
//   setDoc,
// } from 'firebase/firestore';

// const config = {
//   apiKey: 'AIzaSyCxseRm3BP0PqXnYuG4ylgKlLvqQSivcUE',
//   authDomain: 'shop-app-89861.firebaseapp.com',
//   projectId: 'shop-app-89861',
//   storageBucket: 'shop-app-89861.appspot.com',
//   messagingSenderId: '167784904296',
//   appId: '1:167784904296:web:8df51962d3e10ebe43addd',
// };

// const app = initializeApp(config);

// export const auth = getAuth();
// export const firestore = getFirestore(app);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   console.log(userAuth);

//   // const userRef = doc(firestore, `users/1234dwfsdf`);
//   // console.log(userRef);

//   // const userRef = doc(firestore, `users/${userAuth.uid}`);

//   // const snapShot = await getDoc(firestore, `users/${userAuth.uid}`);
//   // console.log(snapShot);

//   // if (!userRef.exists) {
//   //   const { displayName, email } = userAuth;
//   //   const createAt = new Date();

//   //   try {
//   //     await setDoc(doc(firestore, 'users'), {
//   //       displayName,
//   //       email,
//   //       createAt,
//   //       ...additionalData,
//   //     });
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
// };

// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => signInWithPopup(auth, provider);

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth);
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
