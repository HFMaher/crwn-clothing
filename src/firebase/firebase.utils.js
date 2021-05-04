import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={ //this object is copied from the firebase authentication website
    apiKey: "AIzaSyA3QSA1DhBNIAhtiX98cYiXr-HxIHRLkIo",
    authDomain: "crwn-db-62a0c.firebaseapp.com",
    projectId: "crwn-db-62a0c",
    storageBucket: "crwn-db-62a0c.appspot.com",
    messagingSenderId: "30471403694",
    appId: "1:30471403694:web:1378f0d2e96c3d060c553f",
    measurementId: "G-3TJQFLH3GY"
    
};

export const createUserProfileDocument=async(userAuth,additionalData)=>{

  if(!userAuth) return; //if it does not exist

  const userRef=firestore.doc(`users/${userAuth.uid}`); //document reference, check the PDF document, get the userRef from the authentication object(Authentication in Firestore)

  const snapShot=await userRef.get();//document snapshot
  //console.log(snapShot);
  //console.log(userAuth);

  if (!snapShot.exists) { //if snapshot dies not exist, create user

     const {displayName,email}=userAuth;
     const createdAt=new Date();

     try {
         
        await userRef.set({
            displayName, //this property and below are within the userAuth object, you can see the log in the browser F12 
            email,
            createdAt,
            ...additionalData

        })
    } catch(error) {
        console.log('error creating user',error.message);
    }
    }
    return userRef;

};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'}); //the google dialogue box that apprears to select users
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

