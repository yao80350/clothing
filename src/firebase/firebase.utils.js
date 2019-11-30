// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// Add the Firebase products that you want to use
// import these will add auth and firestore to firebase
import "firebase/auth";
import "firebase/firestore";
 
const firebaseConfig = {
    apiKey: "AIzaSyBT9fh4dggWSW-fzJG9cDSUhkq_vmgkH_U",
    authDomain: "clothing-db-e9020.firebaseapp.com",
    databaseURL: "https://clothing-db-e9020.firebaseio.com",
    projectId: "clothing-db-e9020",
    storageBucket: "clothing-db-e9020.appspot.com",
    messagingSenderId: "69715099258",
    appId: "1:69715099258:web:b9fce8605a5b92b0c4c5c3",
    measurementId: "G-N73D78Z0NM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    'prompt': 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

