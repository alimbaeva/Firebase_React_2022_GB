
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth';



const firebaseConfig = {
    apiKey: "AIzaSyDs8cIO0x2SfE9Ozeg6kHU8kLefORuNclE",
    authDomain: "fir-ls-9.firebaseapp.com",
    projectId: "fir-ls-9",
    storageBucket: "fir-ls-9.appspot.com",
    messagingSenderId: "851085910823",
    appId: "1:851085910823:web:b541fbf19976af5f043f02"
};


const firebasedb = firebase.initializeApp(firebaseConfig)
export const db = firebasedb.database().ref();
export const auth = firebase.auth();