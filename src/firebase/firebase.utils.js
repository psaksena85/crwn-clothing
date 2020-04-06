import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA1-uE4d2CBa3cLYTjvamqc4BTGE01MqNg",
    authDomain: "crwn-db-151d6.firebaseapp.com",
    databaseURL: "https://crwn-db-151d6.firebaseio.com",
    projectId: "crwn-db-151d6",
    storageBucket: "crwn-db-151d6.appspot.com",
    messagingSenderId: "717421548338",
    appId: "1:717421548338:web:a54a89b0e73362c85afd2b",
    measurementId: "G-W4VMLXXK7X"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =  firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;