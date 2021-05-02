import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
const firebaseConfig = {
  databaseURL: "https://tracnghiem-e88a0-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyBhP0mC02H9mDKs2Ih2n61BcLWwLVnCW3k",
  authDomain: "tracnghiem-e88a0.firebaseapp.com",
  projectId: "tracnghiem-e88a0",
  storageBucket: "tracnghiem-e88a0.appspot.com",
  messagingSenderId: "127135851028",
  appId: "1:127135851028:web:2994e75a95bd85ed82fd01",
  measurementId: "G-0KPFG6DDC7",
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
const storage =firebase.storage();
var db= firebase.firestore();
export {db ,storage,firebase as default};