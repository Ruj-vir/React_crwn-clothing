import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDE7cC_Mz0fKzFIs97fh9cBPuwwVwtsJ4E",
  authDomain: "crwn-db-fdbc2.firebaseapp.com",
  projectId: "crwn-db-fdbc2",
  storageBucket: "crwn-db-fdbc2.appspot.com",
  messagingSenderId: "319510048047",
  appId: "1:319510048047:web:0a51f14509787e456485da",
  measurementId: "G-DMXK6XQMR5",
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot);

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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
