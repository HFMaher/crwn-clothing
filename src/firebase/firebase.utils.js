import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyA3QSA1DhBNIAhtiX98cYiXr-HxIHRLkIo",
    authDomain: "crwn-db-62a0c.firebaseapp.com",
    projectId: "crwn-db-62a0c",
    storageBucket: "crwn-db-62a0c.appspot.com",
    messagingSenderId: "30471403694",
    appId: "1:30471403694:web:1378f0d2e96c3d060c553f",
    measurementId: "G-3TJQFLH3GY"
    
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

