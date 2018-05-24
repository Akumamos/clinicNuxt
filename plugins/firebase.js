import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBuJ_QvagsAni6C4pVWM5uAqtsac7knoGk",
    authDomain: "clinalamo-3d38c.firebaseapp.com",
    databaseURL: "https://clinalamo-3d38c.firebaseio.com",
    projectId: "clinalamo-3d38c",
    storageBucket: "clinalamo-3d38c.appspot.com",
    messagingSenderId: "750845688635"
  })
}

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore()
const storage = firebase.storage()

export { storage, db }
