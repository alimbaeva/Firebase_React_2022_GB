
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCc3kXNMe7Cn0s0eXHEU9XuP1M0qe_Y3O0",
    authDomain: "hw-firebase-ls-9.firebaseapp.com",
    projectId: "hw-firebase-ls-9",
    storageBucket: "hw-firebase-ls-9.appspot.com",
    messagingSenderId: "314537330138",
    appId: "1:314537330138:web:6ca8fc3d9b531a96776ce3"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.database().ref();
const auth = app.auth();

export { db, auth };